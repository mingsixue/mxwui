import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    changeValue(e) {
        console.log('🔥🔥🔥 新的值', e.detail);
    }, 
});