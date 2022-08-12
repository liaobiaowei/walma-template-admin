import { defHttp } from '/@/utils/http/axios';
import { designListParams } from './paramModel';

enum Api {
  GetDesignList = '/aloha-cyborg/screen/list',
}

/**
 * @description：获取大屏列表
 */
export function getDesignList(params: designListParams) {
  return defHttp.post({
    url: Api.GetDesignList,
    params,
  });
}
