<template>
  <div class="app">
    <header class="header">
      <nav class="nav">
        <router-link to="/" class="logo">
          <i class="fas fa-code logo-icon"></i>
          <span class="logo-text">Steeven</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </router-link>
          <router-link to="/projets" class="nav-link">
            <i class="fas fa-project-diagram"></i>
            <span>Projets</span>
          </router-link>
          <router-link to="/apropos" class="nav-link">
            <i class="fas fa-user"></i>
            <span>A propos</span>
          </router-link>
          <router-link to="/contact" class="nav-link">
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
          </router-link>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --primary-color: #1d2539;
  --secondary-color: #fe3b32;
   --text-color: #2d3748;
  --bg-color: #f3f3f7;
  --light-gray: #edf2f7;
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

/* Header */
.header {
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.logo-icon {
  color: var(--secondary-color);
  transition: var(--transition);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
  padding: 0.5rem 0;
  position: relative;
}

/* État normal des liens */
.nav-link i {
  font-size: 1.2rem;
  width: 1.5rem;
  text-align: center;
  color: var(--text-color);
  transition: var(--transition);
}

/* État au survol */
.nav-link:hover {
  color: var(--primary-color);
}

.nav-link:hover i {
  color: var(--secondary-color);
  transform: translateY(-2px);
}

/* État actif - beaucoup plus visible */
.nav-link.router-link-exact-active {
  color: var(--secondary-color);
  font-weight: 600;
}

.nav-link.router-link-exact-active i {
  color: var(--secondary-color);
  animation: pulse 0.5s ease;
}

.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--secondary-color);
  border-radius: 2px;
  animation: grow 0.3s ease forwards;
}

/* Animation pour la barre active */
@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

/* Animation pulse pour l'icône active */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Animation de transition entre pages */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: all 0.4s ease;
}
.page-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Main content */
.main-content {
  flex: 1;
  padding: 2rem;
  /* max-width: 90%; */
  margin: 0 auto;
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav-links {
    margin-top: 1rem;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-link {
    padding: 0.5rem 0.5rem;   
    border-radius: 4px;
  }

}
</style>