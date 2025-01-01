import {COLOR, hexToRGBA} from '../utils/common';
import lunisolar from './lib/lunisolar';
import festivals from './lib/festivals-short.zh-cn';
lunisolar.Markers.add(festivals, '节日');

const WEEK_CHK_FOR_MONDAY = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const WEEK_CHK_FOR_SUNDAY = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

Component({
    properties: {
        // 是否显示日历
        visible: {
            type: Boolean,
            value: false,
            observer(newVal) {
                if (newVal) {
                    this.init();
                }
            }
        },
        // 选择模式， single 单个日期选择 / range 日期范围选择
        selectionMode: {
            type: String,
            value: 'single'
        },
        // 初始值，selectionMode=single有效，YYYY-MM-DD
        defaultValue: {
            type: String,
            value: ''
        },
        // 开始日期，selectionMode=range有效，YYYY-MM-DD
        startDate: {
            type: String,
            value: ''
        },
        // 结束日期，selectionMode=range有效，YYYY-MM-DD
        endDate: {
            type: String,
            value: ''
        },
        // 最小可选日期 YYYY-MM-DD
        min: {
            type: String,
            value: ''
        },
        // 最大可选日期 YYYY-MM-DD
        max: {
            type: String,
            value: ''
        },
        // 第一天是从周一开始还是周日开始，Monday / Sunday
        weekStartsOn: {
            type: String,
            value: 'Monday'
        },
        // 是否显示农历
        showLunar: {
            type: Boolean,
            value: false,
        },
        // 是否显示节气
        showSolarTerm: {
            type: Boolean,
            value: false
        },
        // 是否显示节日
        showFestival: {
            type: Boolean,
            value: false
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 取消按钮文案
        cancelText: {
            type: String,
            value: '取消'
        },
        // 取消按钮文本色
        cancelColor: {
            type: String,
            value: COLOR.PLACEHOLDER_COLOR
        },
        // 确定按钮文案
        confirmText: {
            type: String,
            value: '确定'
        },
        // 确定按钮文本色
        confirmColor: {
            type: String,
            value: COLOR.THEME_COLOR
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1
        },
        // 点击蒙层是否可以关闭弹窗
        isCloseMask: {
            type: Boolean,
            value: true
        },
        THEME_COLOR: {
            type: String,
            value: COLOR.THEME_COLOR
        }
    },
    ready() {
        let weeks = WEEK_CHK_FOR_MONDAY;
        if (this.data.weekStartsOn === 'Sunday') {
            weeks = WEEK_CHK_FOR_SUNDAY;
        }
        this.setData({
            weeks
        });

        if (!this.data.bgColor) {
            let bgColor = hexToRGBA(COLOR.THEME_COLOR, 0.15);
            this.setData({
                bgColor
            });
        }
    },
    methods: {
        init() {
            const {selectionMode, defaultValue, startDate, endDate} = this.data;

            if (selectionMode == 'single') {
                let day = defaultValue;
                if (!day) {
                    day = this.formatDate(new Date());
                }

                this.dealDays(day);

                if (defaultValue) {
                    this.setData({
                        value: defaultValue
                    });
                }
            } else if (selectionMode == 'range') {
                if (startDate && endDate) {
                    let startStr = startDate.replace(/-/g, '/');
                    let start = this.dealDate(startStr);
                    let endStr = endDate.replace(/-/g, '/');
                    let endDay = this.dealDate(endStr);
                    this.setData({
                        start: start,
                        end: endDay,
                    });

                    this.dealDays(startStr);
                } else {
                    let day = this.formatDate(new Date());
                    this.dealDays(day);
                }
            }
        },

        // 日期分解
        dealDate(dateStr) {
            dateStr = dateStr.replace(/-/g, '/');
            let date = new Date(dateStr);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day =  date.getDate();

            let lastDay = new Date(year, month, 0);

            let obj = {
                year: year,
                month: month,
                monthStr: month < 10 ? `0${month}` : month,
                day: day,
                dayStr: day < 10 ? `0${day}` : day,
                week: date.getDay(),
                days: lastDay.getDate(),
                dates: date
            };

            // 农历
            if (this.data.showLunar || this.data.showSolarTerm || this.data.showFestival) {
                let lunars = this.dealLunar(obj);
                obj = {...obj, ...lunars}
            }

            let value = this.data.value || this.data.defaultValue;

            if (value == `${obj.year}-${obj.monthStr}-${obj.dayStr}`) {
                obj.checked = true;
            }

            obj.id = `${obj.year}${obj.month}${obj.day}`;

            return obj;
        },

        // 农历处理
        dealLunar(date) {
            let obj = {};

            // 初始化农历
            const lunars = lunisolar(`${date.year}/${date.month}/${date.day}`);

            // 农历
            let lunarDay = '';
            if (this.data.showLunar) {
                lunarDay = lunars.lunar.getDayName(); // 农历日
                if (lunarDay == '初一') {
                    lunarDay = lunars.lunar.getMonthName(); // 农历月
                }
            }
            
            // 节气
            let solarTerm = '';
            if (this.data.showSolarTerm) {
                solarTerm = lunars.solarTerm?.toString();
                if (solarTerm) {
                    obj.solarTerm = true;
                    obj.color = this.data.themeColor || COLOR.THEME_COLOR;
                }
            }

            // 节日
            let festival = '';
            if (this.data.showFestival) {
                festival = lunars.markers?.toString();
                if (festival) {
                    obj.festival = true;
                    obj.color = this.data.themeColor || COLOR.THEME_COLOR;
                }
            }

            obj.label = festival || solarTerm || lunarDay;

            return obj;
        },

        // 具体天数处理
        dealDays(dateStr) {
            let {weekStartsOn, selectionMode, start, end} = this.data;
            let date = this.dealDate(dateStr);

            // 每一天数据
            let dayArr = [];
            for(let i = 1; i <= date.days; i++) {
                let day = i < 10 ? `0${i}` : i;
                let obj = this.dealDate(`${date.year}-${date.monthStr}-${day}`);
                dayArr.push(obj);
            }

            // 计算空缺日期
            let emptys = 0;
            if (weekStartsOn == 'Sunday' && dayArr[0].week !== 0) {
                emptys = dayArr[0].week;
            } else if (weekStartsOn == 'Monday' && dayArr[0].week !== 1) {
                emptys = dayArr[0].week - 1;
                if (emptys < 0) {
                    emptys = 6;
                }
            }
            
            // 补齐上个月
            let prevYear = date.year;
            let prevMonth = date.month - 1;
            if (prevMonth < 1) {
                prevMonth = 12;
                prevYear = date.year - 1;
            }
            let prevDate = this.dealDate(`${prevYear}-${prevMonth}-01`);
            let prevDays = prevDate.days;
            for (let i = 0; i < emptys; i++) {
                let prev = this.dealDate(`${prevYear}-${prevMonth}-${prevDays}`);
                prev.prev = true;
                prevDays--;
                dayArr.unshift(prev);
            }

            // 补齐下个月
            if (dayArr.length < 42) {
                let lens = 42 - dayArr.length;
                let nextYear = date.year;
                let nextMonth = date.month + 1;
                if (nextMonth > 12) {
                    nextMonth = 1;
                    nextYear = date.year + 1;
                }
                let nextDays = 1;
                for (let i = 0; i < lens; i++) {
                    let next = this.dealDate(`${nextYear}-${nextMonth}-${nextDays}`);
                    next.next = true;
                    nextDays++;
                    dayArr.push(next);
                }
            }
            
            let currentYear = this.formatDate(date.dates, 'YYYY');
            let currentMonth = this.formatDate(date.dates, 'YYYY-MM');
            let currentMonthStr = this.formatDate(date.dates, 'YYYY年M月');
            let currentYearMonth = this.formatDate(date.dates, 'YYYY-MM');

            let now = this.formatDate(new Date());
            now = this.dealDate(now);

            if (selectionMode == 'range') {
                if (start && end) {
                    let startDayStr = `${start.year}/${start.month}/${start.day}`;
                    let endDayStr = `${end.year}/${end.month}/${end.day}`;

                    dayArr.forEach((item) => {
                        let checkDayStr = `${item.year}/${item.month}/${item.day}`;
                        let isIn = this.isDateBetween(startDayStr, endDayStr, checkDayStr);
                        if (isIn) {
                            item.range = true;
                        }

                        if (startDayStr == checkDayStr) {
                            item.start = true;
                            item.checked = true;
                        }
                        if (endDayStr == checkDayStr) {
                            item.end = true;
                            item.checked = true;
                        }
                    });
                }

                dayArr.forEach((item) => {
                    let checkDayStr = `${item.year}/${item.month}/${item.day}`;
                    item.disabled = this.isDateDisabled(checkDayStr);
                });
            } else if (selectionMode == 'single') {
                dayArr.forEach((item) => {
                    let checkDayStr = `${item.year}/${item.month}/${item.day}`;
                    item.disabled = this.isDateDisabled(checkDayStr);
                });
            }

            this.setData({
                dayArr,
                currentYear,
                currentMonth,
                currentMonthStr,
                currentYearMonth,
                now: now,
                nowStr: `${now.year}${now.month}${now.day}`, // 今天
                days: date,
            });
        },

        formatDate(date, format = 'YYYY-MM-DD') {
            const options = {
                'YYYY': date.getFullYear(),
                'MM': ('0' + (date.getMonth() + 1)).slice(-2),
                'DD': ('0' + date.getDate()).slice(-2),
                'HH': ('0' + date.getHours()).slice(-2),
                'mm': ('0' + date.getMinutes()).slice(-2),
                'ss': ('0' + date.getSeconds()).slice(-2),
                'M': String(date.getMonth() + 1).slice(-2),
                'D': String(date.getDate()).slice(-2),
                'H': String(date.getHours()).slice(-2),
                'm': String(date.getMinutes()).slice(-2),
                's': String(date.getSeconds()).slice(-2),
            };

            return format.replace(/(YYYY|MM|DD|HH|mm|ss|M|D|H|m|s)/g, (match) => options[match]);
        },

        handleMask() {
            if (this.data.isCloseMask) {
                // 恢复成当前日期的状态
                let nowDay = this.formatDate(new Date());
                this.dealDays(nowDay);

                this.setData({
                    visible: false
                });
                this.triggerEvent("calendar_close", {type: 'close'});
            }
        },
        handleCancel() {
            // 恢复成当前日期的状态
            let nowDay = this.formatDate(new Date());
            this.dealDays(nowDay);

            this.setData({
                visible: false
            });
            this.triggerEvent("calendar_close", {type: 'cancel'});
        },
        handleConfirm() {
            let {value, start, end, selectionMode} = this.data;
            if (selectionMode == 'single') {
                if (value) {
                    this.triggerEvent("calendar_confirm", {type: 'single', value: value});
                }
            } else if (selectionMode == 'range') {
                if (start && end) {
                    this.triggerEvent("calendar_confirm", {type: 'range', start: `${start.year}-${start.monthStr}-${start.dayStr}`, end: `${end.year}-${end.monthStr}-${end.dayStr}`});
                } else if (start && !end) {
                    wx.showToast({
                        title: '请选择结束日期',
                        icon: 'none'
                    });
                    return;
                }
            }
            
            this.setData({
                visible: false
            });
        },
        handlePrevYear() {
            let {days} = this.data;
            let prevYear = days.year - 1;
            let prevMonthStr = `${prevYear}-${days.month}-01`;
            this.dealDays(prevMonthStr);
        },
        handlePrevMonth() {
            let {days} = this.data;

            let prevYear = days.year;
            let prevMonth = days.month - 1;
            if (prevMonth < 1) {
                prevMonth = 12;
                prevYear = days.year - 1;
            }

            let prevMonthStr = `${prevYear}-${prevMonth}-01`;
            this.dealDays(prevMonthStr);
        },
        handleNextMonth() {
            let {days} = this.data;

            let nextYear = days.year;
            let nextMonth = days.month + 1;
            if (nextMonth > 12) {
                nextMonth = 1;
                nextYear = days.year + 1;
            }

            let nextMonthStr = `${nextYear}-${nextMonth}-01`;
            this.dealDays(nextMonthStr);
        },
        handleNextYear() {
            let {days} = this.data;
            let nextYear = days.year + 1;
            let nextMonthStr = `${nextYear}-${days.month}-01`;
            this.dealDays(nextMonthStr);
        },
        handleMonthChange(e) {
            let currentMonthStr = `${e.detail.value}-01`;
            this.dealDays(currentMonthStr);
        },
        handleDay(e) {
            let {idx, item = {}, prev, next} = e.currentTarget.dataset;
            let {selectionMode, dayArr = [], start, end} = this.data;

            if (item.disabled) {
                wx.showToast({
                    title: '该日期不可选择',
                    icon: 'none'
                });
                return;
            }

            if (selectionMode === 'single') {
                if (prev) {
                    this.setData({
                        value: `${item.year}-${item.monthStr}-${item.dayStr}`
                    });
                    this.handlePrevMonth();
                } else if (next) {
                    this.setData({
                        value: `${item.year}-${item.monthStr}-${item.dayStr}`
                    });
                    this.handleNextMonth();
                } else {
                    let checked = dayArr[idx].checked;
                    dayArr.forEach((item) => {
                        item.checked = false;
                    });
                    dayArr[idx].checked = !checked;

                    this.setData({
                        dayArr: [...dayArr],
                        value: dayArr[idx].checked ? `${item.year}-${item.monthStr}-${item.dayStr}` : ''
                    });
                }
            } else if (selectionMode === 'range') {
                // 有开始和结束，取消选择，重新设置开始
                if (start && end) {
                    dayArr.forEach((item) => {
                        item.start = false;
                        item.end = false;
                        item.range = false;
                        item.checked = false;
                    });
                    dayArr[idx].start = true;
                    dayArr[idx].checked = true;
                    start = dayArr[idx];
                    end = null;
                } else if (!start) {
                    // 设置开始
                    dayArr[idx].start = true;
                    dayArr[idx].checked = true;
                    start = dayArr[idx];
                } else if (!end) {
                    // 设置结束
                    dayArr[idx].end = true;
                    dayArr[idx].checked = true;
                    end = dayArr[idx];
                }

                // 如果结束在开始之前，则位置互换
                let startDay = `${start.year}${start.monthStr}${start.dayStr}`;
                let endDay = end && end.year && `${end.year}${end.monthStr}${end.dayStr}`;
                if (start && end && endDay < startDay) {
                    let temp = start;
                    start = end;
                    end = temp;

                    dayArr.forEach((item) => {
                        item.start = false;
                        item.end = false;
                        item.range = false;
                        item.checked = false;
                    });

                    dayArr.forEach((item) => {
                        if (item.month == start.month && item.day == start.day) {
                            item.start = true;
                            item.checked = true;
                        } else if (item.month == end.month && item.day == end.day) {
                            item.end = true;
                            item.checked = true;
                        }
                    });
                }

                // 处理 开始/结束 之间的范围
                if (start && end) {
                    let startDayStr = `${start.year}/${start.month}/${start.day}`;
                    let endDayStr = `${end.year}/${end.month}/${end.day}`;

                    dayArr.forEach((item) => {
                        let checkDayStr = `${item.year}/${item.month}/${item.day}`;
                        let isIn = this.isDateBetween(startDayStr, endDayStr, checkDayStr);
                        if (isIn) {
                            item.range = true;
                        }
                    });
                }

                this.setData({
                    start,
                    end,
                    dayArr: [...dayArr],
                });
            }
        },
        // 检查日期是否在开始日期和结束日期之间
        isDateBetween(startDate, endDate, checkDate) {
            startDate = new Date(startDate);
            endDate = new Date(endDate);
            checkDate = new Date(checkDate);

            // 将日期转换为时间戳（毫秒数）
            const startTimestamp = startDate.getTime();
            const endTimestamp = endDate.getTime();
            const checkTimestamp = checkDate.getTime();

            return checkTimestamp >= startTimestamp && checkTimestamp <= endTimestamp;
        },
        // 检查日期是否被禁用
        isDateDisabled(checkDate) {
            let {min, max} = this.data;
            checkDate = new Date(checkDate);

            if (min && max) {
                min = min.replace(/-/g, '/');
                max = max.replace(/-/g, '/');
                let minDate = new Date(`${min} 00:00:00`);
                let maxDate = new Date(`${max} 00:00:00`);
                return checkDate >= minDate && checkDate <= maxDate ? false : true;
            } else if (min && !max) {
                min = min.replace(/-/g, '/');
                let minDate = new Date(`${min} 00:00:00`);
                return checkDate >= minDate ? false : true;
            } else if (!min && max) {
                max = max.replace(/-/g, '/');
                let maxDate = new Date(`${max} 00:00:00`);
                return checkDate <= maxDate ? false : true;
            }
            return false;
        }
    }
});
