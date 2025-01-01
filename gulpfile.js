import pkg from "gulp";
const { src, dest, series, parallel, watch } = pkg;
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { execa } from "execa";
import { deleteAsync } from "del";
import through2 from "through2";
import alias from "gulp-wechat-weapp-src-alisa";
import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import base64 from "gulp-base64";
import changed from "gulp-changed";
import gulpIf from "gulp-if";
import jsonminify from "gulp-jsonminify";
import less from "gulp-less";
import notifier from "gulp-notify";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import cleancss from "gulp-clean-css";
import uglify from "gulp-uglify";
import replace from "gulp-replace";

const isProduction = (process.env.NODE_ENV || "dev") !== "dev";

const DIST = isProduction ? "./dist" : "./dist_dev";

// 开发者工具路径
const wechatToolPath = "/Applications/wechatwebdevtools.app";
const wxcli = `${wechatToolPath}/Contents/MacOS/cli`;

// 源文件目录
const filePath = {
    jsPath: ["src/**/*.js", "!src/config/*.js"],
    wxmlPath: ["src/**/*.xml", "src/**/*.wxml"],
    cssPath: ["src/**/*.less", "src/**/*.wxss"],
    jsonPath: ["src/**/*.json"],
    wxsPath: ["src/**/*.wxs"],
    configPath: isProduction
        ? "src/config/config.js"
        : "src/config/config.dev.js",
    projectJsonPath: isProduction
        ? fs.existsSync("online.config.json")
            ? "online.config.json"
            : "project.config.json"
        : fs.existsSync("dev.config.json")
        ? "dev.config.json"
        : "project.config.dev.json",
};

// 错误提示
function onError(err) {
    notifier.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        timeout: 5,
        sound: "Beep",
    })(err);
}

// 路径拼接
function _join(dirname) {
    return path.join(process.cwd(), "src", dirname);
}

// 引用路径别名配置
const aliasConfig = {
    "@config": _join("config"),
    "@utils": _join("utils"),
    "@components": _join("components"),
    "@modules": _join("modules"),
    "@common": _join("common"),
};

const miniWxml = function () {
    return through2.obj((file, enc, next) => {
        if (file.isNull()) {
            next(null, file);
            return;
        }
        const context = file.contents
            .toString()
            .replace(/\n\s*/gm, " ") // 移除换行
            .replace(/>\s+</g, "><") // 标签间的空格
            .replace(/<\/([-a-zA-Z]+)\s+>/g, "</$1>") // 移除行标签内空格
            .replace(/<!--(.*?)-->/g, ""); // 移除注释
        file.contents = Buffer.from(context);
        next(null, file);
    });
};

// xml编译
function wxml() {
    return src(filePath.wxmlPath)
        .pipe(miniWxml())
        .pipe(changed(DIST, { extension: ".wxml" }))
        .pipe(rename({ extname: ".wxml" }))
        .pipe(dest(DIST));
}

// less编译
function wxss() {
    return (
        src(filePath.cssPath, { base: "src/" })
            .pipe(changed(DIST, { extension: ".wxss" }))
            // .pipe(gulpIf(!isProduction, sourcemaps.init()))
            .pipe(
                alias({
                    "@common": aliasConfig["@common"],
                })
            )
            .pipe(
                base64({
                    extensions: ["svg", "png", "jpg"],
                    maxImageSize: 1024 * 1024 * 1024 * 1024,
                    exclude: [/^(http|https)/],
                })
            )
            .pipe(less())
            .pipe(autoprefixer())
            .pipe(cleancss({ compatibility: "ie9" }))
            .pipe(plumber(onError))
            // .pipe(gulpIf(!isProduction, sourcemaps.write()))
            .pipe(rename({ extname: ".wxss" }))
            .pipe(dest(DIST))
    );
}

// config编译
function config() {
    return src(filePath.configPath, { base: "src/", allowEmpty: true })
        .pipe(plumber(onError))
        .pipe(gulpIf(!isProduction, sourcemaps.init()))
        .pipe(rename({ basename: "config" }))
        .pipe(changed(DIST))
        .pipe(babel())
        .pipe(dest(DIST));
}

// js编译
function js() {
    return src(filePath.jsPath[0], { allowEmpty: true })
        .pipe(
            alias({
                "@utils": aliasConfig["@utils"],
                "@components": aliasConfig["@components"],
            })
        )
        .pipe(plumber(onError))
        .pipe(changed(DIST))
        .pipe(babel())
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulpIf(!isProduction, sourcemaps.write()))
        .pipe(dest(DIST));
}

// json编译
function json() {
    return src(filePath.projectJsonPath, { allowEmpty: true })
        .pipe(rename({ basename: "project.config" }))
        .pipe(src(filePath.jsonPath))
        .pipe(
            alias({
                "@components": aliasConfig["@components"],
                "@utils": aliasConfig["@utils"],
            })
        )
        .pipe(changed(DIST))
        .pipe(
            gulpIf((file) => {
                return !/project\.config/g.test(String(file.path));
            }, jsonminify())
        )
        .pipe(dest(DIST));
}

// wxs编译
function wxs() {
    return src(filePath.wxsPath)
        .pipe(plumber(onError))
        .pipe(changed(DIST))
        .pipe(babel())
        .pipe(rename({ extname: ".wxs" }))
        .pipe(dest(DIST));
}

// 清除编译结果目录
function clean() {
    return deleteAsync([DIST]);
}

// 打开开发者工具
function openTool() {
    return execa(wxcli, ["-o", path.resolve(DIST)], {
        stdio: "inherit",
    });
}

// 监听任务
function watcher(callback) {
    const addOrChange = { events: ["add", "change"] };
    watch(filePath.wxmlPath, addOrChange, wxml);
    watch(filePath.cssPath, addOrChange, wxss);
    watch(filePath.jsPath[0], addOrChange, js);
    watch(filePath.jsonPath, addOrChange, json);
    watch(filePath.wxsPath, addOrChange, wxs);

    const srcPath = "src/**";

    // 除新增空目录外的监听
    watch(srcPath).on("unlink", function delFile(path) {
        // eslint-disable-next-line no-console
        console.log(chalk.yellow(`删除文件：${path}`));
        return deleteSync([path.replace("src", DIST)]);
    });

    watch(srcPath).on("unlinkDir", function delFile(path) {
        // eslint-disable-next-line no-console
        console.log(chalk.yellow(`删除文件夹：${path}`));
        return deleteSync([path.replace("src", DIST)]);
    });

    const projectConfigJson = `${DIST}/project.config.json`;

    // 监听开发者工具修改project.config.json
    watch(projectConfigJson, function syncProjectConfig() {
        const projectConfig = isProduction ? "online.config" : "dev.config";
        return src(projectConfigJson)
            .pipe(
                rename({
                    basename: projectConfig,
                })
            )
            .pipe(dest("./"));
    });

    callback();
}

// 代码编译
const buildTasks = series(parallel(config, js, json, wxml, wxss, wxs));

// 再次编译（如果开发者工具已经打开，并且不需要清除编译结果，可用此命令，速度极快）
// const watchs = series(buildTasks, openTool, watcher);
const watchs = series(buildTasks, watcher);
export { watchs as watch };

// 默认任务 (清理 + 编译 + 打开工具 + 监听)
const defaultTask = series(clean, buildTasks);
export default defaultTask;
