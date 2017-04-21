<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" @click="toggleBol=true" class="btn btn-default" v-bind:class="{active:toggleBol}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="toggleBol=false" v-bind:class="{active:!toggleBol}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="(item,index) in notes" class="list-group-item" v-bind:class="{active:item==activeNote}" @click="changeNote(index)" href="#">
          <h4 class="list-group-item-heading">
            {{item.text}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      toggleBol:true
    }
  },
  methods:{
    changeNote(index){

      this.$store.dispatch("changeNote",index)
      // this.$store.state.activeNote = this.$store.state.notes[index]
    }
  },
  computed:{
    notes(){
      if (this.toggleBol){
        return this.$store.state.notes;
      }else{
        /*var arr = [];
        var notes = this.$store.state.notes;
        for (let i=0; i<notes.length; i++){
          if (notes[i].favorite){
            arr.push(notes[i])
          }
        }
        return arr*/
        return this.$store.state.notes.filter((item)=>item.favorite)
      }
      
    },
    activeNote(){
      
      return this.$store.state.activeNote
    }
  }
}
</script>
<style type="text/css">
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#list-header {
  padding: 5px 25px 25px 25px;
}

#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

#notes-list .container {
  height: calc(100% - 137px);
  max-height: calc(100% - 137px);
  overflow: auto;
  width: 100%;
  padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}
</style>