<template>
  <dialog :open="isOpen"
  :class="{ active: activeUid === _uid, full: isFull, show: visibility }"
  @click="handleActive"
  :style="{ 'z-index': zIndex, width: !!width && width + 'px', height: !!height && height + 'px' }">
    <div class="window-header" @dblclick="handleFull" @mousedown="handleMousedown">
      <div @mousedown.stop class="rigth">
        <div class="pointer icon" @click="handleClose"><IconMinus/></div>
        <div v-show="!isFull" class="pointer icon" @click="handleFull"><IconSquare/></div>
        <div v-show="isFull" class="pointer icon" @click="handleFull"><IconSquares/></div>
        <div v-if="fullscreenEnabled" v-show="!isFullscreen" class="pointer icon" @click="requestFullscreen" title="全屏"><IconExpand/></div>
        <div class="pointer icon icon-close" @click="handleClose"><ClearIcon/></div>
      </div>
    </div>
    <div class="window-body" ref="window">
      <div v-if="isFullscreen" v-show="isFullscreen" class="icon-exit-full" @click="exitFullscreen" title="退出全屏(ESC)">
        <div class="pointer icon"><IconCompress/></div>
      </div>
      <slot></slot>
    </div>
  </dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ClearIcon from '@/components/icons/Clear'
import IconExpand from '@/components/icons/Expand'
import IconCompress from '@/components/icons/Compress'
import IconSquare from '@/components/icons/Square'
import IconSquares from '@/components/icons/Squares'
import IconMinus from '@/components/icons/Minus'

export default {
  components: { ClearIcon, IconExpand, IconCompress, IconSquare, IconSquares, IconMinus },
  props: {
    // 窗口名，可用于切换窗口
    name: String,
    // 是否打开窗口
    open: Boolean,
    // 相对左边的位置
    left: Number,
    // 相对顶部的位置
    top: Number,
    // 是否满屏窗口
    full: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      // 是否打开窗口
      isOpen: this.open,
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
    activeUid: state => state.window.activeUid,
    windows: state => state.window.windows
  }),
  watch: {
    activeUid () {
      if (this.activeUid === this._uid) {
        // 激活窗口时才打开窗口
        this.isOpen = true
      }
    },
    windows () {
      // 更新叠层位置
      this.zIndex = this.windows[this._uid].zIndex
    },
    open () {
      // 外部打开窗口；建议使用 toggleWindow 打开窗口
      this.isOpen = this.open
    },
    isOpen () {
      // 回调窗口打开状态
      this.$emit('changeWindow', this.isOpen)
      if (this.isOpen === true) {
        // 打开时触发一下窗口显示统计
        this.incrementWindow(this._uid)
        // 延时作用于动画效果
        setTimeout(() => {
          // 根据窗口显示过数量初始化窗口位置
          if (this.translateX === undefined) {
            this.translateX = this.$store.state.window.count * 50
            let maxWidth = document.documentElement.clientWidth - 50
            if (this.translateX >= maxWidth) {
              this.translateX -= Math.floor(this.translateX / maxWidth) * Math.floor(maxWidth / 50) * 50
            }
          }
          if (this.translateY === undefined) {
            this.translateY = this.$store.state.window.count * 30
            let maxHeigth = document.documentElement.clientHeigth - 30
            if (this.translateX >= maxHeigth) {
              this.translateX -= Math.floor(this.translateX / maxHeigth) * Math.floor(maxHeigth / 30) * 30
            }
          }
          // 激活窗口
          this.handleActive()
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
    }
  },
  mounted () {
    // 统计窗口数量
    this.addWindow({ uid: this._uid, name: this.name })

    // 全屏事件
    document.addEventListener('fullscreenchange', this.handleFullscreenchange)
  },
  beforeDestroy () {
    // 删除全屏事件
    document.removeEventListener('fullscreenchange', this.handleFullscreenchange)
  },
  methods: {
    ...mapMutations(['toggleWindow', 'incrementWindow', 'addWindow']),
    handleActive () {
      // 活动窗口
      this.toggleWindow({ uid: this._uid })
    },
    handleMousedown (e) {
      // 移动窗口
      // 非左键 或 满屏 退出
      if (e.buttons !== 1 || this.isFull) {
        return false
      }
      // 活动窗口
      this.handleActive()
      // 存储文字选择
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
        if (this.translateX < 0) {
          this.translateX = 0
        }
        // 不越过顶部
        if (this.translateY < 0) {
          this.translateY = 0
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
        // 去掉活动窗口
        this.toggleWindow()
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
  transform: scale(0.6);
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
    display: flex;
    justify-content: flex-end;
    margin: 20px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;

      svg {
        width: 20px;
      }
    }
  }
}
</style>

