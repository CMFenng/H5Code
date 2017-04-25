<template>
  <div id="app">
    <store-header></store-header>
    <router-view></router-view>
  </div>
</template>

<script>
// 这里不用取名 header，否则会跟系统中的 header 标签冲突
import storeHeader from "@/components/header"
export default {
  name: 'app',
  components : {
      storeHeader
  }
}
</script>

<style>
@import "assets/css/bootstrap.min.css";

</style>
