import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight()
    },
    onShareAppMessage(e) {
        console.log(e);
    },
    handleTap() {
        console.log('🔥🔥🔥 接收到了点击事件');
    }, 
    getUserInfo(e) {
        console.log('🔥🔥🔥 接收到了用户信息', e.detail);
    },
    chooseAvatar(e) {
        console.log('🔥🔥🔥 获取用户头像回调', e.detail);
    },
    getPhoneNumber(e) {
        console.log('🔥🔥🔥 手机号快速验证回调', e.detail);
    },
    getRealtimePhoneNumber(e) {
        console.log('🔥🔥🔥 手机号实时验证回调', e.detail);
    },
    handleContact(e) {
        console.log('🔥🔥🔥 客服会话', e.detail);
    },
    openSetting(e) {
        console.log('🔥🔥🔥 打开授权设置页后回调', e.detail);
    },
    agreePrivacyAuthorization(e) {
        console.log('🔥🔥🔥 用户同意隐私协议事件回调', e.detail);
    },
});