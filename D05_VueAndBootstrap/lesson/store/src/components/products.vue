<template>
    <div class="container-fluid">
        <div class="panel panel-default row">
            <div class="col-xs-3">
                <a class="btn btn-block btn-default btn-lg" href="###" @click="changeCategory('all')">所有商品</a>
                <!-- 生成商品种类列表 -->
                <a class="btn btn-block btn-default btn-lg" href="###"
                    v-for="(item,index) in categorys" @click="changeCategory(item)"
                    v-bind:class="{active : item==selectedCategory}">{{ item }}</a>
            </div>
            <div class="col-xs-9">
                <!-- 生成要在当前页面显示的商品 -->
                <div class="well" v-for="(item,index) in nowProducts">
                    <h3>
                        <strong>{{ item.name }}</strong>
                        <span class="pull-right label label-primary">￥{{ item.price }}.00</span>
                    </h3>
                    <div class="description">
                        <span class="lead">{{ item.description }}</span>
                        <button class="btn btn-success pull-right" @click="addStore(item)">添加到购物车</button>
                    </div>
                </div>
                <div class="pull-right btn-group">
                    <!--<a class="btn btn-default btn-primary" v-for="(item,index) in pageNum">
                        {{ item }}
                    </a>-->
                    <!-- 生成页码 -->
                    <a class="btn btn-default" v-for="(item,index) in pageNum"
                        v-bind:class="{'btn-primary' : item==activePage}"
                        @click="changePage(item)">
                        {{ item }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
// 每页显示的商品数
var pageSize = 3;

export default {
    data(){
        return {
            // 所有商品
            products: [],
            // 选中的分类
            selectedCategory: null,
            // 当前页码
            activePage: 1
        }
    },
    created(){
        // 请求数据
        this.$http.get("/products")
            .then(data=>this.products = data.body);
    },
    methods:{
        // 切换商品类别
        changeCategory(val){
            if (val == "all") {
                this.selectedCategory = null;
            } else {
                this.selectedCategory = val;
            }
            // 切换种类的时候初始化当前页码
            this.activePage = 1;
        },
        // 当前激活页
        changePage(page){
            this.activePage = page;
        },
        // 添加到购物车
        addStore(item){
            this.$store.commit("ADD_STORE", item);
        }
    },
    computed:{
        // 所有种类
        categorys(){
            var results = [];
            var keys = {};
            
            for (var i=0; i<this.products.length; i++){
                var val = this.products[i]["category"];
                // 判断是否已经存在这个键
                if (!keys.hasOwnProperty(val)){
                    // 添加键值
                    keys[val] = true;
                    results.push(val);
                }
            }
            console.log(keys);
            console.log(results);
            return results;
        },
        // 根据不同的类别返回的商品列表
        productList(){
            if (this.selectedCategory == null){
                return this.products;
            } else {
                return this.products.filter(item=>item.category==this.selectedCategory);
            }
        },
        // 当前页面显示的商品（每页显示 3 个）
        nowProducts(){
            var startProduct = (this.activePage-1)*pageSize;
            return this.productList.slice(startProduct, startProduct+pageSize);
        },
        // 计算总页数
        pageNum(){
            return Math.ceil(this.productList.length/pageSize);
        }
    }
}
</script>