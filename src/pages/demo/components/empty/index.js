import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    handleMainBtn() {
        console.log('🔥🔥🔥 主按钮点击');
    },
    handleMinorBtn() {
        console.log('🔥🔥🔥 次按钮点击');
    },
});
