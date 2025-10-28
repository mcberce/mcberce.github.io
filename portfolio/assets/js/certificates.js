document.addEventListener('DOMContentLoaded', () => {
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const href = card.getAttribute('href');
            if (href) {
                window.open(href, '_blank');
            }
        });
    });
});

function openCertificate(url) {
    window.open(url, '_blank');
}

// Exemplo de uso: 
// openCertificate('link-do-certificado.pdf');