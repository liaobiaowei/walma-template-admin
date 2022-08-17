<template>
  <div class="go-chart-configurations-setting" v-if="targetData">
    <!-- 名称 -->
    <name-setting :chartConfig="targetData.chartConfig" />
    <!-- 尺寸 -->
    <size-setting :chartAttr="targetData.attr" />
    <!-- 位置 -->
    <position-setting
      :chartAttr="targetData.attr"
      :canvasConfig="chartEditStore.getEditCanvasConfig"
    />
    <!-- 滤镜 -->
    <styles-setting :chartStyles="targetData.styles" />
    <!-- 自定义配置项 -->
    <component :is="targetData.chartConfig.conKey" :optionData="targetData.option" />
  </div>
</template>

<script setup lang="ts">
  import {
    NameSetting,
    PositionSetting,
    SizeSetting,
    StylesSetting,
  } from '/@/components/largeScreen/Pages/ChartItemSetting';
  import { useTargetData } from '../hooks/useTargetData.hook';
  const { targetData, chartEditStore } = useTargetData();
</script>
