import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 标题文本色
        titleColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 描述
        desc: {
            type: String,
            value: ''
        },
        // 描述文本色
        descColor: {
            type: String,
            value: COLOR.MINOR_TEXT_COLOR
        },
        // 自定义头部图片
        imgUrl: {
            type: 'String',
            value: ''
        },
        // 是否显示微信好友
        showWechat: {
            type: Boolean,
            value: true,
        },
        // 是否显示微信朋友圈
        showFriends: {
            type: Boolean,
            value: false,
        },
        // 是否显示二维码
        showQrcode: {
            type: Boolean,
            value: false,
        },
        // 是否显示复制链接
        showCopyLink: {
            type: Boolean,
            value: true,
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        // 蒙层是否可以关闭弹窗
        isCloseMask: {
            type: Boolean,
            value: true
        },
    },
    methods: {
        handleMaskClose() {
            this.setData({
                visible: false
            });
            this.triggerEvent("share_close", {type: 'close'});
        },
        handleWechat() {
            this.setData({
                visible: false
            });
            this.triggerEvent("share_wechat");
        },
        handleFriends() {
            this.setData({
                visible: false
            });
            this.triggerEvent("share_friends");
        },
        handleQrcode() {
            this.setData({
                visible: false
            });
            this.triggerEvent("share_qrcode");
        },
        handleCopyLink() {
            this.setData({
                visible: false
            });
            this.triggerEvent("share_copylink");
        },
        handleCancel() {
            this.setData({
                visible: false
            });
            this.triggerEvent("share_close", {type: 'cancel'});
        },
    }
});
