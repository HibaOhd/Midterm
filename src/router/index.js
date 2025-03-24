import { createRouter, createWebHistory } from 'vue-router';
import LibraryApp from '../views/LibraryApp.vue';
import BookDetails from '../views/BookDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LibraryApp },
    { path: '/book/:id', component: BookDetails },
  ],
});

export default router;