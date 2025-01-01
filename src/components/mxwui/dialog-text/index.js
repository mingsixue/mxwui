import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 标题文本色
        titleColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 内容
        content: {
            type: String,
            value: ''
        },
        // 内容文本色
        contentColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 主按钮文案
        mainBtnText: {
            type: String,
            value: '确定'
        },
        // 主按钮颜色
        mainBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 是否显示辅助按钮
        showMinor: {
            type: Boolean,
            value: false
        },
        // 辅助按钮文案
        minorBtnText: {
            type: String,
            value: '取消'
        },
        // 辅助按钮颜色
        minorBtnColor: {
            type: String,
            value: COLOR.MINOR_TEXT_COLOR
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        // 点击蒙层是否可以关闭弹窗
        isCloseMask: {
            type: Boolean,
            value: true
        },
        THEME_COLOR: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        MINOR_TEXT_COLOR: {
            type: String,
            value: COLOR.MINOR_TEXT_COLOR
        }
    },
    methods: {
        handleMaskClose() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_text_close");
        },
        handleMinor() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_text_minor");
        },
        handleMain() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_text_main");
        },
    }
});
