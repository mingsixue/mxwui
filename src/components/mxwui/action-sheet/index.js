import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false
        },
        // 数据项
        options: {
            type: Array,
            value: []
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
        // 是否显示取消按钮
        showCancel: {
            type: Boolean,
            value: true
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
        TEXT_COLOR: {
            type: String,
            value: COLOR.TEXT_COLOR
        }
    },
    methods: {
        handleMaskClose() {
            this.setData({
                visible: false
            });
            this.triggerEvent("action_sheet_close", {type: 'close'});
        },
        handleCancel() {
            this.setData({
                visible: false
            });
            this.triggerEvent("action_sheet_close", {type: 'cancel'});
        },
        handleItem(e) {
            const {item = {}, idx} = e.currentTarget.dataset;
            this.triggerEvent("action_sheet_tap", {item: item, index: idx});
        }
    }
});
