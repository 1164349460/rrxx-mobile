import Vue from "vue"

import moment from "moment"



//长时间 YYYY-MM-DD HH:mm
Vue.filter("time", function (value, formatString) {
    formatString = formatString || "YYYY-MM-DD HH:mm";
    return moment(value).format(formatString);
})

//短时间 YYYY-MM-DD
Vue.filter("shorttime", function (value, formatString) {
    formatString = formatString || "YYYY-MM-DD";
    return moment(value).format(formatString);
})

// 时间  YYYY-MM-DD HH:mm 
Vue.filter("newTime", function (value, formatString) {
    formatString = formatString || "MM-DD HH:mm";
    return moment(value).format(formatString);
})

// 时间  YYYY-MM
Vue.filter("yearTime", function (value, formatString) {
    formatString = formatString || "YYYY-MM";
    return moment(value).format(formatString);
})

// 时间
Vue.filter("oneTime", function (value, formatString) {
    formatString = formatString || "HH:mm";
    return moment(value).format(formatString);
})

Vue.filter('secondsTime', function (value, formatString) {
    formatString = formatString || "HH:mm:ss";
    return moment(value).format(formatString);
})

// 字符串为空时
Vue.filter('emptyString', function (value) {
    return !!value ? value : "--";
})
//数字为空时
Vue.filter('emptyNumber', function (value) {
    return !!value ? value : "0";
})


// 去除字符串null
Vue.filter('filtNull', function (value) {
    return value.replace('null', '');
})

//手机号码加密
Vue.filter('formatPhone', function (value) {
    if (value) {
        return value.substring(0, 3) + '*****' + value.substring(value.length - 2);
    }
})

//html回车转换
Vue.filter('htmlFormat', function (value) {
    if (value) {
        return value.replace(/\n/g, '<br/>');
    }
})

// 性别
Vue.filter("sexStatus", function (value) {
    let data = "";
    let val = "" + value;
    switch (val) {
        case "1":
            data = "女";
            break;
        case "0":
            data = "男";
            break;
    }
    return data;
});
