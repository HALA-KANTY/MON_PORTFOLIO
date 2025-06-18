<template>
  <section class="hero">
    <div class="hero-content">
      <!-- Image placée en haut pour mobile -->
      <div class="hero-image-container mobile-only">
        <img src="../icone/ste.png" alt="Steeven Cesard" class="hero-image">
        <div class="image-glow"></div>
      </div>

      <h1 class="hero-title">
        <span class="title-line">Bonjour, je suis</span>
        <span class="title-line highlight">BEFENO Steeven Cesard</span>
      </h1>
      
      <div class="typing-effect">
        <span class="typing-text">Aspirant développeur Full Stack</span>
        <span class="typing-cursor">|</span>
      </div>
      
      <p class="hero-description">
       Étudiant en deuxième année de licence à l'ENI Fianarantsoa <br>
      Je suis passionné par la création de solutions digitales innovantes. <br>
      Spécialisé dans le développement web et desktop avec un intérêt marqué pour la sécurité informatique et l'IA.
      </p>
      
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/steeven-befeno-562133321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-link">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/HALA-KANTY" target="_blank" class="social-link">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/steeven.befeno" target="_blank" class="social-link">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      
      <button class="cta-button" @click="downloadCV">
        <i class="fas fa-download"></i>
        <span>Télécharger mon CV</span>
      </button>
    </div>

    <!-- Image placée à droite pour desktop -->
    <div class="hero-image-container desktop-only">
      <img src="../icone/ste.png" alt="Steeven Cesard" class="hero-image">
      <div class="image-glow"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Accueil',
  methods: {
    downloadCV() {
  const cvPath = '/fichier/CV_BEFENO_Steeven_Cesard.pdf';
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'CV_BEFENO_Steeven_Cesard.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}}
}
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  background-color: var(--bg-color);
}

.hero-content {
  flex: 1;
  z-index: 2;
}

/* Image en version desktop */
.desktop-only {
  display: block;
}

/* Image en version mobile */
.mobile-only {
  display: none;
}

.hero-image-container {
  position: relative;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  border-radius: 100px;
  object-fit: cover;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.image-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: radial-gradient(circle, rgba(254, 59, 50, 0.1) 0%, transparent 70%);
  top: 0;
  left: 0;
  animation: pulse 3s infinite alternate;
  z-index: 1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.02);
    opacity: 0.9;
  }
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: var(--text-color);
}

.title-line {
  display: block;
}

.highlight {
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 3rem;
}

.typing-effect {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  height: 2rem;
  font-weight: normal;
}

.typing-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-color);
  max-width: 500px;
  opacity: 0.9;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 2rem;
}

.social-link {
  color: var(--primary-color);
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border: 1px solid var(--light-gray);
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

.cta-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 6px rgba(29, 37, 57, 0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(29, 37, 57, 0.15);
  background: var(--secondary-color);
}

/* Responsive */
@media (max-width: 992px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  /* Cache l'image desktop en mobile */
  .desktop-only {
    display: none;
  }
  
  /* Affiche l'image mobile */
  .mobile-only {
    display: block;
    margin-bottom: 2rem;
  }
  
  .hero-image-container {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .typing-effect {
    font-size: 1.3rem;
  }
  
  .hero-image-container {
    width: 250px;
    height: 250px;
  }
}
</style>