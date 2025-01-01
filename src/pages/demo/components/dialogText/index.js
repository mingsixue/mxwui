import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleTitle: false,
        visibleContent: false,
        visibleContent2: false,
        visibleMain: false,
        visibleMinor: false,
        visibleShowMinor: false,
        visibleMaskClose: false,
        visibleHandle: false,
    },
    handleVisible() {
        this.setData({
            visible: true
        });
    }, 
    handleTitle() {
        this.setData({
            visibleTitle: true,
            titleColor: '#040A23'
        });
    },
    handleTitleColor() {
        this.setData({
            visibleTitle: true,
            titleColor: '#1677FF'
        });
    },
    handleContent() {
        this.setData({
            visibleContent: true,
            contentColor: '#040A23'
        });
    }, 
    handleContentColor() {
        this.setData({
            visibleContent: true,
            contentColor: '#1677FF'
        });
    }, 
    handleContent2() {
        this.setData({
            visibleContent2: true
        });
    }, 
    handleMain() {
        this.setData({
            visibleMain: true
        });
    },
    handleMinor() {
        this.setData({
            visibleMinor: true
        });
    },

    handleShowMinor() {
        this.setData({
            visibleShowMinor: true
        });
    }, 
    handleClose() {
        this.setData({
            visibleClose: true
        });
    }, 
    handleMaskClose() {
        this.setData({
            visibleMaskClose: true
        });
    },
    handleHandle() {
        this.setData({
            visibleHandle: true
        });
    },

    handleClickMain() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleContent2: false,
            visibleMain: false,
            visibleMinor: false,
            visibleShowMinor: false,
            visibleMaskClose: false,
            visibleHandle: false,
        });

        console.log('=-= 🔥🔥🔥，主按钮点击');
    },
    handleClickMinor() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleContent2: false,
            visibleMain: false,
            visibleMinor: false,
            visibleShowMinor: false,
            visibleMaskClose: false,
            visibleHandle: false,
        });

        console.log('=-= 🔥🔥🔥，辅助按钮点击');
    },
    handleClickClose() {
        this.setData({
            visible: false,
            visibleTitle: false,
            visibleContent: false,
            visibleContent2: false,
            visibleMain: false,
            visibleMinor: false,
            visibleShowMinor: false,
            visibleMaskClose: false,
            visibleHandle: false,
        });

        console.log('=-= 🔥🔥🔥，关闭');
    }
});
