import{COLOR}from"../utils/common";Component({properties:{text:{type:String,value:"暂无数据"},textColor:{type:String,value:COLOR.PLACEHOLDER_COLOR},desc:{type:String,value:""},descColor:{type:String,value:COLOR.PLACEHOLDER_COLOR},iconName:{type:String,value:"empty"},iconColor:{type:String,value:COLOR.PLACEHOLDER_COLOR},iconSize:{type:Number,value:200},iconUrl:{type:String,value:""},mainBtnText:{type:String,value:""},mainBtnType:{type:String,value:"primary"},mainBtnColor:{type:String,value:COLOR.THEME_COLOR},minorBtnText:{type:String,value:""},minorBtnType:{type:String,value:"default"},minorBtnColor:{type:String,value:COLOR.THEME_COLOR},top:{type:Number,value:0}},methods:{handleTapMain(){this.triggerEvent("empty_main_tap")},handleTapMinor(){this.triggerEvent("empty_minor_tap")}}});