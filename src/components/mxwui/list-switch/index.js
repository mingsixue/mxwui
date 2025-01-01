Component({
    properties: {
        // 标签文案
        label: {
            type: String,
            value: ''
        },
        // 标签文案文本色
        labelColor: {
            type: String,
            value: ''
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
        // 是否必填
        required: {
            type: Boolean,
            value: false
        },
        // 必填位置，left、right
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
        // 内容
        content: {
            type: String,
            value: ''
        },
        // 内容文本色
        contentColor: {
            type: String,
            value: ''
        },
        // 描述
        desc: {
            type: String,
            value: ''
        },
        // 描述文本色
        descColor: {
            type: String,
            value: ''
        },
        // 是否显示分隔线
        showLine: {
            type: Boolean,
            value: true
        },
        // 是否选中
        checked: {
            type: Boolean,
            value: false,
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false,
        },
        // switch颜色
        switchColor: {
            type: String,
            value: ''
        },
    },
    methods: {
        handleFirstClick() {
            this.triggerEvent("list_switch_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("list_switch_lastIcon");
        },
        changeSwitch(e) {
            this.triggerEvent("list_switch_change", e.detail);
        }
    }
});
