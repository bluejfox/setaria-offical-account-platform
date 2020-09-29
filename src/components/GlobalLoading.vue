<template>
  <div>
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  name: 'CGlobalLoading',
  components: {
    [Toast.name]: Toast,
  },
  mounted() {
    Toast.loading({
      message: '加载中',
      forbidClick: true,
    });
  },
};
</script>
