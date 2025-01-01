Component({
    properties: {
        current: {
            type: Number,
            value: "",
        },
    },
    data: {
        options: [
            {
                text: "首页",
                iconName: "home",
                url: "/pages/index/index",
            },
            {
                text: "组件",
                iconName: "level",
                url: "/pages/component/index",
            },
            {
                text: "示例",
                iconName: "code",
                url: "/pages/template/index/index",
            },
            {
                text: "规范",
                iconName: "file",
                url: "/pages/rule/index",
            },
        ],
    }
});
