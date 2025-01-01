import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleTitle: false,
        titleColor: '',
        visibleContent: false,
        contentColor: '',
        visibleContentCustom: false,
        visibleConfirm: false,
        confirmBtnText: '确定',
        confirmBtnColor: '#CA0E2D',
        visibleCancel: false,
        cancelBtnText: '取消',
        cancelBtnColor: '#656979',
        visibleHandle: false,
        visibleMaskClose: false,
    },
    handleConfirm() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleContentCustom: false,
            visibleConfirm: false,
            visibleCancel: false,
            visibleHandle: false,
            visibleMaskClose: false,
        });
        console.log('🔥🔥🔥 确认');
    },
    handleClose(e) {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleContentCustom: false,
            visibleConfirm: false,
            visibleCancel: false,
            visibleHandle: false,
            visibleMaskClose: false,
        });
        console.log('🔥🔥🔥 取消', e.detail);
    },

    handleVisible() {
        this.setData({
            visible: true
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
    handleContent() {
        this.setData({
            visibleContent: true,
            contentColor: '#040A23'
        });
    },
    handleContentColor() {
        this.setData({
            visibleContent: true,
            contentColor: '#1677FF'
        });
    },
    handleContent2() {
        this.setData({
            visibleContentCustom: true
        });
    },
    handleConfirmBtn() {
        this.setData({
            visibleConfirm: true,
            confirmBtnText: '确定',
            confirmBtnColor: '#CA0E2D',
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
    handleCancel() {
        this.setData({
            visibleCancel: true,
            cancelBtnText: '取消',
            cancelBtnColor: '#656979',
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
    handleMaskClose() {
        this.setData({
            visibleMaskClose: true
        });
    }
});
