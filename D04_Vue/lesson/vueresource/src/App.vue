<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
        <li v-for="(item, index) in todos">{{ item.todo }}</li>
    </ul>
    <!--<hello></hello>-->
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  data(){
      return {
          todos : []
      }
  },
  created(){
      // api: http://localhost:8080/getList?user=tangcaiye
//    this.$http.post("getList", {user : "tangcaiye"})
//      .then(function (data) {
//          console.log(data);
//      });
      
//    this.$http.get("api/posts")
//      .then(function (data) {
//          console.log(data);
//          // 请求到的数据存放在 body 数组中
//          var author = data.body[0].author;
//          console.log(author);    // typicode
//      });
      
//    this.$http.get("api/todos")
//      .then(data=>{
//          console.log(data);
//          var todos = data.body;
//          this.todos = todos;
//      });
      
      this.$http.get("v2/movie/top250")
        .then(function (data) {
            console.log(data.body);
        });
  },
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
