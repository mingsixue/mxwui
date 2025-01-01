import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        digit: 4,
        visibleDigit: false,
        visibleCountdown: false,
        visibleSend: false,
        visibleConfirm: false,
        visibleHandle: false,
        firstIcon: {
            iconName: 'setting',
            iconColor: ''
        },
        firstIcon2: {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        },
        lastIcon: {
            iconName: 'help',
            iconColor: '#1677FF'
        },
        lastIcon2: {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        },
    },
    handleClose(e) {
        console.log('🔥🔥🔥 关闭', e.detail);
    }, 
    handleBack() {
        console.log('🔥🔥🔥 返回');
    },
    handleSend() {
        console.log('🔥🔥🔥 触发发送验证码');
    },
    handleConfirm(e) {
        console.log('🔥🔥🔥 confirm', e.detail);
    },
    handleFirstIcon() {
        console.log('🔥🔥🔥 标签前图标点击');
    },
    handleLastIcon() {
        console.log('🔥🔥🔥 标签后图标点击');
    },
    handleVisible() {
        this.setData({
            visible: true
        });
    },
    handleDigit4() {
        this.setData({
            visibleDigit: true,
            digit: 4,
        });
    },
    handleDigit6() {
        this.setData({
            visibleDigit: true,
            digit: 6
        });
    },
    handleVisibleCountdown() {
        this.setData({
            visibleCountdown: true
        });
    },
    handleVisibleSend() {
        this.setData({
            visibleSend: true
        });
    },
    handleVisibleConfirm() {
        this.setData({
            visibleConfirm: true
        });
    },
    handleVisibleHandle() {
        this.setData({
            visibleHandle: true
        });
    }
});
