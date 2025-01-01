import store from "./store";
import config from "../config/config";

const request = function (options) {
    let user = store.getItem("_userInfo");

    wx.request({
        url: `${config.API_HOST}${options.url}`,
        data: options.data || {},
        header: {
            "content-type": "application/json",
            // ...(user.token ? {Authorization: user.token || ""} : {}),
        },
        timeout: 5000,
        method: options.method || "GET",
        dataType: "json",
        responseType: "text",
        success(res) {
            const { code, msg, data } = res.data;

            if (options.isfail) {
                options.success && options.success(res.data);
            } else if (code == 0) {
                options.success && options.success(data);
            } else if (code == 901) {
                // 未登录/登录过期 处理
                wx.redirectTo({
                    url: "/pages/login/index",
                });
            } else {
                wx.showModal({
                    title: "系统提示",
                    content: message,
                    showCancel: false,
                });
            }
        },
        fail(res) {
            console.log("=-= request fail", res.data);
            options.faile && options.fail(res.data);
        },
    });
};

export default request;
