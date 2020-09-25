<template>
  <div class="home">
    <div class="user-card">
      <van-cell title="用户名称" icon="user-o"></van-cell>
    </div>
    <div>
      <van-cell title="错误测试" is-link value="提示错误" @click="onClickErrorButton"/>
      <van-cell title="跳转测试" is-link value="跳转" @click="onClickForwardButton"/>
      <van-cell title="jssdk测试" is-link value="上传" @click="onChooseFile"/>
    </div>
  </div>
</template>
<script>
import { ApplicationError } from 'setaria';
import { Button, Cell } from 'vant';
// eslint-disable-next-line import/no-unresolved
import wx from 'wx';
// eslint-disable-next-line import/no-unresolved

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
    onChooseFile() {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          const { localIds } = res; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          console.log(localIds);
        },
      });
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
