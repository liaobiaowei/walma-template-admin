<template>
  <go-app-provider>
    <!-- 工作台相关 -->
    <div class="go-chart">
      <n-layout>
        <!-- <layout-header-pro>
        <template #left>
          <header-left-btn />
        </template>
        <template #center>
          <header-title />
        </template>
        <template #ri-left>
          <header-right-btn />
        </template>
      </layout-header-pro> -->
        <n-layout-content content-style="overflow:hidden; display: flex">
          <content-charts />
          <content-layers />
          <content-configurations />
        </n-layout-content>
      </n-layout>
    </div>
    <!-- 右键 -->
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      size="small"
      :x="mousePosition.x"
      :y="mousePosition.y"
      :options="menuOptions"
      :show="chartEditStore.getRightMenuShow"
      :on-clickoutside="onClickOutSide"
      @select="handleMenuSelect"
    />
  </go-app-provider>
</template>

<script setup lang="ts">
  import { GoAppProvider } from '/@/components/largeScreen/GoAppProvider';

  import { loadAsyncComponent } from '/@/utils/largeScreen/componets';
  // import { LayoutHeaderPro } from '/@/layout/components/LayoutHeaderPro';
  import { useContextMenu } from './hooks/useContextMenu.hook';
  import { useChartEditStore } from '/@/store/modules/largeScreen/chartEditStore/chartEditStore';
  import { useChartHistoryStore } from '/@/store/modules/largeScreen/chartHistoryStore/chartHistoryStore';

  const chartHistoryStoreStore = useChartHistoryStore();
  const chartEditStore = useChartEditStore();

  // 记录初始化
  chartHistoryStoreStore.canvasInit(chartEditStore.getEditCanvas);

  // const HeaderLeftBtn = loadAsyncComponent(() => import('./ContentHeader/headerLeftBtn/index.vue'));
  // const HeaderRightBtn = loadAsyncComponent(
  //   () => import('./ContentHeader/headerRightBtn/index.vue'),
  // );
  // const HeaderTitle = loadAsyncComponent(() => import('./ContentHeader/headerTitle/index.vue'));
  const ContentLayers = loadAsyncComponent(() => import('./ContentLayers/index.vue'));
  const ContentCharts = loadAsyncComponent(() => import('./ContentCharts/index.vue'));
  const ContentConfigurations = loadAsyncComponent(
    () => import('./ContentConfigurations/index.vue'),
  );

  // 右键
  const { menuOptions, onClickOutSide, mousePosition, handleMenuSelect } = useContextMenu();
</script>

<style lang="less" scoped>
  .go-chart {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-image: linear-gradient(120deg, #18181c 0%, #18181c 100%);
  }
</style>
