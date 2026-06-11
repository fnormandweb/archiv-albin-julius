(function() {
  'use strict';

  
  function setTheme(theme) {
    const html = document.documentElement;
    
    
    html.classList.add('theme-transition');
    
    
    html.setAttribute('data-theme', theme);
    
    
    localStorage.setItem('ej-theme', theme);
    
    
    setTimeout(() => {
      html.classList.remove('theme-transition');
    }, 250);
  }

  
  function getInitialTheme() {
    // Forcer le thème dark uniquement
    return 'dark';
  }

  
  function initTheme() {
    const html = document.documentElement;
    
    // Forcer le thème dark
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('ej-theme', 'dark');
  }

  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

})();

/* ============================================
   ARCHIV — Albin Julius : thème (sombre fixe)
   ============================================ */

(function() {
  'use strict';

  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  
  function setTheme(theme) {
    html.classList.add('theme-transition');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('ej-theme', theme);
    
    setTimeout(() => {
      html.classList.remove('theme-transition');
    }, 250);
  }

  
  function getInitialTheme() {
    // Forcer le thème dark uniquement
    return 'dark';
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    // Forcer le thème dark
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('ej-theme', 'dark');
  });

})();

/* ============================================
   ARCHIV — navigation & ancres des sections
   ============================================ */

(function() {
  'use strict';

  const dropdownLinks = document.querySelectorAll('.ej-nav-dropdown-link');
  let activeSectionUpdateTimeout = null;
  let lastActiveSection = '';

  
  function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200;

    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });

    // Ne mettre à jour que si la section a changé
    if (currentSection === lastActiveSection) {
      return;
    }
    
    lastActiveSection = currentSection;

    
    dropdownLinks.forEach(link => {
      const linkSection = link.getAttribute('data-section');
      if (linkSection === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  
  function debouncedUpdateActiveSection() {
    if (activeSectionUpdateTimeout) {
      cancelAnimationFrame(activeSectionUpdateTimeout);
    }
    
    activeSectionUpdateTimeout = requestAnimationFrame(() => {
      updateActiveSection();
      activeSectionUpdateTimeout = null;
    });
  }

  
  function handleLinkClick(e) {
    const link = e.currentTarget;
    const href = link.getAttribute('href');
    
    
    if (href && (href.includes('.html') && !href.includes('#'))) {
      
      return; 
    }
    
    
    e.preventDefault();
    const targetId = link.getAttribute('data-section');
    
    
    if (href && href.includes('index.html#')) {
      const anchor = href.split('#')[1];
      if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
        
        window.location.href = href;
        return;
      }
      
      const targetSection = document.getElementById(anchor);
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      return;
    }
    
    
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerOffset = 80;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  
  function init() {
    
    dropdownLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    window.addEventListener('scroll', debouncedUpdateActiveSection, { passive: true });
    updateActiveSection();
    }
  }

  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* ============================================
   ARCHIV — animations d’apparition (cartes)
   ============================================ */

(function() {
  'use strict';

  
  let chariotLoadObserver = null;
  let chariotLoadInitialized = false;

  function initChariotLoad() {
    // Éviter l'initialisation multiple
    if (chariotLoadInitialized) return;
    
    const cards = document.querySelectorAll('.ej-leitmotive-card, .ej-objekte-card, .ej-exil-card');
    
    if (cards.length === 0) return;

    chariotLoadInitialized = true;

    
    chariotLoadObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('anim-chariot-load-active');
          }, index * 100); 
          chariotLoadObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
      // Ne pas observer si déjà animé
      if (!card.classList.contains('anim-chariot-load-active')) {
        chariotLoadObserver.observe(card);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initChariotLoad();
  });

})();

(function() {
  'use strict';

  let scrollAnimationsObserver = null;
  let scrollAnimationsInitialized = false;

  function initScrollAnimations() {
    // Éviter l'initialisation multiple
    if (scrollAnimationsInitialized) return;
    
    scrollAnimationsInitialized = true;
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    scrollAnimationsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Ne plus observer une fois visible
          scrollAnimationsObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    
    const timelineItems = document.querySelectorAll('.ej-timeline-item');
    timelineItems.forEach(item => {
      // Ne pas observer si déjà visible
      if (!item.classList.contains('visible')) {
        scrollAnimationsObserver.observe(item);
      }
    });

    
    const bibliographyItems = document.querySelectorAll('.ej-bibliography-item');
    bibliographyItems.forEach(item => {
      // Ne pas observer si déjà visible
      if (!item.classList.contains('visible')) {
        scrollAnimationsObserver.observe(item);
      }
    });
  }

  let filtersInitialized = false;

  function initFilters() {
    // Éviter l'initialisation multiple
    if (filtersInitialized) return;
    
    const filterButtons = document.querySelectorAll('.ej-filter-btn');
    const timelineSection = document.querySelector('.ej-timeline[data-category="timeline"]');
    const bibliographySection = document.querySelector('.ej-bibliography[data-category="bibliography"]');
    const discographyBlock = document.querySelector('#discography');

    if (!timelineSection || !bibliographySection) return;

    filtersInitialized = true;

    filterButtons.forEach(btn => {
      if (!btn.dataset.initialized) {
        btn.dataset.initialized = 'true';
        btn.addEventListener('click', function() {
          
          filterButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          const filter = this.dataset.filter;

          if (filter === 'timeline') {
            timelineSection.style.display = 'block';
            bibliographySection.style.display = 'none';
            if (discographyBlock) discographyBlock.style.display = 'none';
          } else if (filter === 'bibliography') {
            timelineSection.style.display = 'none';
            bibliographySection.style.display = 'block';
            if (discographyBlock) discographyBlock.style.display = 'block';
          } else {
            timelineSection.style.display = 'block';
            bibliographySection.style.display = 'block';
            if (discographyBlock) discographyBlock.style.display = 'block';
          }
        });
      }
    });
  }

  
  function initThemeToggle() {
    // Fonction désactivée - thème dark uniquement
    const section = document.querySelector('.ej-timeline-section');
    if (section) {
      section.classList.remove('light-theme');
    }
    localStorage.setItem('ej-theme', 'dark');
  }

  let accordionInitialized = false;

  function initAccordion() {
    // Éviter l'initialisation multiple
    if (accordionInitialized) return;
    
    const accordionTriggers = document.querySelectorAll('.ej-accordion-trigger');
    
    if (accordionTriggers.length === 0) return;

    accordionInitialized = true;

    accordionTriggers.forEach(trigger => {
      if (!trigger.dataset.initialized) {
        trigger.dataset.initialized = 'true';
        trigger.addEventListener('click', function() {
          const content = this.nextElementSibling;
          const isOpen = content.style.maxHeight;

          
          document.querySelectorAll('.ej-accordion-content').forEach(item => {
            if (item !== content) {
              item.style.maxHeight = null;
              item.previousElementSibling.classList.remove('active');
            }
          });

          
          if (isOpen) {
            content.style.maxHeight = null;
            this.classList.remove('active');
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            this.classList.add('active');
          }
        });
      }
    });
  }

  let imagePlaceholdersInitialized = false;

  function initImagePlaceholders() {
    // Éviter l'initialisation multiple
    if (imagePlaceholdersInitialized) return;
    
    imagePlaceholdersInitialized = true;
    const timelineCovers = document.querySelectorAll('.timeline-cover');
    const bookAvatars = document.querySelectorAll('.book-avatar');

    
    function createPlaceholder(img) {
      // Vérifier si un placeholder existe déjà
      if (img.parentNode.querySelector('[data-placeholder="true"]')) {
        return;
      }
      
      img.classList.add('error');
      img.style.display = 'none';
      
      
      const placeholder = document.createElement('div');
      placeholder.className = 'timeline-cover-placeholder';
      placeholder.setAttribute('data-placeholder', 'true');
      
      
      img.parentNode.insertBefore(placeholder, img);
    }

    
    timelineCovers.forEach(img => {
      // Ne pas traiter si déjà initialisé
      if (img.dataset.placeholderInitialized) return;
      img.dataset.placeholderInitialized = 'true';
      
      if (!img.src || img.src === '' || img.getAttribute('src') === '') {
        createPlaceholder(img);
      } else {
        
        img.onerror = function() {
          if (!this.parentNode.querySelector('[data-placeholder="true"]')) {
            createPlaceholder(this);
          }
        };
      }
    });

    
    bookAvatars.forEach(img => {
      // Ne pas traiter si déjà initialisé
      if (img.dataset.placeholderInitialized) return;
      img.dataset.placeholderInitialized = 'true';
      
      if (!img.src || img.src === '' || img.getAttribute('src') === '') {
        img.style.display = 'none';
        if (!img.parentNode.querySelector('[data-placeholder="true"]')) {
          const placeholder = document.createElement('div');
          placeholder.className = 'book-avatar timeline-cover-placeholder';
          placeholder.setAttribute('data-placeholder', 'true');
          img.parentNode.insertBefore(placeholder, img);
        }
      } else {
        img.onerror = function() {
          this.style.display = 'none';
          if (!this.parentNode.querySelector('[data-placeholder="true"]')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'book-avatar timeline-cover-placeholder';
            placeholder.setAttribute('data-placeholder', 'true');
            this.parentNode.insertBefore(placeholder, this);
          }
        };
      }
    });
  }

  
  let bibliographyLightboxInitialized = false;
  let bibliographyKeyHandler = null;

  function initBibliographyLightbox() {
    // Éviter l'initialisation multiple
    if (bibliographyLightboxInitialized) return;
    
    const lightbox = document.querySelector('.bibliography-lightbox');
    const lightboxImage = document.querySelector('.bibliography-lightbox-image');
    const lightboxClose = document.querySelector('.bibliography-lightbox-close');
    const clickableImages = document.querySelectorAll('.bibliography-image-clickable');

    if (!lightbox || !lightboxImage) return;

    bibliographyLightboxInitialized = true;

    
    function openLightbox(imageSrc, imageAlt) {
      lightboxImage.src = imageSrc;
      lightboxImage.alt = imageAlt || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      
      setTimeout(() => {
        lightboxImage.src = '';
      }, 200);
    }

    
    clickableImages.forEach(img => {
      if (!img.dataset.initialized) {
        img.dataset.initialized = 'true';
        img.addEventListener('click', function(e) {
          e.preventDefault();
          
          
          const imageSrc = this.dataset.imageFull || this.getAttribute('src');
          openLightbox(imageSrc, this.alt);
        });
      }
    });

    
    if (lightboxClose && !lightboxClose.dataset.initialized) {
      lightboxClose.dataset.initialized = 'true';
      lightboxClose.addEventListener('click', closeLightbox);
    }

    
    if (!lightbox.dataset.initialized) {
      lightbox.dataset.initialized = 'true';
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
    }

    
    // Retirer l'ancien handler clavier s'il existe
    if (bibliographyKeyHandler) {
      document.removeEventListener('keydown', bibliographyKeyHandler);
    }
    
    bibliographyKeyHandler = function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    };
    
    document.addEventListener('keydown', bibliographyKeyHandler);
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initFilters();
    initThemeToggle();
    initAccordion();
    initImagePlaceholders();
    initBibliographyLightbox();
  });

  let resizeTimeout = null;
  window.addEventListener('resize', function() {
    // Annuler le timeout précédent
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    
    // Attendre 150ms avant d'exécuter
    resizeTimeout = setTimeout(() => {
      const openAccordions = document.querySelectorAll('.ej-accordion-trigger.active');
      openAccordions.forEach(trigger => {
        const content = trigger.nextElementSibling;
        if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }, 150);
  });

})();

(function() {
  'use strict';

  let interviewModalsInitialized = false;
  let interviewModalKeyHandler = null;

  
  function initInterviewModals() {
    // Éviter l'initialisation multiple
    if (interviewModalsInitialized) return;
    
    const interviewCards = document.querySelectorAll('.interview-card');
    const modal = document.querySelector('.interview-modal');
    const modalClose = document.querySelector('.interview-modal-close');
    const videoWrapper = document.querySelector('.interview-video-wrapper');
    const modalTitle = document.querySelector('.interview-modal-title');
    const modalDesc = document.querySelector('.interview-modal-desc');

    if (!modal || !videoWrapper) return;

    interviewModalsInitialized = true;

    
    function openModal(card) {
      // Empêcher l'ouverture si un modal est déjà ouvert
      if (modal.classList.contains('active')) return;
      
      // Vérifier si un autre modal est ouvert (galerie)
      const galleryLightbox = document.querySelector('.gallery-lightbox');
      if (galleryLightbox && galleryLightbox.classList.contains('active')) {
        return;
      }
      
      const videoUrl = card.dataset.videoUrl;
      const videoTitle = card.querySelector('h3')?.textContent || '';
      const videoDesc = card.querySelector('.interview-desc')?.textContent || '';

      
      if (modalTitle) {
        modalTitle.textContent = videoTitle;
      }
      if (modalDesc) {
        modalDesc.textContent = videoDesc;
      }

      
      videoWrapper.innerHTML = '';

      // Sauvegarder la position de scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      document.body.classList.add('modal-open');
      
      
      requestAnimationFrame(() => {
        modal.classList.add('active');
        loadVideo(videoUrl, videoWrapper);
      });
    }

    
    function closeModal() {
      if (!modal.classList.contains('active')) return;
      
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
      
      // Restaurer la position de scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
      
      setTimeout(() => {
        videoWrapper.innerHTML = '';
      }, 300);
    }

    
    interviewCards.forEach(card => {
      const avatarWrapper = card.querySelector('.interview-avatar-wrapper');
      
      if (avatarWrapper && !avatarWrapper.dataset.initialized) {
        avatarWrapper.dataset.initialized = 'true';
        avatarWrapper.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation(); 
          openModal(card);
        });
      }
    });

    
    if (modalClose && !modalClose.dataset.initialized) {
      modalClose.dataset.initialized = 'true';
      modalClose.addEventListener('click', closeModal);
    }

    
    if (!modal.dataset.initialized) {
      modal.dataset.initialized = 'true';
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    
    // Retirer l'ancien handler clavier s'il existe
    if (interviewModalKeyHandler) {
      document.removeEventListener('keydown', interviewModalKeyHandler);
    }
    
    interviewModalKeyHandler = function(e) {
      if (e.key === 'Escape' && newModal.classList.contains('active')) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', interviewModalKeyHandler);
  }

  
  function loadVideo(url, container) {
    if (!url || !container) return;

    
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = extractYouTubeId(url);
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      
      const iframe = document.createElement('iframe');
      iframe.src = embedUrl;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.opacity = '0';
      iframe.style.transition = 'opacity 200ms ease';
      
      container.appendChild(iframe);
      
      
      iframe.onload = function() {
        requestAnimationFrame(() => {
          iframe.style.opacity = '1';
        });
      };
    } 
    
    else {
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.autoplay = true;
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.opacity = '0';
      video.style.transition = 'opacity 200ms ease';
      
      container.appendChild(video);
      
      
      video.addEventListener('loadeddata', function() {
        requestAnimationFrame(() => {
          video.style.opacity = '1';
        });
      }, { once: true });
    }
  }

  
  function extractYouTubeId(url) {
    let videoId = '';
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }
    
    return videoId;
  }

  
  function initAvatarPlaceholders() {
    const avatars = document.querySelectorAll('.interview-avatar');
    
    avatars.forEach(avatar => {
      
      if (!avatar.src || avatar.src === '' || avatar.getAttribute('src') === '') {
        avatar.classList.add('error');
      } else {
        
        avatar.onerror = function() {
          this.classList.add('error');
        };
      }
    });
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    initInterviewModals();
    initAvatarPlaceholders();
  });

})();

(function() {
  'use strict';

  let currentImageIndex = 0;
  let images = [];
  let lightbox = null;
  let lightboxImage = null;
  let lightboxCounter = null;
  let prevButton = null;
  let nextButton = null;
  let closeButton = null;
  let galleryInitialized = false;
  let galleryKeyHandler = null;
  let isNavigating = false;

  // Fonction pour charger une vidéo dans le modal
  // Système vidéo simple et propre
  function initVideos() {
    const videoItems = document.querySelectorAll('.ej-video-item');
    const videoModal = document.getElementById('ej-video-modal');
    const videoModalClose = document.querySelector('.ej-video-modal-close');
    const modalContent = videoModal ? videoModal.querySelector('.ej-video-modal-content') : null;
    
    if (!videoModal || !modalContent) return;
    
    function extractYouTubeId(url) {
      if (!url || typeof url !== 'string') return '';
      const trimmed = url.trim();
      let videoId = '';
      try {
        if (trimmed.includes('youtube.com/watch?v=')) {
          videoId = trimmed.split('v=')[1].split('&')[0].trim();
        } else if (trimmed.includes('youtu.be/')) {
          videoId = trimmed.split('youtu.be/')[1].split('?')[0].trim();
        } else if (trimmed.includes('youtube.com/embed/')) {
          videoId = trimmed.split('embed/')[1].split('?')[0].trim();
        }
        return videoId || '';
      } catch (e) {
        return '';
      }
    }
    
    function openVideoModal(videoUrl) {
      const modalContent = videoModal.querySelector('.ej-video-modal-content');
      if (!modalContent) return;
      
      modalContent.innerHTML = '';
      let finalUrl = videoUrl;
      if (videoUrl.startsWith('/')) {
        finalUrl = window.location.origin + videoUrl;
      } else if (!videoUrl.startsWith('http://') && !videoUrl.startsWith('https://')) {
        finalUrl = videoUrl;
      }

      // Archive.org : transforme details/X et embed/X en player
      if (finalUrl.includes('archive.org/details/') || finalUrl.includes('archive.org/embed/')) {
        let identifier = '';
        if (finalUrl.includes('archive.org/embed/')) {
          identifier = finalUrl.split('archive.org/embed/')[1].split(/[?#/]/)[0];
        } else {
          identifier = finalUrl.split('archive.org/details/')[1].split(/[?#/]/)[0];
        }
        if (identifier) {
          const iframe = document.createElement('iframe');
          iframe.src = `https://archive.org/embed/${identifier}`;
          iframe.title = 'Archive.org';
          iframe.allow = 'autoplay; fullscreen';
          iframe.allowFullscreen = true;
          iframe.referrerPolicy = 'strict-origin-when-cross-origin';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.minHeight = '500px';
          iframe.style.border = 'none';
          modalContent.appendChild(iframe);
          videoModal.classList.add('active');
          document.body.style.overflow = 'hidden';
          return;
        }
      }

      if (finalUrl.includes('youtube.com') || finalUrl.includes('youtu.be')) {
        const videoId = extractYouTubeId(finalUrl);
        if (videoId) {
          const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
          const watchUrl = finalUrl.startsWith('http') ? finalUrl : `https://www.youtube.com/watch?v=${videoId}`;

          const wrapper = document.createElement('div');
          wrapper.className = 'ej-video-youtube-wrapper';

          const iframe = document.createElement('iframe');
          iframe.src = embedUrl;
          iframe.title = 'Vidéo YouTube';
          iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          iframe.allowFullscreen = true;
          iframe.referrerPolicy = 'strict-origin-when-cross-origin';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.minHeight = '400px';
          iframe.style.border = 'none';
          iframe.style.borderRadius = '4px';

          wrapper.appendChild(iframe);

          const fallbackLink = document.createElement('a');
          fallbackLink.href = watchUrl;
          fallbackLink.target = '_blank';
          fallbackLink.rel = 'noopener noreferrer';
          fallbackLink.className = 'ej-video-youtube-fallback';
          {
            const l = document.documentElement.getAttribute('lang') || 'en';
            fallbackLink.textContent =
              l === 'fr' ? 'Ouvrir sur YouTube' : l === 'de' ? 'Auf YouTube öffnen' : 'Open on YouTube';
          }

          wrapper.appendChild(fallbackLink);
          modalContent.appendChild(wrapper);

          videoModal.classList.add('active');
          document.body.style.overflow = 'hidden';
          return;
        }
      }
      
      const video = document.createElement('video');
      video.id = 'ej-video-player';
      video.controls = true;
      video.preload = 'metadata';
      video.style.width = '100%';
      video.style.height = '100%';
      
      if (finalUrl.startsWith('/')) {
        video.src = window.location.origin + finalUrl;
      } else {
        video.src = finalUrl;
      }
      
      modalContent.appendChild(video);
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      video.load();
      video.addEventListener('canplay', function() {
        video.play().catch(function() {});
      }, { once: true });
    }
    
    function closeVideoModal() {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Arrêter la vidéo si elle existe
      const video = modalContent.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      
      const iframe = modalContent.querySelector('iframe');
      if (iframe) iframe.src = '';
    }
    
    function getVideoUrlForItem(item) {
      const lang = (window.EJI18n && window.EJI18n.currentLang) || document.documentElement.getAttribute('lang') || 'fr';
      if (lang === 'fr') {
        const fr = item.getAttribute('data-video-fr');
        if (fr) return fr;
      }
      const de = item.getAttribute('data-video-de');
      if (de) return de;
      return item.getAttribute('data-video');
    }

    videoItems.forEach((item) => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const videoUrl = getVideoUrlForItem(this);
        if (videoUrl) openVideoModal(videoUrl);
      });
    });
    
    // Fermer le modal avec le bouton
    if (videoModalClose) {
      videoModalClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeVideoModal();
      });
    }
    
    // Fermer le modal en cliquant à l'extérieur
    videoModal.addEventListener('click', function(e) {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
    
    // Fermer le modal avec Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeVideoModal();
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideos);
  } else {
    setTimeout(initVideos, 100);
  }

  
  function initGallery() {
    // Éviter l'initialisation multiple
    if (galleryInitialized) return;
    
    const galleryCards = document.querySelectorAll('.gallery-card');
    lightbox = document.querySelector('.gallery-lightbox');
    lightboxImage = document.querySelector('.gallery-lightbox-image');
    lightboxCounter = document.querySelector('.gallery-lightbox-counter');
    prevButton = document.querySelector('.gallery-lightbox-nav.prev');
    nextButton = document.querySelector('.gallery-lightbox-nav.next');
    closeButton = document.querySelector('.gallery-lightbox-close');

    if (!lightbox || !lightboxImage) return;
    if (galleryCards.length === 0) return;

    galleryInitialized = true;

    
    images = Array.from(galleryCards).map(card => {
      // Ignorer les cartes vidéo
      // Ignorer les éléments qui ne sont pas des images de galerie
      if (!card.querySelector('img')) return null;
      const dataImage = card.getAttribute('data-image');
      if (dataImage) return dataImage;
      const img = card.querySelector('img');
      return img ? img.src : null;
    }).filter(src => src !== null && src !== '');

    if (images.length === 0) return;

    
    // Séparer les cartes d'images et les cartes vidéo
    const imageCards = Array.from(galleryCards).filter(card => card.querySelector('img'));
    
    imageCards.forEach((card, index) => {
      if (!card.dataset.initialized) {
        card.dataset.initialized = 'true';
        card.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (!isNavigating) {
            openLightbox(index);
          }
        });
      }
    });
    

    
    if (prevButton && !prevButton.dataset.initialized) {
      prevButton.dataset.initialized = 'true';
      prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!isNavigating) {
          navigateLightbox(-1);
        }
      });
    }

    
    if (nextButton && !nextButton.dataset.initialized) {
      nextButton.dataset.initialized = 'true';
      nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!isNavigating) {
          navigateLightbox(1);
        }
      });
    }

    
    if (closeButton && !closeButton.dataset.initialized) {
      closeButton.dataset.initialized = 'true';
      closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
      });
    }

    
    if (!lightbox.dataset.initialized) {
      lightbox.dataset.initialized = 'true';
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox && !isNavigating) {
          closeLightbox();
        }
      });
    }

    
    // Retirer l'ancien handler clavier
    if (galleryKeyHandler) {
      document.removeEventListener('keydown', galleryKeyHandler);
    }
    
    galleryKeyHandler = handleKeyboard;
    document.addEventListener('keydown', galleryKeyHandler);
  }

  
  function openLightbox(index) {
    if (index < 0 || index >= images.length) {
      return;
    }

    if (!lightbox || !lightboxImage) {
      return;
    }

    // Si la lightbox est déjà ouverte, simplement changer l'image
    if (lightbox.classList.contains('active')) {
      currentImageIndex = index;
      isNavigating = true;
      updateLightboxImage();
      updateCounter();
      return;
    }
    
    // Vérifier si un autre modal est ouvert (vidéo)
    const videoModal = document.getElementById('ej-video-modal');
    if (videoModal && videoModal.classList.contains('active')) {
      return;
    }

    currentImageIndex = index;
    isNavigating = true;
    
    // Sauvegarder la position de scroll
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    lightboxImage.style.opacity = '0';
    lightboxImage.style.transform = 'scale(0.97)';
    lightboxImage.style.transition = 'none';
    
    requestAnimationFrame(() => {
      lightbox.classList.add('active');
      
      // Attendre que l'opacité soit à 0 avant de changer la source
      setTimeout(() => {
        // Réinitialiser les handlers
        lightboxImage.onload = null;
        lightboxImage.onerror = null;
        
        const currentSrc = lightboxImage.src;
        if (currentSrc && currentSrc !== images[currentImageIndex]) {
          lightboxImage.src = '';
        }
        
        // Forcer un reflow pour s'assurer que l'image est bien masquée
        void lightboxImage.offsetHeight;
        
        // Changer la source de l'image
        lightboxImage.src = images[currentImageIndex];
        lightboxImage.alt = `Image de la galerie ${currentImageIndex + 1}`;
        
        // Restaurer la transition
        lightboxImage.style.transition = '';
        
        // Mettre à jour le compteur
        updateCounter();
        
        // Attendre que l'image soit chargée avant de l'afficher
        lightboxImage.onload = function() {
          requestAnimationFrame(() => {
            if (lightboxImage && lightbox.classList.contains('active')) {
              lightboxImage.style.transform = 'scale(1)';
              lightboxImage.style.opacity = '1';
              isNavigating = false;
            }
          });
        };
        
        lightboxImage.onerror = function() {
          requestAnimationFrame(() => {
            if (lightboxImage && lightbox.classList.contains('active')) {
              lightboxImage.style.transform = 'scale(1)';
              lightboxImage.style.opacity = '1';
              isNavigating = false;
            }
          });
        };
      }, 100);
    });
  }

  
  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    isNavigating = true;
    lightbox.classList.remove('active');
    
    // Restaurer la position de scroll
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    // Réinitialiser après la fermeture
    setTimeout(() => {
      if (lightboxImage) {
        lightboxImage.style.opacity = '0';
        lightboxImage.style.transform = 'scale(0.97)';
      }
      isNavigating = false;
    }, 300);
  }

  
  function navigateLightbox(direction) {
    if (isNavigating) return;
    
    isNavigating = true;
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }

    updateLightboxImage();
    updateCounter();
  }

  
  function updateLightboxImage() {
    if (!lightboxImage || !images[currentImageIndex]) {
      isNavigating = false;
      return;
    }

    lightboxImage.style.opacity = '0';
    lightboxImage.style.transform = 'scale(0.97)';
    lightboxImage.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    
    // Réinitialiser les handlers
    lightboxImage.onload = null;
    lightboxImage.onerror = null;
    
    // Utiliser requestAnimationFrame pour une transition plus fluide
    requestAnimationFrame(() => {
      // Attendre que l'opacité soit à 0 avant de changer la source
      setTimeout(() => {
        const currentSrc = lightboxImage.src;
        if (currentSrc && currentSrc !== images[currentImageIndex]) {
          lightboxImage.src = '';
        }
        
        // Forcer un reflow pour s'assurer que l'image est bien masquée
        void lightboxImage.offsetHeight;
        
        // Changer la source de l'image
        lightboxImage.src = images[currentImageIndex];
        lightboxImage.alt = `Image de la galerie ${currentImageIndex + 1}`;
        
        lightboxImage.onload = function() {
          requestAnimationFrame(() => {
            lightboxImage.style.opacity = '1';
            lightboxImage.style.transform = 'scale(1)';
            isNavigating = false;
          });
        };
        
        lightboxImage.onerror = function() {
          requestAnimationFrame(() => {
            lightboxImage.style.opacity = '1';
            lightboxImage.style.transform = 'scale(1)';
            isNavigating = false;
          });
        };
      }, 200);
    });
  }

  
  function updateCounter() {
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }
  }

  
  function handleKeyboard(e) {
    if (!lightbox || !lightbox.classList.contains('active') || isNavigating) return;

    switch(e.key) {
      case 'Escape':
        e.preventDefault();
        closeLightbox();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        navigateLightbox(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        navigateLightbox(1);
        break;
    }
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    initGallery();
  });

})();

(function() {
  'use strict';

  
  let scrollToTopInitialized = false;
  let scrollButtonToggleTimeout = null;

  function initScrollToTop() {
    // Éviter l'initialisation multiple
    if (scrollToTopInitialized) return;
    
    const scrollButton = document.querySelector('.ej-scroll-to-top');
    
    if (!scrollButton) return;

    scrollToTopInitialized = true;

    
    function toggleScrollButton() {
      if (window.scrollY > 300) {
        scrollButton.classList.add('visible');
      } else {
        scrollButton.classList.remove('visible');
      }
    }

    
    function debouncedToggleScrollButton() {
      if (scrollButtonToggleTimeout) {
        cancelAnimationFrame(scrollButtonToggleTimeout);
      }
      
      scrollButtonToggleTimeout = requestAnimationFrame(() => {
        toggleScrollButton();
        scrollButtonToggleTimeout = null;
      });
    }

    
    scrollButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    
    window.addEventListener('scroll', debouncedToggleScrollButton, { passive: true });
    
    
    toggleScrollButton();
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    initScrollToTop();
  });

})();

/* ============================================
   NAVIGATION — Menu mobile (panneau dédié, ≤1024px)
   ============================================ */

(function() {
  'use strict';

  function init() {
    const burger = document.querySelector('.ej-burger');
    const panel = document.getElementById('ej-mobile-panel');

    if (!burger || !panel) return;

    const mq = window.matchMedia('(max-width: 1024px)');
    const openClass = 'ej-mobile-nav-open';

    function openNav() {
      if (!mq.matches) return;
      document.body.classList.add(openClass);
      burger.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
    }

    function closeNav() {
      document.body.classList.remove(openClass);
      burger.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    }

    function toggleNav() {
      if (document.body.classList.contains(openClass)) {
        closeNav();
      } else {
        openNav();
      }
    }

    burger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleNav();
    });

    panel.querySelectorAll('[data-ej-mobile-nav-close]').forEach(function(el) {
      el.addEventListener('click', function() {
        closeNav();
      });
    });

    panel.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        closeNav();
      });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.body.classList.contains(openClass)) {
        closeNav();
        burger.focus();
      }
    });

    function onViewportChange() {
      if (!mq.matches) closeNav();
    }

    window.addEventListener('resize', onViewportChange);
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onViewportChange);
    } else if (typeof mq.addListener === 'function') {
      mq.addListener(onViewportChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function() {
  'use strict';

  
  function initHeroCTAs() {
    
    const timelineCTA = document.querySelector('.ej-hero-cta-timeline');
    if (timelineCTA) {
      timelineCTA.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const headerOffset = 80;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    }

    
    const interviewCTA = document.querySelector('.ej-hero-cta-interview');
    if (interviewCTA) {
      interviewCTA.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Trouver la première vidéo de la section vidéos
        const firstVideoItem = document.querySelector('.ej-video-item');
        if (!firstVideoItem) {
          const interviewsSection = document.getElementById('interviews');
          if (interviewsSection) {
            const headerOffset = 80;
            const elementPosition = interviewsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
          return;
        }

        // Obtenir l'URL de la vidéo selon la langue (comme pour la grille vidéo)
        const lang = (window.EJI18n && window.EJI18n.currentLang) || document.documentElement.getAttribute('lang') || 'fr';
        let videoUrl = lang === 'fr' ? (firstVideoItem.getAttribute('data-video-fr') || firstVideoItem.getAttribute('data-video')) : (firstVideoItem.getAttribute('data-video-de') || firstVideoItem.getAttribute('data-video'));
        if (!videoUrl) return;

        // Ouvrir le modal vidéo
        const videoModal = document.getElementById('ej-video-modal');
        const modalContent = videoModal ? videoModal.querySelector('.ej-video-modal-content') : null;
        
        if (!videoModal || !modalContent) {
          const interviewsSection = document.getElementById('interviews');
          if (interviewsSection) {
            const headerOffset = 80;
            const elementPosition = interviewsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
          return;
        }

        // Construire l'URL correctement
        let finalUrl = videoUrl;
        if (videoUrl.startsWith('/')) {
          finalUrl = window.location.origin + videoUrl;
        } else if (!videoUrl.startsWith('http://') && !videoUrl.startsWith('https://')) {
          finalUrl = videoUrl;
        }

        // Vider le contenu du modal
        modalContent.innerHTML = '';

        // Vérifier si c'est une vidéo YouTube
        if (finalUrl.includes('youtube.com') || finalUrl.includes('youtu.be')) {
          const videoId = (function extractId(u) {
            if (!u || typeof u !== 'string') return '';
            const t = u.trim();
            try {
              if (t.includes('youtube.com/watch?v=')) return t.split('v=')[1].split('&')[0].trim();
              if (t.includes('youtu.be/')) return t.split('youtu.be/')[1].split('?')[0].trim();
              if (t.includes('youtube.com/embed/')) return t.split('embed/')[1].split('?')[0].trim();
            } catch (e) {}
            return '';
          })(finalUrl);
          if (videoId) {
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
            const watchUrl = finalUrl.startsWith('http') ? finalUrl : `https://www.youtube.com/watch?v=${videoId}`;

            const wrapper = document.createElement('div');
            wrapper.className = 'ej-video-youtube-wrapper';
            const iframe = document.createElement('iframe');
            iframe.src = embedUrl;
            iframe.title = 'Vidéo YouTube';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.minHeight = '400px';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '4px';
            wrapper.appendChild(iframe);
            const fallbackLink = document.createElement('a');
            fallbackLink.href = watchUrl;
            fallbackLink.target = '_blank';
            fallbackLink.rel = 'noopener noreferrer';
            fallbackLink.className = 'ej-video-youtube-fallback';
            {
            const l = document.documentElement.getAttribute('lang') || 'en';
            fallbackLink.textContent =
              l === 'fr' ? 'Ouvrir sur YouTube' : l === 'de' ? 'Auf YouTube öffnen' : 'Open on YouTube';
          }
            wrapper.appendChild(fallbackLink);
            modalContent.appendChild(wrapper);
            
            // Afficher le modal
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            return;
          }
        }

        // Pour les vidéos locales, utiliser l'élément video
        const video = document.createElement('video');
        video.id = 'ej-video-player';
        video.controls = true;
        video.preload = 'metadata';
        video.style.width = '100%';
        video.style.height = '100%';
        
        if (finalUrl.startsWith('/')) {
          video.src = window.location.origin + finalUrl;
        } else {
          video.src = finalUrl;
        }
        
        modalContent.appendChild(video);
        
        // Afficher le modal
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Charger et essayer de jouer la vidéo
        video.load();
        
        // Écouter les événements de chargement
        video.addEventListener('canplay', function() {
          video.play().catch(function() {});
        }, { once: true });
      });
    }
  }

  
  function loadVideo(url, container) {
    if (!url || !container) return;

    container.innerHTML = '';

    
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = extractYouTubeId(url);
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      
      const iframe = document.createElement('iframe');
      iframe.src = embedUrl;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.minHeight = '400px';
      container.appendChild(iframe);
    } 
    
    else {
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.autoplay = true;
      video.style.width = '100%';
      video.style.height = '100%';
      container.appendChild(video);
    }
  }

  
  function extractYouTubeId(url) {
    let videoId = '';
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }
    
    return videoId;
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    initHeroCTAs();
  });

})();

/* ============================================
   ARCHIV — menu section (si présent sur la page)
   ============================================ */

(function() {
  'use strict';

  const sektionToggle = document.getElementById('sektion-toggle');
  const sektionDropdown = document.getElementById('sektion-dropdown');
  const sektionLinks = document.querySelectorAll('.ej-nav-sektion-link');

  
  function toggleDropdown(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const isActive = sektionDropdown.classList.contains('active');
    
    if (isActive) {
      sektionDropdown.classList.remove('active');
      sektionToggle.classList.remove('active');
      sektionToggle.setAttribute('aria-expanded', 'false');
    } else {
      sektionDropdown.classList.add('active');
      sektionToggle.classList.add('active');
      sektionToggle.setAttribute('aria-expanded', 'true');
    }
  }

  
  function closeDropdown() {
    sektionDropdown.classList.remove('active');
    sektionToggle.classList.remove('active');
    sektionToggle.setAttribute('aria-expanded', 'false');
  }

  
  function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200;

    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });

    
    sektionLinks.forEach(link => {
      const linkSection = link.getAttribute('data-section');
      if (linkSection === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  
  function scrollToSection(e) {
    const link = e.currentTarget;
    const href = link.getAttribute('href');
    
    
    if (href && (href.includes('.html') && !href.includes('#'))) {
      
      closeDropdown();
      return; 
    }
    
    
    e.preventDefault();
    const targetId = link.getAttribute('data-section');
    
    
    if (href && href.includes('index.html#')) {
      const anchor = href.split('#')[1];
      if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
        
        window.location.href = href;
        return;
      }
      
      const targetSection = document.getElementById(anchor);
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        closeDropdown();
      }
      return;
    }
    
    
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerOffset = 80;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      closeDropdown();
    }
  }

  
  function init() {
    if (!sektionToggle || !sektionDropdown) return;

    
    sektionToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown(e);
    });

    
    document.addEventListener('click', function(e) {
      if (sektionDropdown.classList.contains('active')) {
        if (!sektionToggle.contains(e.target) && !sektionDropdown.contains(e.target)) {
          closeDropdown();
        }
      }
    });

    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sektionDropdown.classList.contains('active')) {
        closeDropdown();
      }
    });

    
    sektionLinks.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });

    
    window.addEventListener('scroll', debouncedUpdateActiveSection, { passive: true });
    updateActiveSection(); 
  }

  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();


/* ==========================================================================
   HERO GLITCH — subliminal Serpenta flash with TV-static / wave distortion
   ==========================================================================
   Triggers `.hero-glitch--active` at randomised intervals so the overlay
   surfaces irregularly, like a faulty CRT picking up a parasitic channel.
   Disabled when the user prefers reduced motion or when the tab is hidden.
   ========================================================================== */
(function initHeroGlitch() {
  function start() {
    const layer = document.querySelector('.hero-glitch');
    if (!layer) return;

    const motionQuery = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery && motionQuery.matches) return;

    let stopped = false;
    let pendingTimeout = null;

    const flash = (durationMs) => {
      layer.classList.add('hero-glitch--active');
      window.setTimeout(() => layer.classList.remove('hero-glitch--active'), durationMs);
    };

    const burst = () => {
      if (stopped || document.hidden) return;
      const dur1 = 120 + Math.random() * 380;
      flash(dur1);
      if (Math.random() < 0.4) {
        window.setTimeout(() => {
          if (stopped || document.hidden) return;
          flash(70 + Math.random() * 220);
        }, dur1 + 80 + Math.random() * 220);
      }
    };

    const scheduleNext = () => {
      if (stopped) return;
      const wait = 4500 + Math.random() * 11000;
      pendingTimeout = window.setTimeout(() => {
        burst();
        scheduleNext();
      }, wait);
    };

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && pendingTimeout) {
        window.clearTimeout(pendingTimeout);
        pendingTimeout = null;
      } else if (!document.hidden && !pendingTimeout) {
        scheduleNext();
      }
    });

    if (motionQuery && typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', (e) => {
        if (e.matches) {
          stopped = true;
          if (pendingTimeout) {
            window.clearTimeout(pendingTimeout);
            pendingTimeout = null;
          }
          layer.classList.remove('hero-glitch--active');
        }
      });
    }

    pendingTimeout = window.setTimeout(scheduleNext, 2200 + Math.random() * 1800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();

