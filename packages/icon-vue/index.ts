import * as components from './src/index';
export * from './src/index';
import { App, defineComponent } from 'vue';
// const requireComponent = import.meta.globEager('./src/icon/svg/**/*.svg');
// const images: Record<string, { default: string }> = import.meta.globEager('../assets/images/*.*');
// let arr = Object.values(images).map(v => v.default);
export default {
  install: (app: App) => {
    // for (let c in components) {
    //   app.use(components[c]);
    // }
    // for (const path in requireComponent) {
    //   const name = path.match(/\/svg\/(.+?)\.svg$/)[1];
    //   if (!name) {
    //     continue;
    //   }
    //   app.component(
    //     `in-icon-${name}`,
    //     defineComponent({
    //       name: `in-icon-${name}`,
    //       props: ['fill', 'width', 'height'],
    //       extends: requireComponent[path].default
    //     })
    //   );
    // }
  }
};
