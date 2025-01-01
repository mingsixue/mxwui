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
        // 当前选中项
        current: {
            type: Number,
            value: 0,
            observer(newVal) {
                let item = this.data.options[newVal];
                let list = (item && item.children) || [];
                this.setData({
                    children: list,
                    currentItem: item,
                });
            }
        },
        // 当前选中子项
        subCurrent: {
            type: Number,
            value: -1,
        },
        // 文本色
        textColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 选中项文本色
        selectColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 确定按钮文案
        confirmText: {
            type: String,
            value: '确定'
        },
        // 确定按钮文本色
        confirmColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 取消按钮文案
        cancelText: {
            type: String,
            value: '取消'
        },
        // 取消按钮文本色
        cancelColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 是否显示返回按钮
        showBack: {
            type: Boolean,
            value: true,
        },
        // 返回按钮配置
        backIcon: {
            type: Object,
            value: {}
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            value: true,
        },
        // 关闭按钮配置
        closeIcon: {
            type: Object,
            value: {}
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
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        // 点击蒙层是否可以关闭弹窗
        isCloseMask: {
            type: Boolean,
            value: true
        },
        // 自定义高度
        height: {
            type: String,
            value: '75vh'
        },
        // 左侧自定义宽度
        leftWidth: {
            type: Number,
            value: 240
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
    },
    attached() {
        let item = this.data.options[this.data.current];
        let list = (item && item.children) || [];
        this.setData({
            children: list,
            currentItem: item,
        });
    },
    methods: {
        handleItem(e) {
            let {item = {}, idx} = e.currentTarget.dataset;
            let {current} = this.data;

            if (current == idx) {
                current = -1;
            } else {
                current = idx;
            }

            this.setData({
                current: current,
                currentItem: item,
                children: item.children,
                subCurrent: -1
            });
        },
        handleSubItem(e) {
            let {item = {}, idx} = e.currentTarget.dataset;
            let {subCurrent} = this.data;

            if (subCurrent == idx) {
                subCurrent = -1;
            } else {
                subCurrent = idx;
            }

            this.setData({
                subCurrentItem: item,
                subCurrent: subCurrent,
            });
        },
        dealValue(name, type) {
            this.setData({
                visible: false
            });

            let {current, subCurrent, currentItem = {}, subCurrentItem = {}} = this.data;

            let data = {
                current,
                subCurrent,
            };

            if (currentItem.value) {
                data.value = currentItem.value;
                data.item = currentItem;
            }

            if (subCurrentItem.value) {
                data.subValue = subCurrentItem.value;
                data.subItem = subCurrentItem;
            }

            this.triggerEvent(name, {type: type, ...data });
        },
        handleMaskClose() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_column_close", {type: 'maskClose'});
        },
        handleBack() {
            this.dealValue("dialog_column_back", 'back');
        },
        handleClose() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_column_close", {type: 'close'});
        },
        handleCancel() {
            this.setData({
                visible: false
            });
            this.triggerEvent("dialog_column_close", {type: 'cancel'});
        },
        handleConfirm() {
            this.dealValue("dialog_column_back", 'confirm');
        }
    }
});
