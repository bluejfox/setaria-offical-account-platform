<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Setaria from 'setaria';
import { Toast } from 'vant';

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
        // this.exception = {
        //   code: error.errorCode,
        //   message: error.errorMessage,
        //   requestId: error.requestId,
        // };
      }
    };
  },
};
</script>
