import { useChartEditStore } from '/@/store/modules/largeScreen/chartEditStore/chartEditStore';
import { ChartEditStoreEnum } from '/@/store/modules/largeScreen/chartEditStore/chartEditStore.d';
import type { ChartEditStorageType } from '../index.d';

// store 相关
export const useStore = (localStorageInfo: ChartEditStorageType) => {
  const chartEditStore = useChartEditStore();
  chartEditStore.requestGlobalConfig = localStorageInfo[ChartEditStoreEnum.REQUEST_GLOBAL_CONFIG];
};
