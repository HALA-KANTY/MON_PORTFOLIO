<template>
  <section class="about-section">
    <div class="section-header">
      <h2>
        <i class="fas fa-user-tie section-icon"></i>
        À propos de moi
      </h2>
      <p class="section-subtitle">Mon parcours, mes compétences et ma passion pour la tech</p>
    </div>

    <div class="about-container">
    
      <div class="profile-card">
        <div class="profile-summary">
          <h3><i class="fas fa-graduation-cap"></i> Étudiant en Informatique</h3>
          <p>
            Actuellement en 2ème année de licence à l'ENI Fianarantsoa, je me spécialise 
            dans le développement full-stack avec une curiosité marquée pour la cybersécurité et l'IA.
          </p>
        </div>
        <div class="profile-highlights">
          <div class="highlight-item">
            <i class="fas fa-brain"></i>
            <span>Rigueur académique</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-lightbulb"></i>
            <span>Curiosité technologique</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-code"></i>
            <span>Polyvalent full-stack</span>
          </div>
        </div>
      </div>

      <!-- Grille d'informations -->
      <div class="info-grid">
        <!-- Formation -->
        <div class="info-card">
          <div class="card-header">
            <i class="fas fa-university card-icon"></i>
            <h3>Formation académique</h3>
          </div>
          <ul class="timeline">
            <li>
              <span class="timeline-date">2024-2025</span>
              <span class="timeline-title"> Deuxième année de licence en Informatique Générale</span>
              <span class="timeline-location">ENI Fianarantsoa</span>
            </li>
             <li>
              <span class="timeline-date">2023-2024</span>
              <span class="timeline-title"> Prémiere année de licence en Informatique Générale</span>
              <span class="timeline-location">ENI Fianarantsoa</span>
            </li>
            <li>
              <span class="timeline-date">2023</span>
              <span class="timeline-title">Baccalauréat Scientifique</span>
              <span class="timeline-location">Lycée Mixte ZAFY Albert (Mention Bien)</span>
            </li>
          </ul>
        </div>

        <!-- Compétences techniques -->
        <div class="info-card">
          <div class="card-header">
            <i class="fas fa-laptop-code card-icon"></i>
            <h3>Compétences Techniques</h3>
          </div>
          <div class="skills-container">
            <div class="skill-category">
              <h4>Langages & Frameworks</h4>
              <div class="skills-list">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">C#</span>
                <span class="skill-tag">Java</span>
                <span class="skill-tag">HTML/CSS</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Bases de données</h4>
              <div class="skills-list">
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">SQLite</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Formations complémentaires -->
        <div class="info-card">
          <div class="card-header">
            <i class="fas fa-certificate card-icon"></i>
            <h3>Formations suplémentaires</h3>
          </div>
          <ul class="certification-list">
            <li>
              <i class="fas fa-shield-alt"></i>
              Sécuriser votre système et vos données
              <span class="certification-date">Orange Digital Center - Mai 2025</span>
            </li>
            <li>
              <i class="fas fa-robot"></i>
              Les clés de démarrage en IA
              <span class="certification-date">Orange Digital Center - Mai 2025</span>
            </li>
          </ul>
        </div>

        <!-- Langues -->
        <div class="info-card">
          <div class="card-header">
            <i class="fas fa-language card-icon"></i>
            <h3>Langues</h3>
          </div>
          <div class="language-skills">
            <div class="language-item">
              <span>Français</span>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 80%"></div>
              </div>
            </div>
            <div class="language-item">
              <span>Anglais</span>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 30%"></div>
              </div>
            </div>
            <div class="language-item">
              <span>Malagasy</span>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 100%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
 margin-top: -20px;
  background-color: var(--bg-color);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.section-subtitle {
  color: var(--text-color);
  opacity: 0.8;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.about-container {
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-card {
  background: var(--nav-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--light-gray);
}

.profile-summary {
  margin-bottom: 1.5rem;
}

.profile-summary h3 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.profile-summary p {
  color: var(--text-color);
  line-height: 1.6;
}

.profile-highlights {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(254, 59, 50, 0.1);
  color: var(var(--text-color));
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 500;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.info-card {
  margin-top: -20px;
  background: var(--nav-bg);
  border-radius: 12px;
  padding: 1.5rem;
  padding-bottom: 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--light-gray);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-header h3 {
  color: var(var(--text-color));
  font-size: 1.3rem;
}

.card-icon {
  color: var(--secondary-color);
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(254, 59, 50, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline {
  list-style: none;
  padding-left: 0;
}

.timeline li {
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2rem;
}

.timeline li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.3rem;
  width: 12px;
  height: 12px;
  background: var(--secondary-color);
  border-radius: 50%;
}

.timeline-date {
  display: block;
  font-weight: 600;
  color:var(--text-color);
  font-size: 0.9rem;
}

.timeline-title {
  display: block;
  font-weight: 500;
  color: var(--text-color);
}

.timeline-location {
  display: block;
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category h4 {
  color: var(--text-color);
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  background: var(--light-gray);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
}

.certification-list {
  list-style: none;
  padding-left: 0;
}

.certification-list li {
  margin-bottom: 1.2rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  position: relative;
  padding-left: 2rem;
}

.certification-list li i {
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}

.certification-date {
  display: block;
  font-size: 0.8rem;
  color: var(--text-color);
  opacity: 0.7;
  margin-top: 0.3rem;
}

.language-skills {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.language-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.progress-bar {
  height: 6px;
  background: var(--light-gray);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--secondary-color);
  border-radius: 3px;
}

/* Responsive */
@media (max-width: 768px) {
  .profile-highlights {
    flex-direction: column;
    gap: 1rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .about-section {
    padding: 3rem 1.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}
</style>