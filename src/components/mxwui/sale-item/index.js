import {COLOR} from '../utils/common';

Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        // 下标值
        index: {
            type: Number,
            value: ''
        },
        // 商品封面
        cover: {
            type: String,
            value: ''
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
        // 标题显示行数
        lineClamp: {
            type: Number,
            value: 1
        },
        // 标题前标签
        label: {
            type: String,
            value: ''
        },
        // 标题前标签文本色
        labelColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 标题前标签背景色
        labelBgColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 价格单位
        priceUnit: {
            type: String,
            value: '¥'
        },
        // 价格
        price: {
            type: Number,
            value: 0
        },
        // 价格颜色
        priceColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 价格后扩展文本
        extendText: {
            type: String,
            value: ''
        },
        // 扩展文本颜色
        extendColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 扩展文本是否有删除线
        lineThrough: {
            type: Boolean,
            value: false
        },
        // 属性标签组
        tags: { 
            type: Array,
            value: []
        },
        // 按钮文案
        btnText: {
            type: String,
            value: ''
        },
        // 按钮文本色
        btnTextColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 按钮边框颜色
        btnBorderColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 按钮背景色
        btnBgColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        THEME_COLOR: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        WHITE_COLOR: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        }
    },
    methods: {
        handleItem() {
            this.triggerEvent("sale_item_tap", {index: this.data.index});
        },
        handleBtn() {
            this.triggerEvent("sale_item_btn_tap", {index: this.data.index});
        },
    }
});
