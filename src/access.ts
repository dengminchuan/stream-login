


/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.User } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    //判断条件,在route.ts直接使用
    canAdmin: currentUser && currentUser.isAdmin === 1,
  };
}
