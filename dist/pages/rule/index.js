import XCX from"../../utils/index";Page({data:{navHeight:XCX.getNavHeight(),rule:[{name:"颜色规范",path:"/pages/color/index"},{name:"字体规范",path:"/pages/font/index"},{name:"边距规范",path:"/pages/margin/index"},{name:"图标规范",path:"/pages/icon/index"},{name:"层级规范",path:"/pages/zindex/index"}]},handleGo(a){wx.navigateTo({url:a.currentTarget.dataset.item.path})}});