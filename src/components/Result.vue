<template>
  <div class="result">
    <van-icon :name="iconType" :class="['result-icon', `result-icon-${type}`]" />
    <div class="title">{{ title }}</div>
    <div class="message">{{ message }}</div>
    <div>
      <van-button :type="buttonType" class="result-button" @click="onClick">关闭</van-button>
    </div>
  </div>
</template>
<script>
import { Button, Icon } from 'vant';

export default {
  name: 'CResult',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  props: {
    // success, error, warning, info
    type: String,
    title: String,
    message: String,
    buttonText: String,
  },
  computed: {
    iconType() {
      let ret = '';
      const { type } = this;
      switch (type) {
        case 'success':
          ret = 'checked';
          break;
        case 'error':
          ret = 'clear';
          break;
        case 'warning':
          ret = 'warning';
          break;
        default:
          ret = 'info';
      }
      return ret;
    },
    buttonType() {
      let ret = '';
      const { type } = this;
      switch (type) {
        case 'success':
          ret = 'primary';
          break;
        case 'error':
          ret = 'danger';
          break;
        default:
          ret = type;
      }
      return ret;
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
<style lang="scss" scoped>
.result {
  text-align: center;
  padding-top: 48px;

  .result-icon {
    font-size: 60px;
  }

  .result-icon-success {
    color: #07c160;
  }

  .result-icon-error {
    color: #ee0a24;
  }

  .title {
    font-size: 21px;
    margin-top: 15px;
  }

  .message {
    font-size: 16px;
    margin-top: 9px;
    color: #888;
    line-height: 1.5;
    padding: 0 20px;
  }

  .result-button {
    width: 180px;
    margin-top: 21px;
  }
}
</style>
