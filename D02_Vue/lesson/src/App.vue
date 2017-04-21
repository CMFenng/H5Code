<template>
  <div id="app">
    <!--<tang></tang>-->
    <img src="./assets/logo.png">
    <transition name="fade">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
    <!--<router-link to="hello">跳转到 hello 组件</router-link>-->
    <!--<router-link to="hello?id=56&color=green">跳转到 hello 组件</router-link>-->
    <router-link v-bind:to="{path:'/hello', query:{id:3,color:'yellow'}}">跳转到 hello 组件</router-link>
    <router-link v-bind:to="{path:'/tang'}">跳转到 tang 组件</router-link>
    <!--<hello></hello>-->
  </div>
</template>

<script>
//import { obj } from "./lib.js"
//console.log(obj);
    
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
