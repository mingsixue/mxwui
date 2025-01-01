import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visiblePlaceholder: false,
        visibleBg: false,
        visibleBtn: false,
        visibleMask: false,
    },
    handleClose() {
        console.log('🔥🔥🔥 关闭')
    },
    handleChange(e) {
        console.log('🔥🔥🔥 发送', e.detail);
    },
    handleVisible() {
        this.setData({
            visible: true
        });
    },
    handleVisiblePlaceholder() {
        this.setData({
            visiblePlaceholder: true
        });
    },
    handleVisibleBg() {
        this.setData({
            visibleBg: true
        });
    },
    handleVisibleBtn() {
        this.setData({
            visibleBtn: true
        });
    },
    handleVisibleMask() {
        this.setData({
            visibleMask: true
        });
    },
});
