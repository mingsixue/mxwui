import {COLOR, hexToRGBA} from '../utils/common';

const Empty = 'checkbox_empty';
const Checked = 'checkbox_checked';

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
                    let checkboxColor = hexToRGBA(this.data.checkboxColor, 0.5);
                    let checkboxSelectColor = hexToRGBA(this.data.checkboxSelectColor, 0.5);

                    this.setData({
                        checkboxColor,
                        checkboxSelectColor
                    });
                }
            }
        },
        // 复选框位置，after / before
        checkboxPosition: {
            type: String,
            value: 'before'
        },
        // 复选框未选中颜色
        checkboxColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 复选框选中颜色
        checkboxSelectColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 复选框大小
        checkboxSize: {
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
        handleCheckbox() {
            if (this.data.disabled) {
                return;
            }

            let checked = !this.data.checked;
            this.setData({
                checked: checked
            });
            this.triggerEvent("checkbox_change", {checked: checked});
        },
    }
});
