<template>
  <section class="gallery-section reveal-on-scroll" id="Gallery">
    <div class="section-header">
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>
    </div>

    <div class="projects-grid">
      <div 
        v-for="(item, index) in filteredImages" 
        :key="index" 
        class="project-card" 
        @click="openLightbox(item)"
      >
        <!-- Mock Browser Frame -->
        <div class="browser-header">
          <div class="browser-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="browser-url">{{ item.link || 'https://gointerling.com' }}</div>
        </div>

        <div class="project-image-wrapper">
          <img :src="item.src" :alt="item.alt || $t(`projects.${item.key}.title`)" class="project-img" />
          <div class="project-overlay">
            <span class="view-btn">{{ $t('projects.viewDetails') }}</span>
          </div>
        </div>

        <div class="project-content">
          <h3 class="project-title">{{ $t(`projects.${item.key}.title`) }}</h3>
          <p class="project-desc">{{ $t(`projects.${item.key}.desc`) }}</p>
          <div class="project-tags">
            <span v-for="(tag, tIdx) in item.tags || ['Vue.js', 'Laravel', 'Supabase']" :key="tIdx" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sleek Glassmorphic Modal -->
    <transition name="modal-fade">
      <div v-if="selectedImage" class="lightbox-overlay" @click="closeLightbox">
        <div class="lightbox-modal" @click.stop>
          <button class="modal-close-btn" @click="closeLightbox" aria-label="Close Modal">&times;</button>
          
          <div class="modal-grid">
            <div class="modal-preview">
              <div class="browser-window">
                <div class="browser-bar">
                  <div class="browser-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="url-text">{{ selectedImage.link || 'https://gointerling.com' }}</span>
                </div>
                <div class="img-container">
                  <img :src="selectedImage.src" :alt="selectedImage.alt || $t(`projects.${selectedImage.key}.title`)" />
                </div>
              </div>
            </div>

            <div class="modal-info">
              <span class="project-badge">{{ $t('projects.featured') }}</span>
              <h3 class="modal-title">{{ $t(`projects.${selectedImage.key}.title`) }}</h3>
              <p class="modal-desc">{{ $t(`projects.${selectedImage.key}.desc`) }}</p>

              <div class="modal-tech">
                <h4>{{ $t('projects.techUsed') }}</h4>
                <div class="tech-pills">
                  <span v-for="(tech, idx) in selectedImage.tags || ['Vue.js', 'Laravel', 'Supabase', 'Web Development']" :key="idx" class="tech-pill">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="modal-actions" v-if="selectedImage.link">
                <a 
                  :href="selectedImage.link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="visit-live-btn"
                >
                  {{ $t('projects.visitLive') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'GallerySection',
  data() {
    return {
      selectedCategory: 'Project',
      selectedImage: null,
      galleryCategories: ['Project'],
      galleryImages: {
        'Project': [
          {
            key: 'gointerling',
            src: '/images/gointerling.png',
            alt: 'Gointerling web application',
            link: 'https://gointerling.com/',
            tags: ['Vue.js', 'Laravel', 'Supabase', 'Web Development']
          }
        ]
      }
    }
  },
  computed: {
    filteredImages() {
      return this.galleryImages[this.selectedCategory] || [];
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    openLightbox(image) {
      this.selectedImage = image;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.selectedImage = null;
      document.body.style.overflow = 'auto';
    }
  }
}
</script>

<style scoped>
.gallery-section {
  padding: 90px 40px;
  background-color: var(--bg-color);
  color: var(--text-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, var(--text-color) 30%, var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 16px;
  opacity: 0.8;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 500px));
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1100px;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 30px var(--card-shadow);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 18px 40px rgba(255, 193, 7, 0.25);
}

.browser-header {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid var(--card-border);
  gap: 12px;
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.browser-url {
  font-size: 12px;
  opacity: 0.6;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #0f172a;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.06);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-btn {
  background: var(--accent-color);
  color: var(--btn-text);
  padding: 10px 22px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
}

.project-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 8px;
}

.project-desc {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 193, 7, 0.12);
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

/* Lightbox Modal Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox-modal {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  max-width: 950px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  color: var(--text-color);
}

.modal-close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--accent-color);
  color: var(--btn-text);
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;
}

.modal-close-btn:hover {
  transform: scale(1.1);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  max-height: 90vh;
}

.modal-preview {
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--card-border);
}

.browser-window {
  width: 100%;
  background: #0f172a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
}

.browser-bar {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  background: #1e293b;
  gap: 12px;
}

.url-text {
  font-size: 11px;
  color: #94a3b8;
  font-family: monospace;
}

.img-container {
  width: 100%;
  max-height: 380px;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-badge {
  display: inline-block;
  align-self: flex-start;
  background: rgba(255, 193, 7, 0.15);
  color: var(--accent-color);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
  border: 1px solid var(--accent-color);
}

.modal-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 12px;
}

.modal-desc {
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 25px;
}

.modal-tech h4 {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.75;
  margin-bottom: 10px;
}

.tech-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.tech-pill {
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  color: var(--btn-text);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.visit-live-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  color: var(--btn-text);
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(255, 193, 7, 0.35);
}

.visit-live-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.5);
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 850px) {
  .modal-grid {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }

  .modal-preview {
    border-right: none;
    border-bottom: 1px solid var(--card-border);
    padding: 20px;
  }

  .modal-info {
    padding: 25px 20px;
  }
}
</style>
