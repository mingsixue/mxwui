import XCX from"../../utils/index";let app=getApp();Page({data:{navHeight:XCX.getNavHeight(),list:[]},onLoad(o){console.log("=-= onLoad e",o),console.log("=-= app",app),this.init()},onShow(){},onHide(){},onUnload(){},onPullDownRefresh(){wx.stopPullDownRefresh()},onReachBottom(){},onPageScroll(o){console.log("=-= scrollTop",o.scrollTop)},onShareAppMessage(o){return{title:"MXWUI基于微信小程序原生语法的UI组件库",path:"/pages/index/index"}},init(){console.log(11111)},handleCopyUrl(){wx.setClipboardData({data:"https://github.com/mingsixue/mxwui",success(o){wx.showToast({title:"复制成功"})}})}});