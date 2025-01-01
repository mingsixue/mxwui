import {COLOR, AVATAR} from '../utils/common';

Component({
    properties: {
        // 头像地址
        url: {
            type: String,
            value: AVATAR
        },
        // 头像大小
        size: {
            type: Number,
            value: 140
        },
        // 是否圆形头像
        round: {
            type: Boolean,
            value: true
        },
        // 圆角
        radius: {
            type: String,
            value: '4'
        },
        // 边框颜色
        borderColor: {
            type: String,
            value: COLOR.WHITE_COLOR
        },
        // 边框粗细
        borderWeight: {
            type: Number,
            value: 2
        }
    },
    methods: {
        handleTap() {
            this.triggerEvent("avatar_tap");
        },
    }
});
