import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        options: [
            {text: '选项一', value: 1, checked: false},
            {text: '选项二', value: 2, checked: true},
            {text: '选项禁用', value: 3, disabled: true},
            {text: '选项选中禁用', value: 4, disabled: true, checked: true},
        ],
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
    handleChange(e) {
        console.log('🔥🔥🔥', e.detail);
    }, 
    handleFirstIcon() {
        console.log('🔥🔥🔥 标签前图标点击');
    }, 
    handleLastIcon() {
        console.log('🔥🔥🔥 标签后图标点击');
    }
});
