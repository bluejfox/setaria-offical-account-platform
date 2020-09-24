<template>
  <div class="global-error">
    <c-result
      type="error"
      title="出现错误"
      :message="error"></c-result>
  </div>
</template>
<script>
import { constants, util } from 'setaria';
import { Button, Icon } from 'vant';
import Result from './Result.vue';

export default {
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Result.name]: Result,
  },
  computed: {
    error() {
      const initialState = this.$store.getters[constants.STORE_KEY.GET_INITIAL_STATE];
      return util.lang.pathOr('', ['error', 'errorMessage'], initialState);
    },
  },
};
</script>
<style lang="scss" scoped>
.global-error{
  text-align: center;
  padding-top: 48px;

  .error-icon {
    font-size: 5rem;
    color: #fa5151;
    margin-bottom: 32px;
  }

  .error-message {
    font-size: 18px;
    margin-bottom: 16px;
  }
}
</style>
