<template>
  <CollapseItem name="内容" :expanded="true">
    <SettingItemBox name="数值">
      <SettingItem name="终点值">
        <n-input-number v-model:value="optionData.dataset" size="small" :min="1" />
      </SettingItem>
      <SettingItem name="大小">
        <n-input-number v-model:value="optionData.numberSize" size="small" :min="1" />
      </SettingItem>
      <SettingItem name="精度">
        <n-input-number v-model:value="optionData.precision" size="small" :min="0" />
      </SettingItem>
      <SettingItem>
        <n-space>
          <n-switch v-model:value="optionData.showSeparator" size="small" />
          <n-text>展示分割符</n-text>
        </n-space>
      </SettingItem>
    </SettingItemBox>

    <SettingItemBox name="数值">
      <SettingItem name="前缀">
        <n-input v-model:value="optionData.prefixText" size="small" />
      </SettingItem>
      <SettingItem name="后缀">
        <n-input v-model:value="optionData.suffixText" size="small" />
      </SettingItem>
    </SettingItemBox>

    <SettingItemBox name="颜色">
      <SettingItem name="前缀">
        <n-color-picker size="small" :modes="['hex']" v-model:value="optionData.prefixColor" />
      </SettingItem>
      <SettingItem name="后缀">
        <n-color-picker size="small" :modes="['hex']" v-model:value="optionData.suffixColor" />
      </SettingItem>
      <SettingItem name="数值">
        <n-color-picker size="small" :modes="['hex']" v-model:value="optionData.numberColor" />
      </SettingItem>
    </SettingItemBox>
  </CollapseItem>

  <CollapseItem name="动画" :expanded="true">
    <SettingItemBox name="速度(s)">
      <SettingItem>
        <n-input-number v-model:value="optionData.dur" size="small" :step="0.5" :min="0.5" />
      </SettingItem>
    </SettingItemBox>
  </CollapseItem>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import {
    CollapseItem,
    SettingItemBox,
    SettingItem,
  } from '/@/components/largeScreen/Pages/ChartItemSetting';
  import { option } from './config';

  const props = defineProps({
    optionData: {
      type: Object as PropType<typeof option>,
      required: true,
    },
  });
</script>
