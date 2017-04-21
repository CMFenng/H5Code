<template>
  <div id="toolbar">
    <i class="glyphicon glyphicon-plus" @click="addNote"></i>
    <i class="glyphicon glyphicon-star" v-bind:class="{active:favorite}" @click="toggleFavorite"></i>
    <i class="glyphicon glyphicon-remove" @click="del"></i>
  </div>
</template>

<script>
export default {
  computed:{
    favorite(){
      return this.$store.state.activeNote.favorite
    }
  },
  methods: {
    addNote(){
      this.$store.dispatch("addOne")
    },
    toggleFavorite(){
      // this.$store.state.activeNote.favorite = !this.$store.state.activeNote.favorite
      this.$store.dispatch("toggleFavorite")
    },
    del(){

      this.$store.dispatch("delNote")
      /*var notes = this.$store.state.notes
      var activeNote = this.$store.state.activeNote

      for (var i=0; i<notes.length; i++){
        if (notes[i] == activeNote){
          notes.splice(i,1)
        }
      }
      notes.filter((item)=> item!activeNote)
      */
    }
  }
}
</script>
<style type="text/css">
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}
#toolbar i:hover {
  opacity: 1;
}
#toolbar i.active{
  color:red;
}
</style>