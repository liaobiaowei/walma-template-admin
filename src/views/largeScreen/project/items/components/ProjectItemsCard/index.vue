<template>
  <div v-if="cardData" class="go-items-list-card">
    <n-card hoverable size="small">
      <div class="list-content">
        <!-- 顶部按钮 -->
        <div class="list-content-top">
          <mac-os-control-btn
            class="top-btn"
            :hidden="['remove']"
            @close="deleteHanlde"
            @resize="resizeHandle"
          />
        </div>
        <!-- 中间 -->
        <div class="list-content-img" @click="resizeHandle">
          <n-image
            object-fit="contain"
            height="180"
            preview-disabled
            :src="requireUrl('project/moke-20211219181327.png')"
            :alt="cardData.title"
          />
        </div>
      </div>
      <template #action>
        <div class="go-flex-items-center list-footer" justify="space-between">
          <n-text class="go-ellipsis-1" :title="cardData.title">
            {{ cardData.title || '' }}
          </n-text>
          <!-- 工具 -->
          <div class="go-flex-items-center list-footer-ri">
            <n-space>
              <n-text>
                <n-badge
                  class="go-animation-twinkle"
                  dot
                  :color="cardData.release ? '#34c749' : '#fcbc40'"
                />
                {{ cardData.release ? '已发布' : '未发布' }}
              </n-text>

              <template v-for="item in fnBtnList" :key="item.key">
                <template v-if="item.key === 'select'">
                  <n-dropdown
                    trigger="hover"
                    placement="bottom"
                    :options="selectOptions"
                    :show-arrow="true"
                    @select="handleSelect"
                  >
                    <n-button size="small">
                      <template #icon>
                        <component :is="item.icon" />
                      </template>
                    </n-button>
                  </n-dropdown>
                </template>

                <n-tooltip v-else placement="bottom" trigger="hover">
                  <template #trigger>
                    <n-button size="small" @click="handleSelect(item.key)">
                      <template #icon>
                        <component :is="item.icon" />
                      </template>
                    </n-button>
                  </template>
                  <component :is="item.label" />
                </n-tooltip>
              </template>
            </n-space>
          </div>
          <!-- end -->
        </div>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
  import { reactive, h, ref, PropType } from 'vue';
  import { renderIcon } from '/@/utils/largeScreen';
  import { icon } from '/@/plugins';
  import { MacOsControlBtn } from '/@/components/largeScreen/Tips/MacOsControlBtn';
  import { Chartype } from '../../index.d';
  const {
    EllipsisHorizontalCircleSharpIcon,
    CopyIcon,
    TrashIcon,
    PencilIcon,
    DownloadIcon,
    BrowsersOutlineIcon,
    HammerIcon,
    SendIcon,
  } = icon.ionicons5;

  const emit = defineEmits(['delete', 'resize', 'edit']);

  const props = defineProps({
    cardData: Object as PropType<Chartype>,
  });

  // 处理url获取
  const requireUrl = (name: string) => {
    return new URL(`../../../../../../assets/images/${name}`, import.meta.url).href;
  };

  const fnBtnList = reactive([
    {
      label: h('span', {}, { default: () => '编辑' }),
      key: 'edit',
      icon: renderIcon(HammerIcon),
    },
    {
      lable: '选择',
      key: 'select',
      icon: renderIcon(EllipsisHorizontalCircleSharpIcon),
    },
  ]);

  const selectOptions = ref([
    {
      label: '查看',
      key: 'preview',
      icon: renderIcon(BrowsersOutlineIcon),
    },
    {
      label: '复制',
      key: 'copy',
      icon: renderIcon(CopyIcon),
    },
    {
      label: '重命名',
      key: 'rename',
      icon: renderIcon(PencilIcon),
    },
    {
      type: 'divider',
      key: 'd1',
    },
    {
      label: props.cardData?.release ? '取消发布' : '发布',
      key: 'send',
      icon: renderIcon(SendIcon),
    },
    {
      label: '下周',
      key: 'download',
      icon: renderIcon(DownloadIcon),
    },
    {
      type: 'divider',
      key: 'd2',
    },
    {
      label: '删除',
      key: 'delete',
      icon: renderIcon(TrashIcon),
    },
  ]);

  const handleSelect = (key: string) => {
    switch (key) {
      case 'delete':
        deleteHanlde();
        break;
      case 'edit':
        editHandle();
        break;
    }
  };

  // 删除处理
  const deleteHanlde = () => {
    emit('delete', props.cardData);
  };

  // 编辑处理
  const editHandle = () => {
    emit('edit', props.cardData);
  };

  // 放大处理
  const resizeHandle = () => {
    emit('resize', props.cardData);
  };
</script>

<style lang="less" scoped>
  @contentHeight: 180px;

  .go-items-list-card {
    position: relative;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0);
    transition: all 0.4s;
    // @extend .go-transition;
    &:hover {
      // @include hover-border-color('hover-border-color');
    }

    .list-content {
      margin-top: 20px;
      margin-bottom: 5px;
      cursor: pointer;
      border-radius: 8px;
      background-image: linear-gradient(90deg, transparent 14px, #232324 0);
      // @extend .go-point-bg;
      &-top {
        position: absolute;
        top: 10px;
        left: 10px;
        height: 22px;
      }

      &-img {
        height: @contentHeight;
        // @extend .go-flex-center;
        // @extend .go-border-radius;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        overflow: hidden;

        ::v-deep(img) {
          // @extend .go-border-radius;
          border-radius: 8px;
          overflow: hidden;
        }
      }
    }

    .list-footer {
      flex-wrap: nowrap;
      justify-content: space-between;
      line-height: 30px;

      &-ri {
        justify-content: flex-end;
        min-width: 180px;
      }
    }
  }
</style>
