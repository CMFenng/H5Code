import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	products:[
		/*{
			name:"xx",
			price:"aa",
			count:1
			id:"xx"
		}*/
	]
}
const mutations = {
	ADD_STORE(state,item){
		var product = {
			name:item.name,
			price:item.price,
			id:item.id,
			count:1
		}
		var products = state.products
		if (products.length==0){
			products.push(product)
			return
		}
		for (var i=0; i<products.length; i++){
			if (products[i].id == product.id){
				products[i].count++
				return
			}
		}
		products.push(product)
	},
	DOWN(state,item){
		if (item.count==1){
			return
		}
		var products = state.products
		for (var i=0; i<products.length; i++){
			if (products[i].id == item.id){
				products[i].count--
			}
		}	
	},
	ADD(state,item){
		var products = state.products
		for (var i=0; i<products.length; i++){
			if (products[i].id == item.id){
				products[i].count++
			}
		}
	},
	DEL(state,item){
		var products = state.products
		for (var i=0; i<products.length; i++){
			if (products[i].id == item.id){
				products.splice(i,1)
			}
		}
	}
}
const actions = {

}
const getters = {
	total(state){
		var products = state.products
		var result = 0
		for (var i=0; i<products.length; i++){
			result += products[i].count*products[i].price
		}
		return result
	},
	sum(state){
		var products = state.products
		var result = 0
		for (var i=0; i<products.length; i++){
			result += Number(products[i].count)
		}
		return result
	},
	products(state){
		return state.products
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

