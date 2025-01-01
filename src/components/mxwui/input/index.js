import {COLOR} from '../utils/common';

Component({
    properties: {
        // 输入框样式类型，normal、horizontal、vertical、web
        styleType: {
            type: String,
            value: 'normal'
        },
        // 类型，同微信小程序类型，text、number、idcard、digit、nickname
        type: {
            type: String,
            value: 'text'
        },
        // 是否是密码类型
        password: {
            type: Boolean,
            value: false
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
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 最大输入长度
        maxLength: {
            type: Number,
            value: 140
        },
        // 指定光标与键盘的距离
        cursorSpacing: {
            type: Number,
            value: 0
        },
        // 获取焦点
        focus: {
            type: Boolean,
            value: false
        },
        // 设置键盘右下角按钮的文字，仅在type='text'时生效，send 发送、search 搜索、next 下一个、go 前往、done 完成
        confirmType: {
            type: String,
            value: 'done'
        },
        // 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
        alwaysEmbed: {
            type: Boolean,
            value: false
        },
        // 点击键盘右下角按钮时是否保持键盘不收起
        confirmHold: {
            type: Boolean,
            value: false
        },
        // 指定focus时的光标位置
        cursor: {
            type: Number,
            value: ''
        },
        // 光标颜色
        cursorColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
        selectionStart: {
            type: Number,
            value: -1
        },
        // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
        selectionEnd: {
            type: Number,
            value: -1
        },
        // 键盘弹起时，是否自动上推页面
        adjustPosition: {
            type: Boolean,
            value: true
        },
        // focus时，点击页面的时候不收起键盘
        holdKeyboard: {
            type: Boolean,
            value: false
        },
        // 描述或错误文案
        desc: {
            type: String,
            value: ''
        },
        // 描述或错误文案颜色
        descColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 是否显示分隔线
        showLine: {
            type: Boolean,
            value: true
        },
        // 标签文案
        label: {
            type: String,
            value: ''
        },
        // 标签文案文本色
        labelColor: {
            type: String,
            value: ''
        },
        // 标签对齐方式， left / center / right
        labelAlign: {
            type: String,
            value: 'left'
        },
        // 左侧自定义宽度，不带单位
        leftWidth: {
            type: Number,
            value: ''
        },
        // 是否显示必填星号
        required: {
            type: Boolean,
            value: false
        },
        // 必填星号位置，left、right
        requiredPosition: {
            type: String,
            value: 'right'
        },
        // 标签前图标
        firstIcon: {
            type: Object,
            value: {}
        },
        // 标签后图标
        lastIcon: {
            type: Object,
            value: {}
        },
        // 输入框文本对齐方式，left、right
        inputAlign: {
            type: String,
            value: 'left'
        },
        // 是否显示清除按钮
        clear: {
            type: Boolean,
            value: true
        },
        // input宽度，默认rpx，不带单位，styleType=web时有效
        inputWidth: {
            type: Number,
            value: '702'
        },
        // input背景色，styleType=web时有效
        inputBgColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 是否横向布局，styleType=web时有效
        horizontal: {
            type: Boolean,
            value: false
        },
        TEXT_COLOR: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        WHITE_COLOR: {
            type: String,
            value: COLOR.WHITE_COLOR
        }
    },
    methods: {
        handleClear() {
            this.setData({
                value: ''
            });
            this.triggerEvent("input_change", {value: ''});
        },
        inputChange(e) {
            this.setData({
                value: e.detail.value
            });
            this.triggerEvent("input_change", {... e.detail});
        },
        inputFocus(e) {
            this.setData({
                focus: true
            });
            this.triggerEvent("input_focus", {... e.detail});
        },
        inputBlur(e) {
            this.setData({
                focus: false
            });
            this.triggerEvent("input_blur", {... e.detail});
        },
        inputConfirm(e) {
            this.triggerEvent("input_confirm", {... e.detail});
        },
        inputKeyBoardHeightChange(e) {
            this.triggerEvent("input_keyboard_height_change", {... e.detail});
        },
        handleFirstClick() {
            this.triggerEvent("input_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("input_lastIcon");
        },
    }
});
