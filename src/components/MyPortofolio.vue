<template>
  <div class="portfolio" :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <!-- Header / Navigation Component -->
    <HeaderNav
      :nav-items="navItems"
      :is-dark-mode="isDarkMode"
      :is-menu-open="isMenuOpen"
      @toggle-theme="toggleTheme"
      @toggle-menu="toggleMenu"
      @nav-click="handleNavClick"
    />

    <!-- Hero Section Component -->
    <HeroSection
      :current-typed-text="currentTypedText"
      :show-cursor="showCursor"
    />

    <!-- Restructured Experience Showcase Component -->
    <ExperienceSection />

    <!-- Skills Section Component -->
    <SkillsSection />

    <!-- Gallery & Projects Component -->
    <GallerySection />

    <!-- Contact Section Component (Icons Removed) -->
    <ContactSection />

    <!-- Footer Component -->
    <FooterSection @nav-click="handleNavClick" />
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
import HeroSection from './HeroSection.vue';
import ExperienceSection from './ExperienceSection.vue';
import SkillsSection from './SkillsSection.vue';
import GallerySection from './GallerySection.vue';
import ContactSection from './ContactSection.vue';
import FooterSection from './FooterSection.vue';

export default {
  name: 'MyPortofolio',
  components: {
    HeaderNav,
    HeroSection,
    ExperienceSection,
    SkillsSection,
    GallerySection,
    ContactSection,
    FooterSection
  },
  data() {
    return {
      navItems: ['About Me', 'Experiences', 'Skills', 'Gallery', 'Contact'],
      isDarkMode: true,
      isMenuOpen: false,

      // Typewriter animation data
      professionalTitles: [
        'Web Developer',
        'IT Specialist',
        'System Analyst',
        'Robotic Programmer',
        'Network Engineer',
        'Frontend Developer',
        'UI UX Designer'
      ],
      currentTitleIndex: 0,
      currentTypedText: '',
      isDeleting: false,
      showCursor: true,
      typewriterTimeout: null,
      observer: null
    };
  },
  created() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = prefersDark;
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }
  },
  mounted() {
    this.startTypewriter();
    this.$nextTick(() => {
      this.initScrollAnimations();
    });
  },
  beforeUnmount() {
    if (this.typewriterTimeout) {
      clearTimeout(this.typewriterTimeout);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  computed: {
    activeTitles() {
      try {
        const rawTitles = this.$tm('hero.titles');
        if (Array.isArray(rawTitles) && rawTitles.length > 0) {
          return rawTitles.map(t => typeof t === 'string' ? t : (t.b || t.k || String(t)));
        }
      } catch (e) {
        // fallback
      }
      return this.professionalTitles;
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    handleNavClick(item) {
      const sectionId = this.formatNavId(item);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      this.isMenuOpen = false;
    },

    formatNavId(item) {
      return item.replace(/\s+/g, '');
    },

    startTypewriter() {
      this.typeWriter();
    },

    typeWriter() {
      const titles = this.activeTitles;
      const currentTitle = titles[this.currentTitleIndex % titles.length] || '';
      const typeSpeed = 100;
      const deleteSpeed = 50;
      const pauseBetweenWords = 2000;

      if (!this.isDeleting) {
        if (this.currentTypedText.length < currentTitle.length) {
          this.currentTypedText = currentTitle.substring(0, this.currentTypedText.length + 1);
          this.typewriterTimeout = setTimeout(() => this.typeWriter(), typeSpeed);
        } else {
          this.typewriterTimeout = setTimeout(() => {
            this.isDeleting = true;
            this.typeWriter();
          }, pauseBetweenWords);
        }
      } else {
        if (this.currentTypedText.length > 0) {
          this.currentTypedText = currentTitle.substring(0, this.currentTypedText.length - 1);
          this.typewriterTimeout = setTimeout(() => this.typeWriter(), deleteSpeed);
        } else {
          this.isDeleting = false;
          this.currentTitleIndex = (this.currentTitleIndex + 1) % this.professionalTitles.length;
          this.typewriterTimeout = setTimeout(() => this.typeWriter(), 500);
        }
      }
    },

    initScrollAnimations() {
      if (!('IntersectionObserver' in window)) return;

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, options);

      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => {
        this.observer.observe(el);
      });
    }
  }
};
</script>

<style>
/* Global CSS Design System Variables */
.dark-mode {
  --bg-color: #18181b;
  --header-bg: #111113;
  --text-color: #f4f4f5;
  --accent-color: #ffc107;
  --btn-text: #18181b;
  --card-bg: #202024;
  --card-border: #333338;
  --card-shadow: rgba(0, 0, 0, 0.4);
  --skill-text: #f0f0f0;
  --skill-bg: #27272a;
}

.light-mode {
  --bg-color: #f8fafc;
  --header-bg: #ffffff;
  --text-color: #1e293b;
  --accent-color: #ff9800;
  --btn-text: #ffffff;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-shadow: rgba(0, 0, 0, 0.08);
  --skill-text: #1e293b;
  --skill-bg: #f1f5f9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
}

html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: var(--bg-color);
  scroll-behavior: smooth;
}

.portfolio {
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%;
  overflow-x: hidden;
  padding-top: 75px;
}

/* Scroll Animation Utility Styles */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>