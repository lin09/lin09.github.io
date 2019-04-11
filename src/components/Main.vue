<template>
  <main>
    <Login/>
  </main>
</template>

<script>
import Login from '@/components/Login'
export default {
  components: { Login }
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: calc(100vw - 50px);
  height: calc(100vh - 32px);
}
</style>
