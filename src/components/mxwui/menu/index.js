import {COLOR} from '../utils/common';

Component({
    properties: {
        // 数据项
        options: {
            type: Array,
            value: []
        },
        // 当前选中项
        current: {
            type: Number,
            value: 0
        },
        // 文本/图标 颜色
        color: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 选中项文本/图标 颜色
        selectColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 文本字号
        textSize: {
            type: Number,
            value: 28
        },
        // 层级
        zIndex: {
            type: Number,
            value: 518
        },
        // 是否固定底部
        isFixed: {
            type: Number,
            value: true
        }
    },
    ready() {
        const pages = getCurrentPages();
        const lastPage = pages[pages.length - 1];
        this.setData({
            lastPage: lastPage,
        });
    },
    methods: {
        handleClick(e) {
            const {item = {}, idx} = e.currentTarget.dataset;
            const {lastPage = {}} = this.data;
            
            this.setData({
                current: idx
            });

            if (item.isLogin) {
                this.triggerEvent("menu_tap", {item});
                return;
            }

            if (item.url) {
                if (`/${lastPage.route}` == item.url) {
                    return;
                }

                wx.redirectTo({
                    url: item.url
                });
            }
        },
    }
});
