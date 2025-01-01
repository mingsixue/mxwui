import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        type: 'right',
        visibleWidth: false,
        visibleMask: false,
        isCloseMask: true,
    },
    handleLeft() {
        this.setData({
            visible: true,
            type: 'left'
        });
    },
    handleRight() {
        this.setData({
            visible: true,
            type: 'right'
        });
    },
    handleWidth() {
        this.setData({
            visibleWidth: true,
            width: '400rpx'
        });
    },
    handleWidth2() {
        this.setData({
            visibleWidth: true,
            width: '320px'
        });
    },
    handleWidth3() {
        this.setData({
            visibleWidth: true,
            width: '50%'
        });
    },
    handleMask() {
        this.setData({
            visibleMask: true,
            isCloseMask: false
        });
    },
    handleMask2() {
        this.setData({
            visibleMask: true,
            isCloseMask: true
        });
    },
    handleClose() {
        this.setData({
            visible: false,
            visibleWidth: false,
            visibleMask: false,
        });
    },
    handleDialogClose() {
        console.log('🔥🔥🔥 点了蒙层关闭');
    }, 
});
