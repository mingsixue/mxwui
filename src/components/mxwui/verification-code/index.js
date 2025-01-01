import {COLOR} from '../utils/common';

Component({
    properties: {
        // 样式类型，dialog 弹窗类型 / form 表单类型
        styleType: {
            type: String,
            value: 'form'
        },
        // 是否显示
        visible: {
            type: Boolean,
            value: false,
            observer(newVal) {
                if (newVal && this.data.styleType == 'dialog') {
                    let focusObj = {};
                    for(let i = 0; i < this.data.digit; i++) {
                        focusObj[`idx${i}`] = false;
                    }
                    focusObj['idx0'] = true;
                    setTimeout(() => {
                        this.setData({
                            focusObj: focusObj
                        });
                    }, 300);
                }
            }
        },
        // 手机号
        phone: {
            type: Number,
            value: '',
            observer(phone) {
                const regex = /^(\d{3})(\d{4})(\d{4})$/;
                let phoneString = String(phone).replace(regex, '$1-$2-$3');
                this.setData({
                    phoneString
                });
            }
        },
        // 验证码位数 4 或 6
        digit: {
            type: Number,
            value: 4
        },
        // 倒计时秒数
        countdown: {
            type: Number,
            value: 60
        },
        // 是否禁用获取验证码按钮
        disabled: {
            type: String,
            value: false
        },
        // 发送/获取验证码 按钮颜色
        sendBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 确定按钮文案
        confirmBtnText: {
            type: String,
            value: '确定'
        },
        // 确定按钮颜色
        confirmBtnColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 光标颜色
        cursorColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 占位文本
        placeholder: {
            type: String,
            value: '请输入验证码'
        },
        // 占位文本颜色
        placeholderColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 标签文本位置，inline 内联 / block 独占一行
        labelPosition: {
            type: String,
            value: 'inline'
        },
        // 标签文本
        label: {
            type: String,
            value: ''
        },
        // 标签文本文本色
        labelColor: {
            type: String,
            value: ''
        },
        // 标签对齐方式， left / center / right
        labelAlign: {
            type: String,
            value: 'left'
        },
        // 标签文本自定义宽度，不带单位
        leftWidth: {
            type: Number,
            value: ''
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
        // 标签前图标配置
        firstIcon: {
            type: Object,
            value: {}
        },
        // 标签后图标配置
        lastIcon: {
            type: Object,
            value: {}
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
            value: false
        },
        PLACEHOLDER_COLOR: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        TEXT_COLOR: {
            type: String,
            value: COLOR.TEXT_COLOR
        }
    },
    methods: {
        handleSend() {
            this.setData({
                isSend: true
            });
            this.countdowns(this.data.countdown);
            this.triggerEvent("verification_code_send");
        },
        countdowns(s) {
            let time = s - 1;
            if (time < 0) {
                time = 0;
                this.setData({
                    time: time,
                });
                return;
            }
            this.setData({
                time: time
            });
            setTimeout(() => {
                this.countdowns(time);
            }, 1000);
        },
        handleClose(e) {
            this.triggerEvent("verification_code_close", e.detail);
        },
        handleBack() {
            this.triggerEvent("verification_code_back");
        },
        handleConfirm() {
            let {code, digit} = this.data;
            if (code.length !== digit) {
                return;
            }
            this.setData({
                visible: false
            });
            this.triggerEvent("verification_code_confirm", {code: code.join('')});
        },
        dealIdx(idx) {
            let {digit} = this.data;

            let focusObj = {};
            for(let i = 0; i < digit; i++) {
                focusObj[`idx${i}`] = false;
            }

            if (idx > digit - 1) {
                focusObj['idx' + idx] = false;
                this.setData({
                    focusObj: focusObj,
                    holdKeyboard: false
                });
                return;
            }

            if (idx < 0) {
                return;
            }

            this.setData({
                focusObj: focusObj,
                holdKeyboard: true
            });

            setTimeout(() => {
                focusObj['idx' + idx] = true;
                this.setData({
                    focusObj: focusObj
                });
            }, 300);
        },
        handleInput(e) {
            let {idx} = e.currentTarget.dataset;
            let {code = []} = this.data;
            if (e.detail.value) {
                code[idx] = e.detail.value;
                this.dealIdx(idx + 1);
            } else {
                code.splice(idx, 1);
                this.dealIdx(idx - 1);
            }

            let len = 0;
            code.forEach((item) => {
                if (item) {
                    len = len + 1;
                }
            });

            this.setData({
                code: code,
                len: len
            });
        },
        handleInputCode(e) {
            let val = e.detail.value;
            if (val.length == this.data.digit) {
                this.triggerEvent("verification_code_confirm", {code: val});
            }
        },
        handleFirstClick() {
            this.triggerEvent("verification_code_firstIcon");
        },
        handleLastClick() {
            this.triggerEvent("verification_code_lastIcon");
        }
    }
});
