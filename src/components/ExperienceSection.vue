<template>
  <section class="experience-section reveal-on-scroll" id="Experiences">
    <div class="experience-header-container">
      <h2 class="section-title">{{ $t('experience.title') }}</h2>
      <p class="section-subtitle">{{ $t('experience.subtitle') }}</p>
    </div>

    <!-- Glowing Interactive Timeline Track -->
    <div class="timeline-track-wrapper">
      <div class="timeline-line"></div>
      <div class="timeline-nodes">
        <button
          v-for="(exp, index) in experiences"
          :key="index"
          class="timeline-node"
          :class="{ 'active': activeIndex === index }"
          @click="selectExperience(index)"
          :title="exp.company"
        >
          <div class="node-circle">
            <img :src="exp.icon" :alt="exp.company" class="node-icon" />
          </div>
          <div class="node-label">
            <span class="node-company">{{ getShortName(exp.company) }}</span>
            <span class="node-year">{{ $t(`experience.${exp.key}.shortDate`) }}</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Modern Glassmorphic Experience Card Showcase -->
    <div class="experience-card-container">
      <transition name="card-slide" mode="out-in">
        <div class="experience-card" :key="activeIndex" v-if="currentExperience">
          <div class="card-glow-bg"></div>

          <div class="card-top-row">
            <div class="company-badge">
              <img :src="currentExperience.icon" :alt="currentExperience.company" class="company-logo" />
              <div class="company-text">
                <h3 class="role-title">{{ $t(`experience.${currentExperience.key}.title`) }}</h3>
                <h4 class="company-name">{{ currentExperience.company }}</h4>
              </div>
            </div>
            <div class="time-badge">
              <span class="live-pulse" v-if="currentExperience.isLive"></span>
              {{ $t(`experience.${currentExperience.key}.date`) }}
            </div>
          </div>

          <div class="card-body">
            <p class="role-description">{{ $t(`experience.${currentExperience.key}.desc`) }}</p>
            
            <div class="skills-highlight">
              <span class="skills-header">{{ $t('experience.coreCompetencies') }}</span>
              <div class="tech-tags">
                <span 
                  v-for="(tech, tIndex) in currentExperience.technologies" 
                  :key="tIndex" 
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Bar -->
          <div class="card-footer">
            <button @click="prevExperience" class="nav-btn prev-btn" aria-label="Previous Experience">
              <span>←</span> {{ $t('experience.previous') }}
            </button>
            
            <div class="dots-indicator">
              <span 
                v-for="(_, i) in experiences" 
                :key="i" 
                class="dot" 
                :class="{ 'active': activeIndex === i }"
                @click="selectExperience(i)"
              ></span>
            </div>

            <button @click="nextExperience" class="nav-btn next-btn" aria-label="Next Experience">
              {{ $t('experience.next') }} <span>→</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import bniLogo from '@/assets/bni.png';
import sigmaLogo from '@/assets/scu1.png';
import robotLogo from '@/assets/aad.png';
import meaLogo from '@/assets/experience/mea.svg';

export default {
  name: 'ExperienceSection',
  data() {
    return {
      activeIndex: 0,
      experiences: [
        {
          key: 'bni',
          company: 'PT Bank Negara Indonesia (Persero) Tbk (BNI)',
          isLive: true,
          technologies: ['Next.js', 'Go', 'REST API', 'Oracle SQL'],
          icon: bniLogo
        },
        {
          key: 'sigma',
          company: 'PT Sigma Cipta Utama',
          isLive: false,
          technologies: ['Network Support Engineering', 'Cisco', 'Mikrotik', 'Troubleshooting', 'Networking'],
          icon: sigmaLogo
        },
        {
          key: 'aadiyaat',
          company: 'AL-Aadiyaat',
          isLive: false,
          technologies: ['C++', 'Embedded C', 'Robotics', 'Robotics Framework', 'OpenCR'],
          icon: robotLogo
        },
        {
          key: 'marriott',
          company: 'Marriott Executive Apartment',
          isLive: false,
          technologies: ['Networking', 'IT Support', 'Hardware Troubleshooting', 'Application Management'],
          icon: meaLogo
        }
      ]
    };
  },
  computed: {
    currentExperience() {
      return this.experiences[this.activeIndex] || null;
    }
  },
  methods: {
    selectExperience(index) {
      this.activeIndex = index;
    },
    prevExperience() {
      this.activeIndex = (this.activeIndex - 1 + this.experiences.length) % this.experiences.length;
    },
    nextExperience() {
      this.activeIndex = (this.activeIndex + 1) % this.experiences.length;
    },
    getShortName(name) {
      if (name.includes('BNI')) return 'BNI';
      if (name.includes('Sigma')) return 'PT Sigma';
      if (name.includes('Marriott')) return 'Marriott';
      return name;
    }
  }
};
</script>

<style scoped>
.experience-section {
  padding: 90px 40px;
  background-color: var(--bg-color);
  color: var(--text-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.experience-header-container {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(135deg, var(--text-color) 30%, var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 16px;
  opacity: 0.8;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Timeline Track */
.timeline-track-wrapper {
  position: relative;
  width: 100%;
  max-width: 950px;
  margin-bottom: 45px;
  padding: 0 20px;
}

.timeline-line {
  position: absolute;
  top: 26px;
  left: 60px;
  right: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--card-border), var(--accent-color), var(--card-border));
  z-index: 1;
}

.timeline-nodes {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.timeline-node {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.node-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 3px solid var(--card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 15px var(--card-shadow);
  padding: 6px;
}

.node-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.timeline-node:hover .node-circle {
  border-color: var(--accent-color);
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
}

.timeline-node.active .node-circle {
  border-color: var(--accent-color);
  background: var(--accent-color);
  transform: scale(1.15);
  box-shadow: 0 0 25px rgba(255, 193, 7, 0.5);
}

.node-label {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.node-company {
  font-size: 14px;
  font-weight: 700;
  transition: color 0.3s ease;
}

.timeline-node.active .node-company {
  color: var(--accent-color);
}

.node-year {
  font-size: 12px;
  opacity: 0.75;
}

/* Glassmorphic Experience Card */
.experience-card-container {
  width: 100%;
  max-width: 900px;
}

.experience-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 15px 35px var(--card-shadow);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.card-glow-bg {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
  opacity: 0.12;
  pointer-events: none;
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 20px;
}

.company-badge {
  display: flex;
  align-items: center;
  gap: 20px;
}

.company-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  background: white;
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.role-title {
  font-size: 24px;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 4px;
}

.company-name {
  font-size: 16px;
  font-weight: 600;
  opacity: 0.9;
}

.time-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 193, 7, 0.12);
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
}

.live-pulse {
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  animation: pulse 1.6s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.role-description {
  font-size: 16px;
  line-height: 1.8;
  opacity: 0.9;
  text-align: justify;
  margin-bottom: 30px;
}

.skills-highlight {
  margin-bottom: 30px;
}

.skills-header {
  display: block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.75;
  margin-bottom: 12px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-badge {
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  color: var(--btn-text);
  padding: 7px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(255, 193, 7, 0.25);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--card-border);
}

.nav-btn {
  background: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 10px 22px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-btn:hover {
  background: var(--accent-color);
  color: var(--btn-text);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}

.dots-indicator {
  display: flex;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--card-border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--accent-color);
  width: 24px;
  border-radius: 12px;
}

/* Card Slide Transition */
.card-slide-enter-active,
.card-slide-leave-active {
  transition: all 0.35s ease;
}

.card-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.card-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

@media (max-width: 768px) {
  .experience-section {
    padding: 50px 15px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 14px;
    padding: 0 10px;
  }

  .timeline-track-wrapper {
    overflow: visible;
    padding: 0 5px;
    margin-bottom: 30px;
  }

  .timeline-nodes {
    min-width: 0;
    width: 100%;
    justify-content: space-between;
    gap: 4px;
  }

  .timeline-line {
    left: 20px;
    right: 20px;
    top: 20px;
    min-width: 0;
  }

  .timeline-node {
    gap: 6px;
    flex: 1 1 0;
    min-width: 0;
  }

  .node-circle {
    width: 40px;
    height: 40px;
    border-width: 2px;
    padding: 4px;
  }

  .node-icon {
    width: 20px;
    height: 20px;
  }

  .node-company {
    font-size: 11px;
    text-align: center;
    white-space: nowrap;
  }

  .node-year {
    font-size: 10px;
    text-align: center;
    white-space: nowrap;
  }

  .experience-card {
    padding: 24px 18px;
    border-radius: 18px;
  }

  .card-top-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .company-badge {
    gap: 14px;
  }

  .company-logo {
    width: 48px;
    height: 48px;
    padding: 6px;
  }

  .role-title {
    font-size: 20px;
  }

  .company-name {
    font-size: 14px;
  }

  .time-badge {
    font-size: 12px;
    padding: 6px 14px;
  }

  .role-description {
    font-size: 14px;
    line-height: 1.6;
  }

  .nav-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>
