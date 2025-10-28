// Este arquivo contém a lógica principal do JavaScript, incluindo a manipulação de eventos, como cliques nos botões e animações.

document.addEventListener('DOMContentLoaded', () => {
    // Função para abrir certificados em nova aba
    const openCertificate = (url) => {
        window.open(url, '_blank');
    };

    // Adiciona eventos de clique aos botões de certificados
    const certificateButtons = document.querySelectorAll('.certificate-button');
    certificateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            openCertificate(url);
        });
    });

    // Animações sutis para os cards de projetos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Animação smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar transparente no topo e com fundo quando rolar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(17, 34, 64, 0.95)';
        } else {
            navbar.style.background = 'transparent';
        }
    });

    // Animação de entrada dos elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.project-card, .certificate-card');
    hiddenElements.forEach((el) => observer.observe(el));

    // Função melhorada para criar partículas
    function createParticles() {
        const particleCount = 20; // visibilidade equilibrada
        const colors = ['#00fff5', '#ff00ff', '#64ffda', '#7ee8fa'];
        const body = document.body;

        // Remove partículas antigas
        document.querySelectorAll('.particle').forEach(p => p.remove());

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // tamanho e cor
            const size = Math.random() * 6 + 4; // 4px a 10px
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // propriedades customizadas usadas pelo CSS
            particle.style.setProperty('--size', `${size}px`);
            particle.style.setProperty('--particle-color', color);
            particle.style.setProperty('--blur', `${Math.random() * 2 + 0.5}px`);
            particle.style.setProperty('--max-opacity', `${Math.random() * 0.45 + 0.35}`); // mais visível
            particle.style.setProperty('--x', `${(Math.random() - 0.5) * 400}px`);
            particle.style.setProperty('--y', `${(Math.random() - 0.5) * 300}px`);
            particle.style.setProperty('--duration', `${Math.random() * 18 + 12}s`);
            
            // posição inicial (evita ficar colado nas bordas)
            particle.style.left = `${Math.random() * 88 + 6}vw`;
            particle.style.top = `${Math.random() * 88 + 6}vh`;
            
            body.appendChild(particle);
        }
    }

    // Controle aprimorado da animação de typing
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.addEventListener('animationend', (e) => {
            if (e.animationName === 'typing') {
                typingText.classList.add('completed');
                // Remove a borda piscante após completar
                setTimeout(() => {
                    typingText.style.borderRight = 'none';
                }, 1000);
            }
        });
    }

    // Inicializa partículas ao carregar e recria em redimensionamento/períodos
    try { createParticles(); } catch (e) { /* fail silently */ }
    window.addEventListener('resize', () => {
        // recria com debounce mínimo para evitar churn
        clearTimeout(window.__particleResizeTimer);
        window.__particleResizeTimer = setTimeout(createParticles, 200);
    });
    // reinicia partículas ocasionalmente para manter movimento
    setInterval(createParticles, 35000);
});