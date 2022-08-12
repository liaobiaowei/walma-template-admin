<template>
  <div class="design-list">
    <!-- <a-form layout="inline" :labelCol="{ span: 7, offset: 1 }" labelAlign="left">
      <a-form-item label="大屏名称" name="title">
        <a-input v-model:value="title" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="searchHandler">
          <template #icon><SearchOutlined /></template>搜索
        </a-button>
      </a-form-item>
    </a-form>
    <a-button type="primary" class="design-create">新建</a-button>
    <a-row>
      <a-col :span="6" v-for="item in tableData" :key="item">11</a-col>
    </a-row> -->

    <!-- <Form name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off">
      <Form.Item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input />
      </Form.Item>

      <Form.Item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </Form.Item>
    </Form> -->
  </div>
</template>
<script lang="ts">
  // import { Form } from 'ant-design-vue';

  import { getDesignList } from '/@/api/largeScreen/api';
  // import { designListParams } from '/@/api/largeScreen/paramModel';
  import { defineComponent, onMounted, reactive } from 'vue';
  // import FormItem from '/@/components/Form/src/components/FormItem.vue';

  export default defineComponent({
    setup() {
      const searchParams = reactive({
        title: '',
        pageSize: 10,
        currentPage: 1,
      });
      const searchHandler = () => {
        getDesignListHandler();
      };
      let getDesignListHandler = async () => {
        try {
          console.log(searchParams);
          const data = await getDesignList(searchParams);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      onMounted(() => {
        getDesignListHandler();
      });
      return {
        searchParams,
        tableData: [],
        searchHandler,
        // getDesignList,
      };
    },
    // components: { FormItem },
  });
</script>
<style scoped lang="less">
  .design-list {
    padding: 20px;

    .design-create {
      margin: 20px 0;
    }
  }
</style>
