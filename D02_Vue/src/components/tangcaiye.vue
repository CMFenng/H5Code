<template>
	<div class="wrap">
		<h1>你好,{{user}}</h1>
		<button @click="getParams">获取参数</button>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			user: "唐菜也"
		}
	},
	methods:{
		getParams(){
			console.log(this.$route.params)
		}
	}
}
</script>