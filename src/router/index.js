import Vue from 'vue'
import Router from 'vue-router'
import routerList from './routes'
import storage from '@/utils/cookie'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '*',
    name: '登录',
    component: resolve => require(["@/views/login/user"], resolve)
  },
  {
    path: '/',
    name: '登录',
    component: resolve => require(["@/views/login/user"], resolve),
  }, {
    path: '/admin/index',
    name: 'index',
    component: resolve => require(["@/views/index"], resolve),
    children: routerList
  }, {
    path: "/admin/login",
    name: "登录",
    component: resolve => require(["@/views/login/user"], resolve)
  },
  ],

  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})



// router.beforeEach((to, from, next) => {
//   let token = storage.getStorage('token');
//   console.log(to.path,token)
//   if (to.path === "/") {
//     if (token) {
//       next('/admin/home')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })


export default router