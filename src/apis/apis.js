import https from '@/utils/axios'


export const getTime = function () {
    http('baseUrl', 'get');
}


//登录
export const userLogin = function (params) {
    let url = "/net/user/userLogin"
    return https(url, params, 'post');
}

// 我的客户列表
export const queryCustomerListOfPage = function (params) {
    let url = "/net/customer/queryCustomerListOfPage"
    return https(url, params, 'post');
}

// 新增通话记录
export const addCallrecord = function (params) {
    let url = "/net/callRecord/addCallrecord"
    return https(url, params, 'post');
}


// 我的通话记录
export const queryCallrecordOfPage = function (params) {
    let url = "/net/callRecord/queryCallrecordOfPage"
    return https(url, params, 'post');
}
   









