import {COLOR} from '../utils/common';
Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false
        },
        // 是否显示外部关闭按钮
        showWrapClose: {
            type: Boolean,
            value: false
        },
        // 是否显示返回按钮
        showBack: {
            type: Boolean,
            value: true,
        },
        // 返回按钮
        backIcon: {
            type: Object,
            value: {}
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            value: true,
        },
        // 关闭按钮
        closeIcon: {
            type: Object,
            value: {}
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
        // 自定义高度
        height: {
            type: String,
            value: '65vh'
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        }
    },
    methods: {
        handleMaskClose() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_basic_close", {type: 'close'});
        },
        handleBack() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_basic_back");
        },
        handleClose() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_basic_close", {type: 'cancel'});
        },
    }
});
