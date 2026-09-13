<template>
  <section class="skills-section reveal-on-scroll" id="Skills">
    <h2 class="section-title">{{ $t('skills.title') }}</h2>
    <div class="skills-container">
      <div 
        v-for="(skill, index) in skills" 
        :key="index" 
        class="skill-item" 
        :style="{ '--delay': index % 8 }"
      >
        <div class="skill-icon">
          <img :src="skill.icon" :alt="skill.name || 'Skill logo'">
        </div>
        <div v-if="skill.name" class="skill-name">{{ skill.name }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        {
          name: 'Vue.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
        },
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
          name: 'Go',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
        },
        {
          name: 'C#',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
        },
        {
          name: 'Python',
          icon: 'https://www.svgrepo.com/show/452091/python.svg'
        },
        {
          name: 'C',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
        },
        {
          name: 'C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        },
        {
          name: 'Cisco',
          icon: 'https://www.svgrepo.com/show/448278/cisco.svg'
        },
        {
          name: 'SQL',
          icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills-section {
  padding: 80px 50px;
  text-align: center;
  background-color: var(--bg-color);
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
}

.section-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
  color: var(--text-color);
  width: 100%;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.skill-item {
  background-color: var(--skill-bg);
  border: 3px solid var(--card-border);
  border-radius: 14px;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 15px;
  animation: bounce 3s ease-in-out infinite;
  animation-delay: calc(0.25s * var(--delay));
  box-shadow: 0 4px 12px var(--card-shadow);
}

.skill-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.skill-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.skill-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--skill-text);
}

@media (max-width: 768px) {
  .skills-section {
    padding: 50px 20px;
  }

  .skills-container {
    gap: 15px;
  }

  .skill-item {
    width: 100px;
    height: 100px;
    padding: 10px;
  }

  .skill-icon {
    width: 36px;
    height: 36px;
  }

  .skill-name {
    font-size: 11px;
  }
}
</style>
