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
    textareaChange(e) {
        console.log('🔥🔥🔥 input', e.detail, e);
    }, 
    textareaFocus(e) {
        console.log('🔥🔥🔥 focus', e.detail);
    },
    textareaBlur(e) {
        console.log('🔥🔥🔥 blur', e.detail);
    },
    textareaLineChange(e) {
        console.log('🔥🔥🔥 line change', e.detail);
    },
    textareaConfirm(e) {
        console.log('🔥🔥🔥 confirm', e.detail);
    },
    textareaKeyboardHeightChange(e) {
        console.log('🔥🔥🔥 keyboard height', e.detail);
    },
    handleFirstIcon() {
        console.log('🔥🔥🔥 标签前图标点击');
    }, 
    handleLastIcon() {
        console.log('🔥🔥🔥 标签后图标点击');
    },
});
