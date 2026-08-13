/**
 * SOFÍA MARTÍNEZ — DERECHO DE FAMILIA
 * Interactive Scripts & Event Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // 2. Practice Cards Modal & Content Data
  const practiceData = {
    '01': {
      title: 'Divorcios',
      description: 'Asesoría experta y representación judicial en divorcios de mutuo acuerdo, unilaterales o por culpa. Te guío para proteger tus derechos patrimoniales y emocionales durante todo el proceso legal.'
    },
    '02': {
      title: 'Tuición y cuidado personal',
      description: 'Defensa integral del cuidado personal de tus hijos e hijas. Enfocados siempre en velar por el interés superior de los niños, niñas y adolescentes, logrando acuerdos justos y resoluciones firmes.'
    },
    '03': {
      title: 'Pensión de alimentos',
      description: 'Tramitación de demandas de fijación, aumento, rebaja y cese de pensión alimenticia, así como el cobro de pensiones adeudadas mediante medidas de apremio y liquidación de deudas.'
    },
    '04': {
      title: 'Régimen de relación directa y regular',
      description: 'Establecimiento y modificación de regímenes de visitas para garantizar el contacto sano y fluido entre padres, madres e hijos, resguardando la estabilidad emocional de la familia.'
    },
    '05': {
      title: 'Violencia intrafamiliar (VIF)',
      description: 'Representación urgente y con máxima reserva en causas de violencia intrafamiliar frente a tribunales. Solicitud inmediata de medidas cautelares y protección efectiva.'
    },
    '06': {
      title: 'Acuerdos y mediación familiar',
      description: 'Acompañamiento profesional en instancias de mediación para alcanzar acuerdos extrajudiciales constructivos y evitar litigios prolongados y desgastantes.'
    }
  };

  const modal = document.getElementById('practice-modal');
  const modalClose = document.getElementById('modal-close');
  const modalNumber = document.getElementById('modal-number');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalWhatsappLink = document.getElementById('modal-whatsapp-link');

  const practiceCards = document.querySelectorAll('.practice-card');

  practiceCards.forEach(card => {
    card.addEventListener('click', () => {
      const cardNumber = card.getAttribute('data-card');
      const data = practiceData[cardNumber];

      if (data && modal) {
        modalNumber.textContent = cardNumber;
        modalTitle.textContent = data.title;
        modalBody.textContent = data.description;

        const encodedTitle = encodeURIComponent(data.title);
        modalWhatsappLink.href = `https://wa.me/56994979895?text=Hola%20Sof%C3%ADa,%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%3A%20${encodedTitle}`;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // 3. Contact Form WhatsApp Redirection
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const preferencia = document.getElementById('preferencia').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      const waText = `Hola Sofía, mi nombre es *${nombre}*.
*Correo:* ${correo}
*Teléfono:* ${telefono}
*Preferencia de contacto:* ${preferencia}

*Detalles de mi caso:*
${mensaje}`;

      const waUrl = `https://wa.me/56994979895?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 4. Header Shadow on Scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 4px 20px rgba(44, 35, 28, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // 5. Scroll-Driven Reveal Observer
  const revealElements = document.querySelectorAll(
    '.section-title, .section-subtitle, .practice-card, .about-grid, .contact-card, .contact-form-card, .trust-badges-card'
  );

  revealElements.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    const delayClass = `delay-${(index % 4) + 1}`;
    el.classList.add(delayClass);
  });

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // --------------------------------------------------------------------------
  // TESTIMONIALS INTERACTIVE CAROUSEL SLIDER
  // --------------------------------------------------------------------------
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dotsContainer = document.getElementById('testimonial-dots');
  const viewport = document.getElementById('testimonials-viewport');

  if (track && viewport) {
    const cards = track.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoSlideInterval = null;

    function getVisibleCount() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 992) return 2;
      return 3;
    }

    function getMaxIndex() {
      const visible = getVisibleCount();
      return Math.max(0, totalCards - visible);
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const maxIdx = getMaxIndex();
      for (let i = 0; i <= maxIdx; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === currentIndex ? 'is-active' : ''}`;
        dot.setAttribute('aria-label', `Ir a testimonio ${i + 1}`);
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlider();
          restartAutoSlide();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateSlider() {
      const maxIdx = getMaxIndex();
      if (currentIndex > maxIdx) currentIndex = 0;
      if (currentIndex < 0) currentIndex = maxIdx;

      const card = cards[0];
      if (!card) return;
      const gap = 24;
      const cardWidth = card.offsetWidth;
      const moveAmount = currentIndex * (cardWidth + gap);

      track.style.transform = `translateX(-${moveAmount}px)`;

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('is-active', idx === currentIndex);
        });
      }
    }

    function nextSlide() {
      const maxIdx = getMaxIndex();
      if (currentIndex >= maxIdx) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateSlider();
    }

    function prevSlide() {
      const maxIdx = getMaxIndex();
      if (currentIndex <= 0) {
        currentIndex = maxIdx;
      } else {
        currentIndex--;
      }
      updateSlider();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        restartAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        restartAutoSlide();
      });
    }

    // Touch Swipe Support
    let startX = 0;
    let isDragging = false;

    viewport.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      clearInterval(autoSlideInterval);
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      restartAutoSlide();
    }, { passive: true });

    // Auto Play Loop
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 4500);
    }

    function restartAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    viewport.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    viewport.addEventListener('mouseleave', startAutoSlide);

    window.addEventListener('resize', () => {
      updateDots();
      updateSlider();
    });

    updateDots();
    updateSlider();
    startAutoSlide();
  }
});
