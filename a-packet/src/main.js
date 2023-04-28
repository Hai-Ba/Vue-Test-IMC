import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {Button, Pagination} from 'ant-design-vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faList, faChartPie, faKey, faDatabase, faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons'

import 'ant-design-vue/dist/antd.css';//Import separately

import './assets/main.css'

/* add icons to the library */
library.add(faUserSecret, faList, faChartPie, faKey, faDatabase, faArrowRightArrowLeft);

const app = createApp(App);

app.use(router);
app.use(Button)
    .use(Pagination)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
