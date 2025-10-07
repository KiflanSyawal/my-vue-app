<template>
  <div class="portfolio" :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <!-- Header/Navigation -->
    <header class="header">
      <div class="logo">KIFLAN</div>
      <nav class="nav" :class="{ 'active': isMenuOpen }">
        <ul>
          <li v-for="item in navItems" :key="item">
            <a :href="'#' + formatNavId(item)" @click="handleNavClick(item)">{{ item }}</a>
          </li>

          <!-- Theme Toggle Button -->
          <li class="theme-toggle-container">
            <button @click="toggleTheme" class="theme-toggle"
              :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
              <span v-if="isDarkMode">☀️</span>
              <span v-else>🌙</span>
            </button>
          </li>
        </ul>
      </nav>
      <button class="hamburger" @click="toggleMenu">
        <div class="bar" :class="{ 'animate': isMenuOpen }"></div>
        <div class="bar" :class="{ 'animate': isMenuOpen }"></div>
        <div class="bar" :class="{ 'animate': isMenuOpen }"></div>
      </button>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="AboutMe">
      <div class="hero-content">
        <div class="greeting">
          <span class="wave">👋</span>
          <h2>Hi, My name is <span class="name"><u>Kiflan Anugerah Syawal</u></span></h2>
          <!-- Typewriter Animation -->
          <div class="animated-title">
            <span class="typewriter" ref="typewriterText">{{ currentTypedText }}</span>
            <span class="cursor" :class="{ 'blink': showCursor }">|</span>
          </div>
        </div>
        <p class="bio">
          I am a highly motivated technology enthusiast with strong critical thinking and teamwork abilities. As an
          experienced robotics programmer, I excel under pressure and possess skills in C, C++, OpenCR microcontrollers,
          as well as Cisco and MikroTik network configuration. I have achieved notable success, securing 3rd place
          nationally in humanoid robot soccer (2023), 2nd place (2024), and funding for a student creativity program.
          With effective English communication skills (IELTS 6, CEFR B2), I am eager to apply my knowledge and
          collaborate in a technology career.
        </p>
      </div>

      <div class="profile-container">
        <img :src="getImageUrl()" alt="Profile" class="profile-pic">
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section" id="Experiences">
      <h2 class="section-title">Experience</h2>
      <div class="experience-container">
        <div v-for="(experience, index) in experiences" :key="index" class="experience-item">
          <div class="experience-year">{{ experience.year }}</div>
          <div class="experience-details">
            <div class="experience-header">
              <img :src="experience.icon" :alt="`${experience.company} icon`" class="experience-icon">
              <div>
                <h3 class="experience-title">{{ experience.title }}</h3>
                <p class="experience-company">{{ experience.company }}</p>
              </div>
            </div>
            <p class="experience-description">{{ experience.description }}</p>
            <div class="experience-technologies">
              <span v-for="(tech, techIndex) in experience.technologies" :key="techIndex" class="technology-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section" id="Skills">
      <h2 class="section-title">Skills</h2>
      <div class="skills-container">
        <div v-for="(skill, index) in skills" :key="index" class="skill-item" :style="{ '--delay': index }">
          <div class="skill-icon">
            <img :src="skill.icon" :alt="skill.name">
          </div>
          <div class="skill-name">{{ skill.name }}</div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section" id="Gallery">
      <h2 class="section-title">Gallery Collection</h2>

      <div class="gallery-filters">
        <button v-for="category in galleryCategories" :key="category" @click="selectCategory(category)"
          :class="{ 'active': selectedCategory === category }" class="gallery-filter-btn">
          {{ category }}
        </button>
      </div>

      <div class="gallery-grid">
        <div v-for="(item, index) in filteredImages" :key="index" class="gallery-item" @click="openLightbox(item)">
          <img :src="item.src" :alt="item.alt" />
          <div class="gallery-item-overlay">
            <div class="gallery-item-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div v-if="selectedImage" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">&times;</button>
          <img :src="selectedImage.src" :alt="selectedImage.alt">
          <div class="lightbox-description">
            <h3>{{ selectedImage.title }}</h3>
            <p>{{ selectedImage.description }}</p>
            <a v-if="selectedImage.link" :href="selectedImage.link" target="_blank" rel="noopener noreferrer"
              class="visit-website-btn">
              Visit →
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="Contact" class="contact-section">
      <div class="contact-container">
        <div class="contact-content">
          <h2 class="section-title">Let's Connect</h2>
          <p class="contact-description">
            I'm always excited to discuss new opportunities, collaborate on interesting projects,
            or simply connect with fellow developers and creators. Let's build something amazing together!
          </p>

          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Whatsapp</h3>
                <a href="https://wa.me/6282112275218" class="contact-link" target="_blank">+6282112275218</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div class="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/kiflan-anugerah-syawal-0b3905254/" target="_blank"
                  class="contact-link">linkedin.com/in/kiflan-anugerah-syawal-0b3905254</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg>
              </div>
              <div class="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/KiflanSyawal" target="_blank"
                  class="contact-link">github.com/kiflanKiflanSyawal</a>
              </div>
            </div>
          </div>

          <div class="contact-cta">
            <button class="btn primary-contact-btn" @click="openEmailClient">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Send me an email
            </button>
            <button class="btn secondary-contact-btn" @click="downloadResume">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
              Download CV
            </button>
          </div>
        </div>

        <div class="contact-visual">
          <div class="floating-elements">
            <div class="floating-element" style="--delay: 0s; --duration: 3s;">💼</div>
            <div class="floating-element" style="--delay: 1s; --duration: 4s;">💻</div>
            <div class="floating-element" style="--delay: 2s; --duration: 3.5s;">🚀</div>
            <div class="floating-element" style="--delay: 0.5s; --duration: 4.5s;">⚡</div>
            <div class="floating-element" style="--delay: 1.5s; --duration: 3.2s;">🎯</div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-section">
      <div class="footer-container">
        <!-- Footer Main Content -->
        <div class="footer-content">
          <!-- Logo and Description -->
          <div class="footer-brand">
            <h3 class="footer-logo">KIFLAN</h3>
            <p class="footer-description">
              Building innovative digital solutions with passion and precision.
              Let's create something extraordinary together.
            </p>
            <div class="footer-social">
              <a href="https://linkedin.com/in/kiflan" target="_blank" class="social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/kiflan" target="_blank" class="social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg>
              </a>
              <a href="mailto:kiflan@example.com" class="social-link" title="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-links">
            <h4 class="footer-section-title">Quick Links</h4>
            <ul class="footer-nav">
              <li><a href="#AboutMe" @click="handleNavClick('About Me')">About Me</a></li>
              <li><a href="#Experiences" @click="handleNavClick('Experiences')">Experience</a></li>
              <li><a href="#Skills" @click="handleNavClick('Skills')">Skills</a></li>
              <li><a href="#Gallery" @click="handleNavClick('Gallery')">Gallery</a></li>
              <li><a href="#Contact" @click="handleNavClick('Contact')">Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-services">
            <h4 class="footer-section-title">Services</h4>
            <ul class="footer-service-list">
              <li>Web Development</li>
              <li>System Analysis</li>
              <li>Robot Programming</li>
              <li>UI/UX Design</li>
              <li>3D Modeling</li>
              <li>Network Engineer</li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-contact">
            <h4 class="footer-section-title">Get In Touch</h4>
            <div class="footer-contact-info">
              <div class="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:kiflan.as@gmail.com">kiflan.as@gmail.com</a>
              </div>
              <div class="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Jakarta Metropolitan Area, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="footer-copyright">
              © {{ currentYear }} Kiflan Anugerah Syawal. All rights reserved.
            </p>
            <div class="footer-bottom-links">
              <a class="footer-bottom-link">Privacy Policy</a>
              <a class="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>

        <!-- Animated Background Elements -->
        <div class="footer-bg-animation">
          <div class="floating-shape shape-1"></div>
          <div class="floating-shape shape-2"></div>
          <div class="floating-shape shape-3"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyPortofolio',
  data() {
    return {

      currentYear: new Date().getFullYear(),

      navItems: ['About Me', 'Experiences', 'Skills', 'Gallery', 'Contact'],
      isDarkMode: true,
      isMenuOpen: false,
      selectedCategory: 'Project',
      selectedImage: null,

      // Typewriter animation data
      professionalTitles: [
        'Web Developer',
        'System Analyst',
        'Robotic Programmer',
        'Network Engineer',
        'Frontend Developer',
        'UI UX Designer',
        '3D Modeling'
      ],
      currentTitleIndex: 0,
      currentTypedText: '',
      isDeleting: false,
      showCursor: true,
      typewriterTimeout: null,

      galleryCategories: [
        'Project',
        'Awards Achievement',
        // 'Design Illustrations'
      ],

      // Fixed gallery images structure
      galleryImages: {
        'Project': [
          {
            src: '/images/gointerling.png',
            alt: 'web application',
            title: 'Gointerling',
            description: 'Project as Web Developer for Student Creativity Program',
            link: 'https://gointerling.com/'
          },
          {
            src: '/images/landing.png',
            alt: 'personal website',
            title: 'Personal portofolio',
            description: 'A portfolio website showcasing my work and skills',
            link: 'https://gointerling.com/'
          },
          {
            //src: '/images/op3.mp4', // Change to your video file path
            alt: 'video showcase',
            title: 'Humanoid Robot Darwin OP3',
            description: 'Humanoid Robot Darwin OP3 Showcase',
            link: 'https://drive.google.com/drive/u/0/folders/1GXQfhFQUSA_VkonGuJMlfe4S8QH8tfM9',
            type: 'video' // Add type to distinguish from images
          }
        ],
        'Awards Achievement': [
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQHgk4Tf3vlPCg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738202948585?e=1760403600&v=beta&t=9KGbd3Kcf9kwXW79VHDeb3BEZNDrPq6r3p9OXvPMcpg',
            alt: 'Certificate 2023',
            title: 'National Championship 2023',
            description: '3rd place in national humanoid robot soccer competition'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQGV9N0DD2gEmA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738202838734?e=1760403600&v=beta&t=pIodAaFcPLE_xCSg-mjenY68Rr_58HQNjL4TNKWYEzI',
            alt: 'Certificate 2023',
            title: 'National Finalist 2023',
            description: 'Finalist in national humanoid robot soccer competition'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQGwWRNuWdmEEw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738202746393?e=1760403600&v=beta&t=a-dDGr21vi_k_9D4mnl3Regwc4gyRf_OIMf13-585Fk',
            alt: 'Certificate 2023',
            title: 'Region Champion 2023',
            description: '1st place in region humanoid robot soccer competition'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQEM7TVb89tNTQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738202633199?e=1760403600&v=beta&t=xIvEUVXoTmKzxKjGFtmRJrX4q15f5JXY1Y9Y0U7jiSE',
            alt: 'Certificate 2023',
            title: 'Region Finalist 2023',
            description: 'Finalist in region humanoid robot soccer competition'
          },
          //2024
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQHDzm_-vgnohw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738203879611?e=1760403600&v=beta&t=S0kslb7UyR8rbZDdQL_nrrTQ-hI2NkOnH1N57B_hjjU',
            alt: 'Certificate 2024',
            title: 'National Championship 2024',
            description: '3rd place in national humanoid robot soccer competition'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQGn4Ovyamg2Zw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738203800118?e=1760403600&v=beta&t=r0lEeKjqTdSmFBsvHi1YY_ylOUcSqmaUkuxcXhTkvfs',
            alt: 'Certificate 2024',
            title: 'National Finalist 2024',
            description: 'Finalist in national humanoid robot soccer competition'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQFjgJPCPsoK2Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738203749947?e=1760403600&v=beta&t=8hT2CbPGwrX38vpGK5PiDrAm7qhuJnh0HXl_yHb4DH8',
            alt: 'Certificate 2024',
            title: 'Region Champion 2024',
            description: '1st place in region humanoid robot soccer competition'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQEzzdc4gqbkgg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738203489821?e=1760403600&v=beta&t=PxAEO-U3H5wHykYek8wrnlGy5YXIlLSkGaUMH5YYuj4',
            alt: 'Certificate 2024',
            title: 'Region Finalist 2024',
            description: 'Finalist in region humanoid robot soccer competition'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQGfWq3ScGXQYA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738204399982?e=1760403600&v=beta&t=W8gOM1RcWyraO7dqZHrzfo2MLCjiF1ZJPedn_tfgLn4',
            alt: 'Project',
            title: 'Certificate for passed on funding system',
            description: 'Student creativity program funding system'
          },
          {
            src: 'https://media.licdn.com/dms/image/v2/D562DAQGpgfEsXtLb4g/profile-treasury-image-shrink_8192_8192/B56ZbSF0flHgAg-/0/1747281463923?e=1760403600&v=beta&t=brlMEQ8F-MDqVrLHgyjKWNtaIOYIAgfNNXRd8vHChoI',
            alt: 'Award',
            title: 'Award as The most Outstanding Student',
            description: 'Award as The most Outstanding Student'
          }
        ],
        'Design Illustrations': [
          {
            src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop',
            alt: 'UI Design',
            title: 'Mobile App Design',
            description: 'Modern mobile application interface design'
          },
          {
            src: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&h=300&fit=crop',
            alt: 'Graphic Design',
            title: 'Brand Identity',
            description: 'Complete brand identity design package'
          },
          {
            src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop',
            alt: '3D Design',
            title: '3D Modeling',
            description: 'Complex 3D models created with Blender'
          },
          {
            src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop',
            alt: '3D Design',
            title: '3D Modeling',
            description: 'Complex 3D models created with Blender'
          }
        ]
      },

      experiences: [
        {
          year: 'June 2025 - December 2025',
          title: 'Network Engineer',
          company: 'PT Sigma Cipta ',
          description: 'Being a team and responsible for developing and maintaining the hardware of the humanoid soccer robot darwin op3 using C++/C and integrated with the Robotic Framework. Collaborating with other divisions such as mechanics, electronics to design robots.',
          technologies: ['C++', 'C Programming Language', 'Robotics', 'Robotics Framework'],
          icon: 'https://www.svgrepo.com/show/530583/network.svg'
        },
        {
          year: '2022 - 2025',
          title: 'Programmer',
          company: 'AL-Aadiyaat',
          description: 'Being a team and responsible for developing and maintaining the hardware of the humanoid soccer robot darwin op3 using C++/C and integrated with the Robotic Framework. Collaborating with other divisions such as mechanics, electronics to design robots.',
          technologies: ['C++', 'C Programming Language', 'Robotics', 'Robotics Framework'],
          icon: 'https://www.svgrepo.com/show/486361/robot.svg'
        },
        {
          year: '2024 - 2024',
          title: 'Web Developer',
          company: 'Program Kreativitas Mahasiswa',
          description: 'Designed and developed websites using Laravel as a framework, Vue as a front end, and Supabase as a real-time database. Work with the UI UX group to create websites according to the desired design. Implement responsive design and optimize frontend performance.',
          technologies: ['HTML', 'CSS', 'Laravel', 'Vue.js', 'Supabase', 'Web Development'],
          icon: 'https://www.svgrepo.com/show/514333/web-page.svg'
        },
        {
          year: '2024 - 2025',
          title: 'IT System Analyst',
          company: 'Marriott Executive Apartement',
          description: 'Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.',
          technologies: ['Networking', 'IT Support', 'Hardware Troubleshooting', 'Application Management', 'LAN Crimping'],
          icon: 'https://cdn.freebiesupply.com/logos/large/2x/marriott-logo-svg-vector.svg'
        },
        {
          year: '2022 - 2022',
          title: '3D Designer',
          company: 'Hello Motion Academy',
          description: 'Enroll in a 3D course to learn how to create 3D design models, complete assigned tasks from the mentor, and submit them accordingly.',
          technologies: ['3D Design', '3D Animation', '3D Rendering', '3D Modeling'],
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg'
        }
      ],
      resumeLink: 'https://drive.google.com/drive/u/0/folders/14jgIeohpZnPN0Zd4AzDHO59QTlEuFvJf',
      skills: [
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/452228/html-5.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/452185/css-3.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/374118/tailwind.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/353925/javascript.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/353985/laravel.svg',

        },
        {
          icon: 'https://www.svgrepo.com/show/303177/photoshop-cc-logo.svg',

        },
        {
          icon: '	https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/384px-Logo_C_sharp.svg.png?20221121173824',

        },
        {
          icon: 'https://www.svgrepo.com/show/452091/python.svg',

        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/477px-The_C_Programming_Language_logo.svg.png?20230112193555',

        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/448278/cisco.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/353488/blender.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/354987/figma.svg',
        },
        {
          icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg',
        }
      ]
    }
  },
  mounted() {
    this.startTypewriter();
  },
  beforeUnmount() {
    if (this.typewriterTimeout) {
      clearTimeout(this.typewriterTimeout);
    }
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
  computed: {
    filteredImages() {
      return this.galleryImages[this.selectedCategory] || [];
    }
  },
  methods: {
    scrollTo(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    },

    openEmailClient() {
      window.location.href = 'mailto:kiflan@example.com?subject=Let\'s Connect!&body=Hi Kiflan,%0D%0A%0D%0AI would like to discuss...';
    },

    handleNavClick(item) {
      const sectionId = this.formatNavId(item);
      this.scrollTo(sectionId);
      this.isMenuOpen = false;
    },

    formatNavId(item) {
      return item.replace(/\s+/g, '');
    },

    startTypewriter() {
      this.typeWriter();
    },

    typeWriter() {
      const currentTitle = this.professionalTitles[this.currentTitleIndex];
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

    getImageUrl() {
      return 'https://media.licdn.com/dms/image/v2/D5603AQFzXYo_rGQPAg/profile-displayphoto-shrink_400_400/B56ZQqV1JjHQAk-/0/1735877154799?e=1762387200&v=beta&t=X-G03ubK5ypQYS4hYEovEza4UjEEBTazZe5NryI9Jfk';
    },

    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    downloadResume() {
      window.open(this.resumeLink, '_blank');
    },

    selectCategory(category) {
      this.selectedCategory = category;
    },

    openLightbox(image) {
      this.selectedImage = image;
    },

    closeLightbox() {
      this.selectedImage = null;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

/* Light & Dark Mode Variable Sets */
.dark-mode {
  --bg-color: #222;
  --header-bg: #111;
  --text-color: white;
  --accent-color: #ffc107;
  --btn-text: #222;
  --card-bg: #1a1a1a;
  --card-border: #333;
  --card-shadow: rgba(0, 0, 0, 0.3);
  --skill-text: #f0f0f0;
  --skill-bg: #222;
}

.light-mode {
  --bg-color: #f5f5f5;
  --header-bg: #ffffff;
  --text-color: #333;
  --accent-color: #ff9800;
  --btn-text: #fff;
  --card-bg: #ffffff;
  --card-border: #e0e0e0;
  --card-shadow: rgba(0, 0, 0, 0.1);
  --skill-text: #333;
  --skill-bg: #f5f5f5;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
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

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}

/* Make the header sticky */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: var(--header-bg);
  transition: background-color 0.3s;
  position: fixed;
  /* Changed from relative to fixed */
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 2px 10px var(--card-shadow);
  z-index: 1000;
  /* Ensure it stays above other content */
}

/* Add padding to body to compensate for fixed header */
.portfolio {
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
  overflow-x: hidden;
  padding-top: 80px;
  /* Add padding to prevent content from hiding behind header */
}

.logo {
  font-weight: bold;
  font-size: 24px;
}

.nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
  align-items: center;
}

.nav a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.nav a:hover {
  color: var(--accent-color);
}

/* Theme Toggle Button Styles */
.theme-toggle-container {
  display: flex;
  align-items: center;
}

.theme-toggle {
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s;
}

.theme-toggle:hover {
  background-color: var(--accent-color);
  color: var(--btn-text);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}

/* Hamburger Menu Styles */
.hamburger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: var(--accent-color);
  transition: 0.4s;
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

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px 80px 50px;
  /* Reduced top padding */
  gap: 20px;
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
  margin-bottom: 10px;
}

.greeting>div:first-child {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.wave {
  font-size: 30px;
  margin-right: 15px;
}

h2 {
  font-size: 28px;
}

.name {
  color: var(--accent-color);
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}

.bio {
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 30px;
}

.cta {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  border-radius: 5px;
}

.primary-btn {
  background-color: var(--accent-color);
  color: var(--btn-text);
}

.secondary-btn {
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}

.profile-container {
  flex: 0 0 auto;
}

.profile-pic {
  border: 4px solid var(--accent-color);
  border-radius: 10px;
  max-width: 350px;
  height: auto;
  background-color: var(--header-bg);
}

/* Skills Section Styles */
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

/* .section-title::after {
  content: '';
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: var(--accent-color);
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
} */

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.skill-item {
  background-color: var(--skill-bg);
  border: 5px solid var(--card-border);
  border-radius: 10px;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 15px;
  animation: bounce 2s ease-in-out infinite;
  animation-delay: calc(0.2s * var(--delay));
}

.skill-item:hover {
  transform: translateY(-10px);
}

.skill-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.skill-icon img {
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease;
}

.skill-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--skill-text);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header {
    padding: 15px 20px;
    /* Slightly reduce padding on mobile */
  }

  .hamburger {
    display: flex;
  }

  .portfolio {
    padding-top: 70px;
    /* Adjust for smaller mobile header */
  }

  .hero {
    padding: 30px 20px 50px 20px;
    /* Adjust hero padding for mobile */
  }

  /* Ensure mobile menu appears above everything */
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--header-bg);
    transition: right 0.3s ease-in-out;
    z-index: 1001;
    /* Higher than header */
    padding-top: 80px;
  }

  .nav.active {
    right: 0;
  }

  .nav ul {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .hero {
    flex-direction: column;
    text-align: center;
    padding: 50px 20px;
    width: 100%;
  }

  .hero-content {
    max-width: 100%;
  }

  .greeting {
    align-items: center;
  }

  .greeting>div:first-child {
    justify-content: center;
  }

  .animated-title {
    justify-content: center;
    font-size: 1.2rem;
  }

  .cta {
    justify-content: center;
  }

  .bio {
    text-align: justify;
  }

  .profile-pic {
    max-width: 280px;
    margin-top: 30px;
  }

  .skills-section {
    padding: 50px 20px;
    width: 100%;
    margin: 0;
    background-color: var(--bg-color);
  }

  .skills-container {
    gap: 15px;
  }

  .skill-item {
    width: 100px;
    height: 100px;
  }
}

/* Fix for the white gap in Android mode */
html,
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: var(--bg-color);
  scroll-behavior: smooth;
}

section {
  width: 100%;
}

/* Experience Section Styles */
.experience-section {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.experience-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px;
}

.experience-item {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
}

.experience-year {
  flex: 0 0 150px;
  font-size: 18px;
  font-weight: bold;
  color: var(--accent-color);
}

.experience-details {
  flex: 1;
  padding: 0;
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
}

.experience-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.experience-title {
  font-size: 20px;
  margin-bottom: 5px;
  color: var(--accent-color);
}

.experience-company {
  font-size: 16px;
  color: var(--text-color);
}

.experience-description {
  margin-bottom: 15px;
  line-height: 1.6;
  text-align: justify;
}

.experience-technologies {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.technology-tag {
  background-color: var(--accent-color);
  color: var(--btn-text);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
}

/* Responsive adjustments */
/* Responsive adjustments for Experience Section */
@media (max-width: 768px) {
  .experience-section {
    padding: 50px 0;
  }

  .experience-container {
    max-width: 95%;
    padding: 0 10px;
    gap: 1px;
    /* Reduce gap between experiences */
  }

  .experience-item {
    flex-direction: column;
    gap: 10px;
    /* Reduce gap within each experience item */
  }

  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .experience-year {
    margin-bottom: 5px;
    order: 2;
    /* Move year after the title */
    align-self: flex-start;
    color: var(--accent-color);
    font-size: 16px;
    font-weight: normal;
  }

  .experience-title {
    order: 0;
    /* Ensure title comes first */
    margin-bottom: 0;
  }

  .experience-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  .experience-description {
    margin-bottom: 10px;
  }

  .experience-technologies {
    margin-top: 10px;
  }
}

/* Gallery Section */
.gallery-section {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.gallery-filter-btn {
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-filter-btn.active,
.gallery-filter-btn:hover {
  background-color: var(--accent-color);
  color: var(--btn-text);
  transform: translateY(-2px);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-item-overlay {
  opacity: 1;
}

.gallery-item-info {
  color: white;
}

.gallery-item-info h3 {
  margin-bottom: 5px;
  font-size: 18px;
}

.gallery-item-info p {
  font-size: 14px;
  opacity: 0.9;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  overflow-y: auto;
  /* Allow scrolling if needed */
}

.lightbox-content {
  position: relative;
  max-width: 1000px;
  width: 90%;
  max-height: 90vh;
  background-color: var(--card-bg);
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* Make content scrollable */
}

.lightbox-content img {
  max-width: 100%;
  max-height: 60vh;
  /* Limit image height to 60% of viewport */
  width: auto;
  height: auto;
  object-fit: contain;
  /* Maintain aspect ratio */
  border-radius: 8px;
  margin-bottom: 20px;
  /* Space between image and description */
}

.lightbox-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--accent-color);
  color: var(--btn-text);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.lightbox-description {
  text-align: center;
  margin-top: 20px;
  color: var(--text-color);
  flex-shrink: 0;
  /* Prevent description from being hidden */
}

.lightbox-description h3 {
  margin-bottom: 10px;
  font-size: 24px;
}

.lightbox-description p {
  margin-bottom: 15px;
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 15px;
  }

  .gallery-item img {
    height: 200px;
  }


}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item img {
    height: 250px;
  }
}

/* Contact Section Styles */
.contact-section {
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--card-bg) 100%);
  color: var(--text-color);
  padding: 100px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 20%, var(--accent-color)15 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, var(--accent-color)10 0%, transparent 50%);
  pointer-events: none;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.contact-content {
  max-width: 100%;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

/* .section-title::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  bottom: -15px;
  left: 0;
  border-radius: 2px;
} */

.contact-description {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.9;
  text-align: justify;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: var(--card-bg);
  border-radius: 15px;
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.1), transparent);
  transition: left 0.6s ease;
}

.contact-item:hover::before {
  left: 100%;
}

.contact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px var(--card-shadow);
  border-color: var(--accent-color);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--btn-text);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
}

.contact-details h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
}

.contact-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

/* .contact-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.3s ease;
} */

/* .contact-link:hover::after {
  width: 100%;
} */

.contact-cta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.primary-contact-btn {
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  color: var(--btn-text);
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(255, 193, 7, 0.3);
}

.primary-contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
}

.secondary-contact-btn {
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.secondary-contact-btn:hover {
  background: var(--accent-color);
  color: var(--btn-text);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
}

.contact-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-element {
  position: absolute;
  font-size: 40px;
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  opacity: 0.7;
}

.floating-element:nth-child(1) {
  top: 10%;
  left: 20%;
}

.floating-element:nth-child(2) {
  top: 60%;
  right: 10%;
}

.floating-element:nth-child(3) {
  bottom: 20%;
  left: 10%;
}

.floating-element:nth-child(4) {
  top: 30%;
  right: 30%;
}

.floating-element:nth-child(5) {
  bottom: 40%;
  left: 60%;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  25% {
    transform: translateY(-20px) rotate(5deg);
  }

  50% {
    transform: translateY(-10px) rotate(-5deg);
  }

  75% {
    transform: translateY(-15px) rotate(3deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .section-title {
    font-size: 32px;
  }

  .contact-description {
    font-size: 16px;
  }

  .contact-info {
    gap: 20px;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;
  }

  .contact-cta {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .primary-contact-btn,
  .secondary-contact-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .contact-visual {
    height: 200px;
  }

  .floating-element {
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 0 15px;
  }

  .section-title {
    font-size: 28px;
  }

  .contact-description {
    font-size: 14px;
    text-align: center;
  }

  .contact-item {
    padding: 20px 15px;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
  }

  .floating-element {
    font-size: 24px;
  }
}

/* Footer Section Styles */
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

.footer-brand {
  max-width: 100%;
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
}

.footer-social {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--accent-color);
  color: var(--btn-text);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
}

.footer-section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--accent-color);
  position: relative;
}

.footer-section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent-color);
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
  position: relative;
}

.footer-nav a::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.3s ease;
}

.footer-nav a:hover {
  color: var(--accent-color);
  opacity: 1;
  transform: translateX(5px);
}

.footer-nav a:hover::before {
  width: 100%;
}

.footer-service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-service-list li {
  margin-bottom: 12px;
  opacity: 0.8;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 15px;
}

.footer-service-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.footer-contact-item:hover {
  opacity: 1;
  color: var(--accent-color);
}

.footer-contact-item svg {
  color: var(--accent-color);
  flex-shrink: 0;
}

.footer-contact-item a {
  color: inherit;
  text-decoration: none;
}

.footer-bottom {
  border-top: 1px solid var(--card-border);
  padding: 30px 0;
  margin-top: 20px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-copyright {
  opacity: 0.7;
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.footer-bottom-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 14px;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.back-to-top {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--accent-color);
  color: var(--btn-text);
  border: none;
  padding: 8px 16px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}

/* Animated Background Elements */
.footer-bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color)20, transparent);
  animation: floatShape 15s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  left: 80%;
  animation-delay: 0s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 60%;
  left: 10%;
  animation-delay: 5s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  top: 30%;
  left: 60%;
  animation-delay: 10s;
}

@keyframes floatShape {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }

  25% {
    transform: translateY(-20px) rotate(90deg);
    opacity: 0.6;
  }

  50% {
    transform: translateY(-40px) rotate(180deg);
    opacity: 0.3;
  }

  75% {
    transform: translateY(-20px) rotate(270deg);
    opacity: 0.6;
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 40px 15px 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-description {
    text-align: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .footer-bottom-links {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 30px 10px 0;
  }

  .footer-logo {
    font-size: 24px;
  }

  .footer-description {
    font-size: 14px;
  }

  .footer-social {
    gap: 10px;
  }

  .social-link {
    width: 35px;
    height: 35px;
  }
}

.visit-website-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 30px;
  background: linear-gradient(135deg, var(--accent-color), #ff6b35);
  color: var(--btn-text);
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(255, 193, 7, 0.3);
}

.visit-website-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.4);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .lightbox-content {
    width: 95%;
    padding: 20px;
    max-height: 85vh;
  }

  .lightbox-content img {
    max-height: 50vh;
    /* Reduce image height on mobile */
  }

  .lightbox-description h3 {
    font-size: 20px;
  }

  .lightbox-description p {
    font-size: 14px;
  }
}
</style>