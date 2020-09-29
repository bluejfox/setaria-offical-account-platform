<template>
  <div class="home">
    <div class="user-card">
      <van-cell title="用户昵称" icon="user-o">{{ userNickName }}</van-cell>
    </div>
    <div>
      <van-cell title="错误测试" is-link value="提示错误" @click="onClickErrorButton" />
      <van-cell title="跳转测试" is-link value="跳转" @click="onClickForwardButton" />
      <van-cell title="后端服务调用测试" is-link value="调用后端服务" @click="onCallService" />
      <van-cell title="jssdk测试" is-link value="上传" @click="onChooseFile" />
    </div>
    <van-collapse v-model="activeCollapse">
      <van-collapse-item
        :title="`图片${++index}`"
        :name="++index"
        v-for="(url, index) in imageList"
        :key="`image-${index}`"
      >
        <van-image :src="url" />
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import { ApplicationError, constants, util } from 'setaria';
import {
  Button,
  Cell,
  Collapse,
  CollapseItem,
  Image,
  Toast,
} from 'vant';
import wxUtil from '../models/wx-util';

export default {
  name: 'VHome',
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Image.name]: Image,
  },
  data() {
    return {
      activeCollapse: ['1'],
      imageList: [],
    };
  },
  computed: {
    userNickName() {
      const { data } = this.$store.getters[constants.STORE_KEY.GET_INITIAL_STATE];
      return util.lang.pathOr('', ['user', 'NICK_NAME'], data);
    },
  },
  methods: {
    onClickErrorButton() {
      throw new ApplicationError('MC002E');
    },
    onClickForwardButton() {
      this.$router.push({ name: 'pageA' });
    },
    onCallService() {
      this.$api.api.get('').then((res) => {
        const { data } = res.data;
        Toast(`返回数据：${JSON.stringify(data)}`);
      });
      console.log(this.$store.getters[constants.STORE_KEY.GET_IS_LOADING]);
    },
    onChooseFile() {
      wxUtil.chooseImage({
        count: 4, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          const { localIds } = res; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          this.imageList = localIds;
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
