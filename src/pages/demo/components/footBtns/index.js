import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visibleSingle: false,
        visibleDouble: false,
        visibleCustom: false,
        visibleCombination1: false,
        visibleCombination2: false,
        visibleCombination3: false,
        visibleCombination4: false,
        visibleCombination5: false,
        visibleCombination6: false,
        visibleCombination7: false,
        leftIcons1: [
            {
                iconName: 'love',
                iconColor: '#040A23',
                iconSize: 48,
                text: '图标'
            },
        ],
        leftIcons2: [
            {
                iconName: 'love',
                iconColor: '#040A23',
                iconSize: 48,
                text: '图标'
            },
            {
                iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
                iconSize: 48,
                text: '自定图片'
            },
        ],
        leftIcons3: [
            {
                iconName: 'love',
                iconColor: '#040A23',
                iconSize: 48,
                text: '图标'
            },
            {
                iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
                iconSize: 48,
                text: '图片'
            },
            {
                iconName: 'love_fill',
                iconColor: '#1677FF',
                iconSize: 32,
                text: '图标',
                textColor: '#1677FF'
            },
        ]
    },
    handleMain() {
        console.log('🔥🔥🔥 主按钮点击');
    }, 
    handleMinor() {
        console.log('🔥🔥🔥 辅助/次按钮点击');
    }, 
    handleIcon(e) {
        console.log('🔥🔥🔥 图标点击', e.detail);
    }, 
    handleClose() {
        this.setData({
            visibleSingle: false,
            visibleDouble: false,
            visibleCustom: false,
            visibleCombination: false,
            visibleCombination1: false,
            visibleCombination2: false,
            visibleCombination3: false,
            visibleCombination4: false,
            visibleCombination5: false,
            visibleCombination6: false,
            visibleCombination7: false,
        });
    },
    handleVisibleSingle() {
        this.setData({
            visibleSingle: true
        });
    },
    handleVisibleDouble() {
        this.setData({
            visibleDouble: true
        });
    },
    handleVisibleCustom() {
        this.setData({
            visibleCustom: true
        });
    },
    handleVisibleCombination1() {
        this.setData({
            visibleCombination1: true
        });
    },
    handleVisibleCombination2() {
        this.setData({
            visibleCombination2: true
        });
    },
    handleVisibleCombination3() {
        this.setData({
            visibleCombination3: true
        });
    },
    handleVisibleCombination4() {
        this.setData({
            visibleCombination4: true
        });
    },
    handleVisibleCombination5() {
        this.setData({
            visibleCombination5: true
        });
    },
    handleVisibleCombination6() {
        this.setData({
            visibleCombination6: true
        });
    },
    handleVisibleCombination7() {
        this.setData({
            visibleCombination7: true
        });
    }
});
