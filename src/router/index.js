import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../views/Accueil.vue';
import Apropos from '../views/Apropos.vue';
import Projets from '../views/Projets.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/apropos', name: 'Apropos', component: Apropos },
  { path: '/projets', name: 'Projets', component: Projets },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
