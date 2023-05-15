// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

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
