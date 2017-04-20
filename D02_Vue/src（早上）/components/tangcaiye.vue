<template>
	<div class="wrap">
		<h1>你好,{{user}}</h1>
		<button @click="showUser">点击弹出</button>
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
		showUser(){
			alert(this.user)
		}
	}
}
</script>