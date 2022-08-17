<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <dialog-content />
      <loading-content />
      <n-notification-provider>
        <n-message-provider>
          <message-content />
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
  import {
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLoadingBarProvider,
  } from 'naive-ui';

  import { MessageContent } from '/@/components/largeScreen/Plugins/MessageContent';
  import { DialogContent } from '/@/components/largeScreen/Plugins/DialogContent';
  import { LoadingContent } from '/@/components/largeScreen/Plugins/LoadingContent';
</script>
