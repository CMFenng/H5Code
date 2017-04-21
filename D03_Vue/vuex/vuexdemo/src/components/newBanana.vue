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
			msg:"进口的香蕉"
		}
	},
	methods:{
		addOne(){
			this.$store.commit("ADD_PRICE",100)
		}
	}
}
</script>