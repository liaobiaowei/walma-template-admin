import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const largeScreen: AppRouteModule = {
  path: '/largescreen',
  name: 'Largescreen',
  component: LAYOUT,
  redirect: '/largescreen/designList',
  meta: {
    orderNo: 20,
    icon: 'ion:grid-outline',
    title: t('大屏管理'),
  },
  children: [
    {
      path: 'designList',
      name: 'DesignList',
      component: () => import('/@/views/largeScreen/designList/index.vue'),
      meta: {
        title: t('大屏列表'),
      },
    },
    {
      path: 'resourceLibaray',
      name: 'ResourceLibaray',
      component: () => import('/@/views/largeScreen/resourceLibaray/index.vue'),
      meta: {
        title: t('资源库管理'),
      },
    },
    {
      path: 'resourceGroup',
      name: 'ResourceGroup',
      component: () => import('/@/views/largeScreen/resourceGroup/index.vue'),
      meta: {
        title: t('资源分组管理'),
      },
    },
  ],
};

export default largeScreen;
