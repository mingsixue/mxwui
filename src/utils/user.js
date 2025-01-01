import store from "./store";
const app = getApp();

const getUserInfo = () => {
    const user = store.getItem("_userInfo");
    return user;
};

const getIsLogin = () => {
    const user = getUserInfo();
    return user.token ? true : false;
}

const getUserId = () => {
    const user = getUserInfo();
    return user.id;
};

const setUserInfo = (key, val) => {
    let user = getUserInfo();
    user[key] = val;
    store.setItem("_userInfo", user);
    app.globalData.user = user;
};

const setUserAllInfo = (info) => {
    let user = getUserInfo();
    let newUser = {
        ...user,
        ...info
    };
    store.setItem("_userInfo", newUser);
    app.globalData.user = newUser;
}

const getScore = () => {
    const user = getUserInfo();
    return user.totalScore || 0;
}

const setTotalScore = (val, operation = 'add') => {
    let user = getUserInfo();
    let oldVal = user.totalScore;
    let newVal = user.totalScore;

    if (operation == 'add') {
        newVal = oldVal + val;
    } else if (operation == 'reduce') {
        newVal = oldVal - val;
        if (newVal < 0) {
            newVal = 0;
        }
    }
    
    user.totalScore = newVal;
    store.setItem("_userInfo", user);
    app.globalData.user = user;
}

const checkLogin = (userId) => {
    const isLogin = getIsLogin();
    if (!isLogin) {
        wx.showToast({
            title: '您需要登录查看',
            icon: 'none',
            duration: 2000,
            success: () => {
                setTimeout(() => {
                    if (userId) {
                        wx.navigateTo({
                            url: `/pages/login/index?userId=${userId}`
                        });
                    } else {
                        wx.navigateTo({
                            url: '/pages/login/index'
                        });
                    }
                }, 1500);
            }
        });
        return false;
    }
    return true;
}

const User = {
    getIsLogin,
    getUserInfo,
    getUserId,
    setUserInfo,
    setUserAllInfo,
    getScore,
    setTotalScore,
    checkLogin
};

export default User;
