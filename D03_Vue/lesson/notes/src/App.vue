<template>
    <div id="app">
        <toolbar></toolbar>
        <note-list></note-list>
        <editor></editor>
    </div>
</template>

<script type="text/javascript">
// 引入组件文件
import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'

export default {
    name : 'app',
    components : {
        Toolbar,
        NoteList,
        Editor
    }
}
</script>

<style type="text/css">
html,#app{
    height: 100%;
}

body{
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
}
</style>