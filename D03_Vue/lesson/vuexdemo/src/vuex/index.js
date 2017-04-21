import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 共享的状态
const state = {
    price : 0
}
// 操作的状态
const mutations = {
    
    ADD_PRICE(state, num){
        state.price += num;
    },
    DOWN_PRICE(state, num){
        state.price -= num;
    }
}
// actions -> 处理一些异步的操作，不能操作 state
const actions = {
//  downPrice(context, price){
//      console.log(context);
//      setTimeout(function(){
//          context.commit("DOWN_PRICE", price);
//      },1000)
//  }
    // { commit } 结构对象，相当于取 context 中的 commit
    downPrice({ commit }, price){
        setTimeout(function(){
            commit("DOWN_PRICE", price);
        },1000)
    }
}

export default new Vuex.Store({
  state : state,
  mutations : mutations,
  actions : actions
})
