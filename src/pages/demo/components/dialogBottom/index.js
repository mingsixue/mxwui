import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleShowClose: false,
        visibleMaskClose: false,
        handleClose: false,
    },
    handleVisible() {
        this.setData({
            visible: true
        });
    }, 
    handleShowClose() {
        this.setData({
            visibleShowClose: true
        });
    }, 
    handleMaskClose() {
        this.setData({
            visibleMaskClose: true
        });
    },
    handleHandle() {
        this.setData({
            visibleHandle: true
        });
    },

    handleClose(e) {
        console.log('🔥🔥🔥 取消', e.detail);
    }
});
