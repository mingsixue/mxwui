import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否显示
        visible: {
            type: Boolean,
            value: false,
        },
        // 留白区距离顶部距离，px
        top: {
            type: Number,
            value: 0
        },
        // 留白区距离左侧距离，px
        left: {
            type: Number,
            value: 0
        },
        // 留白区宽度，px
        width: {
            type: Number,
            value: 0
        },
        // 留白区高度，px
        height: {
            type: Number,
            value: 0
        },
        // 留白区圆角
        radius: {
            type: Number,
            value: 16
        },
        // 是否显示蒙层
        showMask: {
            type: Boolean,
            value: true
        },
        // 蒙层透明度，0-1
        opacity: {
            type: Number,
            value: 0.5
        },
        // 引导文案
        text: {
            type: String,
            value: ''
        },
        // 引导文案文本色
        textColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // tips箭头方向，top left bottom right
        tipsDirection: {
            type: String,
            value: 'top'
        },
        // tips距离留白top距离
        tipsTop: {
            type: Number,
            value: 130
        },
        // tips距离留白left距离
        tipsLeft: {
            type: Number,
            value: -30
        },
        // tips宽度
        tipsWidth: {
            type: Number,
            value: 240
        },
        // tips箭头距离留白top距离
        tipsArrowsTop: {
            type: Number,
            value: -20
        },
        // tips箭头距离留白left距离
        tipsArrowsLeft: {
            type: Number,
            value: 70
        },
        // tips文本前图标
        tipsIcon: {
            type: Object,
            value: {}
        },
        // tips背景色
        tipsBgColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        // 点击蒙层是否可以关闭
        isCloseMask: {
            type: Boolean,
            value: true
        },
        THEME_COLORTH: {
            type: String,
            value: COLOR.THEME_COLOR
        }
    },
    methods: {
        handleClose() {
            if (!this.data.isCloseMask) {
                return;
            }
            this.setData({
                visible: false
            });
            this.triggerEvent("lead_close");
        },
    }
});
