import {COLOR, hexToRGBA} from '../utils/common';

Component({
    properties: {
        // 类型：default / single / multiple / disabled
        type: {
            type: String,
            value: 'default',
        },
        // 自定义文案
        text: {
            type: String,
            value: ''
        },
        // 默认文本色
        defaultColor: {
            type: String,
            value: COLOR.TEXT_COLOR,
        },
        // 选中颜色
        selectColor: {
            type: String,
            value: COLOR.THEME_COLOR,
            observer(newVal) {
                this.setData({
                    themeColor: hexToRGBA(newVal, 0.1)
                });
            },
        },
    },
    methods: {
        handleClick(e) {
            if (this.data.type == 'disabled') {
                return;
            }
            this.triggerEvent("label_tap", e.detail);
        },
    }
});
