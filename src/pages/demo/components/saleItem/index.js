import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        tags: [
            {
                text: '包邮', 
            },
            {
                text: '0元购'
            }
        ],
        tags2: [
            {
                text: '包邮', 
            },
            {
                text: '包退', 
                textColor: "#C49C71",
                borderColor: "#C49C71"
            },
            {
                text: '0元购',
                textColor: "#656979",
                borderColor: "#9AA0B1"
            }
        ],
    },
    handleTap(e) {
        console.log('🔥🔥🔥 item点击', e.detail);
    }, 
    handelBtn(e) {
        console.log('🔥🔥🔥 按钮点击', e.detail);
    }
});
