import{COLOR,hexToRGBA}from"../utils/common";Component({properties:{type:{type:String,value:"default"},text:{type:String,value:""},defaultColor:{type:String,value:COLOR.TEXT_COLOR},selectColor:{type:String,value:COLOR.THEME_COLOR,observer(e){this.setData({themeColor:hexToRGBA(e,.1)})}}},methods:{handleClick(e){"disabled"!=this.data.type&&this.triggerEvent("label_tap",e.detail)}}});