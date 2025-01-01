import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        message: [
            {
                text: '第一行文本第一行文本 第三行文本第三行文本第三行文本第三行文本第三行文本第三行文本',
            },
            {
                text: '第二行文本第二行文本第二行文本',
            },
            {
                text: '第三行文本第三行文本第三行文本第三行文本第三行文本第三行文本',
            }
        ]
    },
    handleClose() {
        console.log('🔥🔥🔥 close');
    }, 
    handleBtn() {
        console.log('🔥🔥🔥 btn');
    }, 
    handleTap() {
        console.log('🔥🔥🔥 内容');
    }, 
});
