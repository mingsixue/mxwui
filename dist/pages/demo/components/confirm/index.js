import XCX from"../../../../utils/index";Page({data:{navHeight:XCX.getNavHeight(),visible:!1,visibleTitle:!1,visibleContent:!1,visibleConfirm:!1,confirmBtnText:"确定",confirmBtnColor:"#CA0E2D",visibleCancel:!1,cancelBtnText:"取消",cancelBtnColor:"#656979",visibleHandle:!1},handleConfirm(){this.setData({visible:!1,visibleTitle:!1,visibleContent:!1,visibleConfirm:!1,visibleCancel:!1,visibleHandle:!1}),console.log("🔥🔥🔥 确认")},handleCancel(){this.setData({visible:!1,visibleTitle:!1,visibleContent:!1,visibleConfirm:!1,visibleCancel:!1,visibleHandle:!1}),console.log("🔥🔥🔥 取消")},handleBasic(){this.setData({visible:!0})},handleTitle(){this.setData({visibleTitle:!0})},handleContent(){this.setData({visibleContent:!0})},handleConfirm2(){this.setData({visibleConfirm:!0,confirmBtnText:"保 存",confirmBtnColor:"#CA0E2D"})},handleConfirm3(){this.setData({visibleConfirm:!0,confirmBtnText:"确定",confirmBtnColor:"#1677FF"})},handleCancel2(){this.setData({visibleCancel:!0,cancelBtnText:"离开",cancelBtnColor:"#656979"})},handleCancel3(){this.setData({visibleCancel:!0,cancelBtnText:"取消",cancelBtnColor:"#1677FF"})},handleHandle(){this.setData({visibleHandle:!0})}});