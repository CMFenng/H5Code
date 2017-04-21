import Vue from 'vue'
import App from 'vuex'

Vue.use(App)
//共享的状态
const state = {
	price:0
}
//操作状态
const mutations = {

	ADD_PRICE(state,num){

		state.price += num
	},
	DOWN_PRICE(state,num){

		state.price -= num;
	}
}

//actions-》处理一些异步的操作,不能操作state
const actions = {
	downPrice({commit},price){
		// console.log(context)
		setTimeout(function (){

			commit("DOWN_PRICE",price)
		},1000)
	}
}

export default new App.Store({
	state:state,
	mutations:mutations,
	actions:actions
})
