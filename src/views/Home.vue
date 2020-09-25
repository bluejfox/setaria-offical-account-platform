<template>
  <div class="home">
    <div class="user-card">
      <van-cell title="用户名称" icon="user-o"></van-cell>
    </div>
    <div>
      <van-cell title="错误测试" is-link value="提示错误" @click="onClickErrorButton"/>
      <van-cell title="跳转测试" is-link value="跳转" @click="onClickForwardButton"/>
    </div>
  </div>
</template>
<script>
import { ApplicationError } from 'setaria';
import { Button, Cell } from 'vant';

export default {
  name: 'VHome',
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
  },
  methods: {
    onClickErrorButton() {
      throw new ApplicationError('MC002E');
    },
    onClickForwardButton() {
      this.$router.push({ name: 'pageA' });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  .user-card {
    padding: 10px;
  }
}
</style>
