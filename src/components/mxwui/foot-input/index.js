import {COLOR, hexToRGBA} from '../utils/common';

Component({
    properties: {
        // 是否显示
        visible: {
            type: Boolean,
            value: false,
        },
        // 值
        value: {
            type: String,
            value: ''
        },
        // 占位文本
        placeholder: {
            type: String,
            value: '请输入'
        },
        // 占位文本颜色
        placeholderColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 光标颜色
        cursorColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 背景色
        bgColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 输入框背景色
        inputBgColor: {
            type: String,
            value: '#F4F6F7'
        },
        // 按钮类型 primary / default / ghost
        btnType: {
            type: String,
            value: 'primary'
        },
        // 按钮文案
        btnText: {
            type: String,
            value: '发送'
        },
        // 按钮颜色
        btnColor: {
            type: String,
            value: COLOR.THEME_COLOR,
            observer(newVal) {
                this.setData({
                    btnDisabledColor: hexToRGBA(newVal, 0.5)
                });
            }
        },
        // 按钮宽度
        btnWidth: {
            type: String,
            value: '104rpx'
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
    },
    ready() {
        if (this.data.btnColor == COLOR.THEME_COLOR) {
            this.setData({
                btnDisabledColor: hexToRGBA(COLOR.THEME_COLOR, 0.5)
            });
        }
    },
    methods: {
        handleMask() {
            if (this.data.isCloseMask) {
                this.setData({
                    visible: false
                });
                this.triggerEvent("foot_input_close");
            }
        },
        handleInput(e) {
            this.setData({
                value: e.detail.value
            });
        },
        handleSend() {
            const {value} = this.data;
            if (value) {
                this.setData({
                    visible: false
                });
                this.triggerEvent("foot_input_done", {value: value});
            }
        }
    }
});
