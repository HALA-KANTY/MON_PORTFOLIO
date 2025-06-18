<template>
  <section class="projects-section">
    <div class="section-header">
      <h2>
        <i class="fas fa-code-branch section-icon"></i>
        Mes Projets
      </h2>
      <p class="section-subtitle">Découvrez mes principales réalisations techniques</p>
    </div>

    <div class="projects-grid">
      <!-- Projet 1 -->
      <div class="project-card">
        <div class="project-header">
          <h3>Gestion des Enseignants</h3>
          <span class="project-date">Mai 2025</span>
        </div>
        <div class="project-content">
          <p class="project-description">
            Application web  pour la gestion des prestation des enseignants en fonction  de leur temps de travail .
          </p>
          <div class="project-tech">
            <span class="tech-tag vue">Vue.js</span>
            <span class="tech-tag php">PHP</span>
            <span class="tech-tag mysql">MySQL</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="#" class="project-link" @click.prevent="showProjectDetails('teacher')">
            <i class="fas fa-eye"></i> Voir les détails
          </a>
        </div>
      </div>

      <!-- Projet 2 -->
      <div class="project-card">
        <div class="project-header">
          <h3>E-Pharma (Gestion de stock)</h3>
          <span class="project-date">Mai 2025</span>
        </div>
        <div class="project-content">
          <p class="project-description">
            Application desktop pour la gestion de stock de pharmacie avec système d'alertes pour les médicaments périmés.
          </p>
          <div class="project-tech">
            <span class="tech-tag csharp">C#</span>
            <span class="tech-tag mysql">MySQL</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="#" class="project-link" @click.prevent="showProjectDetails('pharma')">
            <i class="fas fa-eye"></i> Voir les détails
          </a>
        </div>
      </div>

      <!-- Projet 3 -->
      <div class="project-card">
        <div class="project-header">
          <h3>Gestion des pensions de retraite</h3>
          <span class="project-date">Mai 2025</span>
        </div>
        <div class="project-content">
          <p class="project-description">
            Plateforme web de calcul et suivi des pensions de retraite avec génération de rapports PDF.
          </p>
          <div class="project-tech">
            <span class="tech-tag html">HTML/CSS</span>
            <span class="tech-tag php">PHP</span>
            <span class="tech-tag mysql">MySQL</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="#" class="project-link" @click.prevent="showProjectDetails('pension')">
            <i class="fas fa-eye"></i> Voir les détails
          </a>
        </div>
      </div>

      <!-- Projet 4 -->
      <div class="project-card">
        <div class="project-header">
          <h3>Plateforme de calculs techniques</h3>
          <span class="project-date">Mai 2024</span>
        </div>
        <div class="project-content">
          <p class="project-description">
            Site web permettant de résoudre des équations de seconde degree et des calculs d'électricité.
          </p>
          <div class="project-tech">
            <span class="tech-tag html">HTML/CSS</span>
            <span class="tech-tag js">JavaScript</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="#" class="project-link" @click.prevent="showProjectDetails('calculs')">
            <i class="fas fa-eye"></i> Voir les détails
          </a>
        </div>
      </div>
    </div>

    <!-- Modal pour les détails du projet -->
    <div class="project-modal" :class="{ active: activeProject }">
      <div class="modal-content">
        <button class="close-modal" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        
        <template v-if="activeProject === 'teacher'">
  <h3>Gestion des Enseignants</h3>
  <div class="modal-body">
    <div class="modal-image">
      <img src="../icone/enseignant.jpg" alt="Capture du projet">
    </div>
    <div class="modal-details">
      <h4>Détails du projet</h4>
      <p>Application web développée dans le cadre académique permettant :</p>
      <ul>
        <li>Gestion centralisée des enseignants</li>
        <li>Ajout des heures de travail réalisés</li>
        <li>Génération du prestation suivant les heures de travail</li>
        <li>Tableau de bord de bilan des meilleurs et plus faible prestation</li>
      </ul>
      <div class="modal-tech">
        <h4>Technologies utilisées</h4>
        <div class="tech-list">
          <span class="tech-tag vue">Vue.js</span>
          <span class="tech-tag php">PHP</span>
          <span class="tech-tag mysql">MySQL</span>
        </div>
        <!-- Lien pour voir le projet en ligne -->
        <div class="project-link-container">
          <a href="https://steeven.wuaze.com/bilan" 
             target="_blank" 
             rel="noopener noreferrer"
             class="live-demo-link">
            <i class="fas fa-external-link-alt"></i> Voir le projet
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- gestion pharmatie -->
 <template v-if="activeProject === 'pharma'">
  <h3>Application de gestion de stock - Pharmacie</h3>
  <div class="modal-body">
    <div class="modal-image">
      <img src="../icone/pharmacie.png" alt="Capture du projet pharmacie">
    </div>
    <div class="modal-details">
      <h4>Détails du projet</h4>
      <p>Application de bureau complète développée pour gérer le stock d'une pharmacie :</p>
      <ul>
        <li>
          Gestion des clients        
        </li>
        <li>
          Entrées de stock automatisées      
        </li>
        <li>
          Synchronisation intelligente des stocks         
        </li>
        <li>
          Système d'alerte intelligent         
        </li>
      </ul>
      <div class="modal-tech">
        <h4>Technologies utilisées</h4>
        <div class="tech-list">
          <span class="tech-tag csharp">C#</span>          
          <span class="tech-tag mysql">MySQL</span>
        </div>
        <!-- Lien pour voir le projet en ligne (si disponible) -->
        <div class="project-link-container">
          <a v-if="projectLink" 
             :href="projectLink" 
             target="_blank" 
             rel="noopener noreferrer"
             class="live-demo-link">
            <i class="fas fa-external-link-alt"></i> Voir le projet
          </a>
          <span v-else class="no-link-disclaimer">
            (Application desktop - non disponible en ligne)
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- gestion pension -->
 <template v-if="activeProject === 'pension'">
  <h3>Gestion des pensions des retraités</h3>
  <div class="modal-body">
    <div class="modal-image">
      <img src="../icone/pension.jpg" alt="Projet gestion des pensions">
    </div>
    <div class="modal-details">
      <h4>Fonctionnalités principales</h4>
      <ul class="features-list">
        <li>CRUD complet (Tarifs, Pensionnaires, Paiements)</li>
        <li>Transfert automatique de 40% au conjoint en cas de décès</li>
        <li>Recherche par numéro IM ou nom (avec LIKE)</li>
        <li>Statistiques par statut avec effectifs</li>
        <li>Génération de reçus PDF</li>
        <li>Historique des paiements entre dates</li>
        <li>Visualisation par histogrammes de la situation des Pensionnaires</li>
      </ul>

      <div class="modal-tech">
        <h4>Technologies</h4>
        <div class="tech-list">
          <span class="tech-tag html">HTML/CSS</span>
          <span class="tech-tag php">PHP</span>
          <span class="tech-tag mysql">MySQL</span>
        </div>
         <div class="project-link-container">
          <a href="https://steeven.wuaze.com/PROJET_PENSION" 
             target="_blank" 
             rel="noopener noreferrer"
             class="live-demo-link">
            <i class="fas fa-external-link-alt"></i> Voir le projet
          </a>
        </div>
      </div>
    
    </div>
  </div>
</template>
        <!--site calcul.. -->
        <template v-if="activeProject === 'calculs'">
  <h3>Plateforme de calculs techniques</h3>
  <div class="modal-body">
    <div class="modal-image">
      <img src="../icone/JS.png" alt="Capture de la plateforme de calculs">
    </div>
    <div class="modal-details">
      <h4>Détails du projet</h4>
      <p>Application web interactive offrant des outils de calcul pour :</p>
      <ul>
        <li>
          <strong>Résolution d'équations du second degré</strong>
          <ul>
            <li>Calcul des racines réelles </li>
            <li>Affichage détaillé du discriminant</li>            
          </ul>
        </li>
        <li>
          <strong>Calculs électriques</strong>
          <ul>
            <li>Résistance équivalente du circuit </li>
            <li>Courant total  et courants individuels</li>
            <li>Tensions aux bornes de chaque résistance </li>
          </ul>
        </li>
      </ul>   

      <div class="modal-tech">
        <h4>Technologies utilisées</h4>
        <div class="tech-list">
          <span class="tech-tag html">HTML/CSS</span>
          <span class="tech-tag js">JavaScript</span>          
        </div>
        <div class="project-link-container">
          <a href="https://steeven.wuaze.com/JAVASCRIPT_L1" 
             target="_blank" 
             rel="noopener noreferrer"
             class="live-demo-link">
            <i class="fas fa-external-link-alt"></i> Voir le projet
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      activeProject: null
    }
  },
  methods: {
    showProjectDetails(project) {
      this.activeProject = project;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.activeProject = null;
      document.body.style.overflow = 'auto';
    }
  }
}
</script>

<style scoped>
.projects-section {
  
  
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--nav-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--light-gray);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.project-header {
  padding: 1.5rem 1.5rem 0;
}

.project-header h3 {
  color: var(--text-color);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.project-date {
  display: block;
  font-size: 0.9rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.project-content {
  padding: 0 1.5rem;
  flex-grow: 1;
}

.project-description {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

.tech-tag.vue {
  background-color: rgba(65, 184, 131, 0.1);
  color: #41b883;
}

.tech-tag.php {
  background-color: rgba(119, 123, 180, 0.1);
  color: #777bb4;
}

.tech-tag.mysql {
  background-color: rgba(0, 117, 143, 0.1);
  color: #00758f;
}

.tech-tag.csharp {
  background-color: rgba(23, 134, 0, 0.1);
  color: #178600;
}

.tech-tag.html {
  background-color: rgba(227, 76, 38, 0.1);
  color: #e34c26;
}

.tech-tag.js {
  background-color: rgba(247, 223, 30, 0.1);
  color: #f7df1e;
}

.project-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--light-gray);
  background-color: rgba(254, 59, 50, 0.03);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-color);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--text-color);
}

/* Modal Styles */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.project-modal.active {
  opacity: 1;
  pointer-events: all;
}

.modal-content {
  background-color: var(--nav-bg);
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-modal:hover {
  color: var(--secondary-color);
}

.modal-body {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.modal-image {
  flex: 1;
  min-width: 300px;
}

.modal-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.modal-details {
  flex: 1;
}

.modal-details h4 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.modal-details ul {
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
}

.modal-details li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.8rem;
}
/* Style pour le lien de démo en ligne */
.project-link-container {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--light-gray);
}

.live-demo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.live-demo-link:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.live-demo-link i {
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
 
  .section-header h2 {
    font-size: 1.5rem;
  }
  .modal-body {
    flex-direction: column;
  }
  
  .modal-image {
    min-width: auto;
  }
}

@media (max-width: 576px) {
  .projects-section {
    padding: 3rem 1.5rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 