<template>
  <label class="form-item">
    <span class="label" :style="{ width: labelWidth }">{{ label }}</span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    label: String,
    labelWidth: [String, Number]
  }
}
</script>


<style lang="scss" scoped>
.form-item {
  display: flex;
  align-items: center;

  // &:hover .clear {
  //   display: flex;
  // }
}

.label {
  color: #666;
}
</style>
