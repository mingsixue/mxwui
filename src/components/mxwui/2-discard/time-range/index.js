import {COLOR, hexToRGBA} from '../utils/common';

Component({
    properties: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            value: false
        },
        // 主题色
        themeColor: {
            type: String,
            value: COLOR.THEME_COLOR,
            observer(newVal) {
                let bgColor = hexToRGBA(newVal, 0.15);
                this.setData({
                    bgColor
                });
            }
        },
        // 初始值
        // 分钟步长
        // 是否显示年
        // 是否显示小时
        // 是否显示分

        // 年-文案
        yearSuffix: {
            type: String,
            value: '年'
        },
        // 月-文案
        monthSuffix: {
            type: String,
            value: '月'
        },
        // 日-文案
        daySuffix: {
            type: String,
            value: '日'
        },
        // 小时-文案
        hourSuffix: {
            type: String,
            value: '时'
        },
        // 分钟-文案
        minuteSuffix: {
            type: String,
            value: '分'
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
    attached() {
    },
    ready() {        
        if (!this.data.bgColor) {
            let bgColor = hexToRGBA(COLOR.THEME_COLOR, 0.15);
            this.setData({
                bgColor
            });
        }

        this.setData({
            year: [
                {label: '2020'},
                {label: '2021'},
                {label: '2022', select: true},
                {label: '2023'},
                {label: '2024'},
                {label: '2025'},
                {label: '2026'},
                {label: '2027'},
                {label: '2028'},
                {label: '2029'},
                {label: '2030'},
                {label: '2031'},
            ],
            month: [
                {label: '1'},
                {label: '2'},
                {label: '3', select: true},
                {label: '4'},
                {label: '5'},
                {label: '6'},
                {label: '7'},
                {label: '8'},
                {label: '9'},
                {label: '10'},
                {label: '11'},
                {label: '12'},
            ],
            day: [
                {label: '1'},
                {label: '2'},
                {label: '3', select: true},
                {label: '4'},
                {label: '5'},
                {label: '6'},
                {label: '7'},
                {label: '8'},
                {label: '9'},
                {label: '10'},
                {label: '11'},
                {label: '12'},
            ],
            hour: [
                {label: '1'},
                {label: '2'},
                {label: '3', select: true},
                {label: '4'},
                {label: '5'},
                {label: '6'},
                {label: '7'},
                {label: '8'},
                {label: '9'},
                {label: '10'},
                {label: '11'},
                {label: '12'},
            ],
            minute: [
                {label: '1'},
                {label: '2'},
                {label: '3', select: true},
                {label: '4'},
                {label: '5'},
                {label: '6'},
                {label: '7'},
                {label: '8'},
                {label: '9'},
                {label: '10'},
                {label: '11'},
                {label: '12'},
            ]
        });
    },
    methods: {
        // https://react-component.github.io/m-date-picker/examples/popup.html

        handleMask() {
            if (this.data.isCloseMask) {
                this.setData({
                    visible: false
                });
                this.triggerEvent("dialog_close", {type: 'close'});
            }
        },
        handleCancel() {
            console.log('取消');
        },
        handleConfirm() {
            console.log('确定');
        },
        // handlePrevYear() {
        //     console.log('上一年');
        // },
        // handlePrevMonth() {
        //     console.log('上一月');
        // },
        // handleNextMonth() {
        //     console.log('下一月');
        // },
        // handleNextYear() {
        //     console.log('下一年');
        // },
        // handleMonthAndYear() {
        //     console.log('切换年和月');
        // },
        // handleDay(e) {
        //     console.log('day', e)
        // }
    }
});
