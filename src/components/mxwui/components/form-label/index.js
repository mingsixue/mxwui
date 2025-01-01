import {COLOR} from '../../utils/common';

Component({
    properties: {
        // 是否水平布局
        horizontal: {
            type: Boolean,
            value: false
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
            value: COLOR.TEXT_COLOR
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
            value: {}
        },
        // 标签后图标
        lastIcon: {
            type: Object,
            value: {}
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
            this.triggerEvent("form_label_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("form_label_lastIcon");
        }
    }
});
