import store from"./store";import config from"../config/config";let request=function(o){store.getItem("_userInfo");wx.request({url:""+config.API_HOST+o.url,data:o.data||{},header:{"content-type":"application/json"},timeout:5e3,method:o.method||"GET",dataType:"json",responseType:"text",success(e){var{code:t,data:s}=e.data;o.isfail?o.success&&o.success(e.data):0==t?o.success&&o.success(s):901==t?wx.redirectTo({url:"/pages/login/index"}):wx.showModal({title:"系统提示",content:message,showCancel:!1})},fail(e){console.log("=-= request fail",e.data),o.faile&&o.fail(e.data)}})};export default request;