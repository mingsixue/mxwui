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
            value: '系统消息'
        },
        // 内容
        content: {
            type: String,
            value: ''
        },
        // 确定按钮文案
        confirmBtnText: {
            type: String,
            value: '确定'
        },
        // 确定按钮文本色
        confirmBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 取消按钮文案
        cancelBtnText: {
            type: String,
            value: '取消'
        },
        // 取消按钮文本色
        cancelBtnColor: {
            type: String,
            value: COLOR.MINOR_TEXT_COLOR
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
    },
    methods: {
        handleCancel() {
            this.triggerEvent("cancel");
        },
        handleConfirm() {
            this.triggerEvent("confirm");
        }
    }
});
