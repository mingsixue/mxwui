import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
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
    handleFirstIcon() {
        console.log('🔥🔥🔥 标签前图标点击');
    }, 
    handleLastIcon() {
        console.log('🔥🔥🔥 标签后图标点击');
    }, 
    handleSwitchChange(e) {
        console.log('🔥🔥🔥 Switch值变更', e.detail);
    }, 
});
