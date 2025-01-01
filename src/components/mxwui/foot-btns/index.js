import {COLOR} from '../utils/common';

Component({
    properties: {
        // 样式类型： single 单按钮 / double 双按钮 / combination 图标按钮组合 / custom 左侧自定义
        styleType: {
            type: String,
            value: 'single',
        },
        // 主按钮文案
        mainBtnText: {
            type: String,
            value: ''
        },
        // 主按钮类型： primary / default / ghost
        mainBtnType: {
            type: String,
            value: 'primary'
        },
        // 主按钮颜色
        mainBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 主按钮是否禁用
        mainBtnDisabled: {
            type: Boolean,
            value: false,
        },
        // 辅助按钮文案
        minorBtnText: {
            type: String,
            value: ''
        },
        // 辅助按钮类型： primary / default / ghost
        minorBtnType: {
            type: String,
            value: 'ghost'
        },
        // 辅助按钮颜色
        minorBtnColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 辅助按钮是否禁用
        minorBtnDisabled: {
            type: Boolean,
            value: false,
        },
        // 左侧图标组，最多3个
        leftIcons: {
            type: Array,
            value: [],
            observer(arr) {
                if (arr.length > 3) {
                    arr.splice(0, 3);  
                }
                this.setData({
                    leftIcons: arr,
                });
                this.dealWidths();
            }
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        TEXT_COLOR: {
            type: String,
            value: COLOR.TEXT_COLOR
        }
    },
    attached() {
    },
    ready() {
        if (this.data.styleType == 'combination') {
            this.dealWidths();
        }
    },
    methods: {
        dealWidths() {
            let len = this.data.leftIcons.length;
            let mainWidth = 0;
            let minorWidth = 0;
            if (len == 3) {
                if (this.data.minorBtnText) {
                    mainWidth = '168rpx';
                    minorWidth = '168rpx';
                } else {
                    mainWidth = '352rpx';
                }
            } else if (len == 2) {
                if (this.data.minorBtnText) {
                    mainWidth = '224rpx';
                    minorWidth = '224rpx';
                } else {
                    mainWidth = '464rpx';
                }
            } else if (len == 1) {
                if (this.data.minorBtnText) {
                    mainWidth = '268rpx';
                    minorWidth = '268rpx';
                } else {
                    mainWidth = '568rpx';
                }
            } else {
                if (this.data.minorBtnText) {
                    mainWidth = '432rpx';
                    minorWidth = '254rpx';
                } else {
                    mainWidth = '606rpx';
                }
            }

            this.setData({
                mainWidth,
                minorWidth
            });
        },
        handleMain() {
            this.triggerEvent("foot_btns_main");
        },
        handleMinor() {
            this.triggerEvent("foot_btns_minor");
        },
        handleIcon(e) {
            let {item = {}, idx} = e.currentTarget.dataset;
            this.triggerEvent("foot_btns_icon", {item: item, index: idx});
        }
    }
});
