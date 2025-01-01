import {COLOR} from '../utils/common';

Component({
    properties: {
        // 是否选中
        checked: {
            type: Boolean,
            value: false,
            observer(newVal) {
                const {color} = this.data;
                let newColor = '';
                if (newVal) {
                    newColor = COLOR.SWITCH_COLOR;
                } else {
                    newColor = COLOR.BG_COLOR;
                }

                if (color && color != COLOR.BG_COLOR) {
                    newColor = color;
                }

                this.setData({
                    color: newColor
                });
            }
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false,
        },
        // 颜色
        color: {
            type: String,
            value: COLOR.BG_COLOR
        },
    },
    methods: {
        changeSwitch(e) {
            const {value} = e.detail;
            this.setData({
                checked: value
            });
            this.triggerEvent("switch_change", {value: value});
        },
    }
});
