Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            value: true
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
        // 自定义高度
        height: {
            type: String,
            value: '65vh'
        }
    },
    methods: {
        handleMask() {
            if (this.data.isCloseMask) {
                this.setData({
                    visible: false
                });
                this.triggerEvent("dialog_bottom_close", {type: 'maskClose'});
            }
        },
        handleClsoe() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_bottom_close", {type: 'close'});
        }
    }
});
