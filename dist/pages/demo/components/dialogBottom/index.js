import XCX from"../../../../utils/index";Page({data:{navHeight:XCX.getNavHeight(),visible:!1,visibleShowClose:!1,visibleMaskClose:!1,handleClose:!1},handleVisible(){this.setData({visible:!0})},handleShowClose(){this.setData({visibleShowClose:!0})},handleMaskClose(){this.setData({visibleMaskClose:!0})},handleHandle(){this.setData({visibleHandle:!0})},handleClose(e){console.log("🔥🔥🔥 取消",e.detail)}});