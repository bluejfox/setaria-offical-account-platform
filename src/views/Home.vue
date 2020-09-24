<template>
  <div>
    Home
    <van-button @click="onClick">错误</van-button>
  </div>
</template>
<script>
import { ApplicationError } from 'setaria';
import { Button } from 'vant';

export default {
  name: 'VHome',
  components: {
    [Button.name]: Button,
  },
  methods: {
    onClick() {
      throw new ApplicationError('MC002E');
    },
  },
};
</script>
