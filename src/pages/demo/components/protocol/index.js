import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        content: [
            {text: '请先阅读', color: '#040A23'},
            {text: '《用户服务协议》', color: '#1F4886'},
        ],
        content2: [
            {text: '阅读并同意', color: '#9AA0B1'},
            {text: '《xxxx认证服务条款》', color: '#656979'},
            {text: '《隐私保护政策》', color: '#656979'},
            {text: '《xx会员服务协议》', color: '#656979'},
            {text: '《xx交易服务政策》', color: '#656979'},
        ],
        content3: [
            {text: '操作文本可选中或取消', color: '#040A23'},
            {text: '《用户服务协议》', color: '#1F4886'},
        ],
        content4: [
            {text: '操作文本不可选中或取消', color: '#040A23'},
            {text: '《用户服务协议》', color: '#1F4886'},
        ],
    },
    handleChange(e) {
        console.log('🔥🔥🔥 复选框点击', e.detail);
    }, 
    handleTap(e) {
        console.log('🔥🔥🔥 文本点击', e.detail);
    }
});
