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
        modalWhatsappLink.href = `https://wa.me/56994875885?text=Hola%20Sof%C3%ADa,%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%3A%20${encodedTitle}`;

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

      const waUrl = `https://wa.me/56994875885?text=${encodeURIComponent(waText)}`;
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
});
