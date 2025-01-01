import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleStart: false,
        visibleEnd: false,
        visibleStartText: false,
        visibleEndText: false,
        visibleTitle: false,
        visibleCancel: false,
        visibleConfirm: false,
        visibleMask: false,
    },
    handleConfirm(e) {
        console.log('🔥🔥🔥 确定', e.detail);
    }, 
    handleClose(e) {
        console.log('🔥🔥🔥 关闭', e.detail);
    },
    handleVisible() {
        this.setData({
            visible: true
        });
    },
    handleVisibleStart() {
        this.setData({
            visibleStart: true
        });
    },
    handleVisibleEnd() {
        this.setData({
            visibleEnd: true
        });
    },
    handleVisibleStartText() {
        this.setData({
            visibleStartText: true
        });
    },
    handleVisibleEndText() {
        this.setData({
            visibleEndText: true
        });
    },
    handleVisibleTitle() {
        this.setData({
            visibleTitle: true
        });
    },
    handleVisibleCancel() {
        this.setData({
            visibleCancel: true
        });
    },
    handleVisibleConfirm() {
        this.setData({
            visibleConfirm: true
        });
    },
    handleVisibleMask() {
        this.setData({
            visibleMask: true
        });
    },
});
