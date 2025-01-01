import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    handleChange(e) {
        console.log('🔥🔥🔥 change', e.detail);
    }, 
    handleBack() {
        console.log('🔥🔥🔥 返回按钮点击');
    }
});
