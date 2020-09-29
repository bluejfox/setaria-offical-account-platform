<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Setaria, { constants } from 'setaria';
import { Toast } from 'vant';

let loadingInstance;

export default {
  name: 'VApp',
  beforeCreate() {
    Setaria.config.errorHanlder = (error) => {
      const config = (error.detail && error.detail.config) || {};
      if (config.isShowError !== false) {
        Toast({
          type: 'fail',
          icon: 'close',
          message: error.errorMessage,
          forbidClick: true,
        });
      }
    };
  },
  computed: {
    loadingState() {
      if (this.$store && this.$store.getters) {
        return this.$store.getters[constants.STORE_KEY.GET_IS_LOADING];
      }
      return true;
    },
  },
  watch: {
    loadingState: {
      immediate: true,
      handler(val) {
        console.log('loadingState', val);
        if (val && !loadingInstance) {
          loadingInstance = Toast.loading({
            message: process.env.VUE_APP_SERVICE_LOADING_TEXT,
            forbidClick: true,
          });
        } else {
          this.$nextTick(() => {
            if (loadingInstance) {
              loadingInstance.clear();
              loadingInstance = null;
            }
          });
        }
      },
    },
  },
};
</script>
