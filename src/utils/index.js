import request from "@utils/request";
import store from "@utils/store";
import User from "@utils/user";

// 获取导航栏高度
const getNavHeight = () => {
    const { statusBarHeight } = wx.getSystemInfoSync();
    const height = statusBarHeight + 44;
    return height;
}

const zero = (v) => {
    return v < 10 ? `0${v}` : v;
};


/**
 * 数字精确计算，解决金额计算精度丢失
 * @param a {number} 运算数1
 * @param b {number} 运算数2
 * @param operate {string} 计算方法，加(add) 减(subtract) 乘(multiply) 除(divide)
 * @returns number 计算值
 */
const getNumberAccuracy = (a, b, operate) => {
    a = Number(a);
    b = Number(b);

    /**
     * 判断obj是否为一个整数
     */
    const isInteger = (obj) => {
        return Math.floor(obj) === obj;
    };

    /**
     * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
     * @param floatNum {number} 小数
     * @return {object} {times:100, num: 314}
     */
    const toInteger = (floatNum) => {
        var ret = { times: 1, num: 0 };
        if (isInteger(floatNum)) {
            ret.num = floatNum;
            return ret;
        }
        var strfi = `${floatNum}`;
        var dotPos = strfi.indexOf('.');
        var len = strfi.substr(dotPos + 1).length;
        var times = Math.pow(10, len);
        var intNum = Number(floatNum.toString().replace('.', ''));
        ret.times = times;
        ret.num = intNum;
        return ret;
    };

    /**
     * 加减乘除运算，确保不丢失精度
     * 把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
     */
    const operation = (a, b) => {
        var o1 = toInteger(a);
        var o2 = toInteger(b);
        var n1 = o1.num;
        var n2 = o2.num;
        var t1 = o1.times;
        var t2 = o2.times;
        var max = t1 > t2 ? t1 : t2;
        var result = null;
        switch (operate) {
            case 'add':
                if (t1 === t2) {
                    // 两个小数位数相同
                    result = n1 + n2;
                } else if (t1 > t2) {
                    // o1 小数位 大于 o2
                    result = n1 + n2 * (t1 / t2);
                } else {
                    // o1 小数位 小于 o2
                    result = n1 * (t2 / t1) + n2;
                }
                return result / max;
            case 'subtract':
                if (t1 === t2) {
                    result = n1 - n2;
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2);
                } else {
                    result = n1 * (t2 / t1) - n2;
                }
                return result / max;
            case 'multiply':
                result = (n1 * n2) / (t1 * t2);
                return result;
            case 'divide':
                result = (n1 / n2) * (t2 / t1);
                return result;
        }
    };

    return operation(a, b);
}

const XCX = {
    getNavHeight,
    getNumberAccuracy,
    ...User,
};

export default XCX;
