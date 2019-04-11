<template>
  <button class="btn" :type="type" :disabled="disabled" :class="theme" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: String
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: #fff;
  background: linear-gradient(to right, #00b1ce, #79a6c2);

  &:disabled {
    color: #d4d4d4;
  }
}
</style>

