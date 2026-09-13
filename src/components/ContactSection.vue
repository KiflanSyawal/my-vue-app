<template>
  <section id="Contact" class="contact-section reveal-on-scroll">
    <div class="contact-container">
      <div class="contact-content">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="contact-description">{{ $t('contact.desc') }}</p>

        <div class="contact-info">
          <!-- WhatsApp Card -->
          <a href="https://wa.me/6282112275218" target="_blank" rel="noopener noreferrer" class="contact-item whatsapp-card">
            <div class="contact-icon whatsapp-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3>{{ $t('contact.whatsapp') }}</h3>
              <span class="contact-link">+6282112275218</span>
            </div>
          </a>

          <!-- LinkedIn Card -->
          <a href="https://www.linkedin.com/in/kiflan-anugerah-syawal-0b3905254/" target="_blank" rel="noopener noreferrer" class="contact-item linkedin-card">
            <div class="contact-icon linkedin-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3>{{ $t('contact.linkedin') }}</h3>
              <span class="contact-link">Kiflan Anugerah Syawal</span>
            </div>
          </a>

          <!-- GitHub Card -->
          <a href="https://github.com/KiflanSyawal" target="_blank" rel="noopener noreferrer" class="contact-item github-card">
            <div class="contact-icon github-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3>{{ $t('contact.github') }}</h3>
              <span class="contact-link">KiflanSyawal</span>
            </div>
          </a>
        </div>

        <div class="contact-cta">
          <button class="btn primary-contact-btn" @click="openEmailClient">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {{ $t('contact.sendEmail') }}
          </button>
          <button class="btn secondary-contact-btn" @click="downloadResume">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            {{ $t('contact.downloadCv') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    resumeLink: {
      type: String,
      default: 'https://drive.google.com/file/d/1r8Zf9nPkA57ziiiMZV4ncAXrIe2XJp9U/view?usp=sharing'
    }
  },
  methods: {
    openEmailClient() {
      window.location.href = "mailto:kiflan.as@gmail.com?subject=Let's Connect!&body=Hi Kiflan,%0D%0A%0D%0AI would like to discuss...";
    },
    downloadResume() {
      window.open(this.resumeLink, '_blank');
    }
  }
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--card-bg) 100%);
  color: var(--text-color);
  padding: 100px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.contact-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.contact-content {
  width: 100%;
  text-align: center;
}

.section-title {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--text-color) 30%, var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-description {
  font-size: 16px;
  line-height: 1.8;
  margin: 0 auto 45px auto;
  max-width: 700px;
  opacity: 0.85;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 45px;
  width: 100%;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid var(--card-border);
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 6px 20px var(--card-shadow);
  position: relative;
  overflow: hidden;
}

.contact-item:hover {
  /* transform: translateY(-6px) scale(1.02); */
  border-color: var(--accent-color);
  box-shadow: 0 12px 30px rgba(255, 193, 7, 0.25);
}

.contact-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.whatsapp-icon {
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
}

.linkedin-icon {
  background: linear-gradient(135deg, #0A66C2, #004182);
  color: white;
}

.github-icon {
  background: linear-gradient(135deg, #24292e, #040404);
  color: white;
  border: 1px solid rgba(255,255,255,0.15);
}

.contact-item:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
}

.contact-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.contact-details h3 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--text-color);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.contact-link {
  color: var(--accent-color);
  font-weight: 700;
  font-size: 15px;
  transition: color 0.3s ease;
  word-break: break-all;
}

.contact-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-contact-btn {
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  color: var(--btn-text);
  border: none;
  padding: 15px 34px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(255, 193, 7, 0.35);
}

.secondary-contact-btn {
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  padding: 15px 34px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.secondary-contact-btn:hover {
  background: var(--accent-color);
  color: var(--btn-text);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 30px;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .contact-cta {
    flex-direction: column;
    align-items: center;
  }

  .primary-contact-btn,
  .secondary-contact-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
