import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    handleTap() {
        console.log('🔥🔥🔥 接收到了点击事件');
    }, 
});
