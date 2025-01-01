import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false,
        },
        // 开始时间 YYYY-MM-DD HH:mm
        startTime: {
            type: String,
            value: ''
        },
        // 结束时间 YYYY-MM-DD HH:mm
        endTime: {
            type: String,
            value: ''
        },
        // 开始时间文案
        startText: {
            type: String,
            value: '开始时间'
        },
        // 结束时间文案
        endText: {
            type: String,
            value: '结束时间'
        },
        // 标题
        title: {
            type: String,
            value: ''
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
    },
    methods: {
        handleMask() {
            if (this.data.isCloseMask) {
                this.setData({
                    visible: false,
                    startVisible: false,
                    endVisible: false
                });
                this.triggerEvent("datetime_range_close", {type: 'close'});
            }
        },
        handleCancel() {
            console.log('取消');
            this.setData({
                visible: false,
                startVisible: false,
                endVisible: false
            });
            this.triggerEvent("datetime_range_close", {type: 'cancel'});
        },
        handleConfirm() {
            let {startTime, endTime} = this.data;
            if (startTime && endTime) {
                let start = startTime.replace(/-/g, '/');
                let end = endTime.replace(/-/g, '/');
                start = new Date(start);
                end = new Date(end);

                if (start >= end) {
                    wx.showToast({
                        title: '开始时间需要小于结束时间',
                        icon: 'none'
                    });
                    return;
                }

                this.setData({
                    visible: false,
                    startVisible: false,
                    endVisible: false
                });
                this.triggerEvent("datetime_range_confirm", {start: startTime, end: endTime});
                return;
            } else if (!startTime && endTime) {
                wx.showToast({
                    title: '请先选择开始时间',
                    icon: 'none'
                });
                return;
            } else if (startTime && !endTime) {
                wx.showToast({
                    title: '请先选择结束时间',
                    icon: 'none'
                });
                return;
            } else {
                wx.showToast({
                    title: '请先选择开始时间和结束时间',
                    icon: 'none'
                });
            }
        },
        handleDatetimeStart(e) {
            console.log('确定', e.detail);
            this.setData({
                startTime: e.detail.value
            });
        },
        handleDatetimeEnd(e) {
            console.log('确定', e.detail);
            this.setData({
                endTime: e.detail.value
            });
        },
        handleStart() {
            this.setData({
                startVisible: true,
            });
        },
        handleEnd() {
            this.setData({
                endVisible: true,
            });
        }
    }
});
