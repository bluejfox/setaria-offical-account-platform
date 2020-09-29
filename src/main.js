import Setaria, { ApplicationError, util } from 'setaria';
import message from './configs/messages';
import routes from './configs/routes';
import store from './configs/store';
import GlobalLoading from './components/GlobalLoading.vue';
import GlobalError from './components/GlobalError.vue';
import App from './App.vue';
import './App.scss';

const entry = {
  el: '#app',
  getInitialState({ http }) {
    return new Promise((resolve, reject) => {
      const queryParameter = util.query.resolveQuery(window.location.search);
      const code = util.lang.propOr('', ['code'], queryParameter);
      if (util.lang.isEmpty(code)) {
        reject(new ApplicationError('MC001E'));
        return;
      }
      resolve({
        user: {
          USER_ID: 'a3kkpq40vlbd5f92',
          NICK_NAME: '韩雷',
          OPENID: 'o8Onl6V7i8IqYD_wMdprZHTZyCBE',
          CITY: '大连',
          COUNTRY: '中国',
          HEADIMGURL: null,
          LANGUAGE: null,
          NICKNAME: null,
          PROVINCE: null,
          SEX: null,
          UNIONID: null,
          PRIVILEGE: null,
          GROUPID: null,
          TAGID_LIST: null,
          SUBSCRIBE: null,
          SUBSCRIBE_TIME: null,
          CREATE_AUTHOR: null,
          CREATE_DATETIME: '2020-09-26T23:42:56.000Z',
          UPDATE_AUTHOR: null,
          UPDATE_DATETIME: '2020-09-26T23:42:56.000Z',
        },
      });
      // // 获取用户信息
      // http.api.get('auth', {
      //   params: {
      //     code,
      //   },
      // })
      //   .then((res) => {
      //     console.log(res.data);
      //     const { data } = res.data;
      //     resolve({
      //       user: data,
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     reject(err);
      //   });
    });
  },
  render: (h) => h(App),
};

// eslint-disable-next-line no-new
new Setaria({
  entry,
  loading: GlobalLoading,
  error: GlobalError,
  http: {
    defaults: {},
    api: {
      baseURL: '/api',
      showLoading: true,
    },
  },
  message,
  routes,
  store,
});
