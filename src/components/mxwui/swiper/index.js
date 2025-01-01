import {COLOR} from '../utils/common';

Component({
    properties: {
        // 数据项
        options: {
            type: Array,
            value: []
        },
        // swiper宽度
        width: {
            type: String,
            value: '750rpx'
        },
        // swiper高度
        height: {
            type: String,
            value: '320rpx'
        },
        // swiper圆角
        radius: {
            type: Number,
            value: 0
        },
        // 是否自动切换
        autoplay: {
            type: Boolean,
            value: true
        },
        // 当前所在滑块
        current: {
            type: Number,
            value: 0
        },
        // 自动切换间隔
        interval: {
            type: Number,
            value: 5000
        },
        // 滑动动画时长
        duration: {
            type: Number,
            value: 500
        },
        // 是否采用衔接滑动
        circular: {
            type: Boolean,
            value: false
        },
        // swiper 切换缓动动画类型， default 默认缓动函数、linear 线性动画、easeInCubic 缓入动画、easeOutCubic 缓出动画、easeInOutCubic 缓入缓出动画
        easingFunction: {
            type: String,
            value: 'default'
        },
        // 同时显示的滑块数量
        displayMultipleItems: {
            type: Number,
            value: 1
        },
        // 前边距，可用于露出前一项的一小部分，支持px和rpx
        previousMargin: {
            type: String,
            value: ''
        },
        // 后边距，可用于露出后一项的一小部分，支持px和rpx
        nextMargin: {
            type: String,
            value: ''
        },
        // 是否显示指示点
        showDots: {
            type: Boolean,
            value: true
        },
        // 指示点距离底部距离
        dotBottom: {
            type: Number,
            value: 24
        },
        // 指示点颜色
        dotColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 指示点选中颜色
        dotActiveColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 指示点形状， circle 圆形 / square 方型 / bar 条形
        dotShape: {
            type: String,
            value: 'circle'
        },
        // 指示点宽
        dotWidth: {
            type: Number,
            value: ''
        },
        // 指示点高
        dotHeight: {
            type: Number,
            value: ''
        },
        // 指示点圆角
        dotRadius: {
            type: Number,
            value: ''
        },
        // 指示点边框颜色
        dotBorderColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 指示点边框选中颜色
        dotBorderActiveColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 点击时是否使用自定义事件
        customHandle: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        handleItem(e) {
            let {item = {}, idx} = e.currentTarget.dataset;

            if (this.data.customHandle) {
                this.triggerEvent("swiper_tap", {index: idx, item: item});
                return;
            }

            if (item.url) {
                wx.navigateTo({
                    url: item.url
                });
            }
        },
        handleChange(e) {
            this.setData({
                current: e.detail.current
            });
            this.triggerEvent("swiper_change", e.detail);
        },
        bindTransition(e) {
            this.triggerEvent("swiper_transition", e.detail);
        },
        bindAnimationFinish(e) {
            this.triggerEvent("swiper_animation_finish", e.detail);
        },
    }
});
