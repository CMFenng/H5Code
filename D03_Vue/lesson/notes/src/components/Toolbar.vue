<template>
    <div id="toolbar">
        <i @click="addNote"class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star"
            v-bind:class="{starred : activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script type="text/javascript">
export default {
    computed : {
        notes(){
            return this.$store.getters.notes
        },
        activeNote(){
            return this.$store.getters.activeNote;
        }
    },
    methods : {
        addNote(){
            // 通过 dispatch 分发到 actions 中的 addNote
            this.$store.dispatch('addNote');
        },
        toggleFavorite(){
            this.$store.dispatch('toggleFavorite');
        },
        deleteNote(){
            this.$store.dispatch('deleteNote');
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

.starred {
    color : #F7AE4F;
}
</style>