<template>
  <div id="note-editor">
    <textarea class="form-control" v-model="activeNote.text"></textarea>
  </div>
</template>

<script>
export default {
	computed:{
		activeNote(){
			return this.$store.state.activeNote
		}
	}
}
</script>
<style type="text/css">  
#note-editor {
  height: 100%;
  margin-left: 380px;
}

#note-editor textarea {
  height: 100%;
  font-size: 30px;
  border: 0;
  border-radius: 0;
}
</style>