import {COLOR} from '../utils/common';

Component({
    properties: {
        // 背景色
        bgColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
    },
});
