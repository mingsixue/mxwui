import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleValue: false,
        visibleStart: false,
        visibleEnd: false,
        visibleMin: false,
        visibleMin2: false,
        visibleMax: false,
        visibleMax2: false,
        visibleMinMax: false,
        visibleMinMax2: false,
        visibleMode: false,
        visibleWeek: false,
        visibleLunar: false,
        visibleSolarTerm: false,
        visibleFestival: false,
        visibleAll: false,
        visibleThemeColor: false,
        visibleTitle: false,
        visibleCancel: false,
        visibleConfirm: false,
        visibleMask: false
    },
    onShareAppMessage() {},
    handleConfirm(e) {
        console.log('🔥🔥🔥 confirm', e.detail);
    }, 
    handleClose(e) {
        console.log('🔥🔥🔥 cancel', e.detail);
    },

    handleVisible() {
        this.setData({
            visible: true
        });
    },
    handleVisibleValue() {
        this.setData({
            visibleValue: true
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
    handleVisibleMin() {
        this.setData({
            visibleMin: true
        });
    },
    handleVisibleMin2() {
        this.setData({
            visibleMin2: true
        });
    },
    handleVisibleMax() {
        this.setData({
            visibleMax: true
        });
    },
    handleVisibleMax2() {
        this.setData({
            visibleMax2: true
        });
    },
    handleVisibleMinMax() {
        this.setData({
            visibleMinMax: true
        });
    },
    handleVisibleMinMax2() {
        this.setData({
            visibleMinMax2: true
        });
    },
    handleVisibleMode() {
        this.setData({
            visibleMode: true
        });
    },
    handleVisibleWeek() {
        this.setData({
            visibleWeek: true
        });
    },
    handleVisibleLunar(){
        this.setData({
            visibleLunar: true
        });
    },
    handleVisibleSolarTerm() {
        this.setData({
            visibleSolarTerm: true
        });
    },
    handleVisibleFestival() {
        this.setData({
            visibleFestival: true
        });
    },
    handleVisibleAll() {
        this.setData({
            visibleAll: true
        });
    },
    handleVisibleThemeColor() {
        this.setData({
            visibleThemeColor: true
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
