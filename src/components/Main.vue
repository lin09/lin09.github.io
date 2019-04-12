<template>
  <main>
    <Login/>
    <Register/>
  </main>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'
export default {
  components: { Login, Register }
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: calc(100vw - 50px);
  height: calc(100vh - 32px);
}
</style>
