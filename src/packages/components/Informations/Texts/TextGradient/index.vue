<template>
  <div class="go-text-box">
    <n-gradient-text :size="size" :gradient="gradient">
      {{ option.dataset }}
    </n-gradient-text>
  </div>
</template>
<script setup lang="ts">
  import { PropType, toRefs, shallowReactive, watch } from 'vue';
  import { CreateComponentType } from '/@/packages/index.d';
  import { useChartDataFetch } from '/@/hooks/largeScreen';
  import { useChartEditStore } from '/@/store/modules/largeScreen/chartEditStore/chartEditStore';
  import { option as configOption } from './config';

  const props = defineProps({
    chartConfig: {
      type: Object as PropType<CreateComponentType>,
      required: true,
    },
  });

  const option = shallowReactive({
    dataset: configOption.dataset,
  });

  const { w, h } = toRefs(props.chartConfig.attr);
  const { size, gradient } = toRefs(props.chartConfig.option);

  watch(
    () => props.chartConfig.option.dataset,
    (newData: any) => {
      option.dataset = newData;
    },
  );

  useChartDataFetch(props.chartConfig, useChartEditStore, (newData: any) => {
    option.dataset = newData;
  });
</script>

<style lang="less" scoped>
  // @include go('text-box') {
  .go-text-box {
    display: flex;
    align-items: center;
    justify-content: center;
    .n-gradient-text {
      white-space: initial;
    }
  }
</style>
