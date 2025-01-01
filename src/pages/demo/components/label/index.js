import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    handleClick() {
        console.log('🔥🔥🔥 接收到了点击事件');
    }, 
});
