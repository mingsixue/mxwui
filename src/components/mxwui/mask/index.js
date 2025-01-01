let animation = wx.createAnimation({
    duration: 200,
    timingFunction: "ease",
    delay: 0,
});

Component({
    properties: {
        // 是否显示蒙层
        visible: {
            type: Boolean,
            value: false,
            observer: function observer(res) {
                if (res) {
                    this.onMaskOpen();
                }
            },
        },
        // 蒙层透明度
        opacity: {
            type: String,
            value: 0.6,
        },
        // 层级
        zIndex: {
            type: Number,
            value: 520,
        },
    },
    methods: {
        // 蒙层点击
        handleTapMask(e) {
            this.triggerEvent("mask_tap", e);
        },

        onMaskOpen() {
            var opacity = this.data.opacity;
            animation.opacity(opacity).step();
            this.setData({
                animationData: animation.export(),
            });
        },
    },
});
