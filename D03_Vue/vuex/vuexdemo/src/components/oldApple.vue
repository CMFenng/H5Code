<template>
	<div>
		<h1>{{msg}}</h1>
		<button @click="addOne">买一个{{msg}}</button>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			msg:"过期的苹果"
		}
	},
	methods:{
		addOne(){
			this.$store.commit("ADD_PRICE",1)
		}
	}
}
</script>