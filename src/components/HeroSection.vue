<template>
  <section class="hero reveal-on-scroll" id="AboutMe">
    <div class="hero-content">
      <div class="greeting">
        <div>
          <span class="wave">👋</span>
          <h2>{{ $t('hero.greeting') }} <span class="name"><u>{{ $t('hero.name') }}</u></span></h2>
        </div>
        <!-- Typewriter Animation -->
        <div class="animated-title">
          <span class="typewriter">{{ currentTypedText }}</span>
          <span class="cursor" :class="{ 'blink': showCursor }">|</span>
        </div>
      </div>
      <p class="bio">{{ $t('hero.bio') }}</p>
    </div>

    <div class="profile-container">
      <img :src="profileImageUrl" alt="Kiflan Anugerah Syawal Profile" class="profile-pic">
    </div>
  </section>
</template>

<script>
import profilePic from '@/assets/poto.png';

export default {
  name: 'HeroSection',
  props: {
    currentTypedText: {
      type: String,
      default: ''
    },
    showCursor: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      profileImageUrl: profilePic
    }
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px 80px 50px;
  gap: 40px;
  background-color: var(--bg-color);
  width: 100%;
}

.hero-content {
  flex: 1;
  max-width: 62%;
}

.greeting {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.greeting > div:first-child {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.wave {
  font-size: 30px;
  margin-right: 15px;
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}

h2 {
  font-size: 28px;
  line-height: 1.3;
}

.name {
  color: var(--accent-color);
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}

/* Typewriter Animation Styles */
.animated-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--accent-color);
  margin-top: 10px;
  height: 2rem;
  display: flex;
  align-items: center;
  font-family: 'Courier New', monospace;
}

.typewriter {
  display: inline-block;
}

.cursor {
  color: var(--accent-color);
  font-weight: bold;
  margin-left: 2px;
}

.cursor.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.bio {
  text-align: justify;
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 16px;
  opacity: 0.9;
}

.profile-container {
  flex: 0 0 auto;
}

.profile-pic {
  border: 4px solid var(--accent-color);
  border-radius: 12px;
  max-width: 330px;
  height: auto;
  background-color: var(--header-bg);
  box-shadow: 0 10px 25px var(--card-shadow);
  transition: transform 0.3s ease;
}

@media (max-width: 992px) {
  .hero-content {
    max-width: 55%;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px 50px 20px;
    gap: 30px;
  }

  .hero-content {
    max-width: 100%;
  }

  .greeting {
    align-items: center;
  }

  .greeting > div:first-child {
    justify-content: center;
  }

  .animated-title {
    justify-content: center;
    font-size: 1.2rem;
  }

  .bio {
    text-align: justify;
  }

  .profile-pic {
    max-width: 260px;
  }
}
</style>
