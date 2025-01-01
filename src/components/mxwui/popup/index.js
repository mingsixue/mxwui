Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false
        },
        // 弹窗方向：left / right
        type: {
            type: String,
            value: 'right'
        },
        // 自定义弹窗宽度
        width: {
            type: String,
            value: '80vw'
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        // 点击蒙层是否可以关闭弹窗
        isCloseMask: {
            type: Boolean,
            value: true
        },
    },
    methods: {
        handleMask() {
            if (this.data.isCloseMask) {
                this.setData({
                    visible: false
                });
                this.triggerEvent("popup_close");
            }
        },
    }
});
