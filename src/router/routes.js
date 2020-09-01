export default [{
  path: "/admin/customer",
  name: "首页",
  component: resolve => require(["@/views/customer/index"], resolve),
},
{
  path: "/admin/userCenter",
  name: "个人中心",
  component: resolve => require(["@/views/userCenter/userCenter"], resolve)
},
{
  path: "/admin/callHistory",
  name: "呼叫记录",
  component: resolve => require(["@/views/callHistory/index"], resolve)
},
{
  path: "/admin/cusDetails",
  name: "客户详情",
  component: resolve => require(["@/views/customer/cusDetails"], resolve)
}
];
