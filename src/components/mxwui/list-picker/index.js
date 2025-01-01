import {COLOR} from '../utils/common';

Component({
    properties: {
        // 样式类型， horizontal / vertical / web
        styleType: {
            type: String,
            value: 'horizontal'
        },
        // 下拉类型， selector 普通选择器 / multiSelector 多列选择器 / time 时间选择器 / date 日期选择器 / region 省市区选择器
        mode: {
            type: String,
            value: 'selector'
        },
        // 数据项
        options: {
            type: Array,
            value: []
        },
        // key，mode=selector 或 mode=multiSelector 有效
        rangeKey: {
            type: String,
            value: 'label'
        },
        // 普通选择器下标值 下标从0开始的序号，mode=selector有效
        index: {
            type: Number,
            value: ''
        },
        // 多列选择器下标值，每一列的下标，mode=multiSelector有效，[0, 0]
        multiIndex: {
            type: Array,
            value: [],
            observer(newVal) {
                this.setData({
                    multiTxt: this.idxToLabel(newVal)
                });
            }
        },
        // 时间，mode=time有效，格式 hh:mm
        time: {
            type: String,
            value: ''
        },
        // 日期，mode=date有效，格式 YYYY-MM-DD
        date: {
            type: String,
            value: ''
        },
        // 开始时间，mode=time有效，格式： hh:mm 
        // 开始日期，mode=date有效，格式： YYYY-MM-DD
        start: {
            type: String,
            value: ''
        },
        // 结束时间，mode=time有效，格式： hh:mm 
        // 结束日期，mode=date有效，格式： YYYY-MM-DD
        end: {
            type: String,
            value: ''
        },
        // 日期选择器粒度， year / month / day ，mode=date有效
        fields: {
            type: String,
            value: 'day'
        },
        // 省市区选择器值，['浙江省', '杭州市', '西湖区']
        region: {
            type: Array,
            value: [],
            observer(newVal) {
                this.setData({
                    regionTxt: newVal.join('')
                });
            }
        },
        // 省市区选择器层级，mode=region有效， province 省级选择器 / city 市级选择器 / region 区级选择器 / sub-district 街道选择器
        level: {
            type: String,
            value: 'region'
        },
        // 占位文本
        placeholder: {
            type: String,
            value: '请选择'
        },
        // 占位文本颜色
        placeholderColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 文本色
        textColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 右侧内容是否居左
        isLeft: {
            type: Boolean,
            value: false
        },
        // 左侧自定义宽度，不带单位
        leftWidth: {
            type: Number,
            value: ''
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
        // 标签对齐方式， left / center / right
        labelAlign: {
            type: String,
            value: 'left'
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
            value: {}
        },
        // 标签后图标
        lastIcon: {
            type: Object,
            value: {}
        },
        // 是否显示右箭头
        arrows: {
            type: Boolean,
            value: true
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
            value: true
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
        TEXT_COLOR: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        WHITE_COLOR: {
            type: String,
            value: COLOR.WHITE_COLOR
        }
    },
    methods: {
        idxToLabel(ids) {
            let {options = [], rangeKey} = this.data;
            let txt = [];
            options.forEach((item, index) => {
                item.forEach((it, idx) => {
                    if (idx == ids[index]) {
                        txt.push(it[rangeKey]);
                    }
                });
            });
            if (txt.length) {
                return txt.join('/');
            }
            return '';
        },
        handleSelectorChange(e) {
            let {value} = e.detail;
            this.setData({
                index: Number(value)
            });
            this.triggerEvent("list_picker_change", {type: 'selector', value: Number(value)});
        },
        handleMultiSelectorChange(e) {
            let {value} = e.detail;
            this.setData({
                multiIndex: value,
                multiTxt: this.idxToLabel(value)
            });
            this.triggerEvent("list_picker_change", {type: 'multiSelector', multiIndex: value});
        },
        handleTimeChange(e) {
            let {value} = e.detail;
            this.setData({
                time: value
            });
            this.triggerEvent("list_picker_change", {type: 'time', time: value});
        },
        handleDateChange(e) {
            let {value} = e.detail;
            this.setData({
                date: value
            });
            this.triggerEvent("list_picker_change", {type: 'date', date: value});
        },
        handleRegionChange(e) {
            let {value} = e.detail;
            this.setData({
                region: value,
                regionTxt: value.join()
            });
            this.triggerEvent("list_picker_change", {type: 'region', region: value, value: value.join()});
        },
        handleCancel() {
            this.triggerEvent("list_picker_cancel");
        },
        handleColumnChange(e) {
            this.triggerEvent("list_picker_column_change", e.detail);
        },
        handleFirstClick() {
            this.triggerEvent("list_picker_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("list_picker_lastIcon");
        }
    }
});
