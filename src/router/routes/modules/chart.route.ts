import { ChartEnum } from '/@/enums/largeScreen/pageEnum';

// 引入路径
const importPath = {
  'ChartEnum.CHART_HOME_NAME': () => import('/@/views/largeScreen/chart/index.vue'),
};

import type { AppRouteModule } from '/@/router/types';

const chartRoutes: AppRouteModule = {
  path: ChartEnum.CHART_HOME,
  name: ChartEnum.CHART_HOME_NAME,
  component: importPath['ChartEnum.CHART_HOME_NAME'],
  meta: {
    title: '工作空间',
    hideMenu: true,
  },
};

export default chartRoutes;
