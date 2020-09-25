<template>
  <div>
    <van-nav-bar
      :title="currentTitle"
      :left-text="leftText"
      :right-text="rightText"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view></router-view>
  </div>
</template>
<script>
import { util } from 'setaria';
import { NavBar } from 'vant';

export default {
  name: 'CNavBar',
  components: {
    [NavBar.name]: NavBar,
  },
  props: {
    title: String,
    leftText: {
      type: String,
      default: '返回',
    },
    rightText: String,
    beforeBack: Function,
  },
  computed: {
    currentTitle() {
      const { title } = this;
      if (util.lang.isNotEmpty(title)) {
        return title;
      }
      return util.lang.pathOr('', ['meta', 'title'], this.$route);
    },
  },
  methods: {
    onClickLeft() {
      const { back, beforeBack } = this;
      if (typeof beforeBack === 'function') {
        const result = this.beforeBack();
        if (typeof result.then === 'function') {
          result.then(() => back());
        }
      }
      back();
    },
    onClickRight() {
      this.$emit('right-click');
    },
    back() {
      this.$router.back();
    },
  },
};
</script>
