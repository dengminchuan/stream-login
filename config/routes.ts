/*
 * @Author: dengminchuan 1755875003@qq.com
 * @Date: 2023-04-30 00:11:13
 * @LastEditors: dengminchuan 1755875003@qq.com
 * @LastEditTime: 2023-05-02 21:44:34
 * @FilePath: \stream\config\routes.ts
 * @Description: 导航配置
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  //streamBI
  {
    path: '/streamBI',
    name: 'streamBI',
    icon: 'icon-StreamStudio',
    //在新页面打开
    // target: '_blank',
    component: './streamBI',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
