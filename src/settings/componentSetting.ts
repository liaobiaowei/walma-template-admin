// 用于配置某些组件的常规配置，而不修改组件

import type { SorterResult } from '../components/Table';

export default {
  // 基本表设置
  table: {
    // 表单界面请求常规配置
    // 支持 xxx.xxx.xxx
    fetchSetting: {
      // 传递到后台的当前页面的字段名称
      pageField: 'page',
      // 背景中显示的每个页面的数字字段名称
      sizeField: 'pageSize',
      // 接口返回的表单数据的字段名称
      listField: 'items',
      // 接口字段名称返回的表总数
      totalField: 'total',
    },
    // 可以选择的页数
    pageSizeOptions: ['10', '50', '80', '100'],
    // 一页上的默认显示数量
    defaultPageSize: 10,
    // 默认大小
    defaultSize: 'middle',
    // 自定义常规排序功能
    defaultSortFn: (sortInfo: SorterResult) => {
      const { field, order } = sortInfo;
      if (field && order) {
        return {
          // 传递给后端的排序字段
          field,
          // 传递给后台 asc/desc 的排序方法
          order,
        };
      } else {
        return {};
      }
    },
    // 自定义常规过滤功能
    defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
      return data;
    },
  },
  // 滚动条设置
  scrollbar: {
    // 是否使用本机滚动条
    // 打开后，菜单，模式，抽屉会将弹出式滚动条更改为本机
    native: false,
  },
};
