const Main = () => import((/* webpackChunkName: "main" */ '../views/Main.vue'));

export default {
  mode: 'history',
  base: `/${process.env.VUE_APP_CLIENT_BASE_URL}`,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: (route) => {
        const { active } = route.query;
        return {
          active,
        };
      },
    },
    {
      path: '/page-a',
      name: 'pageA',
      meta: { title: '页面A' },
      component: () => import(/* webpackChunkName: "page-a" */ '../views/PageA.vue'),
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // },
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    // },
  ],
};
