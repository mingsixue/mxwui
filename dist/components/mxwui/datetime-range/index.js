import{COLOR}from"../utils/common";Component({properties:{visible:{type:Boolean,value:!1},startTime:{type:String,value:""},endTime:{type:String,value:""},startText:{type:String,value:"开始时间"},endText:{type:String,value:"结束时间"},title:{type:String,value:""},cancelText:{type:String,value:"取消"},cancelColor:{type:String,value:COLOR.PLACEHOLDER_COLOR},confirmText:{type:String,value:"确定"},confirmColor:{type:String,value:COLOR.THEME_COLOR},zIndex:{type:Number,value:1},isCloseMask:{type:Boolean,value:!0}},methods:{handleMask(){this.data.isCloseMask&&(this.setData({visible:!1,startVisible:!1,endVisible:!1}),this.triggerEvent("datetime_range_close",{type:"close"}))},handleCancel(){console.log("取消"),this.setData({visible:!1,startVisible:!1,endVisible:!1}),this.triggerEvent("datetime_range_close",{type:"cancel"})},handleConfirm(){var e,t,{startTime:i,endTime:a}=this.data;i&&a?(e=i.replace(/-/g,"/"),t=a.replace(/-/g,"/"),e=new Date(e),(t=new Date(t))<=e?wx.showToast({title:"开始时间需要小于结束时间",icon:"none"}):(this.setData({visible:!1,startVisible:!1,endVisible:!1}),this.triggerEvent("datetime_range_confirm",{start:i,end:a}))):!i&&a?wx.showToast({title:"请先选择开始时间",icon:"none"}):i&&!a?wx.showToast({title:"请先选择结束时间",icon:"none"}):wx.showToast({title:"请先选择开始时间和结束时间",icon:"none"})},handleDatetimeStart(e){console.log("确定",e.detail),this.setData({startTime:e.detail.value})},handleDatetimeEnd(e){console.log("确定",e.detail),this.setData({endTime:e.detail.value})},handleStart(){this.setData({startVisible:!0})},handleEnd(){this.setData({endVisible:!0})}}});