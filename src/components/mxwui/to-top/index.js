import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否显示
        visible: {
            type: Boolean,
            value: false
        },
        // 底部距离
        bottom: {
            type: Number,
            value: 56
        },
        // 右侧距离
        right: {
            type: Number,
            value: 64
        },
        // 背景色
        bgColor: {
            type: String,
            value: 'rgba(255,255,255,0.9)'
        },
        // 图标颜色
        iconColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 自定义图片
        iconUrl: {
            type: String,
            value: ''
        },
    },
    methods: {
        handleToTop() {
            wx.pageScrollTo({
                scrollTop: 0
            });
            this.triggerEvent("totop_done");
        },
    }
});
