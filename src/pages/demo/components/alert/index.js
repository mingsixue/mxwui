import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleTitle: false,
        visibleContent: false,
        visibleConfirm: false,
        confirmBtnText: '确定',
        confirmBtnColor: '#CA0E2D',
        visibleHandle: false,
        visibleMaskClose: false,
    },
    handleConfirm() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleConfirm: false,
            visibleHandle: false,
            visibleMaskClose: false,
        });

        console.log('🔥🔥🔥 确认事件回调');
    },
    handleCancel() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleConfirm: false,
            visibleHandle: false,
            visibleMaskClose: false,
        });

        console.log('🔥🔥🔥 取消事件回调');
    },
    handleBasic() {
        this.setData({
            visible: true
        });
    }, 
    handleTitle() {
        this.setData({
            visibleTitle: true
        });
    },
    handleContent() {
        this.setData({
            visibleContent: true
        });
    },
    handleConfirm2() {
        this.setData({
            visibleConfirm: true,
            confirmBtnText: '保 存',
            confirmBtnColor: '#CA0E2D',
        });
    },
    handleConfirm3() {
        this.setData({
            visibleConfirm: true,
            confirmBtnText: '确定',
            confirmBtnColor: '#1677FF'
        });
    },
    handleHandle() {
        this.setData({
            visibleHandle: true
        });
    },
    handleMaskClose() {
        this.setData({
            visibleMaskClose: true
        });
    }
});
