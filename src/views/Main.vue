<template>
  <div class="home">
    <component :is="currentComponentId"></component>
    <van-tabbar v-model="activeTab">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Button, Tabbar, TabbarItem } from 'vant';
import Home from './Home.vue';
import User from './User.vue';

export default {
  name: 'Main',
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Home.name]: Home,
    [User.name]: User,
  },
  props: {
    active: {
      type: String,
      default: 'home',
    },
  },
  data() {
    return {
      activeTab: '',
    };
  },
  computed: {
    currentComponentId() {
      const { activeTab } = this;
      return `v-${activeTab}`;
    },
  },
  created() {
    this.activeTab = this.active;
  },
};
</script>
