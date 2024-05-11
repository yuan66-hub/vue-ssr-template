import { createSSRApp } from 'vue';
import App from '@/pages/App.vue'
export function createApp() {
  return createSSRApp(App);
}
