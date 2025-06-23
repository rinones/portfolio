document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los bloques de acordeón
    document.querySelectorAll('.accordion').forEach(accordion => {
        const mainBlock = accordion.querySelector('.accordion-main-block');
        const content = accordion.querySelector('.accordion-content');
        if (!mainBlock || !content) return;

        mainBlock.addEventListener('click', function () {
            // Espera a que el acordeón termine de abrir/cerrar (por si hay animación)
            setTimeout(() => {
                // Busca todos los iframes de YouTube dentro del contenido del acordeón
                content.querySelectorAll('iframe[src*="youtube"]').forEach(iframe => {
                    let src = iframe.getAttribute('src') || '';
                    if (getComputedStyle(content).display !== 'none') {
                        // Abierto: activa autoplay
                        if (!src.includes('autoplay=1')) {
                            // Quita autoplay=0 si existe
                            src = src.replace('autoplay=0', 'autoplay=1');
                            // Si no existe autoplay, añádelo
                            if (!src.includes('autoplay=1')) {
                                src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
                            }
                            iframe.setAttribute('src', src);
                        }
                    }
                    // Al cerrar, no modificar el src: el vídeo sigue reproduciéndose
                });
            }, 200); // Ajusta el tiempo si tu animación es más larga
        });
    });
});