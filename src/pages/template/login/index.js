import request from "@utils/request";
import Upload from "@utils/upload";
import store from "@utils/store";
import XCX from "@utils/index";
const app = getApp();
Page({
    data: {
        isLoading: false,
        hasRegister: false,
        openid: '',
        avatar: '',
        phone: '',
        nickname: ''
    },

    onLoad(e) {
        this.sourceUserId = e.userId || '';
        this.init();
    },

    init() {
        const navHeight = XCX.getNavHeight();
        this.setData({
            navHeight,
        });

        this.login();
    },

    login() {
        // wx.login({
        //     success: (res) => {
        //         request({
        //             url: "/api/v1/wx-user/wx-login",
        //             method: "POST",
        //             data: {
        //                 js_code: res.code,
        //             },
        //             success: (r) => {
        //                 this.setData({
        //                     hasRegister: r.hasRegister,
        //                     openid: r.openid,
        //                     isLoading: true
        //                 });

        //                 if (r.hasRegister) {
        //                     store.setItem("_userInfo", r);
        //                     app.globalData.user = r;
        //                     app.globalData.isLogin = true;
        //                 } else {
        //                     store.setItem('_userInfo', {token: r.token});
        //                 }
                        
        //             },
        //         });
        //     },
        // });
    },

    handleAvatarUpload() {
        const {hasRegister} = this.data;
        if(hasRegister) {
            return;
        }
        Upload('user/avatar', (url) => {
            this.setData({
                avatar: url
            });

            this.handleSave();
        });
    },

    inputNickName(e) {
        let { value } = e.detail;
        this.setData({
            nickname: value,
        });
    },

    inputPhone(e) {
        let { value } = e.detail;
        this.setData({
            phone: value,
        });
    },

    chooseavatar(e) {
        const {avatarUrl} = e.detail;
        this.setData({
            avatar: avatarUrl
        });
    },

    // getphonenumber(e) {
    //     console.log('=-= e', e);
    // },

    handleSave() {
        const {openid, avatar, phone, nickname} = this.data;

        if (!avatar) {
            wx.showToast({
                title: '请先设置头像',
                icon: 'none'
            });
            return;
        }

        if (!nickname) {
            wx.showToast({
                title: '请填写昵称',
                icon: 'none'
            });
            return;
        }

        if (!phone) {
            wx.showToast({
                title: '请填写手机号码',
                icon: 'none'
            });
            return;
        }

        if (!/^(1[3456789][0-9])\d{8}$/.test(phone)) {
            wx.showToast({
                title: '手机号不正确',
                icon: 'none',
            });
            return;
        }

        let data = {
            phone: phone,
            nickname: nickname,
            openid: openid,
            avatar: avatar,
        };

        if (this.sourceUserId) {
            data.sourceUserId = this.sourceUserId;
        }

        // request({
        //     url: "/api/v1/wx-user/register",
        //     method: "POST",
        //     data: data,
        //     success: (r) => {
        //         store.setItem("_userInfo", r);
        //         app.globalData.user = r;
        //         app.globalData.isLogin = true;

        //         setTimeout(() => {
        //             wx.navigateBack();
        //         }, 100);
        //     },
        // });
    },

    handleLogin() {
        // wx.login({
        //     success: (res) => {
        //         request({
        //             url: "/api/v1/wx-user/wx-login",
        //             method: "POST",
        //             data: {
        //                 js_code: res.code,
        //             },
        //             success: (r) => {
        //                 if (r.hasRegister) {
        //                     store.setItem("_userInfo", r);
        //                     app.globalData.user = r;
        //                     app.globalData.isLogin = true;

        //                     setTimeout(() => {
        //                         wx.redirectTo({
        //                             url: "/pages/community/home/index",
        //                         });
        //                     }, 100);
        //                 }
        //             },
        //         });
        //     },
        // });
    },

    handelCancel() {
        wx.navigateBack();
    }
});
