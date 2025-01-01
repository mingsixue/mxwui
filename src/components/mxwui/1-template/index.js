import {COLOR} from '../utils/common';

Component({
    // options: {
    //     multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    // },
    properties: {
        //
        xxx1: {
            type: String,
            value: ''
        },
        // xxx
        xxx2: {
            type: Boolean,
            value: false
        },
        //
        xxx3: {
            type: Number,
            value: ''
        },
        // xxx
        xxx4: {
            type: Array,
            value: []
        },
        // xxx
        xxx5: {
            type: Object,
            value: []
        },
    },
    attached() {
    },
    ready() {
    },
    methods: {
        // xxx
        handleXXX() {
            this.triggerEvent("xxx");
        },
    }
});
