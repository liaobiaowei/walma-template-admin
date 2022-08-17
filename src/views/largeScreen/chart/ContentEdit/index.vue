<template>
  <content-box
    id="go-chart-edit-layout"
    :flex="true"
    :showTop="false"
    :showBottom="true"
    :depth="1"
    :xScroll="true"
    @drop="dragHandle"
    @dragover="dragoverHandle"
    @dragenter="dragoverHandle"
  >
    <!-- 画布主体 -->
    <div id="go-chart-edit-content" @contextmenu="handleContextMenu">
      <!-- 展示 -->
      <edit-range>
        <!-- 滤镜预览 -->
        <div
          :style="{
            ...getFilterStyle(chartEditStore.getEditCanvasConfig),
            ...rangeStyle,
          }"
        >
          <!-- 图表 -->
          <edit-shape-box
            v-for="(item, index) in chartEditStore.getComponentList"
            :key="item.id"
            :data-id="item.id"
            :index="index"
            :style="useComponentStyle(item.attr, index)"
            :item="item"
            @mousedown="mousedownHandle($event, item)"
            @mouseenter="mouseenterHandle($event, item)"
            @mouseleave="mouseleaveHandle($event, item)"
            @contextmenu="handleContextMenu($event, item)"
          >
            <component
              class="edit-content-chart"
              :class="animationsClass(item.styles.animations)"
              :is="item.chartConfig.chartKey"
              :chartConfig="item"
              :themeSetting="themeSetting"
              :themeColor="themeColor"
              :style="{
                ...useSizeStyle(item.attr),
                ...getFilterStyle(item.styles),
                ...getTransformStyle(item.styles),
              }"
            />
          </edit-shape-box>
        </div>
      </edit-range>
    </div>

    <!-- 工具栏 -->
    <template #aside>
      <edit-tools />
    </template>

    <!-- 底部控制 -->
    <template #bottom>
      <EditBottom />
    </template>
  </content-box>
</template>

<script lang="ts" setup>
  import { onMounted, computed } from 'vue';
  import { chartColors } from '/@/settings/chartThemes/index';
  import { animationsClass, getFilterStyle, getTransformStyle } from '/@/utils/largeScreen';
  import { useContextMenu } from '/@/views/largeScreen/chart/hooks/useContextMenu.hook';
  import { useChartEditStore } from '/@/store/modules/largeScreen/chartEditStore/chartEditStore';

  import { useLayout } from './hooks/useLayout.hook';
  import { useAddKeyboard } from '../hooks/useKeyboard.hook';
  import { dragHandle, dragoverHandle, useMouseHandle } from './hooks/useDrag.hook';
  import { useComponentStyle, useSizeStyle } from './hooks/useStyle.hook';

  import { ContentBox } from '../ContentBox/index';
  import { EditRange } from './components/EditRange';
  import { EditBottom } from './components/EditBottom';
  import { EditShapeBox } from './components/EditShapeBox';
  import { EditTools } from './components/EditTools';

  const chartEditStore = useChartEditStore();
  const { handleContextMenu } = useContextMenu();

  // 布局处理
  useLayout();

  // 点击事件
  const { mouseenterHandle, mouseleaveHandle, mousedownHandle } = useMouseHandle();

  // 主题色
  const themeSetting = computed(() => {
    const chartThemeSetting = chartEditStore.getEditCanvasConfig.chartThemeSetting;
    return chartThemeSetting;
  });

  // 配置项
  const themeColor = computed(() => {
    const chartThemeColor = chartEditStore.getEditCanvasConfig.chartThemeColor;
    return chartColors[chartThemeColor];
  });

  // 背景
  const rangeStyle = computed(() => {
    // 设置背景色和图片背景
    const background = chartEditStore.getEditCanvasConfig.background;
    const backgroundImage = chartEditStore.getEditCanvasConfig.backgroundImage;
    const selectColor = chartEditStore.getEditCanvasConfig.selectColor;
    const backgroundColor = background ? background : undefined;

    const computedBackground = selectColor
      ? { background: backgroundColor }
      : { background: `url(${backgroundImage}) no-repeat center center / cover !important` };

    // @ts-ignore
    return {
      ...computedBackground,
      width: 'inherit',
      height: 'inherit',
    };
  });

  // 键盘事件
  onMounted(() => {
    useAddKeyboard();
  });
</script>

<style lang="less" scoped>
  #go-chart-edit-layout {
    position: relative;
    width: 100%;
    overflow: hidden;
    // @extend .go-point-bg;
    background-image: linear-gradient(90deg, transparent 14px, #232324 0);
    #go-chart-edit-content {
      border-radius: 10px;
      margin: 15px;
      overflow: hidden;
      // @extend .go-transition;
      // @include fetch-theme('box-shadow');
      .edit-content-chart {
        position: absolute;
        overflow: hidden;
      }
    }
  }
</style>
