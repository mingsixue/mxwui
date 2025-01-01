import {COLOR} from '../utils/common';

Component({
    properties: {
        // 角标类型，image 图片 / text 文本
        type: {
            type: String,
            value: 'text'
        },
        // 角标位置，lt 左上角 / rt 右上角 / lb 左下角 / rb 右下角
        position: {
            type: String,
            value: 'lt'
        },
        // 角标文案
        text: {
            type: String,
            value: ''
        },
        // 角标文案文本色
        textColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 文案字号
        textSize: {
            type: Number,
            value: 24
        },
        // 角标背景色
        bgColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 角标圆角
        radius: {
            type: Number,
            value: 16
        },
        // 距离顶部
        top: {
            type: Number,
            value: 0
        },
        // 距离左侧
        left: {
            type: Number,
            value: 0
        },
        // 距离右侧
        right: {
            type: Number,
            value: 0
        },
        // 距离底部
        bottom: {
            type: Number,
            value: 0
        },
        // 角标自定义图片
        imgUrl: {
            type: String,
            value: ''
        },
        // 角标图片宽度
        imagWidth: {
            type: Number,
            value: ''
        },
        // 角标图片高度
        imgHeight: {
            type: Number,
            value: 48
        }
    },
});
