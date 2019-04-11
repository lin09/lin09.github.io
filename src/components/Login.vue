<template>
  <Window :open="visibility" :top="100" :left="left" @changeWindow="toggleLogin">
    <div class="login">
      <h3 class="title">登录</h3>
      <form class="form" action="/login" @submit.prevent="handleSubmit">
        <Input placeholder="用户名"/>
        <Input type="password" placeholder="密码"/>
        <Button class="submit" type="submit">提交</Button>
      </form>
      <div class="links">
        <div class="link">注册</div>
        <div class="link">忘记密码</div>
      </div>
    </div>
  </Window>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Window from '@/components/Window'
export default {
  components: { Input, Button, Window },
  data() {
    return {
      left: (document.documentElement.clientWidth - 50 - 80 - 380)/2
    }
  },
  computed: mapState({
    visibility: state => state.login.visibility
  }),
  methods: {
    ...mapMutations(['toggleLogin']),
    handleSubmit () {
      // console.log('handleSubmit')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin: auto;
  padding: 40px;
  width: 380px;
}
.title {
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
}
.input-item,
.submit {
  margin-top: 20px;
}
.links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.link {
  padding: 0 20px;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>
