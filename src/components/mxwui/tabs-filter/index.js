Component({
    properties: {
        // Tabs配置项 text、value、iconName、iconColor、iconUrl、iconSize
        options: {
            type: Array,
            value: [],
        },
        // 默认选中项
        current: {
            type: Number,
            value: 0,
        },
        // 主题 light / durk
        theme: {
            type: String,
            value: "light",
        },
        // 是否左对齐
        isLeft: {
            type: Boolean,
            value: false
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
        // 自定义选中项背景色
        currentColor: {
            type: String,
            value: ""
        },
        // 文本字号
        textSize: {
            type: Number,
            value: 28
        },
        // Bar自定义背景色
        bgColor: {
            type: String,
            value: ""
        }
    },
    methods: {
        handleItem(e) {
            let {item = {}, idx} = e.currentTarget.dataset;
            let {current} = this.data;

            if (idx == current) {
                return;
            }

            this.setData({
                current: idx,
            });

            this.triggerEvent("tabs_filter_tap", {item, current: idx});
        },
    },
});
