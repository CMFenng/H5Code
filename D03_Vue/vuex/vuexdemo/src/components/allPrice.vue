<template>
	<div>
		总金额为：{{allPrice}}
	</div>
</template>
<script type="text/javascript">
export default {
	computed:{
		allPrice(){
			return this.$store.state.price
		}
	}
}
</script>