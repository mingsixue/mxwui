import{COLOR}from"../utils/common";Component({properties:{type:{type:String,value:"single"},options:{type:Array,value:[]},singleIcon:{type:String,value:"default"},multipleIcon:{type:String,value:"default"},iconColor:{type:String,value:COLOR.THEME_COLOR},iconSize:{type:Number,value:48},textColor:{type:String,value:COLOR.TEXT_COLOR},textSelectColor:{type:String,value:COLOR.TEXT_COLOR},desc:{type:String,value:""},descColor:{type:String,value:COLOR.MINOR_TEXT_COLOR},label:{type:String,value:""},labelColor:{type:String,value:COLOR.TEXT_COLOR},required:{type:Boolean,value:!1},requiredPosition:{type:String,value:"right"},firstIcon:{type:Object,value:[]},lastIcon:{type:Object,value:[]},bgColor:{type:String,value:COLOR.WHITE_COLOR},PLACEHOLDER_COLOR:{type:String,value:COLOR.PLACEHOLDER_COLOR}},methods:{handleTap(e){let r=e.currentTarget.dataset.idx;var{options:e=[]}=this.data;if(!e[r].disabled){if("single"==this.data.type)e.forEach((e,t)=>{t==r?e.checked=!e.checked:e.checked=!1}),this.triggerEvent("list_select_change",{type:"single",index:e[r].checked?r:"",value:e[r].checked?e[r].value:"",item:e[r].checked?e[r]:{},options:e});else if("multiple"==this.data.type){e.forEach((e,t)=>{t==r&&(e.checked=!e.checked)});let i=[],l=[],a=[];e.forEach((e,t)=>{e.checked&&(i.push(t),l.push(e.value),a.push(e))}),this.triggerEvent("list_select_change",{type:"multiple",index:i,value:l,item:a,options:e})}this.setData({options:[...e]})}},handleFirstClick(){this.triggerEvent("list_select_firstIcon")},handleLastClick(){this.triggerEvent("list_select_lastIcon")}}});