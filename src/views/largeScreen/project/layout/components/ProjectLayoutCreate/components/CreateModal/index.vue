<template>
  <n-modal :show="show" class="go-create-modal">
    <n-space size="large">
      <n-card class="card-box" hoverable>
        <template #header>
          <n-text class="card-box-tite">{{ $t('project.create_tip') }}</n-text>
        </template>
        <template #header-extra>
          <n-text @click="closeHandle">
            <n-icon size="20">
              <component :is="CloseIcon" />
            </n-icon>
          </n-text>
        </template>
        <n-space class="card-box-content" justify="center">
          <n-button
            size="large"
            :disabled="item.disabled"
            v-for="item in typeList"
            :key="item.key"
            @click="btnHandle"
          >
            <component :is="item.title" />
            <template #icon>
              <n-icon size="18">
                <component :is="item.icon" />
              </n-icon>
            </template>
          </n-button>
        </n-space>
        <template #action></template>
      </n-card>
    </n-space>
  </n-modal>
</template>

<script lang="ts" setup>
  import { watch, reactive } from 'vue';
  import { icon } from '/@/plugins';
  import { PageEnum, ChartEnum } from '/@/enums/largeScreen/pageEnum';
  import { fetchPathByName, routerTurnByPath } from '/@/utils/largeScreen';
  import { buildUUID } from '/@/utils/uuid';

  const { FishIcon, CloseIcon } = icon.ionicons5;
  const { StoreIcon, ObjectStorageIcon } = icon.carbon;
  const $t = window['$t'];
  const emit = defineEmits(['close']);
  const props = defineProps({
    show: Boolean,
  });

  const typeList = reactive([
    {
      title: '新项目',
      key: ChartEnum.CHART_HOME_NAME,
      icon: FishIcon,
      disabled: false,
    },
    {
      title: '我的项目',
      key: PageEnum.BASE_HOME_TEMPLATE_NAME,
      icon: ObjectStorageIcon,
      disabled: true,
    },
    {
      title: '模板市场',
      key: PageEnum.BASE_HOME_TEMPLATE_MARKET_NAME,
      icon: StoreIcon,
      disabled: true,
    },
  ]);

  // 解决点击模态层不会触发 @on-after-leave 的问题
  watch(props, (newValue) => {
    if (!newValue.show) {
      closeHandle();
    }
  });

  // 关闭对话框
  const closeHandle = () => {
    emit('close', false);
  };

  // 处理按钮点击
  const btnHandle = () => {
    closeHandle();
    const id = buildUUID();
    const path = fetchPathByName(ChartEnum.CHART_HOME_NAME, 'href');
    routerTurnByPath(path, [id], undefined, true);
  };
</script>
<style lang="less" scoped>
  @cardWidth: 570px;

  .go-create-modal {
    position: fixed;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);

    .card-box {
      width: @cardWidth;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0);
      /* @extend .go-transition; */
      &:hover {
        /* @include hover-border-color('hover-border-color'); */
      }

      &-tite {
        font-size: 14px;
      }

      &-content {
        padding: 0px 10px;
        width: 100%;
      }
    }
  }
</style>
