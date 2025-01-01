import {COLOR} from '../utils/common';

Component({
    properties: {
        // 类型：single 单选 / multiple 多选
        type: {
            type: String,
            value: 'single'
        },
        // 数据项
        options: {
            type: Array,
            value: []
        },
        // 单选框样式 default / radio
        singleIcon: {
            type: String,
            value: 'default'
        },
        // 复选框样式 default / checkbox
        multipleIcon: {
            type: String,
            value: 'default'
        },
        // 单选框 / 复选框 颜色
        iconColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 单选框 / 复选框 大小
        iconSize: {
            type: Number,
            value: 48
        },
        // 文本颜色
        textColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 文本选中颜色
        textSelectColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 描述或错误文案
        desc: {
            type: String,
            value: ''
        },
        // 描述或错误文案颜色
        descColor: {
            type: String,
            value: COLOR.MINOR_TEXT_COLOR
        },
        // 标签文案
        label: {
            type: String,
            value: ''
        },
        // 标签文案文本色
        labelColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 是否显示必填星号
        required: {
            type: Boolean,
            value: false
        },
        // 必填星号位置，left、right
        requiredPosition: {
            type: String,
            value: 'right'
        },
        // 标签前图标
        firstIcon: {
            type: Object,
            value: []
        },
        // 标签后图标
        lastIcon: {
            type: Object,
            value: []
        },
        // 背景色
        bgColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        }
    },
    methods: {
        handleTap(e) {
            const {idx} = e.currentTarget.dataset;
            let {options = []} = this.data;

            if (options[idx].disabled) {
                return;
            }

            if (this.data.type == 'single') {
                options.forEach((item, index) => {
                    if (index == idx) {
                        item.checked = !item.checked;
                    } else {
                        item.checked = false;
                    }
                });
                this.triggerEvent("list_select_change", {type: 'single', index: options[idx].checked ? idx : '', value: options[idx].checked ?options[idx].value : '', item: options[idx].checked ? options[idx] : {}, options});
            } else if (this.data.type == 'multiple') {
                options.forEach((item, index) => {
                    if (index == idx) {
                        item.checked = !item.checked;
                    }
                });

                let idxs = [];
                let vals = [];
                let items = [];
                options.forEach((item, index) => {
                    if (item.checked) {
                        idxs.push(index);
                        vals.push(item.value);
                        items.push(item);
                    }
                });
                this.triggerEvent("list_select_change", {type: 'multiple', index: idxs, value: vals, item: items, options});
            }

            this.setData({
                options: [...options]
            });
        },
        handleFirstClick() {
            this.triggerEvent("list_select_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("list_select_lastIcon");
        }
    }
});
