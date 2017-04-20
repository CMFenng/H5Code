// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//1.引入vue-router
import Router from 'vue-router'
import Hello from './components/Hello'
import Tang from './components/tangcaiye'
import Red from './components/red'
import Green from './components/green'

//2.使用vue-router
Vue.use(Router)

//3.实例化router这个类
var router = new Router({
	//5.配置router
	//routes:做映射，什么的地址，跳转到什么样的组件
	mode:"history",
	routes:[
		{
			path:'/hello',
			component:Hello,
			children:[
				{
					//localhost:8080/hello/red
					path:'red',
					component:Red
				},
				{
					path:"green",
					component:Green
				}
			]
		},
		{
			path:'/tang',
			component:Tang
		}
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //4.注入到vue实例中
  router:router,
  template: '<App/>',
  components: { App:App }
})
