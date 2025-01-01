import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleShowClose: false,
        visibleTitle: false,
        visibleBack: false,
        visibleBackIcon: false,
        visibleClose: false,
        visibleCloseIcon: false,
        visibleMaskClose: false,
        visibleHandle: false,
        backIcon1: {
            iconName: 'setting',
            iconColor: '#f00',
            iconSize: 30
        },
        backIcon2: {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
            iconSize: 32
        },
        closeIcon1: {
            iconName: 'help',
            iconColor: '#1677FF',
            iconSize: 34
        },
        closeIcon2: {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
            iconSize: 36
        },
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
    handleTitle() {
        this.setData({
            visibleTitle: true,
            titleColor: '#040A23'
        });
    }, 
    handleTitleColor() {
        this.setData({
            visibleTitle: true,
            titleColor: '#1677FF'
        });
    }, 
    handleBack() {
        this.setData({
            visibleBack: true
        });
    },
    handleBack2() {
        this.setData({
            visibleBackIcon: true,
            backIcon: this.data.backIcon1
        });
    }, 
    handleBack3() {
        this.setData({
            visibleBackIcon: true,
            backIcon: this.data.backIcon2
        });
    },
    handleClose() {
        this.setData({
            visibleClose: true
        });
    }, 
    handleClose2() {
        this.setData({
            visibleCloseIcon: true,
            closeIcon: this.data.closeIcon1
        });
    }, 
    handleClose3() {
        this.setData({
            visibleCloseIcon: true,
            closeIcon: this.data.closeIcon2
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

    handleCancelFun(e) {
        console.log('🔥🔥🔥，关闭', e.detail);
    },
    handleBackFun() {
        console.log('🔥🔥🔥，返回');
    }
});
