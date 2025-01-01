import {COLOR} from '../utils/common';

Component({
    properties: {
        // 样式类型，normal、horizontal、vertical、web
        styleType: {
            type: String,
            value: 'normal'
        },
        // 数据项
        options: {
            type: Array,
            value: []
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
        // 是否显示分隔线
        showLine: {
            type: Boolean,
            value: false
        },
        // 标签文案
        label: {
            type: String,
            value: ''
        },
        // 标签文案颜色
        labelColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 标签对齐方式， left / center / right
        labelAlign: {
            type: String,
            value: 'left'
        },
        // 左侧自定义宽度，不带单位
        leftWidth: {
            type: Number,
            value: ''
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
        // 是否横向布局，styleType=web时有效
        horizontal: {
            type: Boolean,
            value: false
        },
        WHITE_COLOR: {
            type: String,
            value: COLOR.WHITE_COLOR
        }
    },
    methods: {
        handleRadio(e) {
            const {idx} = e.currentTarget.dataset;
            let {options = []} = this.data;

            if (options[idx].disabled) {
                return;
            }

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

            this.setData({
                options: [...options]
            });

            this.triggerEvent("checkbox_group_change", {index: idxs, value: vals, item: items, options});
        },
        handleFirstClick() {
            this.triggerEvent("checkbox_group_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("checkbox_group_lastIcon");
        }
    }
});
