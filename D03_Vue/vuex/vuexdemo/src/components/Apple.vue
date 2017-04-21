<template>
	<div>
		<h1>{{msg}}</h1>
		<button @click="addOne">买一个{{msg}}</button>
		<old-apple></old-apple>
	</div>
</template>
<script type="text/javascript">
import oldApple from "./oldApple"
export default {
	data(){
		return {
			msg:"苹果"
		}
	},
	methods:{
		addOne(){
			this.$store.commit("ADD_PRICE",5)
		}
	},
	components:{
		oldApple
	}
}
</script>