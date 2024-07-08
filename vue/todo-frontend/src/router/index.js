import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import InputComponent from '@/components/InputComponent.vue';
import ImageDisplay from '@/components/ImageDisplay.vue'; // 변경된 컴포넌트 파일 경로

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/input',
    name: 'InputComponent',
    component: InputComponent
  },
  {
    path: '/images',
    name: 'ImageDisplay',
    component: ImageDisplay
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
