import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        options: [
            {
                text: '首页',
                iconName: 'home2',
                url: '/pages/index/index'
            },
            {
                text: '组件',
                iconName: 'level',
                url: '/pages/demo/components/index/index'
            },
            {
                text: '个人中心',
                iconName: 'user_my',
                url: '/pages/demo/components/menu/index'
            }
        ],
        options2: [
            {
                text: '首页',
                iconName: 'home2',
                url: ''
            },
            {
                text: '组件',
                iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
                iconSelectUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/set.png',
                url: ''
            },
        ],
        options3: [
            {
                text: '首页',
                iconName: 'home2',
                url: ''
            },
            {
                text: '组件',
                iconName: 'level',
                url: ''
            },
            {
                text: '订单',
                iconName: 'order',
                url: ''
            },
            {
                text: '个人中心',
                iconName: 'user_my',
                url: ''
            }
        ],
        options4: [
            {
                text: '首页',
                iconName: 'home2',
                url: ''
            },
            {
                text: '组件',
                iconName: 'level',
                url: ''
            },
            {
                text: '个人中心',
                iconName: 'user_my',
                url: '',
                dot: true
            }
        ],
        options5: [
            {
                text: '首页',
                iconName: 'home2',
                url: ''
            },
            {
                text: '组件',
                iconName: 'level',
                url: ''
            },
            {
                text: '个人中心',
                iconName: 'user_my',
                url: '',
                isLogin: true
            }
        ],
        options6: [
            {
                text: '首页',
                url: '',
            },
            {
                text: '组件',
                url: '',
            },
            {
                text: '个人中心',
                url: '',
                isLogin: true
            }
        ],
    },
    handleTap(e) {
        console.log('🔥🔥🔥 menu', e.detail);
    }, 
});
