import XCX from"../../../../utils/index";Page({data:{navHeight:XCX.getNavHeight(),visible:!1,visibleShowClose:!1,visibleCurrent:!1,visibleCurrent2:!1,visibleColor:!1,visibleTitle:!1,visibleConfirm:!1,visibleCancel:!1,visibleBack:!1,visibleBackIcon:!1,visibleClose:!1,visibleCloseIcon:!1,visibleMaskClose:!1,visibleLeftWidth:!1,visibleHandle:!1,backIcon1:{iconName:"setting",iconColor:"#f00",iconSize:30},backIcon2:{iconUrl:"http://cdn.mingsixue.com/xcx/MXWUI/hot.png",iconSize:32},closeIcon1:{iconName:"help",iconColor:"#1677FF",iconSize:34},closeIcon2:{iconUrl:"http://cdn.mingsixue.com/xcx/MXWUI/hot.png",iconSize:36},options:[{label:"选项一",value:1,children:[{label:"选项一一",value:111},{label:"选项一二",value:112},{label:"选项一三",value:113},{label:"选项一四",value:114},{label:"选项一五",value:115},{label:"选项一六",value:116},{label:"选项一七",value:117},{label:"选项一八",value:118},{label:"选项一九",value:119},{label:"选项二十",value:120},{label:"选项二一",value:121},{label:"选项二二",value:122},{label:"选项二三",value:123},{label:"选项二四",value:124},{label:"选项二五",value:125}]},{label:"选项二",value:2,children:[{label:"选项二一",value:211},{label:"选项二二",value:212},{label:"选项二三",value:213},{label:"选项二四",value:214},{label:"选项二五",value:215},{label:"选项二六",value:216},{label:"选项二七",value:217},{label:"选项二八",value:218},{label:"选项二九",value:219},{label:"选项三十",value:220},{label:"选项三一",value:221},{label:"选项三二",value:222},{label:"选项三三",value:223},{label:"选项三四",value:224},{label:"选项三五",value:225}]},{label:"选项三",value:3,children:[{label:"选项三一",value:311},{label:"选项三二",value:312},{label:"选项三三",value:313}]},{label:"选项四",value:4,children:[{label:"选项四一",value:411},{label:"选项四二",value:412}]},{label:"选项五",value:5,children:[{label:"选项五一",value:511}]},{label:"选项六",value:6,children:[]},{label:"选项七",value:7,children:[{label:"选项七一",value:711},{label:"选项七二",value:712}]},{label:"选项八选项八选项八",value:8,children:[{label:"风起云涌，雨落无痕。",value:811},{label:"冷水浇堤拂柳绿，西湖十里水连天。",value:812},{label:"日暮风渐起，独行踏轻影。",value:813}]},{label:"选项九",value:9,children:[{label:"选项九一",value:911},{label:"选项九二",value:912}]},{label:"十",value:10,children:[{label:"选项十一",value:1011},{label:"选项十二",value:1012}]},{label:"十一",value:11,children:[{label:"选项十一一",value:1111},{label:"选项十一二",value:1112}]},{label:"项十二",value:12,children:[{label:"选项十二一",value:1211},{label:"选项十二二",value:1212}]},{label:"选项十三",value:13,children:[{label:"选项十三一",value:1311},{label:"选项十三二",value:1312}]},{label:"选择项十四",value:14,children:[{label:"选项十四一",value:1411},{label:"选项十四二",value:1412}]},{label:"选项十五",value:15,children:[{label:"选项十五一",value:1511},{label:"选项十五二",value:1512}]}]},handleVisible(){this.setData({visible:!0})},handleShowClose(){this.setData({visibleShowClose:!0})},handleVisibleCurrent(){this.setData({visibleCurrent:!0})},handleVisibleCurrent2(){this.setData({visibleCurrent2:!0})},handleVisibleColor(){this.setData({visibleColor:!0})},handleTitle(){this.setData({visibleTitle:!0,titleColor:"#040A23"})},handleTitleColor(){this.setData({visibleTitle:!0,titleColor:"#1677FF"})},handleConfirm(){this.setData({visibleConfirm:!0})},handleCancel(){this.setData({visibleCancel:!0})},handleBack(){this.setData({visibleBack:!0})},handleBack2(){this.setData({visibleBackIcon:!0,backIcon:this.data.backIcon1})},handleBack3(){this.setData({visibleBackIcon:!0,backIcon:this.data.backIcon2})},handleClose(){this.setData({visibleClose:!0})},handleClose2(){this.setData({visibleCloseIcon:!0,closeIcon:this.data.closeIcon1})},handleClose3(){this.setData({visibleCloseIcon:!0,closeIcon:this.data.closeIcon2})},handleMaskClose(){this.setData({visibleMaskClose:!0})},handleLeftWidth(){this.setData({visibleLeftWidth:!0})},handleHandle(){this.setData({visibleHandle:!0})},handleCancelFun(l){console.log("🔥🔥🔥 关闭",l.detail)},handleBackFun(l){console.log("🔥🔥🔥 返回",l.detail)}});