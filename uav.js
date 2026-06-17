/**
 * DJI Clone — Interactive behaviors
 * Hero slider, Shot-on slider, sticky nav, dropdowns, promo bar
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSectionNav();
  initHeroSlider();
  initLightbox();
  initProductGridVideos();
});

/* ===== 3.4 Navbar — sticky, dropdown, hamburger ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = toggle.closest('.has-dropdown');
      const isOpen = parent.classList.contains('open');

      document.querySelectorAll('.has-dropdown.open').forEach(el => {
        if (el !== parent) el.classList.remove('open');
      });

      parent.classList.toggle('open', !isOpen);
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown.open').forEach(el => {
      el.classList.remove('open');
    });
  });

  navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* Cuộn mượt tới đề mục khi click menu (tránh lỗi anchor với <base href>) */
function initSectionNav() {
  const navbar = document.getElementById('navbar');
  const navOffset = 16;

  function scrollToSection(id, updateHash = true) {
    const target = document.getElementById(id);
    if (!target) return;

    const navHeight = navbar?.offsetHeight ?? 64;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - navOffset;

    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });

    if (updateHash) {
      history.pushState(null, '', `#${id}`);
    }
  }

  document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href')?.slice(1);
      if (!id) return;

      e.preventDefault();
      scrollToSection(id);
    });
  });

  const initialHash = window.location.hash.slice(1);
  if (initialHash && document.getElementById(initialHash)) {
    requestAnimationFrame(() => scrollToSection(initialHash, false));
  }
}

/* ===== 3.2 Hero — phát 1 video nền ===== */
function initHeroSlider() {
  const video = document.querySelector('#heroSlider .bg-video');
  if (!video) return;

  const start = () => {
    video.play().catch(() => {});
  };

  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    start();
    return;
  }

  video.addEventListener('canplay', start, { once: true });
}

/* ===== Lightbox — ấn ảnh/video để xem full size ===== */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  const closeBtn = document.getElementById('lightboxClose');
  if (!lightbox || !content) return;

  function resolveUrl(src) {
    try {
      return new URL(src, window.location.href).href;
    } catch {
      return src;
    }
  }

  function openLightbox(type, src) {
    content.innerHTML = '';

    if (type === 'image') {
      const img = document.createElement('img');
      img.src = resolveUrl(src);
      img.alt = 'Full size image';
      content.appendChild(img);
    } else if (type === 'video') {
      const video = document.createElement('video');
      video.src = resolveUrl(src);
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      content.appendChild(video);
      video.play().catch(() => {});
    }

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    content.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('main img').forEach((img) => {
    img.classList.add('media-zoomable');
    img.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openLightbox('image', img.currentSrc || img.src);
    });
  });

  document.querySelectorAll('.hero-slide.has-video').forEach((slide) => {
    slide.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;

      const source = slide.querySelector('.bg-video source');
      if (!source) return;

      openLightbox('video', source.getAttribute('src'));
    });
  });

  document.querySelectorAll('.product-card.has-video, .field-card.has-video').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;

      const source = card.querySelector('.product-card-video source, .field-card-video source');
      if (!source) return;

      openLightbox('video', source.getAttribute('src'));
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}

/* ===== Product grid — autoplay video preview ===== */
function initProductGridVideos() {
  document.querySelectorAll('.product-card-video, .field-card-video').forEach((video) => {
    const start = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      start();
      return;
    }

    video.addEventListener('canplay', start, { once: true });
  });
}
