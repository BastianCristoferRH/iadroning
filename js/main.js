// Menú desplegable responsivo
document.addEventListener('DOMContentLoaded', function() {
	const navToggle = document.getElementById('navToggle');
	const navList = document.getElementById('navList');
	if (navToggle && navList) {
		navToggle.addEventListener('click', function() {
			navList.classList.toggle('open');
		});
		// Cerrar el menú al hacer clic en un enlace
		navList.querySelectorAll('a').forEach(function(link) {
			link.addEventListener('click', function() {
				navList.classList.remove('open');
			});
		});
		// Cerrar el menú al hacer scroll o cambiar tamaño
		window.addEventListener('scroll', function() {
			navList.classList.remove('open');
		});
		window.addEventListener('resize', function() {
			navList.classList.remove('open');
		});
	}
});
// Carrusel hero automático
// --- REFACTORIZADO para dirección coherente ---
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-img');
    const carousel = document.querySelector('.carousel-images');
    let current = 0;
    let prev = 0;
    function slideTo(idx, direction = 1) {
        // direction: 1 = derecha, -1 = izquierda
        carousel.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
        carousel.style.transform = `translateX(-${idx * 100}%)`;
    }
    function nextImage() {
        prev = current;
        current = (current + 1) % images.length;
        // Si pasamos de la última a la primera, forzar dirección derecha
        if (prev === images.length - 1 && current === 0) {
            slideTo(current, 1);
        } else {
            slideTo(current, 1);
        }
    }
    setInterval(nextImage, 5000);
    slideTo(current);
});
// Animación de aparición para las tarjetas de servicios IA
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.servicios-ia-card');
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px) scale(0.95)';
        setTimeout(() => {
            card.style.transition = 'all 0.7s cubic-bezier(.77,0,.18,1)';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0) scale(1)';
        }, 200 + i * 200);
    });
});
// Galería Trabajos: Lightbox funcional
(function() {
    const thumbs = document.querySelectorAll('.trabajos-thumb');
    const lightbox = document.getElementById('trabajosLightbox');
    const lightboxImg = document.getElementById('trabajosLightboxImg');
    const closeBtn = document.getElementById('trabajosLightboxClose');
    const prevBtn = document.getElementById('trabajosPrev');
    const nextBtn = document.getElementById('trabajosNext');
    const images = Array.from(thumbs).map(img => img.src);
    let current = 0;

    function show(index) {
        current = (index + images.length) % images.length;
        lightboxImg.src = images[current];
        lightbox.classList.add('open');
    }
    thumbs.forEach((img, i) => {
        img.addEventListener('click', () => show(i));
    });
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('open');
        lightboxImg.src = '';
    });
    prevBtn.addEventListener('click', e => {
        e.stopPropagation();
        show(current - 1);
    });
    nextBtn.addEventListener('click', e => {
        e.stopPropagation();
        show(current + 1);
    });
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.classList.remove('open');
            lightboxImg.src = '';
        }
    });
    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'ArrowLeft') show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
        if (e.key === 'Escape') {
            lightbox.classList.remove('open');
            lightboxImg.src = '';
        }
    });
})();
