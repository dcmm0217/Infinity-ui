// 导入组件和类型
import _Button from "./button.vue"; // 导入 Button 组件定义
import type { App, Plugin } from "vue"; // 导入 App 和 Plugin 两个类型
// 定义 SFCWithInstall 类型和 withInstall 函数
type SFCWithInstall<T> = T & Plugin; // 定义 SFCWithInstall 类型，用于表示一个 Vue 单文件组件（SFC）类型加上一个 install 方法
const withInstall = <T>(comp: T) => { // 定义 withInstall 函数，用于将组件包装成具有 install 方法的新组件
  // 将传入的组件类型 comp 转换成 SFCWithInstall<T> 类型，并新增 install 方法
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name; // 获取组件名
    app.component(name, comp as SFCWithInstall<T>); // 注册全局组件
  };
  return comp as SFCWithInstall<T>; // 返回包装后的组件类型
};

// 包装组件并导出
export const Button = withInstall(_Button); // 使用 withInstall 包装 Button 组件，得到一个具有 install 方法的 Button 组件
export default Button; // 将 Button 组件作为默认导出