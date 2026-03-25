import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import ElementPlus from 'element-plus';
import * as echarts from 'echarts';

import 'element-plus/dist/index.css';
import './assets/style.css';
import './theme/index.css';

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$echarts = echarts;

app.use(ElementPlus);
app.mount('#app');
