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
    inputChange(e) {
        console.log('🔥🔥🔥 值变更了', e.detail);
    }, 
    inputFocus(e) {
        console.log('🔥🔥🔥 获得焦点', e.detail);
    }, 
    inputBlur(e) {
        console.log('🔥🔥🔥 失去焦点', e.detail);
    }, 
    inputConfirm(e) {
        console.log('🔥🔥🔥 完成输入', e.detail);
    }, 
    inputKeyboardHeightChange(e) {
        console.log('🔥🔥🔥 键盘高度变化', e.detail);
    }, 
    handleFirstIcon() {
        console.log('🔥🔥🔥 标签前图标点击');
    }, 
    handleLastIcon() {
        console.log('🔥🔥🔥 标签后图标点击');
    }, 
});
