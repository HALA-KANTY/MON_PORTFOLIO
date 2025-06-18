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
  // Comportement de scroll personnalisé
  scrollBehavior(to, from, savedPosition) {
    // 1. Scroll vers le haut par défaut
    if (to.hash) {
      // 2. Si ancre (ex: #section), scroll vers l'élément
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 20 // Offset pour les barres fixes
      }
    } else if (savedPosition) {
      // 3. Restaure la position si utilisateur clique sur "retour"
      return savedPosition
    } else {
      // 4. Par défaut: haut de page + animation douce
      return { 
        top: 0,
        behavior: 'smooth' 
      }
    }
  }
});

export default router;