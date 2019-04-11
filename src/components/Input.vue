<template>
  <div class="input-item">
    <input v-model="model" :type="type" :placeholder="placeholder" :disabled="disabled" ref="input">
    <i v-show="model" class="clear" @click="handleClear">
      <ClearIcon class="clear-icon"/>
    </i>
  </div>
</template>

<script>
import ClearIcon from '@/components/icons/Clear'

export default {
  name: 'Input',
  components: {
    ClearIcon
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      model: ''
    }
  },
  watch: {
    value (val) {
      this.model = val
    },
    model (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handleClear () {
      this.model = ''
      this.$refs.input.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.input-item {
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  border: 1px solid #d8d8d8;
  border-radius: 20px;
  height: 40px;

  input {
    padding-left: 20px;
    width: 100%;
    color: #333;
    background-color: transparent;
  }
}

.clear {
  display: none;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.clear-icon {
  width: 20px;
  height: 20px;
  color: #fff;
}

.input-item:hover .clear,
input:focus + .clear {
  display: flex;
}
</style>
