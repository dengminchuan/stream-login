// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** getCaptcha GET /api/user/captcha */
export async function getCaptcha(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/user/captcha', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getCurrentUser GET /api/user/currentUser */
export async function getCurrentUser(options?: { [key: string]: any }) {
  const token = localStorage.getItem('token');
  return request<API.BaseResponseUser_>('/api/user/currentUser', {
    method: 'GET',
    headers: {
      'token': token ||' ',
    },
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
