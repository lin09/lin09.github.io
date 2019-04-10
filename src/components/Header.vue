<template>
  <header>
    <div class="left"></div>
    <div class="right">
      <div v-if="fullscreenEnabled" v-show="!isFullscreen" class="icon" @click="requestFullscreen" title="全屏(F11)"><IconFull/></div>
      <div v-if="isFullscreen" v-show="isFullscreen" class="icon" @click="exitFullscreen" title="退出全屏(F11)"><IconExitFull/></div>
      <div class="icon" title="登录"><IconAccount/></div>
    </div>
  </header>
</template>

<script>
import IconAccount from '@/components/icons/Account'
import IconFull from '@/components/icons/Full'
import IconExitFull from '@/components/icons/ExitFull'
export default {
  components: { IconAccount, IconFull, IconExitFull },
  data () {
    return {
      isFullscreen: document.fullscreen,
      fullscreenEnabled: document.fullscreenEnabled
    }
  },
  methods: {
    requestFullscreen () {
      document.documentElement.requestFullscreen()
    },
    exitFullscreen () {
      document.exitFullscreen()
    }
  },
  mounted () {
    document.addEventListener('fullscreenchange', () => this.isFullscreen = document.fullscreen )
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-radius: 16px;
  width: 100%;
  height: 32px;
  background-color: #c1c6c9;
}

.left,
.right {
  display: flex;
}

.icon {
  color: #666;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &[disabled] {
    color: #999;
    cursor: no-drop;
  }

  & + .icon {
    margin-left: 8px;
  }
}
</style>
