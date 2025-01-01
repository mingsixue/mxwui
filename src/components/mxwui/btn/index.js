import {hexToRGBA} from '../utils/common';
Component({
  behaviors: [],
    properties: {
        // 按钮类型 可选值 primary / default / ghost
        type: {
            type: String,
            value: "primary",
        },
        // 是否小按钮
        small: {
            type: Boolean,
            value: false,
        },
        // 是否圆角
        round: {
            type: Boolean,
            value: false,
        },
        // 是否不可点击
        unclickable: {
            type: Boolean,
            value: false,
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false,
        },
        // 自定义宽度，带单位
        width: {
            type: String,
            value: "",
        },
        // 按钮主题色，仅支持十六进制色值，除禁用按钮外各状态相应调整
        themeColor: {
            type: String,
            value: "",
            observer(newVal) {
                const { type, unclickable, disabled } = this.data;
                let customStyle = "";
                if (type === "primary") {
                    customStyle = `background: ${newVal}`;
                    if (unclickable) {
                        customStyle = `background: ${hexToRGBA(newVal, 0.5)};`;
                    }
                } else if (type === "default") {
                    customStyle = `border-color: ${newVal};color: ${newVal};background: ${hexToRGBA(newVal, 0.2)};`;
                    if (unclickable) {
                        customStyle = `color: ${hexToRGBA(newVal, 0.4)}; border-color: ${hexToRGBA(newVal, 0.4)};background: ${hexToRGBA(newVal, 0.1)};`;
                    }
                } else if (type === "ghost") {
                    customStyle = `border-color: ${newVal};color: ${newVal};`;
                    if (unclickable) {
                        customStyle = `background: ${hexToRGBA(newVal, 0.05)}; color: ${hexToRGBA(newVal, 0.4)}; border-color: ${hexToRGBA(newVal, 0.4)};`;
                    }
                }
                if (disabled) {
                    customStyle = "";
                }
                this.setData({
                    customStyle,
                });
            },
        },
        // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
        lang: {
            type: String,
            value: "zh_CN",
        },
        // 打APP时，向APP传递的参数，open-type=launchApp时有效
        appParameter: {
            type: String,
            value: "",
        },
        // 微信开放能力 可选值launchApp|share|getPhoneNumber|getRealtimePhoneNumber|getUserInfo|feedback|contact|openSetting|chooseAvatar|agreePrivacyAuthorization
        openType: {
            type: String,
            value: "",
        },
        // 会话来源，open-type="contact"时有效
        sessionFrom: {
            type: String,
            value: ''
        },
        // 会话内消息卡片标题，open-type="contact"时有效
        sendMessageTitle: {
            type: String,
            value: ''
        },
        // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
        sendMessagePath: {
            type: String,
            value: ''
        },
        // 会话内消息卡片图片，open-type="contact"时有效
        sendMessageImg: {
            type: String,
            value: ''
        },
        // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
        showMessageCard: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        handleTap(e) {
            this.triggerEvent("btn_tap", e.detail);
        },
        getUserInfo(e) {
            this.triggerEvent("get_user_info", e.detail);
        },
        chooseAvatar(e) {
            this.triggerEvent("choose_avatar", e.detail);
        },
        error(e) {
            this.triggerEvent("error", e.detail);
        },
        launchApp(e) {
            this.triggerEvent("launch_app", e.detail);
        },
        getPhoneNumber(e) {
            this.triggerEvent("get_phone_number", e.detail);
        },
        getRealtimePhoneNumber(e) {
            this.triggerEvent("get_real_time_phone_number", e.detail);
        },
        handleContact(e) {
            this.triggerEvent("contact", e.detail);
        },
        openSetting(e) {
            this.triggerEvent("open_setting", e.detail);
        },
        agreePrivacyAuthorization(e) {
            this.triggerEvent("agree_privacy_authorization", e.detail);
        },
    },
});
