<template>
  <main>
    <Apps/>
    <Login/>
    <Register/>
  </main>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'
import Apps from '@/components/Apps'
export default {
  components: { Login, Register, Apps }
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: calc(100vw - 50px);
  height: calc(100vh - 32px);
}
</style>
