import {COLOR} from '../utils/common';
const LIMIT = 140;
Component({
    properties: {
        // 文本域样式类型，normal、web
        styleType: {
            type: String,
            value: 'normal'
        },
        // 内容
        value: {
            type: String,
            value: ''
        },
        // 文本颜色
        textColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 占位文本
        placeholder: {
            type: String,
            value: '请输入'
        },
        // 占位文本色
        placeholderColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 背景色
        bgColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 最大输入长度，设置为 -1 的时候不限制最大长度
        maxLength: {
            type: Number,
            value: LIMIT,
            observer(newVal) {
                let limit = newVal;
                if (newVal < 0) {
                    limit = 999;
                }
                this.setData({
                    limit: limit
                });
            }
        },
        // 是否显示字数限制
        showLimit: {
            type: Boolean,
            value: true
        },
        // 自动聚焦
        autoFocus: {
            type: Boolean,
            value: false
        },
        // 是否自动增高
        autoHeight: {
            type: Boolean,
            value: false
        },
        // 自定义高度
        height: {
            type: Number,
            value: 120
        },
        // 指定光标与键盘的距离
        cursorSpacing: {
            type: Number,
            value: 0
        },
        // 指定focus时的光标位置
        cursor: {
            type: Number,
            value: -1
        },
        // 光标起始位置，自动聚集时有效，需与selectionEnd搭配使用
        selectionStart: {
            type: Number,
            value: -1
        },
        // 光标结束位置，自动聚集时有效，需与selectionStart搭配使用
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
        // 是否去掉 iOS 下的默认内边距
        disableDefaultPadding: {
            type: Boolean,
            value: true
        },
        // 设置键盘右下角按钮的文字，send、search、next、go、done、return
        confirmType: {
            type: String,
            value: 'return'
        },
        // 点击键盘右下角按钮时是否保持键盘不收起
        confirmHold: {
            type: Boolean,
            value: false
        },
        // 键盘对齐位置，cursor 对齐光标位置 / bottom 对齐输入框底部
        adjustKeyboardTo: {
            type: Boolean,
            value: 'cursor'
        },
        // 描述
        desc: {
            type: String,
            value: ''
        },
        // 描述文本色
        descColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 左侧自定义宽度，不带单位
        leftWidth: {
            type: Number,
            value: ''
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
            value: []
        },
        // 标签后图标
        lastIcon: {
            type: Object,
            value: []
        },
        // 是否横向布局，styleType=web时有效
        horizontal: {
            type: Boolean,
            value: false
        },
    },
    ready() {
        if (!this.data.limit) {
            this.setData({
                limit: LIMIT
            });
        }
    },
    methods: {
        inputChange(e) {
            let val = e.detail.value;
            this.setData({
                value: val,
                len: String(val).length
            });

            this.triggerEvent("textarea_change", {...e.detail});
        },
        inpuFocus(e) {
            this.triggerEvent("textarea_focus", {...e.detail});
        },
        inputBlur(e) {
            this.triggerEvent("textarea_blur", {...e.detail});
        },
        inputLineChange(e) {
            this.triggerEvent("textarea_line_change", {...e.detail});
        },
        inputConfirm(e) {
            this.triggerEvent("textarea_confirm", {...e.detail});
        },
        inputKeyboardHeightChange(e) {
            this.triggerEvent("textarea_keyboard_height_change", {...e.detail});
        },
        handleFirstClick() {
            this.triggerEvent("textarea_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("textarea_lastIcon");
        },
    }
});
