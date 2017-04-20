<template>
  <div id="app">
    <!-- <tang></tang> -->
    <img src="./assets/logo.png">
    <router-view></router-view>
    <!-- <router-link to="hello">跳转到hello组件</router-link> -->
    <!-- <router-link to="hello?id=56&color=green">跳转到hello组件</router-link> -->
    <router-link v-bind:to="{path:'/hello',query:{id:3,color:'yellow'}}">跳转到hello组件</router-link>
    <router-link v-bind:to="{path:'/tang'}">跳转到tang组件</router-link>
    <!-- <hello></hello> -->
  </div>
</template>

<script>
/*import {obj} from "./lib.js"
console.log(obj)*/

import Hello from './components/Hello'
import Tangcaiye from './components/tangcaiye'

export default {
  name: 'app',
  components: {
    Hello,
    tang:Tangcaiye
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
