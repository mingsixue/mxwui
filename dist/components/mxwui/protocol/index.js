import{COLOR,hexToRGBA}from"../utils/common";Component({properties:{content:{type:Array,value:[]},checked:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1,observer(e){var t;e&&(e=hexToRGBA(this.data.checkboxColor,.5),t=hexToRGBA(this.data.checkboxSelectColor,.5),this.setData({checkboxColor:e,checkboxSelectColor:t}))}},checkboxColor:{type:String,value:COLOR.PLACEHOLDER_COLOR},checkboxSelectColor:{type:String,value:COLOR.THEME_COLOR},checkboxSize:{type:Number,value:32},changeChecked:{type:Boolean,value:!0}},methods:{handleChange(e){this.triggerEvent("protocol_change",e.detail)},handleTap(e){var{item:e={}}=e.currentTarget.dataset,{checked:t,changeChecked:o,disabled:c}=this.data;o&&!c&&(this.setData({checked:o=!t}),o)&&this.triggerEvent("protocol_change",{checked:o}),this.triggerEvent("protocol_click",{item:e})}}});