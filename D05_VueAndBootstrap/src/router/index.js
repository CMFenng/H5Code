import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import products from '@/components/products'
import checkout from '@/components/checkout'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      component: products
    },{
    	path:'/checkout',
    	component:checkout
    }
  ]
})
