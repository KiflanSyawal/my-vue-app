<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Logo and Description -->
        <div class="footer-brand">
          <h3 class="footer-logo">KIFLAN</h3>
          <p class="footer-description">
            {{ $t('footer.brandDesc') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4 class="footer-section-title">{{ $t('footer.quickLinks') }}</h4>
          <ul class="footer-nav">
            <li><a href="#AboutMe" @click.prevent="$emit('nav-click', 'About Me')">{{ $t('nav.about') }}</a></li>
            <li><a href="#Experiences" @click.prevent="$emit('nav-click', 'Experiences')">{{ $t('nav.experiences') }}</a></li>
            <li><a href="#Skills" @click.prevent="$emit('nav-click', 'Skills')">{{ $t('nav.skills') }}</a></li>
            <li><a href="#Gallery" @click.prevent="$emit('nav-click', 'Gallery')">{{ $t('nav.gallery') }}</a></li>
            <li><a href="#Contact" @click.prevent="$emit('nav-click', 'Contact')">{{ $t('nav.contact') }}</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-services">
          <h4 class="footer-section-title">{{ $t('footer.services') }}</h4>
          <ul class="footer-service-list">
            <li v-for="(service, sIdx) in $tm('footer.serviceList')" :key="sIdx">
              {{ $rt(service) }}
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-contact">
          <h4 class="footer-section-title">{{ $t('footer.getInTouch') }}</h4>
          <div class="footer-contact-info">
            <div class="footer-contact-item">
              <a href="mailto:kiflan.as@gmail.com">kiflan.as@gmail.com</a>
            </div>
            <div class="footer-contact-item">
              <a href="https://www.linkedin.com/in/kiflan-anugerah-syawal-0b3905254/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div class="footer-contact-item">
              <a href="https://wa.me/6282112275218" target="_blank" rel="noopener noreferrer">+62 821-1227-5218</a>
            </div>
            <div class="footer-contact-item">
              <a href="https://github.com/KiflanSyawal" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="footer-copyright">
            © {{ currentYear }} Kiflan Anugerah Syawal. {{ $t('footer.copyright') }}
          </p>
          <div class="footer-bottom-links">
            <a class="footer-bottom-link">{{ $t('footer.privacy') }}</a>
            <a class="footer-bottom-link">{{ $t('footer.terms') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  emits: ['nav-click'],
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer-section {
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--bg-color) 100%);
  color: var(--text-color);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--card-border);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 0;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  font-size: 28px;
  font-weight: bold;
  color: var(--accent-color);
  margin-bottom: 15px;
}

.footer-description {
  line-height: 1.6;
  margin-bottom: 25px;
  opacity: 0.9;
  text-align: justify;
  font-size: 14px;
}

.footer-section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--accent-color);
  position: relative;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav li {
  margin-bottom: 12px;
}

.footer-nav a {
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.8;
  font-size: 14px;
}

.footer-nav a:hover {
  color: var(--accent-color);
  opacity: 1;
}

.footer-service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-service-list li {
  margin-bottom: 12px;
  opacity: 0.8;
  font-size: 14px;
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
}

.footer-contact-item a {
  color: var(--text-color);
  opacity: 0.85;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-contact-item a:hover {
  color: var(--accent-color);
  opacity: 1;
}

.footer-bottom {
  border-top: 1px solid var(--card-border);
  padding: 25px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.footer-copyright {
  opacity: 0.7;
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.footer-bottom-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 14px;
  opacity: 0.7;
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 576px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-description {
    text-align: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
