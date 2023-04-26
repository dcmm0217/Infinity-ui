import { createApp } from "vue";
import App from "./app.vue";
import InfinityUi from "@Infinity-ui/components";
import InfinityIcon from '@Infinity-ui/icon-vue'
console.log(InfinityIcon)
const app = createApp(App);
app.use(InfinityUi);
app.use(InfinityIcon);
app.mount("#app");