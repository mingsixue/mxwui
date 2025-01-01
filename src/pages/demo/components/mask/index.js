import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleOpacity: false,
        visibleMask: false,
    },
    handleClick() {
    	this.setData({
    		visible: false,
    		visibleOpacity: false,
    		visibleMask: false,
    	});

        console.log('🔥🔥🔥 关闭');
    },

    handleVisible() {
    	this.setData({
    		visible: true,
    	});
    },
    handleVisibleOpacity() {
    	this.setData({
    		visibleOpacity: true,
    	});
    },
    handleVisibleMask() {
    	this.setData({
    		visibleMask: true,
    	});
    },
});
