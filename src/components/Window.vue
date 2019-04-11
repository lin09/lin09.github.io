<template>
  <dialog :open="isOpen"
  :class="{ active: activeUid === _uid, full: isFull, show: visibility }"
  @click="handleActive"
  :style="{ 'z-index': zIndex, width: !!width && width + 'px', height: !!height && height + 'px' }">
    <div class="window-header" @dblclick="handleFull" @mousedown="handleMousedown">
      <div @mousedown.stop class="rigth">
        <div class="icon" @click="handleClose"><IconMinus/></div>
        <div v-show="!isFull" class="icon" @click="handleFull"><IconSquare/></div>
        <div v-show="isFull" class="icon" @click="handleFull"><IconSquares/></div>
        <div v-if="fullscreenEnabled" v-show="!isFullscreen" class="icon" @click="requestFullscreen" title="全屏"><IconFull/></div>
        <div class="icon icon-close" @click="handleClose"><ClearIcon/></div>
      </div>
    </div>
    <div class="window-body" ref="window">
      <div v-if="isFullscreen" v-show="isFullscreen" class="icon-exit-full" @click="exitFullscreen" title="退出全屏(ESC)"><IconExitFull/></div>
      <slot></slot>
    </div>
  </dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ClearIcon from '@/components/icons/Clear'
import IconFull from '@/components/icons/Full'
import IconExitFull from '@/components/icons/ExitFull'
import IconSquare from '@/components/icons/Square'
import IconSquares from '@/components/icons/Squares'
import IconMinus from '@/components/icons/Minus'

export default {
  components: { ClearIcon, IconFull, IconExitFull, IconSquare, IconSquares, IconMinus },
  props: {
    // 是否打开
    open: Boolean,
    // 相对左边的位置
    left: {
      type: Number,
      default: 0
    },
    // 相对顶部的位置
    top: {
      type: Number,
      default: 0
    },
    // 是否满屏窗口
    full: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isOpen: this.open,
      // 加入时的叠层位置，在mounted初始化
      initZIndex: 0,
      // 实际应用上的叠层位置值
      zIndex: 0,
      // 窗口宽度和高度值为了动画效果，在open时初始化
      width: 0,
      height: 0,
      // 是否此窗口全屏
      isFullscreen: document.fullscreenElement === this.$refs.window,
      // 是否可全屏
      fullscreenEnabled: document.fullscreenEnabled,
      // 满屏
      isFull: this.full,
      // 显示，作用：动画效果
      visibility: this.open,
      // 窗口位置
      translateX: this.left,
      translateY: this.top,
    }
  },
  computed: mapState({
    // 活动窗口的uid
    activeUid: state => state.window.activeUid
  }),
  watch: {
    activeUid () {
      // 叠层设置
      if (this.activeUid === this._uid) {
        this.zIndex = this.$store.state.window.count
      } else {
        this.zIndex = this.initZIndex
      }
    },
    open () {
      this.isOpen = this.open
      if (this.open === true) {
        // 延时作用于动画效果
        setTimeout(() => {
          // 显示
          this.visibility = true
          if (this.isFull === false) {
            // 窗口位置
            this.$el.style.transform = `scale(1) translate(${this.translateX }px, ${ this.translateY }px)`
            // 窗口大小
            this.width = this.$el.clientWidth
            this.height = this.$el.clientHeight
          } else {
            // 满屏
            this.$el.style.transform = `scale(1) translate(0px, 0px)`
          }
        }, 10)
      }
    },
    isOpen () {
      this.$emit('changeWindow', this.isOpen)
    }
  },
  mounted () {
    // 加入时的叠层位置
    this.initZIndex = this.$store.state.window.count
    this.zIndex = this.initZIndex
    // 统计窗口数量
    this.incrementWindow()

    // 全屏事件
    document.addEventListener('fullscreenchange', this.handleFullscreenchange)
  },
  beforeDestroy () {
    // 删除全屏事件
    document.removeEventListener('fullscreenchange', this.handleFullscreenchange)
  },
  methods: {
    ...mapMutations(['toggleWindowActive', 'incrementWindow']),
    handleActive () {
      // 活动窗口
      this.toggleWindowActive(this._uid)
    },
    handleMousedown (e) {
      // 非左键 或 满屏 退出
      if (e.buttons !== 1 || this.isFull) {
        return false
      }
      // 活动窗口
      this.toggleWindowActive(this._uid)
      // 文字选择
      let userSelect = document.body.style.userSelect
      // 禁止动画
      this.$el.style.transitionDuration = '0s'
      // 松开鼠标
      const up = () => {
        // 删除鼠标移动事件
        document.removeEventListener('mousemove', move)
        // 删除鼠标松开事件
        document.removeEventListener('mouseup', up)
        // 恢复动画
        this.$el.style.transitionDuration = ''
        // 不越过左边
        if (this.left < 0 - this.translateX) {
          this.translateX = 0 - this.left
        }
        // 不越过顶部
        if (this.top < 0 - this.translateY) {
          this.translateY = 0 - this.top
        }
        // 设置位置
        this.$el.style.transform = `scale(1) translate(${this.translateX }px, ${ this.translateY }px)`
        // 恢复文字选择
        document.body.style.userSelect = userSelect
      }
      const move = event => {
        if (event.buttons === 1) {
          // 设置位置
          this.translateX += event.movementX
          this.translateY += event.movementY
          this.$el.style.transform = `scale(1) translate(${this.translateX }px, ${ this.translateY }px)`
        } else {
          // 非鼠标左键退出
          up()
        }
      }
      // 禁止文字选择
      document.body.style.userSelect = 'none'
      // 添加鼠标移动事件
      document.addEventListener('mousemove', move)
      // 添加鼠标松开事件
      document.addEventListener('mouseup', up)
    },
    handleFullscreenchange () {
      // 是否此窗口全屏
      this.isFullscreen = document.fullscreenElement === this.$refs.window
    },
    handleClose () {
      // 关闭时，收缩到左上角
      this.$el.style.transform = `scale(0.6) translate(-${ this.$el.clientWidth * 0.4 / 2 * 100 / 60 }px, -${ this.$el.clientHeight * 0.4 / 2 * 100 / 60 }px)`
      // 隐藏
      this.visibility = false
      setTimeout(() => {
        // 关闭窗口
        this.isOpen = false
      }, 350)
    },
    handleFull () {
      // 切换满屏
      this.isFull = !this.isFull
      if (this.isFull) {
        this.$el.style.transform = `scale(1) translate(0px, 0px)`
      } else {
        this.$el.style.transform = `scale(1) translate(${this.translateX }px, ${ this.translateY }px)`
      }
    },
    requestFullscreen () {
      // 此窗口全屏
      this.$refs.window.requestFullscreen()
    },
    exitFullscreen () {
      // 退出全屏
      document.exitFullscreen()
    },
  }
}
</script>

<style lang="scss" scoped>
dialog {
  overflow: hidden;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: all cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.8s;

  &.show {
    opacity: 1;
  }

  &.active {
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.5);
  }

  &.full {
    width: 100% !important;
    height: 100% !important;
  }
}
.window-header {
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  height: 28px;
  background: linear-gradient(to right, #79a6c2, #c1c6c9);
  .rigth {
    display: flex;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    width: 30px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    svg {
      width: 15px;
      height: 15px;
    }
  }
  .icon-close {
    color: red;
    svg {
      width: 18px;
      height: 18px;
    }
  }
}
.window-body {
  background-color: #fff;
  .icon-exit-full {
    margin: 20px;
    text-align: right;
    height: 20px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    svg {
      width: 20px;
    }
  }
}
</style>
