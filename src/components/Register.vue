<template>
  <Window name="register">
    <div class="register">
      <h3 class="title">注册</h3>
      <form class="form" action="/register" @submit.prevent="handleSubmit">
        <Input placeholder="用户名"/>
        <Input type="password" placeholder="密码"/>
        <Input type="password" placeholder="确认密码"/>
        <Button class="submit" type="submit">提交</Button>
      </form>
      <div class="links">
        <div class="link" @click.stop="toggleWindow({ name: 'login' })">账号登录</div>
      </div>
    </div>
  </Window>
</template>

<script>
import { mapMutations } from 'vuex'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Window from '@/components/Window'
export default {
  components: { Input, Button, Window },
  methods: {
    ...mapMutations(['toggleWindow']),
    handleSubmit () {
      // console.log('handleSubmit')
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
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
