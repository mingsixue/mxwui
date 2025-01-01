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
        visibleCancel: false,
        cancelBtnText: '取消',
        cancelBtnColor: '#656979',
        visibleHandle: false,
    },
    handleConfirm() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleConfirm: false,
            visibleCancel: false,
            visibleHandle: false,
        });
        console.log('🔥🔥🔥 确认');
    },
    handleCancel() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleConfirm: false,
            visibleCancel: false,
            visibleHandle: false,
        });
        console.log('🔥🔥🔥 取消');
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
    handleCancel2() {
        this.setData({
            visibleCancel: true,
            cancelBtnText: '离开',
            cancelBtnColor: '#656979',
        });
    },
    handleCancel3() {
        this.setData({
            visibleCancel: true,
            cancelBtnText: '取消',
            cancelBtnColor: '#1677FF',
        });
    },
    handleHandle() {
        this.setData({
            visibleHandle: true
        });
    },
});
