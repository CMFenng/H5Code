<template>
	<div class="container-fluid">
		<div class="panel panel-default row">
			<div class="col-xs-3">
				<a class="btn btn-block btn-default btn-lg" href="###" @click="changeCategory('all')">所有商品</a>
				<a class="btn btn-block btn-default btn-lg" href="###" v-for="(item,index) in categorys" @click="changeCategory(item)" v-bind:class="{active:item==selectedCategory}">{{item}}</a>
			</div>
			<div class="col-xs-9">
				<div class="well" v-for="(item,index) in nowProducts">
					<h3>
						<strong>{{item.name}}</strong>
						<span class="pull-right label label-primary">￥{{item.price}}.00</span>
					</h3>
					<div class="description">
						<span class="lead">{{item.description}}</span>
						<button class="btn btn-success pull-right" @click="addStore(item)">添加到购物车</button>
					</div>
				</div>
				<div class="pull-right btn-group">
					
					<!-- <a class="btn btn-default btn-primary" v-for="(item,index) in pageNum">
						{{item}}
					</a> -->
					<a class="btn btn-default" v-for="(item,index) in pageNum" v-bind:class="{'btn-primary':item==activePage}" @click="changePage(item)">
						{{item}}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
var pageSize = 3
export default {
	data(){
		return {
			products:[],
			selectedCategory:null,
			activePage:1
		}
	},
	created(){

		this.$http.get("/products")
			.then(data=>this.products = data.body)
	},
	methods:{
		changeCategory(val){
			if (val=="all"){
				this.selectedCategory = null
			}else{
				this.selectedCategory = val
			}
			this.activePage = 1;
		},
		changePage(page){
			this.activePage = page
		},
		addStore(item){
			this.$store.commit("ADD_STORE",item)
		}
	},
	computed:{
		categorys(){
			var results = [];
  			var keys = {};

  			for (var i=0; i<this.products.length; i++){
  				var val = this.products[i]["category"];
  				if (!keys.hasOwnProperty(val)){
  					keys[val] = true
  					results.push(val)
  				}
  			}
  			console.log(results)
  			return results
		},
		productList(){
			if (this.selectedCategory==null){
				return this.products
			}else{
				return this.products.filter(item=>item.category==this.selectedCategory)
			}
		},
		nowProducts(){
			var startProduct = (this.activePage-1)*pageSize;
			return this.productList.slice(startProduct,startProduct+pageSize)
		},
		pageNum(){
			return Math.ceil(this.productList.length/pageSize)
		}
	}
}	
</script>








