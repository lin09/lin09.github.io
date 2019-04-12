<template>
  <aside>
    <div class="pointer item" @click="toggleWindow({ name: 'apps' })"><IconTh/></div>
  </aside>
</template>

<script>
import { mapMutations } from 'vuex'
import IconTh from '@/components/icons/Th'
export default {
  components: { IconTh },
  methods: {
    ...mapMutations(['toggleWindow'])
  }
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  padding: 25px 0;
  width: 50px;
  height: calc(100vh - 82px);
  background: linear-gradient(#79a6c2, #c1c6c9);
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #fff;

  svg {
    width: 30px;
    height: 30px;
  }
}
</style>
