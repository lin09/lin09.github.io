<template>
  <header>
    <div class="left"></div>
    <div class="right">
      <div v-if="fullscreenEnabled" v-show="!isFullscreen" class="pointer icon" @click="requestFullscreen" title="全屏"><IconExpand/></div>
      <div v-if="isFullscreen" v-show="isFullscreen" class="pointer icon" @click="exitFullscreen" title="退出全屏(ESC)"><IconCompress/></div>
      <div class="pointer icon" title="登录" @click="toggleWindow({ name: 'login' })"><IconAccount/></div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import IconAccount from '@/components/icons/Account'
import IconExpand from '@/components/icons/Expand'
import IconCompress from '@/components/icons/Compress'
export default {
  components: { IconAccount, IconExpand, IconCompress },
  data () {
    return {
      isFullscreen: document.fullscreen,
      fullscreenEnabled: document.fullscreenEnabled
    }
  },
  methods: {
    ...mapMutations(['toggleWindow']),
    requestFullscreen () {
      document.documentElement.requestFullscreen()
    },
    exitFullscreen () {
      document.exitFullscreen()
    }
  },
  mounted () {
    document.addEventListener('fullscreenchange', () => {
      this.isFullscreen = !!document.fullscreenElement
    })
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
  background: linear-gradient(to right, #79a6c2, #c1c6c9);
}

.left,
.right {
  display: flex;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: #666;

  svg {
    width: 20px;
    height: 20px;
  }

  &[disabled] {
    color: #999;
    cursor: no-drop;
  }
}
</style>
