// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import BaseResponseString_ = API.BaseResponseString_;

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<BaseResponseString_>('/api/user/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });

}
