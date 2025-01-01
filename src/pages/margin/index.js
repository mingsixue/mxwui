import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        zh: [
            {name: '20-特殊-#BE192E', value: '20', weight: 'normal'},
            {name: '20-备注注释-#9AA0B1', value: '20', weight: 'normal'},
            {name: '22-次要注释-040A23', value: '22', weight: 'normal'},
            {name: '24-次要内文-040A23', value: '24', weight: 'normal'},
            {name: '28-标题/常规正文-040A23', value: '28', weight: 'normal'},
            {name: '32-标题/大正文-040A23', value: '32', weight: 'normal'},
            {name: '32-模块标题-040A23', value: '32', weight: 'bold'},
            {name: '36-大标题-040A23', value: '36', weight: 'bold'},
            {name: '44-特大标题-040A23', value: '44', weight: 'bold'},
        ],
        en: [
            {name: '—', value: ''},
            {name: '—', value: ''},
            {name: '22-Num-040A23', value: '22'},
            {name: '24-Num-040A23', value: '24'},
            {name: '28-Num-040A23', value: '28'},
            {name: '28-Num-040A23', value: '28'},
            {name: '32-Num-040A23', value: '32'},
            {name: '36-Num-040A23', value: '36'},
            {name: '44-Num-040A23', value: '44'},
        ],
    },
    handleCopy(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.color,
            success () {
                wx.showToast({
                    title: '复制成功',
                    icon: 'none'
                });
            }
        })
    }
});
