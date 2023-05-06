import { Settings as LayoutSettings } from '@ant-design/pro-components';
//修改layout布局
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'stream-AI',
  pwa: false,
  logo: "/iconfont/streamlogo.svg",
  iconfontUrl: '',
};

export default Settings;
