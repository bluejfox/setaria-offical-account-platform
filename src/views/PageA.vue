<template>
  <div>
    <c-nav-bar></c-nav-bar>
    <c-basic-layout>
      PageA
    </c-basic-layout>
  </div>
</template>
<script>
import BasicLayout from '../components/layouts/BasicLayout.vue';
import NavBar from '../components/NavBar.vue';

export default {
  name: 'VPageA',
  components: {
    [BasicLayout.name]: BasicLayout,
    [NavBar.name]: NavBar,
  },
};
</script>
