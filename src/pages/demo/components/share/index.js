import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleTitle: false,
        visibleTitle2: false,
        visibleDesc: false,
        visibleDesc2: false,
        visibleItem: false,
        visibleMaskClose: false,
        visibleHandle: false,
    },
    handleVisible() {
        this.setData({
            visible: true
        });
    },
    handleTitle() {
        this.setData({
            visibleTitle: true
        });
    },
    handleTitle2() {
        this.setData({
            visibleTitle2: true
        });
    },
    handleDesc() {
        this.setData({
            visibleDesc: true
        });
    },  
    handleDesc2() {
        this.setData({
            visibleDesc2: true
        });
    },   
    handleItem() {
        this.setData({
            visibleItem: true
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
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleTitle2: false,
            visibleDesc: false,
            visibleDesc2: false,
            visibleItem: false,
            visibleMaskClose: false,
            visibleHandle: false,
        });

        console.log('🔥🔥🔥 关闭', e.detail);
    },
    handleWechat() {
        console.log('🔥🔥🔥 微信好友');
    },
    handleFriends() {
        console.log('🔥🔥🔥 朋友圈');
    },
    handleQrcode() {
        console.log('🔥🔥🔥 二维码');
    },
    handleCopylink() {
        console.log('🔥🔥🔥 复制链接');
    }
});
