import {COLOR} from '../utils/common';

Component({
    properties: {
        // 标签文案
        text: {
            type: String,
            value: ''
        },
        // 标签文案文本色
        textColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 标签边框颜色
        borderColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 标签背景色
        bgColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        }
    },
});
