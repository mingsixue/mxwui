import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    changeSwitch(e) {
        console.log('🔥🔥🔥 switch', e.detail);
    }, 
});
