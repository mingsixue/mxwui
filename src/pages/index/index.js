// import request from "@utils/request";
// import Upload from "@utils/upload";
// import store from "@utils/store";
import XCX from '@utils/index';
const app = getApp();
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        list: []
    },

    onLoad(e) {
        console.log("=-= onLoad e", e);
        console.log("=-= app", app);
        this.init();
    },

    onShow() {},

    onHide() {},

    onUnload() {},

    // 监听下拉刷新，需要在json里开启 enablePullDownRefresh
    onPullDownRefresh() {

        // 停止下拉刷新动画
        wx.stopPullDownRefresh();
    },

    // 监听上拉触底，需要在json里设置触发距离 onReachBottomDistance
    onReachBottom() {
    },

    // 监听滑动页面
    onPageScroll(e) {
        console.log("=-= scrollTop", e.scrollTop);
    },

    onShareAppMessage(e) {
        // console.log("=-= onShareAppMessage e", e);
        return {
            title: "MXWUI基于微信小程序原生语法的UI组件库",
            path: "/pages/index/index",
            // imageUrl: ''
        };
    },

    // onShareTimeline() {
    //     return {
    //         title: "title",
    //         // query: "",
    //         // imageUrl: ''
    //     };
    // },

    init() {
        console.log(11111);
    },

    handleCopyUrl() {
        wx.setClipboardData({
            data: 'https://github.com/mingsixue/mxwui',
            success (res) {
                wx.showToast({
                    title: '复制成功'
                });
            }
        });
    }
});
