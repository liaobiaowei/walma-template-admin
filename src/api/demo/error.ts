import { defHttp } from '/@/utils/http/axios';

enum Api {
  // 地址不存在
  Error = '/error',
}

/**RS
 * @description：触发ajax错误
 */

export const fireErrorApi = () => defHttp.get({ url: Api.Error });
