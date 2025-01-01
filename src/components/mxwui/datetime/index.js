import {COLOR, hexToRGBA} from '../utils/common';

Component({
    properties: {
        // 是否显示
        visible: {
            type: Boolean,
            value: false,
            observer(newVal) {
                if (newVal) {
                    this.init();
                }
            }
        },
        // 默认时间 YYYY-MM-DD HH:mm
        value: {
            type: String,
            value: ''
        },
        // 最小可选时间  YYYY-MM-DD HH:mm
        // min: {
        //     type: String,
        //     value: ''
        // },
        // 最大可选时间  YYYY-MM-DD HH:mm
        // max: {
        //     type: String,
        //     value: ''
        // },
        // 分钟步长
        minuteStep: {
            type: Number,
            value: 1
        },
        // 是否显示年
        showYear: {
            type: Boolean,
            value: true
        },
        // 是否显示小时
        showHour: {
            type: Boolean,
            value: true
        },
        // 是否显示分
        showMinute: {
            type: Boolean,
            value: true
        },
        // 是否显示秒
        showSeconds: {
            type: Boolean,
            value: false
        },
        // 年-文案
        yearSuffix: {
            type: String,
            value: '年'
        },
        // 月-文案
        monthSuffix: {
            type: String,
            value: '月'
        },
        // 日-文案
        daySuffix: {
            type: String,
            value: '日'
        },
        // 小时-文案
        hourSuffix: {
            type: String,
            value: '时'
        },
        // 分钟-文案
        minuteSuffix: {
            type: String,
            value: '分'
        },
        // 秒-文案
        secondsSuffix: {
            type: String,
            value: '秒'
        },
        // 最小年份限制
        minYearLimit: {
            type: Number,
            value: 1970
        },
        // 最大年份限制
        maxYearLimit: {
            type: Number,
            value: ''
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
    },
    ready() {        
        if (!this.data.bgColor) {
            let bgColor = hexToRGBA(COLOR.THEME_COLOR, 0.15);
            this.setData({
                bgColor
            });
        }

        this.MONTH = 12;
        this.HOUR = 24;
        this.MINUTE = 60;
        this.SECONDS = 60;
    },
    methods: {
        init() {
            // console.log(' ');
            // console.log('=-= ------------------------------------------- =-=');
            let {showYear, showHour, showMinute, showSeconds, minYearLimit, maxYearLimit, value, min, max, minuteStep} = this.data;

            let nowDate = this.dealDate(value, 'init now');
            // console.log('init nowDate', nowDate);

            // 年份限制
            minYearLimit = minYearLimit || 1970;
            maxYearLimit = maxYearLimit || nowDate.year + 20;

            // 最小日期处理
            // let minDate = {};
            // if (min) {
            //     minDate = this.dealDate(min, 'init min');
            //     console.log('init minDate:', minDate);
            //     minYearLimit = minDate.year;
            // }

            // 最大日期处理
            // let maxDate = {};
            // if (max) {
            //     maxDate = this.dealDate(max, 'init max');
            //     console.log('init maxDate:', maxDate);
            //     maxYearLimit = maxDate.year;
            // }

            // 年
            let years = [];
            let currentYearIndex = 0;
            if (showYear) {
                let year = this.dealYear(nowDate, minYearLimit, maxYearLimit);
                years = year.list;
                currentYearIndex = year.currentYearIndex;
            }
            
            // 月
            let months = [];
            let currentMonthIndex = 0;

            // 日
            let days = [];
            let currentDayIndex = 0;

            // 时
            let hours = [];
            let currentHourIndex = 0;

            // 分
            let minutes = [];
            let currentMinuteIndex = 0;

            // 秒
            let seconds = [];
            let currentSecondsIndex = 0;

            if (min && max) {
                // let nowStr = `${nowDate.year}${nowDate.month}${nowDate.day}${nowDate.hour}${nowDate.minute}`;
                // let minStr = `${minDate.year}${minDate.month}${minDate.day}${minDate.hour}${minDate.minute}`;
                // let maxStr = `${maxDate.year}${maxDate.month}${maxDate.day}${maxDate.hour}${maxDate.minute}`;

                // if (nowDate.month > minDate.month && nowDate.month < maxDate.month) {
                //     console.log('🌹 limit 当前月在最小最大之间');

                // } else if (nowDate.month == minDate.month && nowDate.month == maxDate.month) {
                //     console.log('🌹 limit 当前月等于最小最大');
                // } else if (nowDate.month <= minDate.month && nowDate.month < maxDate.month) {
                //     console.log('🌹 limit 当前月小于等于最小 当前月小于最大');
                // }
                // if (nowDate.month == minDate.)
            } else if (min) {
                // console.log('init min 月 最小');
                // months = this.dealMonth('min', {min: minDate, now: nowDate}) || [];
                // currentMonthIndex = this.dealIdx(months, nowDate.month - minDate.month);

                // if (nowDate.month > minDate.month) {
                //     console.log('🚀 min 当前月大于最小月');
                //     console.log('init min 日 正常');
                //     days = this.dealDay('normal', {year: nowDate.year, month: nowDate.month, now: nowDate}) || [];
                //     currentDayIndex = this.dealIdx(days, nowDate.day);

                //     if (showHour) {
                //         console.log('init min 时 正常');
                //         hours = this.dealHour('normal', {now: nowDate, now: nowDate}) || [];
                //         currentHourIndex = this.dealIdx(hours, nowDate.hour);
                //     }

                //     if (showMinute) {
                //         console.log('init min 分 正常');
                //         minutes = this.dealMinute('normal', {now: nowDate, now: nowDate}) || [];
                //         currentMinuteIndex = this.dealIdx(minutes, nowDate.minute);
                //     }
                // } else {
                //     console.log('🚀 min 当前月小于等于最小月');
                //     console.log('init min 日 最小');
                //     days = this.dealDay('min', {min: minDate, now: nowDate});
                //     currentDayIndex = this.dealIdx(days, nowDate.day - minDate.day);

                //     if (nowDate.day > minDate.day) {
                //         console.log('🚀 min 当前日大于最小日');
                //         if (showHour) {
                //             console.log('init min 时 正常');
                //             hours = this.dealHour('normal', {now: nowDate, now: nowDate}) || [];
                //             currentHourIndex = this.dealIdx(hours, nowDate.hour);
                //         }

                //         if (showMinute) {
                //             console.log('init min 分 正常');
                //             minutes = this.dealMinute('normal', {now: nowDate, now: nowDate}) || [];
                //             currentMinuteIndex = this.dealIdx(minutes, nowDate.minute);
                //         }
                //     } else {
                //         console.log('🚀 min 当前日小于等于最小日');
                //         if (showHour) {
                //             console.log('init min 时 最小');
                //             hours = this.dealHour('min',{min: minDate, now: nowDate}) || [];
                //             currentHourIndex = this.dealIdx(hours, nowDate.hour - minDate.hour);

                //             if (nowDate.hour > minDate.hour) {
                //                 console.log('🚀 min 当前时大于最小时');
                //                 if (showMinute) {
                //                     console.log('init min 分 正常');
                //                     minutes = this.dealMinute('normal', {now: nowDate, now: nowDate}) || [];
                //                     currentMinuteIndex = this.dealIdx(minutes, nowDate.minute);
                //                 }
                //             } else {
                //                 if (showMinute) {
                //                     console.log('init min 分 最小');
                //                     minutes = this.dealMinute('min', {min: minDate, now: nowDate}) || [];
                //                     currentMinuteIndex = this.dealIdx(minutes, nowDate.minute - minDate.minute);
                //                 }
                //             }
                //         }
                //     }
                // }
            } else if (max) {
                // if (nowDate.year < maxDate.year) {
                //     console.log('🚗 max 当前年小于最大年');

                //     console.log('init max 月 正常');
                //     months = this.dealMonth('normal', {now: nowDate, now: nowDate});
                    
                //     console.log('init max 日 正常');
                //     days = this.dealDay('normal', {year: nowDate.year, month: nowDate.month, now: nowDate});

                //     if (showHour) {
                //         console.log('init max 时 正常');
                //         hours = this.dealHour('normal', {now: nowDate, now: nowDate}) || [];
                //     }

                //     if (showMinute) {
                //         console.log('init max 分 正常');
                //         minutes = this.dealMinute('normal', {now: nowDate, now: nowDate}) || [];
                //     }
                // } else {
                //     console.log('🚗 max 当前年大于等于最大年');
                //     console.log('init max 月 最大');
                //     months = this.dealMonth('max', {max: maxDate, now: nowDate}) || [];

                //     if (nowDate.month < maxDate.month) {
                //         console.log('🚗 max 当前月小于最大月');
                //         console.log('init max 日 正常');
                //         days = this.dealDay('normal', {year: nowDate.year, month: nowDate.month, now: nowDate});

                //         if (showHour) {
                //             console.log('init max 时 正常');
                //             hours = this.dealHour('normal', {now: nowDate, now: nowDate}) || [];
                //         }

                //         if (showMinute) {
                //             console.log('init max 分 正常');
                //             minutes = this.dealMinute('normal', {now: nowDate, now: nowDate}) || [];
                //         }
                //     } else {
                //         console.log('🚗 max 当前月大于等于最大月');
                //         console.log('init max 日 最大');
                //         days = this.dealDay('max', {max: maxDate, now: nowDate});

                //         if (nowDate.day < maxDate.day) {
                //             console.log('🚗 max 当前日小于最大日');

                //             if (showHour) {
                //                 console.log('init max 时 正常');
                //                 hours = this.dealHour('normal', {now: nowDate, now: nowDate}) || [];
                //             }

                //             if (showMinute) {
                //                 console.log('init max 分 正常');
                //                 minutes = this.dealMinute('normal', {now: nowDate, now: nowDate}) || [];
                //             }
                //         } else {
                //             console.log('🚗 max 当前日大于等于最大日');

                //             if (showHour) {
                //                 console.log('init max 时 最大');
                //                 hours = this.dealHour('max', {max: maxDate, now: nowDate});

                //                 if (nowDate.hour < maxDate.hour) {
                //                     console.log('🚗 max 当前时小于最大时');
                //                     if (showMinute) {
                //                         console.log('init max 分 正常');
                //                         minutes = this.dealMinute('normal', {now: nowDate, now: nowDate}) || [];
                //                     }
                //                 } else {
                //                     console.log('🚗 max 当前时大于等于最大时');
                //                     if (showMinute) {
                //                         console.log('init max 分 最大');
                //                         minutes = this.dealMinute('max', {max: maxDate, now: nowDate});
                //                     }
                //                 }
                //             }
                //         }
                //     }
                // }
                // currentMonthIndex = this.dealIdx(months, nowDate.month);
                // currentDayIndex = this.dealIdx(days, nowDate.day);
                // currentHourIndex = this.dealIdx(hours, nowDate.hour);
                // currentMinuteIndex = this.dealIdx(minutes, nowDate.minute);
            } else {
                // console.log('init normal 月 正常');
                months = this.dealMonth('normal', {now: nowDate, now: nowDate}) || [];
                currentMonthIndex = this.dealIdx(months, nowDate.month);
                // console.log('init normal 日 正常');
                days = this.dealDay('normal', {year: nowDate.year, month: nowDate.monthStr, now: nowDate}) || [];
                // console.log('days', days);
                currentDayIndex = this.dealIdx(days, nowDate.day, 'day');
                // console.log('=-= 🚀 currentDayIndex', currentDayIndex);
                if (showHour) {
                    // console.log('init normal 时 正常');
                    hours = this.dealHour('normal') || [];
                    currentHourIndex = this.dealIdx(hours, nowDate.hour);
                }

                if (showMinute) {
                    // console.log('init normal 分 正常');
                    minutes = this.dealMinute('normal') || [];
                    // console.log('minutes', minutes);
                    // console.log('nowDate.minute', nowDate.minute);
                    currentMinuteIndex = this.dealIdx(minutes, nowDate.minute);
                }

                if (showSeconds) {
                    seconds = this.dealSeconds('normal') || [];
                    // console.log('seconds', seconds);
                    // console.log('nowDate.seconds', nowDate.seconds);
                    currentSecondsIndex = this.dealIdx(seconds, nowDate.seconds);
                }
            }
            // console.log('init months', months);
            // console.log('init days', days);
            // console.log('init hours', hours);
            // console.log('init minutes', minutes);
            
            // 默认选中
            let currentIndex = [];
            if (showYear) {
                currentIndex.push(currentYearIndex);
            }
            currentIndex.push(currentMonthIndex);
            currentIndex.push(currentDayIndex);
            if (showHour) {
                currentIndex.push(currentHourIndex);
            }
            if (showHour && showMinute) {
                currentIndex.push(currentMinuteIndex);
            }
            if (showHour && showMinute && showSeconds) {
                currentIndex.push(currentSecondsIndex);
            }

            // console.log('🔥🔥🔥 初始化 currentIndex：', currentIndex);
            // console.log('🔥🔥🔥 初始化：currentYearIndex：', currentYearIndex);
            // console.log('🔥🔥🔥 初始化：currentMonthIndex：', currentMonthIndex);
            // console.log('🔥🔥🔥 初始化：currentDayIndex：', currentDayIndex);
            // console.log('🔥🔥🔥 初始化：currentHourIndex：', currentHourIndex);
            // console.log('🔥🔥🔥 初始化：currentMinuteIndex：', currentMinuteIndex);
            // console.log(`🔥🔥🔥 初始化：${years[currentYearIndex]}年-${months[currentMonthIndex]}月-${days[currentDayIndex]}日 ${hours[currentHourIndex]}时:${minutes[currentMinuteIndex]}分；currentIndex：${currentIndex}`);

            this.setData({
                years,
                months,
                days,
                hours,
                minutes,
                seconds,
                currentYearIndex,
                currentMonthIndex,
                currentDayIndex,
                currentHourIndex,
                currentMinuteIndex,
                currentSecondsIndex,
            }, () => {
                setTimeout(() => {
                    this.setData({
                        currentIndex: currentIndex,
                    });
                }, 100)
            });
        },

        changeIdx(e) {
            let {value} = e.detail;
            // console.log('=-= value', value);
            const {showYear, showHour, showMinute, showSeconds, years = [],  min, max} = this.data;
            let {months = [], days = [], hours = [], minutes = [], seconds = [], currentIndex, currentYearIndex, currentMonthIndex, currentDayIndex, currentHourIndex, currentMinuteIndex, maxYearLimit, minYearLimit} = this.data;

            let curYearIndex = 0;
            let curMonthIndex = 0;
            let curDayIndex = 0;
            let curHourIndex = 0;
            let curMinuteIndex = 0;
            let curSecondsIndex = 0;

            if (value.length == 6) {
                curYearIndex = value[0];
                curMonthIndex = value[1];
                curDayIndex = value[2];
                curHourIndex = value[3];
                curMinuteIndex = value[4];
                curSecondsIndex = value[5];
            } else if (value.length == 5) {
                if (showYear) {
                    curYearIndex = value[0];
                    curMonthIndex = value[1];
                    curDayIndex = value[2];
                    curHourIndex = value[3];
                    curMinuteIndex = value[4];
                } else if (showSeconds) {
                    curMonthIndex = value[0];
                    curDayIndex = value[1];
                    curHourIndex = value[2];
                    curMinuteIndex = value[3];
                    curSecondsIndex = value[4];
                }
            } else if (value.length == 4) {
                curMonthIndex = value[0];
                curDayIndex = value[1];
                curHourIndex = value[2];
                curMinuteIndex = value[3];
            } else if (value.length == 2) {
                curMonthIndex = value[0];
                curDayIndex = value[1];
            } else if (value.length == 3 && showYear) {
                curYearIndex = value[0];
                curMonthIndex = value[1];
                curDayIndex = value[2];
            } else if (value.length == 3 && showHour) {
                curMonthIndex = value[0];
                curDayIndex = value[1];
                curHourIndex = value[2];
            }

            // 最小日期处理
            // let minDate = {};
            // if (min) {
            //     minDate = this.dealDate(min, 'change min');
            //     console.log('change minDate:', minDate);
            // }

            // 最大日期处理
            // let maxDate = {};
            // if (max) {
            //     maxDate = this.dealDate('max', 'change max');
            //     console.log('change maxDate', maxDate);
            // }

            // 判断可用范围
            let nowYear = years[curYearIndex];
            let nowMonth = months[curMonthIndex] - 1;
            let nowDay = days[curDayIndex];
            let nowHour = hours[curHourIndex];
            // console.log('🚀🚀 nowYear', nowYear);
            // console.log('🚀🚀 nowMonth', nowMonth);
            // console.log('🚀🚀 nowDay', nowDay);
            // console.log('🚀🚀 nowHour', nowHour);
            if (min && max) {
                // console.log('change 最小最大之间');
                // Todo
            } else if (min) {
                // console.log('change 最小');
                // if (nowYear > minDate.year) {
                //     console.log('change 当前年大于最小年');

                //     // 月 正常
                //     months = this.dealMonth('normal') || [];

                //     // 日 正常
                //     days = this.dealDay('normal', {year: nowYear, month: nowMonth}) || [];

                //     // 时 正常
                //     hours = this.dealHour('normal') || [];

                //     // 分 正常
                //     minutes = this.dealMinute('normal') || [];
                // } else {
                //     console.log('change 当前年等于小于最小年');
                //     if (nowYear == minDate.year && nowMonth != minDate.month) {
                //         // 月 最小
                //         months = this.dealMonth('min', {min: minDate}) || [];
                //         curMonthIndex = 0;
                //     }
                    
                //     if (nowMonth > minDate.month) { 
                //         console.log('change 当前月大于最小月');
                //         // 日 正常
                //         days = this.dealDay('normal', {year: nowYear, month: nowMonth}) || [];
                //         // curDayIndex = 0;

                //         // 时 正常
                //         hours = this.dealHour('normal') || [];
                //         // curHourIndex = 0;

                //         // 分 正常
                //         minutes = this.dealMinute('normal') || [];
                //         // curMinuteIndex = 0;
                //     } else {
                //         console.log('change 当前月小于等于最小月');
                //         // 日 最小
                //         days = this.dealDay('min', {min: minDate}) || [];
                //         curDayIndex = 0;

                //         if (nowDay > minDate.day) {
                //             console.log('change 当前日大于最小日');
                //         } else {
                //             console.log('change 当前日小于等于最小日');
                //         }
                //     }
                // }   
            } else if (max) {
                // console.log('change 最大');

            } else {
                // console.log('change 正常');
                // console.log(currentMonthIndex, curMonthIndex);
                // 月份变更 天数重新渲染
                if (currentYearIndex != curYearIndex || currentMonthIndex != curMonthIndex) {
                    let year = years[curYearIndex];
                    if (!year) {
                        let now = new Date();
                        year = now.getFullYear();
                    }

                    let days = this.dealDay('normal', {year: year, month: months[curMonthIndex]});
                    this.setData({
                        days
                    });
                    if (curDayIndex > days.length) {
                        curDayIndex = 0;
                    }
                }
            }

            let curIndex = [];
            if (showYear) {
                curIndex.push(curYearIndex);
            }
            curIndex.push(curMonthIndex);
            curIndex.push(curDayIndex);
            if (showHour) {
                curIndex.push(curHourIndex);
            }
            if (showMinute) {
                curIndex.push(curMinuteIndex);
            }
            if (showSeconds) {
                curIndex.push(curSecondsIndex);
            }

            // console.log('🚀🚀 curIndex', curIndex);

            this.setData({
                months,
                days,
                hours,
                minutes,
                currentIndex: curIndex,
                currentYearIndex: curYearIndex,
                currentMonthIndex: curMonthIndex,
                currentDayIndex: curDayIndex,
                currentHourIndex: curHourIndex,
                currentMinuteIndex: curMinuteIndex,
                currentSecondsIndex: curSecondsIndex
            }, () => {
                // console.log('🚀🚀 this.data', this.data);
            });
        },
        // 日期分解
        dealDate(dateStr, t) {
            // console.log('deal dateStr：', dateStr);
            const {showYear, showHour, showMinute, showSeconds} = this.data;
            let date = new Date();
            if (dateStr) {
                // console.log(`🔥🔥 ${t} value`, dateStr);
                if (!showYear) {
                    dateStr = `${date.getFullYear()}-${dateStr}`;
                }
                if (!showHour) {
                    dateStr = `${dateStr} 00`;
                }
                if (!showMinute) {
                    dateStr = `${dateStr}:00`;
                }
                if (showSeconds) {
                    dateStr = `${dateStr}:00`;
                }
                dateStr = dateStr.replace(/-/g, '/');
                // console.log(`🔥🔥 ${t} value2`, dateStr);
                date = new Date(dateStr);
            }

            let year = date.getFullYear();
            let month = date.getMonth();
            let lastDay = new Date(year, month + 1, 0);
            let dayLimit = lastDay.getDate();

            return {
                year: year,
                month: month,
                monthStr: month + 1,
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                seconds: date.getSeconds(),
                dayLimit: dayLimit
            }
        },
        // 年处理
        dealYear(date, minYearLimit, maxYearLimit) {
            const {showYear} = this.data;
            let years = [];
            let currentYearIndex = 0;
            if (showYear) {
                let yearLimit = (maxYearLimit - minYearLimit) + 1;
                for (let i = 0; i < yearLimit; i++) {
                    let year = i + minYearLimit;
                    years.push(year);

                    if (date.year == year) {
                        currentYearIndex = i;
                    }
                }
            }
            return {
                list: years,
                currentYearIndex
            };
        },
        // 月份处理
        dealMonth(type, options = {}) {
            let months = [];
            if (type == 'min') {
                for (let i = options.min.month; i < this.MONTH; i++) {
                    let month = i + 1;
                    months.push(month);
                }
            } else if (type == 'max') {
                for (let i = 0; i <= options.max.month; i++) {
                    let month = i + 1;
                    months.push(month);
                }
            } else if (type == 'limit') {
                for (let i = options.min.month; i < options.max.month; i++) {
                    let month = i + 1;
                    months.push(month);
                }
            } else {
                for (let i = 0; i < this.MONTH; i++) {
                    let month = i + 1;
                    months.push(month);
                }
            }
            return months;
        },
        // 日处理
        dealDay(type, options = {}) {
            let days = [];
            if (type == 'min') {
                for (let i = options.min.day; i < options.min.dayLimit; i++) {
                    let day = i;
                    days.push(day);
                }
            } else if (type == 'max') {
                for (let i = 0; i <= options.max.day; i++) {
                    let day = i;
                    days.push(day);
                }
            } else if (type == 'limit') {
                for (let i = options.min.day; i <= options.max.day; i++) {
                    let day = i;
                    days.push(day);
                }
            } else {    
                let lastDay = new Date(options.year, options.month, 0);
                let dayLimit = lastDay.getDate();
                // console.log('🌛', options.year, options.month, dayLimit);
                for (let i = 0; i < dayLimit; i++) {
                    let day = i + 1;
                    days.push(day);
                }
            }
            return days;
        },
        // 时处理
        dealHour(type, options = {}) {
            let hours = [];
            if (type == 'min') {
                for (let i = options.min.hour; i < this.HOUR; i++) {
                    let hour = i;
                    hours.push(hour);
                }
            } else if (type == 'max') {
                for (let i = 0; i <= options.max.hour; i++) {
                    let hour = i;
                    hours.push(hour);
                }
            } else if (type == 'limit') {
                for (let i = options.min.hour; i <= options.max.hour; i++) {
                    let hour = i;
                    hours.push(hour);
                }
            } else {
                for (let i = 0; i < this.HOUR; i++) {
                    let hour = i;
                    hours.push(hour);
                }
            }
            return hours;
        },
        // 分处理
        dealMinute(type, options = {}) {
            const {minuteStep} = this.data;

            let minutes = [];
            if (type == 'min') {
                for (let i = options.min.minute; i < this.MINUTE; i+=minuteStep) {
                    let minute = i;
                    minutes.push(minute);
                }
            } else if (type == 'max')  {
                for (let i = 0; i <= options.max.minute; i+=minuteStep) {
                    let minute = i;
                    minutes.push(minute);
                }
            } else if (type == 'limit') {
                for (let i = options.min.minute; i <= options.max.minute; i+=minuteStep) {
                    let minute = i;
                    minutes.push(minute);
                }
            } else {
                for (let i = 0; i < this.MINUTE; i+=minuteStep) {
                    let minute = i;
                    minutes.push(minute);
                }
            }
            return minutes;
        },
        // 秒处理
        dealSeconds(type, options = {}) {

            let seconds = [];
            if (type == 'min') {
                for (let i = options.min.seconds; i < this.SECONDS; i++) {
                    let second = i;
                    seconds.push(second);
                }
            } else if (type == 'max')  {
                for (let i = 0; i <= options.max.seconds; i++) {
                    let second = i;
                    seconds.push(second);
                }
            } else if (type == 'limit') {
                for (let i = options.min.seconds; i <= options.max.seconds; i++) {
                    let second = i;
                    seconds.push(second);
                }
            } else {
                for (let i = 0; i < this.SECONDS; i++) {
                    let second = i;
                    seconds.push(second);
                }
            }
            return seconds;
        },
        dealIdx(arr, now, type) {
            let idx = 0;
            if (type == 'day') {
                now = now - 1;
            }
            for (let i = 0; i < arr.length; i++) {
                if (i == now) {
                    idx = i;
                }
            }
            return idx;
        },
        handleMask() {
            if (this.data.isCloseMask) {
                this.setData({
                    visible: false
                });
                this.triggerEvent("datetime_close", {type: 'close'});
            }
        },
        handleCancel() {
            this.setData({
                visible: false
            });
            this.triggerEvent("datetime_close", {type: 'cancel'});
        },
        handleConfirm() {
            const {years = [], months = [], days = [], hours = [], minutes = [], seconds = [], showYear, showHour, showMinute, showSeconds, currentYearIndex, currentMonthIndex, currentDayIndex, currentHourIndex, currentMinuteIndex, currentSecondsIndex} = this.data;

            let date = [];
            let time = [];

            if (showYear) {
                let year = years[currentYearIndex];
                if (year) {
                    date.push(year);
                }
            }

            let month = months[currentMonthIndex];
            if (month) {
                month = month < 10 ? `0${month}` : month;
                date.push(month);
            }

            let day = days[currentDayIndex];
            if (day) {
                day = day < 10 ? `0${day}` : day;
                date.push(day);
            }

            if (showHour) {
                let hour = hours[currentHourIndex];
                hour = hour < 10 ? `0${hour}` : hour;
                time.push(hour);
            }

            if (showMinute) {
                let minute = minutes[currentMinuteIndex];
                minute = minute < 10 ? `0${minute}` : minute;
                time.push(minute);
            }

            if (showSeconds) {
                let second = seconds[currentSecondsIndex];
                second = second < 10 ? `0${second}` : second;
                time.push(second);
            }

            let value = date.join('-');
            if (time.length) {
                value = `${value} ${time.join(':')}`;
            }

            this.setData({
                visible: false
            });
            this.triggerEvent("datetime_confirm", {value: value});
        },
    }
});
