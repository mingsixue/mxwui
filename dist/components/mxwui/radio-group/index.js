import{COLOR}from"../utils/common";Component({properties:{styleType:{type:String,value:"normal"},options:{type:Array,value:[]},radioPosition:{type:String,value:"before"},radioColor:{type:String,value:COLOR.PLACEHOLDER_COLOR},radioSelectColor:{type:String,value:COLOR.THEME_COLOR},radioSize:{type:Number,value:48},desc:{type:String,value:""},descColor:{type:String,value:COLOR.MINOR_TEXT_COLOR},showLine:{type:Boolean,value:!1},label:{type:String,value:""},labelColor:{type:String,value:COLOR.TEXT_COLOR},labelAlign:{type:String,value:"left"},leftWidth:{type:Number,value:""},required:{type:Boolean,value:!1},requiredPosition:{type:String,value:"right"},firstIcon:{type:Object,value:[]},lastIcon:{type:Object,value:[]},horizontal:{type:Boolean,value:!1},bgColor:{type:String,value:COLOR.WHITE_COLOR},WHITE_COLOR:{type:String,value:COLOR.WHITE_COLOR}},methods:{handleRadio(e){let o=e.currentTarget.dataset.idx;var{options:e=[]}=this.data;e[o].disabled||(e.forEach((e,t)=>{t==o?e.checked=!e.checked:e.checked=!1}),this.setData({options:[...e]}),this.triggerEvent("radio_group_change",{index:o,checked:e[o].checked,value:e[o].value,item:e[o],options:e}))},handleFirstClick(){this.triggerEvent("radio_group_firstIcon")},handleLastClick(){this.triggerEvent("radio_group_lastIcon")}}});