import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    iconTap() {
        console.log('🔥🔥🔥 第一个图标点击');
    },
    secondIconTap() {
        console.log('🔥🔥🔥 第二个图标点击');
    }
});
