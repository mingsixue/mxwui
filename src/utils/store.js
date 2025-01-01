const store = {
    /**
     * 从指定命名空间获取指定字段值
     * @param {string} key - 字段名
     * @param {string} name - 命名空间
     */
    getItem(key, name) {
        if (name) {
            const val = this.getItem(name);
            return typeof val === "object" ? val[key] : "";
        }

        let v = wx.getStorageSync(key);
        if (v?._t) {
            let nowTime = Math.floor(+new Date() / 1000);
            if (nowTime > v._t) {
                this.remove(key);
                return null;
            }
            return v._v;
        }
        return v;
    },
    /**
     * 向指定命名空间设置字段
     * @param {string} key - 设置的字段名
     * @param {unknown} value - 设置的字段值
     * @param {string} name - 命名空间
     * @param {number} expiration - 过期时间，秒
     */
    setItem(key, value, name, expiration) {
        let t = 0;
        if (expiration > 0) {
            t = Math.floor(+new Date() / 1000) + expiration;
        }

        if (name) {
            let moduleData = this.getItem(name) || {};
            moduleData[key] = value;
            if (expiration > 0) {
                moduleData._t = t;
            }
            key = name;
            value = moduleData;
        } else {
            if (expiration > 0) {
                value = {_v: value, _t: t};
            }
        }

        try {
            wx.setStorageSync(key, value);
            return Promise.resolve();
        } catch (e) {
            return new Promise((resolve, reject) => {
                wx.setStorage({
                    key,
                    data: value,
                    success: resolve,
                    fail: reject,
                });
            });
        }
    },

    remove(key, name) {
        if (name) {
            let val = this.getItem(name);
            if (typeof val === "object" && val[key] !== undefined) {
                delete val[key];
                this.setItem(name, val);
            }
        } else {
            wx.removeStorageSync(key);
        }
    },

    clear() {
        return wx.clearStorageSync();
    },

    info() {
        return wx.getStorageInfoSync();
    },
};

export default store;
