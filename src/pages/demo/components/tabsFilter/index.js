import XCX from '@utils/index';
Page({
    data: {
        options: [
            {text: '选项A', value: 1},
            {text: '选项B', value: 2},
            {text: '选项C', value: 3},
        ],
        options2: [
            {text: '选项A', value: 1},
            {text: '选项B', value: 2},
            {text: '选项C', value: 3},
            {text: '选项D', value: 4},
            {text: '选项E', value: 5},
            {text: '选项F', value: 6},
        ],
        options3: [
            {text: '热门', value: 1, iconName: 'hot', iconColor: '#1677FF', iconSelectColor: '#0f0'},
            {text: '新品', value: 2, iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png', iconSelectUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/set.png'},
            {text: '销量', value: 3},
            {text: '综合', value: 4},
        ],
        navHeight: XCX.getNavHeight()
    },
    handleClick(e) {
        console.log('🔥🔥🔥 tabsFilter', e.detail);
    },
});
