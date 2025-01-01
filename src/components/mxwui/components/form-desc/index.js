import {COLOR} from '../../utils/common';

Component({
    properties: {
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
        normal: {
            type: Boolean,
            value: false
        },
    }
});
