<template>
  <div class="app" :class="{ 'dark-mode': darkMode }">
    <header class="header">
      <nav class="nav">
        <div class="logo-container">
          <router-link to="/" class="logo">
            <i class="fas fa-code logo-icon"></i>
            <span class="logo-text">Steeven</span>
          </router-link>
          <button @click="toggleDarkMode" class="theme-toggle">
            <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
        
        <!-- Menu desktop -->
        <div class="desktop-links">
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
        
        <!-- Menu mobile -->
        <div class="mobile-links">
          <router-link to="/" class="mobile-link">
            <div class="mobile-icon-container">
              <i class="fas fa-home"></i>
            </div>
            <span class="mobile-link-text">Home</span>
          </router-link>
          <router-link to="/projets" class="mobile-link">
            <div class="mobile-icon-container">
              <i class="fas fa-project-diagram"></i>
            </div>
            <span class="mobile-link-text">Projets</span>
          </router-link>
          <router-link to="/apropos" class="mobile-link">
            <div class="mobile-icon-container">
              <i class="fas fa-user"></i>
            </div>
            <span class="mobile-link-text">A propos</span>
          </router-link>
          <router-link to="/contact" class="mobile-link">
            <div class="mobile-icon-container">
              <i class="fas fa-envelope"></i>
            </div>
            <span class="mobile-link-text">Contact</span>
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
  name: 'App',
  data() {
    return {
      darkMode: false
    }
  },
  created() {
    // Vérifier le préférence utilisateur ou le localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      this.darkMode = savedMode === 'true';
    } else {
      // Préférence système par défaut
      this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode);
      this.applyTheme();
    },
    applyTheme() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }
}
</script>

<style>
:root {
  /* Light theme colors */
  --primary-color: #1d2539;
  --secondary-color: #fe3b32;
  --text-color: #2d3748;
  --bg-color: #f3f3f7;
  --light-gray: #edf2f7;
  --header-bg: white;
  --nav-bg: white;
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

:root.dark-theme {
  /* Dark theme colors */
   --primary-color: #2d3748;
  --secondary-color: #ff6b6b;
  --text-color: #e2e8f0;
  --bg-color: #1a202c;
  --light-gray: #2d3748;
  --header-bg: #1a202c;
  --nav-bg: #1a202c;

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
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Header */
.header {
  background: var(--header-bg);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
}

.logo-icon {
  color: var(--secondary-color);
  transition: var(--transition);
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  color: var(--secondary-color);
  transform: rotate(20deg);
}

.theme-toggle i {
  transition: var(--transition);
}

/* Navigation desktop */
.desktop-links {
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

.nav-link i {
  font-size: 1.2rem;
  width: 1.5rem;
  text-align: center;
  color: var(--text-color);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--secondary-color);
}

.nav-link:hover i {
  color: var(--secondary-color);
  transform: translateY(-2px);
}

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

/* Navigation mobile */
.mobile-links {
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  background: var(--nav-bg);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 90;
  height: 70px;
  transition: background-color 0.3s ease;
}

.mobile-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--text-color);
  flex: 1;
  height: 100%;
  position: relative;
  transition: var(--transition);
}

.mobile-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.mobile-link i {
  font-size: 1.4rem;
  transition: var(--transition);
}

.mobile-link-text {
  font-size: 0.7rem;
  opacity: 0;
  position: absolute;
  bottom: 5px;
  transition: all 0.3s ease;
  color: var(--secondary-color);
}

.mobile-link.router-link-exact-active .mobile-icon-container {
  transform: translateY(-10px);
}

.mobile-link.router-link-exact-active i {
  color: var(--secondary-color);
  transform: scale(1.1);
}

.mobile-link.router-link-exact-active .mobile-link-text {
  opacity: 1;
  transform: translateY(0);
}

/* Animations */
@keyframes grow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

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
  margin: 0 auto;
  width: 100%;
 
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
 
  margin-top: -50px;
}
  
  .nav {
    flex-direction: column;
    padding: 1rem;
  }
  
  .desktop-links {
    display: none;
  }
  
  .mobile-links {
    display: flex;
  }
}

@media (min-width: 769px) {
  .mobile-links {
    display: none;
  }
  
  .desktop-links {
    display: flex;
  }
}
</style>