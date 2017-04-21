<template>
  <div id="app">
    <img src="./assets/logo.png">
    <all-price></all-price>
    <Apple></Apple>
    <Banana></Banana>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
import allPrice from './components/allPrice'
import Apple from './components/Apple'
import Banana from './components/Banana'
export default {
  name: 'app',
  // 注意这里是 components，参数是一个对象
  components : {
      Apple,
      allPrice,
      Banana
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
