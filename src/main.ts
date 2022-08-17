import '/@/design/index.less';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
// 注册图标精灵
import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
import { setupNaive, setupDirectives, setupCustomComponents } from '/@/plugins';

import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupI18n } from '/@/locales/setupI18n';
import { registerGlobComp } from '/@/components/registerGlobComp';

// 引入动画
import 'animate.css/animate.min.css';
// 引入标尺
import 'vue3-sketch-ruler/lib/style.css';

// 在本地开发中按需导入将使浏览器请求的数量增加约20%。
// 这可能会降低浏览器刷新速度。
// 因此，只能在生产环境中启用按需导入。
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

async function bootstrap() {
  const app = createApp(App);

  // 配置存储
  setupStore(app);

  // 初始化内部系统配置
  initAppConfigStore();

  // 注册全局组件
  registerGlobComp(app);

  // 注册全局常用的 naive-ui 组件
  setupNaive(app);

  // 注册大屏全局自定义指令
  setupDirectives(app);

  // 注册大屏全局自定义组件
  setupCustomComponents(app);

  // 多语言配置
  // 异步情况：可以从服务器端获取语言文件
  await setupI18n(app);

  // 配置路由
  setupRouter(app);

  // 路由器防护
  setupRouterGuard(router);

  // 注册全局指令
  setupGlobDirectives(app);

  // 配置全局错误处理
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady（）;

  app.mount('#app');
  // 挂载到 window
  window['$vue'] = app;
}

bootstrap();
