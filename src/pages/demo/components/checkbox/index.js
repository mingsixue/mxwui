import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    handleChange(e) {
        console.log('🔥🔥🔥', e.detail);
    }, 
});
