// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 1. 引入 vue-router
import Router from 'vue-router'
import Hello from './components/Hello'
import Tang from './components/tangcaiye'
import Red from './components/red'
import Green from './components/green'

// 2. 使用 vue-router
Vue.use(Router)

// 3. 实例化 router 这个类
var router = new Router({
    // 5. 配置 router
    // 可以去掉 URL 中的 #
    mode : "history",
    // routes：做映射，什么的地址，跳转到什么样的页面
    routes : [
        {
            // 重定向
            path : '/',
            redirect : 'tang'
        },
        {
            path : '/hello',
            component : Hello,
            children : [
                {
                    // http://localhost:8080/hello/red
                    // 注意这里不加 /
                    path : 'red',
                    component : Red
                },
                {
                    path : 'green',
                    component : Green
                }
            ]
        },
        {
            // path : '/tang/:id/:color'  --> http://localhost:8080/tang/2/red
            // path : '/tang/:id&:color'  --> http://localhost:8080/tang/2&red
//          path : '/tang/:id&:color',
            path : '/tang',
            component : Tang
        }
    ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 4. 注入到 vue 实例中
  // 键名必须是 router，键名和键值一样，在 ES6 中可以缩写：router
  router: router,
  template: '<App/>',
  components: { App }
})
