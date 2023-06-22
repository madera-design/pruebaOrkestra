import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Quagga from 'quagga'; // Importa Quagga
// import VueBarcodeReader from 'vue-barcode-reader';
// import VueQrcodeReader from "vue-qrcode-reader"; .use(VueQrcodeReader)


// app.config.globalProperties.$Quagga = Quagga;

createApp(App).use(VueAxios, axios).use(store).mount('#app');

// createApp(App).mount('#app')
