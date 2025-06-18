<template>
  <section class="contact-section">
    <div class="section-header">
      <h2>
        <i class="fas fa-envelope section-icon"></i>
        Contactez-moi
      </h2>
      <p class="section-subtitle">Une question, un projet ou une opportunité ? Écrivez-moi !</p>
    </div>
    
    <div class="contact-container">
      <!-- Partie formulaire -->
      <div class="contact-form">
        <form @submit.prevent="submitForm" class="modern-form">
          <div class="form-group">
            <div class="input-container">
              <i class="fas fa-user input-icon"></i>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                placeholder="Votre nom complet"
              >
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-container">
              <i class="fas fa-envelope input-icon"></i>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                placeholder="Votre adresse email"
              >
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-container">
              <i class="fas fa-tag input-icon"></i>
              <select id="subject" v-model="form.subject">
                <option value="proposition">Proposition de projet</option>
                <option value="emploi">Opportunité de stage</option>
                <option value="question">Question</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-container">
              <i class="fas fa-comment message-icon"></i>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5" 
                required
                placeholder="Votre message..."
              ></textarea>
            </div>
          </div>
          
          <button type="submit" class="submit-btn">
            <i class="fas fa-paper-plane button-icon"></i>
            Envoyer 
          </button>
        </form>
      </div>
      
      <!-- Partie informations -->
      <div class="contact-info">
        <div class="info-card">
          <div class="card-header">
            <i class="fas fa-envelope-open-text card-icon"></i>
            <h3>Email direct</h3>
          </div>
          <a href="mailto:befenosteeven@gmail.com" class="contact-link">
            <i class="fas fa-envelope small-icon"></i>
            befenosteeven@gmail.com
          </a>
        </div>
        
        <div class="info-card">
          <div class="card-header">
            <i class="fas fa-share-alt card-icon"></i>
            <h3>Réseaux sociaux</h3>
          </div>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/steeven-befeno-562133321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
            
            <a href="https://www.facebook.com/steeven.befeno" target="_blank" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        
        <div class="info-card">
          <div class="card-header">
            <i class="fas fa-map-marker-alt card-icon"></i>
            <h3>Localisation</h3>
          </div>
          <p class="location-text">
            <i class="fas fa-city small-icon"></i>
            Fianarantsoa, Madagascar
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: 'proposition',
        message: ''
      }
    }
  },
 methods: {
  async submitForm() {
    const endpoint = 'https://formspree.io/f/mvgrqppz';
    const payload = {
      name: this.form.name,
      email: this.form.email,
      subject: this.form.subject,
      message: this.form.message
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('✅ Message envoyé avec succès !');
        this.form = {
          name: '',
          email: '',
          subject: 'proposition',
          message: ''
        };
      } else {
        alert("❌ Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      alert("❌ Erreur de connexion : " + error.message);
    }
  }
}

}
</script>

<style scoped>
.contact-section {

 
 
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

.contact-container {
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-form, .contact-info {
  flex: 1;
}

.modern-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-container {
  position: relative;
}

.input-icon, .message-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary-color);
  font-size: 1.1rem;
}

.message-icon {
  top: 1.5rem;
  transform: none;
}

input, textarea, select {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--light-gray);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: var( --nav-bg);
  color: var(--text-color);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fe3b32' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}

textarea {
  padding-top: 1.5rem;
  min-height: 150px;
  resize: vertical;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(254, 59, 50, 0.2);
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: var(--text-color);
  color: var( --nav-bg);
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(29, 37, 57, 0.3);
}

.info-card {
  background: var( --nav-bg);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
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
  color: var(--text-color);
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

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
  margin-bottom: 0.5rem;
}

.contact-link:hover {
  color: var(--secondary-color);
}

.small-icon {
  color: var(--secondary-color);
  font-size: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: var(--light-gray);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--text-color);
  color: var(--bg-color);
  transform: translateY(-3px);
}

.location-text {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-color);
}

/* Responsive */
@media (max-width: 992px) {
  .contact-container {
    flex-direction: column;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .section-header h2 {
  font-size: 1.5rem;
 
}
  .contact-section {
    padding: 3rem 1.5rem;
  }
  
  .card-header h3 {
    font-size: 1.1rem;
  }
  
  input, textarea, select {
    padding-left: 2.5rem;
  }
}
</style>