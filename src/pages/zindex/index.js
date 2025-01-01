import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
    },
    // handleCopy(e) {
    //     wx.setClipboardData({
    //         data: e.currentTarget.dataset.color,
    //         success () {
    //             wx.showToast({
    //                 title: '复制成功',
    //                 icon: 'none'
    //             });
    //         }
    //     })
    // }
});
