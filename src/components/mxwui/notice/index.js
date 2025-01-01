import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否显示
        visible: {
            type: Boolean,
            value: false
        },
        // 样式类型 default 默认 / operate 可操作 / roll 滚动
        styleType: {
            type: String,
            value: 'default'
        },
        // 内容
        text: {
            type: String,
            value: ''
        },
        // 文本超出是否显示省略号
        ellipsis: {
            type: Boolean,
            value: false
        },
        // 自定义文本颜色
        textColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 自定义背景颜色
        bgColor: {
            type: String,
            value: COLOR.NOTICE_COLOR
        },
        // 图标颜色
        iconColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 图标大小
        iconSize: {
            type: String,
            value: 32
        },
        // 是否可关闭
        showClose: {
            type: Boolean,
            value: true
        },
        // 是否显示按钮
        showBtn: {
            type: Boolean,
            value: false,
        },
        // 按钮文案
        btnText: {
            type: String,
            value: '查看'
        },
        // 按钮宽度
        btnWidth: {
            type: String,
            value: '104rpx'
        },
        // 按钮类型，primary｜default｜ghost
        btnType: {
            type: String,
            value: 'primary'
        },
        // 按钮颜色
        btnColor: {
            type: String,
            value: ''
        },
        // 是否显示箭头
        arrows: {
            type: Boolean,
            value: false,
        },
        // 滚动效果， vertical垂直滚动 marquee跑马灯效果
        rollType: {
            type: String,
            value: 'marquee'
        },
        // 滚动动画时间
        rollSpeed: {
            type: String,
            value: '8s'
        },
        // 垂直滚动文本
        message: {
            type: Array,
            value: []
        },
        // 垂直滚动自动切换时间，毫秒
        interval: {
            type: Number,
            value: 3000
        }
    },
    methods: {
        handleClose() {
            console.log('close');
            this.setData({
                visible: false
            });
            this.triggerEvent("notice_close");
        },
        handleBtn() {
            console.log('btn');
            this.triggerEvent("notice_btn");
        },
        handleView() {
            console.log('查看');
            this.triggerEvent("notice_tap");
        },
    }
});
