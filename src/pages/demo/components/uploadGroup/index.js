import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        imageOptions: [],
        videoOptions: [],
        fileOptions: []
    },
    handleTap() {
        console.log('🔥🔥🔥 接收到了点击事件');
    }, 
});
