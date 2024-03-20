import HomePage from '../pages/home.vue';
import NotFoundPage from '../pages/404.vue';
import SearchPage from "@/pages/SearchPage.vue";

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    name: 'search',
    path: '/search/',
    component: SearchPage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
