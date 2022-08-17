<template>
  <n-space class="go-mt-0">
    <n-button v-for="item in btnList" :key="item.title" ghost @click="item.event">
      <template #icon>
        <component :is="item.icon" />
      </template>
      <span>{{ item.title }}</span>
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
  import { shallowReactive } from 'vue';
  import { renderIcon, fetchPathByName, routerTurnByPath } from '/@/utils/largeScreen';

  import { createLocalStorage, createSessionStorage } from '/@/utils/cache';
  import { PreviewEnum } from '/@/enums/largeScreen/pageEnum';
  import { StorageEnum } from '/@/enums/largeScreen/storageEnum';
  import { useRoute } from 'vue-router';
  import { useChartEditStore } from '/@/store/modules/largeScreen/chartEditStore/chartEditStore';
  import { icon } from '/@/plugins';

  const { BrowsersOutlineIcon, SendIcon } = icon.ionicons5;
  const chartEditStore = useChartEditStore();

  const routerParamsInfo = useRoute();

  const ls = createLocalStorage();
  const ss = createSessionStorage();
  // 预览
  const previewHandle = () => {
    const path = fetchPathByName(PreviewEnum.CHART_PREVIEW_NAME, 'href');
    if (!path) return;
    const { id } = routerParamsInfo.params;
    // id 标识
    const previewId = typeof id === 'string' ? id : id[0];
    const storageInfo = chartEditStore.getStorageInfo;
    const sessionStorageInfo = ls.get(StorageEnum.GO_CHART_STORAGE_LIST) || [];

    if (sessionStorageInfo?.length) {
      const repeateIndex = sessionStorageInfo.findIndex((e: { id: string }) => e.id === previewId);
      // 重复替换
      if (repeateIndex !== -1) {
        sessionStorageInfo.splice(repeateIndex, 1, { id: previewId, ...storageInfo });
        ss.set(StorageEnum.GO_CHART_STORAGE_LIST, sessionStorageInfo);
      } else {
        sessionStorageInfo.push({
          id: previewId,
          ...storageInfo,
        });
        ss.set(StorageEnum.GO_CHART_STORAGE_LIST, sessionStorageInfo);
      }
    } else {
      ss.set(StorageEnum.GO_CHART_STORAGE_LIST, [{ id: previewId, ...storageInfo }]);
    }
    // 跳转
    routerTurnByPath(path, [previewId], undefined, true);
  };

  // 发布
  const sendHandle = () => {
    // goDialog({
    //   message:
    //     '想体验发布功能，请前往 master-fetch 分支查看: https://gitee.com/MTrun/go-view/tree/master-fetch',
    //   positiveText: '了然',
    //   closeNegativeText: true,
    //   onPositiveCallback: () => {},
    // });
  };

  const btnList = shallowReactive([
    {
      select: true,
      title: '预览',
      icon: renderIcon(BrowsersOutlineIcon),
      event: previewHandle,
    },
    {
      select: true,
      title: '发布',
      icon: renderIcon(SendIcon),
      event: sendHandle,
    },
  ]);
</script>
<style lang="less" scoped>
  .align-center {
    margin-top: -4px;
  }
</style>
