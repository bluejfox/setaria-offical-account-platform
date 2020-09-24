import Setaria, { ApplicationError, util } from 'setaria';
import message from './configs/messages';
import routes from './configs/routes';
import store from './configs/store';
import GlobalError from './components/GlobalError.vue';
import App from './App.vue';
import './App.scss';

const entry = {
  el: '#app',
  getInitialState() {
    return new Promise((resolve, reject) => {
      const queryParameter = util.query.resolveQuery(window.location.search);
      const code = util.lang.propOr('', ['code'], queryParameter);
      if (util.lang.isEmpty(code)) {
        reject(new ApplicationError('MC001E'));
        return;
      }
      // TODO 获取用户信息
      resolve();
    });
  },
  render: (h) => h(App),
};

// eslint-disable-next-line no-new
new Setaria({
  entry,
  // loading: LoadingComponent,
  error: GlobalError,
  http: {
    defaults: {},
  },
  message,
  routes,
  store,
});
