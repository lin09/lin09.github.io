<template>
  <Window name="apps" :top="0" :left="0">
    <div class="apps" :style="{ 'grid-template-columns': 'repeat(' + colNum + ', 1fr)' }">
      <div class="pointer app" @click.stop="toggleWindow({ name: 'login' })">
        <div class="icon"><IconAccount/></div>
        <div class="title">个人中心</div>
      </div>
      <div class="pointer app">
        <div class="icon"><IconAccount/></div>
        <div class="title">个人中心</div>
      </div>
      <div class="pointer app">
        <div class="icon"><IconAccount/></div>
        <div class="title">个人中心</div>
      </div>
    </div>
  </Window>
</template>

<script>
import { mapMutations } from 'vuex'
import Window from '@/components/Window'
import IconAccount from '@/components/icons/Account'
export default {
  components: { Window, IconAccount },
  data () {
    return {
      colNum: Math.floor((document.documentElement.clientWidth - 90)/120)
    }
  },
  mounted () {
    if (this.colNum > 3) {
      this.colNum = 3
    }
  },
  methods: {
    ...mapMutations(['toggleWindow'])
  }
}
</script>

<style lang="scss" scoped>
.apps {
  display: grid;
  padding: 20px;
  grid-gap: 20px;
  background-color: #f2f5f6;

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 100px;
    background-color: #fff;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0);
    transform: scale(1);
    transition: all ease 0.35s;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 75px;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .title {
    height: 25px;
    line-height: 25px;
    font-size: 14px;
  }
}
</style>
