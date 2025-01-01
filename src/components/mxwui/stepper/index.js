import {COLOR} from '../utils/common';

Component({
    properties: {
        // 值
        value: {
            type: Number,
            value: 0,
            observer(newVal) {
                const {min, max, step} = this.data;
                let addDisabled = false;
                let minusDisabled = false;

                if (newVal > max) {
                    newVal = max;
                }
                if (newVal < min) {
                    newVal = min;
                    
                }

                if (newVal + step > max) {
                    addDisabled = true;
                }
                if (newVal - step < min) {
                    minusDisabled = true;
                }
                
                this.setData({
                    value: newVal,
                    addDisabled,
                    minusDisabled
                });

                this.triggerEvent("stepper_change", {value: newVal});
            },
        },
        // 最小值
        min: {
            type: Number,
            value: 0
        },
        // 最大值
        max: {
            type: Number,
            value: 9999
        },
        // 步长
        step: {
            type: Number,
            value: 1
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 是否禁用输入框
        disabledInput: {
            type: Boolean,
            value: false
        },
        // 光标颜色
        cursorColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
    },
    methods: {
        handleMinus() {
            let {value, min, step} = this.data;
            let newValue = Number(value);
            let newMin = Number(min);
            let minusDisabled = false;

            newValue = newValue - step;

            if (newValue - step < newMin) {
                minusDisabled = true;
            }

            if (newValue < newMin) {
                newValue = newMin;
            }

            this.setData({
                value: newValue,
                minusDisabled,
                addDisabled: false
            });
        },
        handleAdd() {
            let {value, max, step} = this.data;
            let newValue = Number(value);
            let newMax = Number(max);
            let addDisabled = false;

            newValue = newValue + step;

            if (newValue + step > newMax) {
                addDisabled = true;
            }

            if (newValue > newMax) {
                newValue = newMax;
            }

            this.setData({
                value: newValue,
                addDisabled,
                minusDisabled: false
            });
        },

        inputChange(e) {
            const {value} = e.detail;
            const {min, max} = this.data;

            let newValue = Number(value);

            if (newValue > max) {
                newValue = max;
            }
            if (newValue < min) {
                newValue = min;
            }

            this.setData({
                value: newValue
            });
        }
    }
});
