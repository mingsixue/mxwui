import {COLOR, hexToRGBA} from '../utils/common';

Component({
    properties: {
        // 内容
        content: {
            type: Array,
            value: []
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
            value: 32
        },
        // 点击文本是否可以选中或取消
        changeChecked: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        handleChange(e) {
            this.triggerEvent("protocol_change", e.detail);
        },
        handleTap(e) {
            let {item = {}} = e.currentTarget.dataset;

            let {checked, changeChecked, disabled} = this.data;
            if (changeChecked && !disabled) {
                let newChecked = !checked;
                this.setData({
                    checked: newChecked
                });
                if (newChecked) {
                    this.triggerEvent("protocol_change", {checked: newChecked});
                }
            }
            
            this.triggerEvent("protocol_click", {item: item});
        }
    }
});
