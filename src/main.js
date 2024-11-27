import { createApp } from "vue";
import {
  Drawer,
  Button,
  message,
  Layout,
  Menu,
  Breadcrumb,
} from "ant-design-vue";
import router from "./view/router";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "ant-design-vue/dist/reset.css";
const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Drawer);
app.use(Layout);
app.use(Menu);
app.use(Breadcrumb);

app.mount("#app");

app.config.globalProperties.$message = message;
