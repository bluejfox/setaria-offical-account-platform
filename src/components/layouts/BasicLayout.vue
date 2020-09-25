<template>
  <div class="basic-layout">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CBasicLayout',
};
</script>
<style lang="scss" scoped>
.basic-layout {
  margin-top: 10px;
}
</style>
