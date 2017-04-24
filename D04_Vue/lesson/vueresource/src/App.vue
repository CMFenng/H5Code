<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
        <li></li>
    </ul>
    <!--<hello></hello>-->
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  created(){
      // api: http://localhost:8080/getList?user=xx
//    this.$http.post("getList", {user : "tangcaiye"})
//      .then(function (data) {
//          console.log(data);
//      });
      this.$http.get("api/posts")
        .then(function (data) {
            console.log(data);
            var author = data.body[0].author;
            console.log(author);
        })
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
