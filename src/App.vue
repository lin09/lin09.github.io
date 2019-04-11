<template>
  <div id="app">
    <Header/>
    <Aside/>
    <Main/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import Main from '@/components/Main'

export default {
  name: 'app',
  components: {
    Header,
    Aside,
    Main
  }
}
</script>

<style lang="scss" scoped>
#app {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  background-color: #e2ebb3;
}
</style>
