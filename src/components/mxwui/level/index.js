import {COLOR} from '../utils/common';

Component({
    properties: {
        // 等级
        level: {
            type: Number,
            value: 1
        },
        // 背景色
        bgColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 背景宽度
        bgWidth: {
            type: Number,
            value: 56
        },
        // 背景高度
        bgHeight: {
            type: Number,
            value: 32
        },
        // 背景圆角
        bgRadius: {
            type: Number,
            value: 16
        },
        // 文本色
        textColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 文本字号
        textSize: {
            type: Number,
            value: 36
        }
    },
});
