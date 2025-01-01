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
        // 确认按钮文案
        confirmBtnText: {
            type: String,
            value: '确定'
        },
        // 确认按钮文本色
        confirmBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        // 蒙层是否可以关闭弹窗
        isCloseMask: {
            type: Boolean,
            value: true
        },
    },
    methods: {
        handleConfirm() {
            this.triggerEvent("alert_confirm");
        },
        handleClose() {
            this.triggerEvent("alert_close");
        }
    }
});
