import {COLOR} from '../utils/common';

Component({
    properties: {
        // 数据项
        list: {
            type: Array,
            value: []
        },
        // 是否开启手风琴模式
        accordion: {
            type: Boolean,
            value: false
        },
        // 标题文本色
        titleColor: {
            type: String,
            value: COLOR.TEXT_COLOR
        },
        // 内容文本色
        contentColor: {
            type: String,
            value: COLOR.MINOR_TEXT_COLOR
        },
        // 箭头颜色
        arrowsColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        }
    },
    methods: {
        handleItem(e) {
            let {idx, item = {}} = e.currentTarget.dataset;
            let {list = [], accordion} = this.data;

            if (accordion) {
                list.forEach((item) => {
                    item.show = false;
                });
                if (item.show) {
                    list[idx].show = false;
                } else {
                    list[idx].show = true;
                }
            } else {
                list.forEach((item, index) => {
                    if (index == idx) {
                        if (item.show) {
                            item.show = false;
                        } else {
                            item.show = true;
                        }
                    }
                });
            }
            
            this.setData({
                list: [...list]
            });
        },
    }
});
