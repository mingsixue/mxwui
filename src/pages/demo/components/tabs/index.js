import XCX from '@utils/index';
Page({
    data: {
        options: [
            {text: '未付款', value: 1},
            {text: '待发货', value: 2},
            {text: '待收货', value: 3},
            {text: '已完成', value: 4},
        ],
        options2: [
            {text: '待处理', value: 1},
            {text: '未付款', value: 2},
            {text: '待发货', value: 3},
            {text: '待收货', value: 4},
            {text: '已完成', value: 5},
            {text: '已关闭', value: 6},
        ],
        options3: [
            {text: '未付款', value: 1},
            {text: '待发货', value: 2},
            {text: '待收货', value: 3, dot: true},
        ],
        options4: [
            {text: '未付款', value: 1, num: 12},
            {text: '待发货', value: 2},
            {text: '待收货', value: 3, num: 123},
        ],
        options5: [
            {text: '热门', value: 1, iconName: 'hot', iconColor: '#CA0E2D'},
            {text: '新品', value: 2},
            {text: '销量', value: 3},
            {text: '综合', value: 4},
        ],
        options6: [
            {text: '热门', value: 1},
            {text: '新品', value: 2, iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png'},
            {text: '销量', value: 3},
            {text: '综合', value: 4},
        ],
        options7: [
            {text: '热门', value: 1, sort: 'default'},
            {text: '新品', value: 2, sort: 'asc'},
            {text: '销量', value: 3, sort: 'desc'},
            {text: '综合', value: 4},
        ],
        navHeight: XCX.getNavHeight()
    },
    handleClick(e) {
        console.log('🔥🔥🔥 tabs', e.detail);
    },
});
