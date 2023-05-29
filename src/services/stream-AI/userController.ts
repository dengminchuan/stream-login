// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** getCaptcha GET /api/user/captcha */
export async function getCaptchaUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCaptchaUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/user/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getCurrentUser GET /api/user/currentUser */
export async function getCurrentUserUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseUser_>('/api/user/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** login POST /api/user/login */
export async function loginUsingPOST(body: API.User, options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** logout GET /api/user/logout */
export async function logoutUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getAllNormalUsers GET /api/user/normalUsers */
export async function getAllNormalUsersUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserManage_>('/api/user/normalUsers', {
    method: 'GET',
    ...(options || {}),
  });
}
