import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        options: [
            {
                img: 'https://placehold.jp/68/999999/ff4400/750x320.png?text=MXWUI',
                url: '/pages/index/index',
                title: 'Banner-1'
            },
            {
                img: 'https://placehold.jp/68/dfc0fe/ff4400/750x320.png?text=%E7%BA%B3%E5%85%B0%E5%BF%B1',
                title: 'Banner-2'
            },
            {
                img: 'https://placehold.jp/68/fee4c0/ff4400/750x320.png?text=MX%20WUI',
                title: 'Banner-3'
            }
        ]
    },
    handleChange(e) {
        console.log('🔥🔥🔥 change', e.detail);
    }, 
    bindTransition(e) {
        // console.log('🔥🔥🔥 swiper-item 的位置发生改变时触发', e.detail);
    }, 
    bindAnimationFinish(e) {
        console.log('🔥🔥🔥 动画结束时触发', e.detail);
    }, 
});
