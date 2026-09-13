<template>
  <header class="header">
    <div class="logo">KIFLAN</div>

    <nav class="nav" :class="{ 'active': isMenuOpen }">
      <ul>
        <li><a href="#AboutMe" @click.prevent="$emit('nav-click', 'About Me')">{{ $t('nav.about') }}</a></li>
        <li><a href="#Experiences" @click.prevent="$emit('nav-click', 'Experiences')">{{ $t('nav.experiences') }}</a></li>
        <li><a href="#Skills" @click.prevent="$emit('nav-click', 'Skills')">{{ $t('nav.skills') }}</a></li>
        <li><a href="#Gallery" @click.prevent="$emit('nav-click', 'Gallery')">{{ $t('nav.gallery') }}</a></li>
        <li><a href="#Contact" @click.prevent="$emit('nav-click', 'Contact')">{{ $t('nav.contact') }}</a></li>
      </ul>
    </nav>

    <div class="header-actions">
      <!-- Language Switcher - Always visible in header -->
      <div class="lang-switcher">
        <button 
          v-for="lang in availableLanguages" 
          :key="lang.code"
          class="lang-btn"
          :class="{ 'active': currentLocale === lang.code }"
          @click="setLanguage(lang.code)"
          :title="lang.label"
          :aria-label="`Switch language to ${lang.label}`"
        >
          <span class="flag">{{ lang.flag }}</span>
          <span class="lang-code">{{ lang.code.toUpperCase() }}</span>
        </button>
      </div>

      <!-- Theme Toggle Button -->
      <button 
        @click="$emit('toggle-theme')" 
        class="theme-toggle"
        :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        aria-label="Toggle Theme"
      >
        <span v-if="isDarkMode">☀️</span>
        <span v-else>🌙</span>
      </button>

      <!-- Hamburger Menu Button for Mobile -->
      <button class="hamburger" @click="$emit('toggle-menu')" aria-label="Toggle Navigation Menu">
        <div class="bar" :class="{ 'animate': isMenuOpen }"></div>
        <div class="bar" :class="{ 'animate': isMenuOpen }"></div>
        <div class="bar" :class="{ 'animate': isMenuOpen }"></div>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    navItems: {
      type: Array,
      required: true
    },
    isDarkMode: {
      type: Boolean,
      required: true
    },
    isMenuOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggle-theme', 'toggle-menu', 'nav-click'],
  data() {
    return {
      availableLanguages: [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'id', label: 'Indonesian', flag: '🇮🇩' },
        { code: 'ja', label: 'Japanese', flag: '🇯🇵' }
      ]
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    setLanguage(code) {
      this.$i18n.locale = code;
      localStorage.setItem('locale', code);
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: var(--header-bg);
  transition: background-color 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 2px 10px var(--card-shadow);
  z-index: 1000;
}

.logo {
  font-weight: 800;
  font-size: 24px;
  color: var(--text-color);
  letter-spacing: 1px;
}

.nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: color 0.3s;
}

.nav a:hover {
  color: var(--accent-color);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 1002;
}

/* Language Switcher Styles */
.lang-switcher {
  display: flex;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 25px;
  padding: 3px;
  box-shadow: 0 2px 8px var(--card-shadow);
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: var(--text-color);
  padding: 4px 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  transition: all 0.25s ease;
  opacity: 0.7;
}

.lang-btn:hover {
  opacity: 1;
}

.lang-btn.active {
  background: var(--accent-color);
  color: var(--btn-text);
  opacity: 1;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
}

.flag {
  font-size: 13px;
}

/* Theme Toggle Button Styles */
.theme-toggle {
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 17px;
  transition: all 0.3s;
}

/* Hamburger Menu Styles */
.hamburger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1002;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 28px;
}

.hamburger .bar {
  width: 24px;
  height: 3px;
  background-color: var(--accent-color);
  transition: 0.4s;
  border-radius: 2px;
}

.hamburger .bar.animate:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger .bar.animate:nth-child(2) {
  opacity: 0;
}

.hamburger .bar.animate:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 850px) {
  .header {
    padding: 12px 20px;
  }

  .hamburger {
    display: flex;
  }

  .lang-code {
    display: none;
  }

  .lang-btn {
    padding: 4px 6px;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    height: 100vh;
    background-color: var(--header-bg);
    transition: right 0.3s ease-in-out;
    z-index: 1001;
    padding-top: 80px;
    box-shadow: -5px 0 15px var(--card-shadow);
  }

  .nav.active {
    right: 0;
  }

  .nav ul {
    flex-direction: column;
    gap: 25px;
    padding: 30px 20px;
    align-items: flex-start;
  }

  .nav a {
    font-size: 18px;
  }
}
</style>
