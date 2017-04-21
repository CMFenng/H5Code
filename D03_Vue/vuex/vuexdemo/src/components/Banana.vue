<template>
	<div>
		<h1>{{msg}}</h1>
		<button @click="addOne">买一个{{msg}}</button>
		<button @click="downOne">丢一个{{msg}}</button>
		<new-banana></new-banana>
	</div>
</template>
<script type="text/javascript">
import newBanana from './newBanana'
var price = 10;

export default {
	data(){
		return {
			msg:"香蕉"
		}
	},
	methods:{
		addOne(){
			this.$store.commit("ADD_PRICE",price)
		},
		downOne(){
			this.$store.dispatch("downPrice",price)
		}
	},
	components:{
		newBanana
	}
}
</script>