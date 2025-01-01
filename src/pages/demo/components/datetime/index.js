import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleValue: false,
        visibleValue2: false,
        visibleValue3: false,
        visibleValue4: false,
        visibleValue5: false,
        visibleValue6: false,
        minuteStep: 1,
        visibleMinuteStep: false,
        visibleShowYear: false,
        visibleShowHour: false,
        visibleShowMinute: false,
        visibleShowSeconds: false,
        visibleSuffix: false,
        visibleTitle: false,
        visibleCancel: false,
        visibleConfirm: false,
        visibleMin: false,
        visibleMin2: false,
        visibleMin3: false,
        visibleMin4: false,
        visibleMax: false,
        visibleMax2: false,
        visibleMax3: false,
        visibleMax4: false,
        visibleLimit: false,
        visibleLimit2: false,
        visibleLimit3: false,
        visibleLimit4: false,
        visibleMinYearLimit: false,
        visibleMaxYearLimit: false,
        visibleMore: false,
        visibleMore2: false,
        visibleMore3: false,
        visibleMore4: false,
        visibleMask: false,
    },
    handleConfirm(e) {
        console.log('🔥🔥🔥 确定', e.detail);
    }, 
    handleClose(e) {
        console.log('🔥🔥🔥 取消', e.detail);
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
    handleVisibleValue2() {
        this.setData({
            visibleValue2: true
        });
    },
    handleVisibleValue3() {
        this.setData({
            visibleValue3: true
        });
    },
    handleVisibleValue4() {
        this.setData({
            visibleValue4: true
        });
    },
    handleVisibleValue5() {
        this.setData({
            visibleValue5: true
        });
    },
    handleVisibleValue6() {
        this.setData({
            visibleValue6: true
        });
    },
    handleVisibleMinuteStep(e) {
        this.setData({
            visibleMinuteStep: true,
            minuteStep: e.currentTarget.dataset.step
        });
    },
    handleVisibleShowYear() {
        this.setData({
            visibleShowYear: true
        });
    },
    handleVisibleShowHour() {
        this.setData({
            visibleShowHour: true
        });
    },
    handleVisibleShowMinute() {
        this.setData({
            visibleShowMinute: true
        });
    },
    handleVisibleShowSeconds() {
        this.setData({
            visibleShowSeconds: true
        });
    },
    handleVisiblevisibleSuffix() {
        this.setData({
            visibleSuffix: true
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
    handleVisibleMin3() {
        this.setData({
            visibleMin3: true
        });
    },
    handleVisibleMin4() {
        this.setData({
            visibleMin4: true
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
    handleVisibleMax3() {
        this.setData({
            visibleMax3: true
        });
    },
    handleVisibleMax4() {
        this.setData({
            visibleMax4: true
        });
    },
    handleVisibleLimit() {
        this.setData({
            visibleLimit: true,
        });
    },
    handleVisibleLimit2() {
        this.setData({
            visibleLimit2: true,
        });
    },
    handleVisibleLimit3() {
        this.setData({
            visibleLimit3: true,
        });
    },
    handleVisibleLimit4() {
        this.setData({
            visibleLimit4: true,
        });
    },
    handleVisibleMinYearLimit() {
        this.setData({
            visibleMinYearLimit: true
        });
    },
    handleVisibleMaxYearLimit() {
        this.setData({
            visibleMaxYearLimit: true
        });
    },
    handleVisibleMore() {
        this.setData({
            visibleMore: true,
        });
    },
    handleVisibleMore2() {
        this.setData({
            visibleMore2: true,
        });
    },
    handleVisibleMore3() {
        this.setData({
            visibleMore3: true,
        });
    },
    handleVisibleMore4() {
        this.setData({
            visibleMore4: true,
        });
    }
});
