import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        sex: [
            {text: '男', value: 1, checked: true},
            {text: '女', value: 2},
        ],
        interest: [
            {text: '旅游', value: 1},
            {text: '阅读', value: 2, checked: true},
            {text: '绘画', value: 3},
        ]
    },
    handleGo(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        });
    },
});
