import {COLOR} from '../utils/common';

Component({
    properties: {
        // 缺省文案
        text: {
            type: String,
            value: '暂无数据'
        },
        // 缺省文案文本色
        textColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 描述文案
        desc: {
            type: String,
            value: ''
        },
        // 描述文案文本色
        descColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 图标名称
        iconName: {
            type: String,
            value: 'empty',
        },
        // 图标颜色
        iconColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 图标/图片大小
        iconSize: {
            type: Number,
            value: 200,
        },
        // 图标自定义图片
        iconUrl: {
            type: String,
            value: ''
        },
        // 主按钮文案
        mainBtnText: {
            type: String,
            value: ""
        },
        // 主按钮按钮类型
        mainBtnType: {
            type: String,
            value: "primary"
        },
        // 主按钮自定义颜色
        mainBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 次按钮文案
        minorBtnText: {
            type: String,
            value: ""
        },
        // 次按钮按钮类型
        minorBtnType: {
            type: String,
            value: "default"
        },
        // 次按钮自定义颜色
        minorBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 距离顶部距离
        top: {
            type: Number,
            value: 0
        },
    },
    methods: {
        // 主按钮点击
        handleTapMain() {
            this.triggerEvent("empty_main_tap");
        },
        // 次按钮点击
        handleTapMinor() {
            this.triggerEvent("empty_minor_tap");
        }
    },
});
