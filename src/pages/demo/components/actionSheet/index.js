import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleTitle: false,
        visibleTitleColor: false,
        visibleClose: false,
        visibleMaskClose: false,
        visibleHandle: false,
        visibleOptions: false,
        visibleOptions2: false,
        options: [
            {text: '行动点1'},
            {text: '行动点2'},
            {text: '行动点3'}
        ],
        options2: [
            {text: '行动点1'},
            {text: '行动点2', iconName: 'msg2'},
            {text: '行动点3', iconName: 'msg6', iconColor: '#1677FF', iconSize: 40},
            {text: '行动点4', iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png', iconSize: 40}
        ],
        options3: [
            {text: '行动点1'},
            {text: '行动点2', color: '#f00'},
            {text: '行动点3', color: '#00f'}
        ],
    },
    handleVisible() {
        this.setData({
            visible: true
        });
    }, 
    handleTitle() {
        this.setData({
            visibleTitle: true,
        });
    }, 
    handleTitleColor() {
        this.setData({
            visibleTitleColor: true,
        });
    }, 
    handleClose() {
        this.setData({
            visibleClose: true
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
    handleOptions() {
        this.setData({
            visibleOptions: true
        });
    },
    handleOptions2() {
        this.setData({
            visibleOptions2: true
        });
    },

    handleItemFun(e) {
        console.log('🔥🔥🔥，点击', e.detail);
    },
    handleCancelFun(e) {
        console.log('🔥🔥🔥，取消', e.detail);
    }
});
