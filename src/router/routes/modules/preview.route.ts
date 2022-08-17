import { PreviewEnum } from '/@/enums/largeScreen/pageEnum';

// 引入路径
const importPath = {
  'PreviewEnum.CHART_PREVIEW_NAME': () => import('/@/views/largeScreen/preview/index.vue'),
};

import type { AppRouteModule } from '/@/router/types';

const chartRoutes: AppRouteModule = {
  path: PreviewEnum.CHART_PREVIEW,
  name: PreviewEnum.CHART_PREVIEW_NAME,
  component: importPath['PreviewEnum.CHART_PREVIEW_NAME'],
  meta: {
    title: '预览',
    hideMenu: true,
  },
};

export default chartRoutes;
