// 检测验证是否通过

// 手机号验证
import { checkMobile, checkLegal, checkName, bankCard, checkEmail } from '@/utils/regular'

// 手机号
export const mobileStatus = function (value) {
    let flag = true;
    if (!value) {
        flag = false
    } else if (!checkMobile(value)) {
        flag = false
    } else {
        flag = true
    }
    return flag
}


//身份证号
export const legalStatus = function (value) {
    let flag = true;
    if (!value) {
        flag = false
    } else if (!checkLegal(value)) {
        flag = false
    } else {
        flag = true
    }
    return flag
}

// 姓名
export const nameStatus = function (value) {
    let flag = true;
    if (!vlaue) {
        flag = false
    } else if (value.length > 16) {
        flag = false
    } else if (!checkName(value)) {
        flag = false
    } else {
        flag = true
    }
    return flag;
}

// 某一项为空   面试时间/性别/学历/招聘人
export const interviewStatus = function (value) {
    let flag = true;
    if (value==='' || value===-1) {
        flag = false;
    }
    return flag;
}


// 银行卡号
export const cardStatus = function (value) {
    let flag = true;
    if (!value) {
        flag = false
    } else if (!bankCard(value)) {
        flag = false
    }
    return flag
}


// 邮箱
export const emailStatus = function (value) {
    let flag = true;
    if (!value) {
        flag = false;
    } else if (!checkEmail(value)) {
        flag = false
    }
    return flag
}


export const isFiveMultiply = function (num) {
    return num % 0.5 === 0;
}