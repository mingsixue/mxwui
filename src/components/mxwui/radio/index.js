import {COLOR, hexToRGBA} from '../utils/common';

const Empty = 'radio_empty';
const Checked = 'radio_checked';

Component({
    properties: {
        // 文案
        text: {
            type: String,
            value: ''
        },
        // 文案颜色
        textColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 是否选中
        checked: {
            type: Boolean,
            value: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false,
            observer(newVal) {
                if (newVal) {
                    let radioColor = hexToRGBA(this.data.radioColor, 0.5);
                    let radioSelectColor = hexToRGBA(this.data.radioSelectColor, 0.5);

                    this.setData({
                        radioColor,
                        radioSelectColor
                    });
                }
            }
        },
        // 单选框位置，after / before
        radioPosition: {
            type: String,
            value: 'before'
        },
        // 单选框未选中颜色
        radioColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 单选框选中颜色
        radioSelectColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 单选框大小
        radioSize: {
            type: Number,
            value: 48
        },
        Empty: {
            type: String,
            value: Empty
        },
        Checked: {
            type: String,
            value: Checked
        },
    },
    methods: {
        handleRadio() {
            if (this.data.disabled) {
                return;
            }

            let checked = !this.data.checked;
            this.setData({
                checked: checked
            });
            this.triggerEvent("radio_change", {checked: checked});
        },
    }
});
