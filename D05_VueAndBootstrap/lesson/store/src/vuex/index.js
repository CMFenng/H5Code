//引入 vue 及 vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    products : [
        // 要存储到购物车的对象的数据结构
//      {
//          name : "xx",
//          price : "aa",
//          count : 1,
//          id : "xx"
//      }
    ]
}
const mutations = {
    // 添加到购物车
    ADD_STORE(state, item){
        // 提取商品的信息组成新的对象
        var product = {
            name : item.name,
            price : item.price,
            id : item.id,
            count : 1
        }
        // 获取购物车列表数据
        var products = state.products;
        // 如果当前购物车为空，直接添加商品
        if (products.length == 0) {
            products.push(product);
            return;
        }
        // 如果不为空，遍历数组
        for (var i=0; i<products.length; i++) {
            // 当已经存在相同商品时，只把商品的数量加一
            if (products[i].id == product.id) {
                products[i].count++;
                return;
            }
        }
        // 如果购物车中还没有这个商品，就添加
        products.push(product);
    },
    // 减
    DOWN(state, item){
        // 如果当前数量为 1，直接返回，购物数量最少为 1
        if (item.count == 1) {
            return;
        }
        var products = state.products;
        // 遍历购物车中的商品列表，将当前商品数量减 1
        for (var i=0; i<products.length; i++) {
            if (products[i].id == item.id) {
                products[i].count--;
            }
        }
    },
    // 加
    ADD(state, item){
        var products = state.products;
        // 遍历购物车中的商品列表，将当前商品数量加 1
        for (var i=0; i<products.length; i++) {
            if (products[i].id == item.id) {
                products[i].count++;
            }
        }
    },
    // 删除
    DEL(state, item){
        var products = state.products;
        // 遍历购物车中的商品列表，将当前商品删除
        for (var i=0; i<products.length; i++) {
            if (products[i].id == item.id) {
                products.splice(i, 1);
            }
        }
    }
}
const actions = {
    
}
const getters = {
    // 购物车中商品总价
    total(state){
        var products = state.products;
        var result = 0;
        for (var i=0; i<products.length; i++) {
            result += products[i].count*products[i].price;
        }
        return result;
    },
    // 购物车中商品总量
    sum(state){
        var products = state.products;
        var result = 0;
        for (var i=0; i<products.length; i++) {
            result += Number(products[i].count);
        }
        return result;
    },
    // 添加到购物车的商品列表
    products(state){
        return state.products;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})