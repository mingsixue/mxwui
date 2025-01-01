// 常量配置

// 颜色变量
const TEXT_COLOR = '#040A23'; // 文本色
const MINOR_TEXT_COLOR = '#656979'; // 次文本色
const PLACEHOLDER_COLOR = '#9AA0B1'; // 辅助文本-灰色
const THEME_COLOR = '#CA0E2D'; // 主题色
const BG_COLOR = '#F8F9FA'; // 背景色
const BORDER_COLOR = '#E1E5EC'; // 边框色
const WHITE_COLOR = '#FFFFFF'; // 白色/浅色
const SWITCH_COLOR = '#098562'; // Switch选中颜色
const NOTICE_COLOR = '#C2996C'; // 通知栏背景色

// Nav配置
const HOME_URL = '/pages/index/index'; // 默认首页
const DEFAULT_ICON = 'arrows_left'; // 默认返回图标
const DEFAULT_ICON_HOME = 'home'; // 默认首页图标

// 头像
const AVATAR = 'http://cdn.mingsixue.com/xcx/MXWUI/avatar.png';

const COLOR = {
    TEXT_COLOR,
    MINOR_TEXT_COLOR,
    PLACEHOLDER_COLOR,
    THEME_COLOR,
    BG_COLOR,
    BORDER_COLOR,
    WHITE_COLOR,
    SWITCH_COLOR,
    NOTICE_COLOR
}

const hexToRGBA = function(hex, opacity = 1) {
    if (hex.indexOf('rgba') != -1) {
        const regex = /rgba\(\d{1,3},\s\d{1,3},\s\d{1,3},([^)]+)\)/;
        const match = hex.match(regex);
        if (match && match[1]) {
            hex = hex.replace(match[1], opacity);
        }
        return hex;
    }
    var hexx = hex.replace("#", "0x");
    var r = hexx >> 16;
    var g = (hexx >> 8) & 0xff;
    var b = hexx & 0xff;
    return `rgba(${r}, ${g}, ${b},${opacity})`;
};

export {
    COLOR,
    HOME_URL,
    DEFAULT_ICON,
    DEFAULT_ICON_HOME,
    AVATAR,
    hexToRGBA
};