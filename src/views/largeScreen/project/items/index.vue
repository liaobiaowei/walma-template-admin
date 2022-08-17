<template>
  <div class="go-project-items">
    <project-items-list />
  </div>
</template>

<script setup lang="ts">
  import { ProjectItemsList } from './components/ProjectItemsList';
</script>

<style lang="less" scoped>
  .go-project-items {
    padding: 30px 20px;
  }
</style>
