import XCX from"../../../../utils/index";Page({data:{navHeight:XCX.getNavHeight(),visible:!1,visiblePlaceholder:!1,visibleBg:!1,visibleBtn:!1,visibleMask:!1},handleClose(){console.log("🔥🔥🔥 关闭")},handleChange(e){console.log("🔥🔥🔥 发送",e.detail)},handleVisible(){this.setData({visible:!0})},handleVisiblePlaceholder(){this.setData({visiblePlaceholder:!0})},handleVisibleBg(){this.setData({visibleBg:!0})},handleVisibleBtn(){this.setData({visibleBtn:!0})},handleVisibleMask(){this.setData({visibleMask:!0})}});