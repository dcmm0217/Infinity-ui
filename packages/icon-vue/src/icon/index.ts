import _Icon from './index.vue'
import type { App, Plugin } from "vue"; 
type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => { 
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name; // 获取组件名
    app.component(name, comp as SFCWithInstall<T>); // 注册全局组件
  };
  return comp as SFCWithInstall<T>; // 返回包装后的组件类型
};

// 包装组件并导出
export const Icon = withInstall(_Icon);
export default Icon; 