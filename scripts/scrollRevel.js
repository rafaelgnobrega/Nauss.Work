window.sr = ScrollReveal({ reset: true });

sr.reveal('.link1', { duration: 1000, distance: '50px', origin: 'top' });
sr.reveal('.link2', { duration: 1500, distance: '50px', origin: 'top' });
sr.reveal('.link3', { duration: 2000, distance: '50px', origin: 'top' });

ScrollReveal().reveal('.NaussHome', {
    distance: '0px',
    opacity: 0.08
});

sr.reveal('.imgStudio', '.esquerda', { duration: 1000, distance: '50px', origin: 'right' });
sr.reveal('.textStudio', '.direita', { duration: 1500, distance: '50px', origin: 'left' });
sr.reveal('.direita', { duration: 1000, distance: '50px', origin: 'right' });
sr.reveal('.esquerda', { duration: 1500, distance: '50px', origin: 'left' });
sr.reveal('.Zoom', { duration: 1500, distance: '50px', origin: 'left' });
