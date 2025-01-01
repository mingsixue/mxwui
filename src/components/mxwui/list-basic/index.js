import {COLOR} from '../utils/common';

Component({
    properties: {
        // 标签文本
        label: {
            type: String,
            value: ''
        },
        // 标签文本文本色
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
        // 是否必填
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
        // 是否显示右箭头
        arrows: {
            type: Boolean,
            value: true
        },
        // 是否显示小红点
        dot: {
            type: Boolean,
            value: false
        },
        // 显示数量
        num: {
            type: String,
            value: ''
        },
        // 右侧内容
        content: {
            type: String,
            value: ''
        },
        // 右侧内容文本色
        contentColor: {
            type: String,
            value: ''
        },
        // 右侧内容是否居左
        isLeft: {
            type: Boolean,
            value: false
        },
        // 描述
        desc: {
            type: String,
            value: ''
        },
        // 描述文本色
        descColor: {
            type: String,
            value: ''
        },
        // 是否显示分隔线
        showLine: {
            type: Boolean,
            value: true
        },
        TEXT_COLOR: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        }
    },
    methods: {
        handleFirstClick() {
            this.triggerEvent("list_basic_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("list_basic_lastIcon");
        },
        handleRightClick() {
            this.triggerEvent("list_basic_content");
        }
    }
});
