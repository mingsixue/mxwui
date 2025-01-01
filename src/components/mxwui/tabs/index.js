Component({
    properties: {
        // Tabs配置项
        options: {
            type: Array,
            value: [], // text
        },
        // 默认选中项
        current: {
            type: Number,
            value: 0,
        },
        // 是否平均分
        average: {
            type: Boolean,
            value: false,
        },
        // 主题 light / durk
        theme: {
            type: String,
            value: "light",
        },
        // 自定义文本色
        textColor: {
            type: String,
            value: ""
        },
        // 自定义选中文本色
        textCurrentColor: {
            type: String,
            value: ""
        },
        // 文本字号
        textSize: {
            type: Number,
            value: 32
        },
        // 选中文本字号
        textCurrentSize: {
            type: Number,
            value: 32
        },
        // 自定义背景色
        bgColor: {
            type: String,
            value: ""
        },
        // 是否显示数字
        isShowNum: {
            type: Boolean,
            value: false,
        },
        // 下划线样式：short / full
        lineMode: {
            type: String,
            value: 'short'
        }
    },
    methods: {
        handleItem(e) {
            let {item = {}, idx} = e.currentTarget.dataset;
            let {options = [], current} = this.data;

            if (item.sort) {
                if (item.sort == 'default') {
                    item.sort = 'desc'
                } else if (item.sort == 'desc') {
                    item.sort = 'asc'
                } else if (item.sort == 'asc') {
                    item.sort = 'default'
                }

                options[idx] = item;
            }

            if (!item.sort && idx == current) {
                return;
            }

            this.setData({
                current: idx,
                options
            });

            this.triggerEvent("tabs_tap", {item, current: idx});
        },
    },
});
