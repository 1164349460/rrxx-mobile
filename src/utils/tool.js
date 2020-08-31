
import moment from "moment"

// 短时间
export const shortTime = function (value) {
    return moment(value).format('YYYY-MM-DD');
}

// 长时间
export const time = function (value) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss');
}

//
export const leaveTime = function (value) {
    return moment(value).format('YYYY-MM-DD HH:mm');
}

// 短时间
export const monthTime = function (value) {
    return moment(value).format('YYYY-MM');
}

// 年
export const yearTime = function (value) {
    return moment(value).format('YYYY');
}

// 时分秒
export const secondsTime = function (value) {
    return moment(value).format('HH:mm:ss');
}
export const secondShortTime = function (value) {
    return moment(value).format('HH:mm');
}
// isBefore: 判断date1是否date2之前的时间
export const isBefore = function (date1, date2) {
    return moment(date1).isBefore(date2)
}

/**  addDate: 获取几天之后的时间  days:Number 当前时间'2019/12/24',传入6,则返回'2019/12/30' 
 *  years: 'y'   quarters: 'Q'   months: 'M'   weeks: 'w'    days: 'd'  hours: 'h'
 */
export const addDate = function (date, days, key = 'd', forchart = 'YYYY/MM/DD') {
    return moment(date).add(days, key).format(forchart)
}

/** 通过减去时间来改变原始的 moment */
export const subDate = function (date, days, key = 'd', forchart = 'YYYY/MM/DD') {
    return moment(date).subtract(days, key).format(forchart)
}


// 当月第一天和最后一天   传入一个日期，返回数组['2019/12/1','2019/12/31']
export const lastDateofMonth = function (d) {
    let firstDate = moment(d).startOf('month').format('YYYY/MM/DD');
    let endDate = moment(d).endOf('month').format('YYYY/MM/DD');
    let Datearr = [];
    Datearr.push(firstDate);
    Datearr.push(endDate);
    return Datearr;
}
 

 


// 字符串
export const genderTools = function (value) {
    let data = '';
    switch (value) {
        case '0':
            data = '女'
            break;
        case '1':
            data = '男'
            break;
    }
    return data
}

 

 