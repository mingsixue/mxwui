import{COLOR}from"../utils/common";Component({properties:{checked:{type:Boolean,value:!1,observer(e){var t=this.data.color;let o="";o=e?COLOR.SWITCH_COLOR:COLOR.BG_COLOR,t&&t!=COLOR.BG_COLOR&&(o=t),this.setData({color:o})}},disabled:{type:Boolean,value:!1},color:{type:String,value:COLOR.BG_COLOR}},methods:{changeSwitch(e){e=e.detail.value;this.setData({checked:e}),this.triggerEvent("switch_change",{value:e})}}});