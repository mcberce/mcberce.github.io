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
        const particleCount = 25; // Reduzido para melhor performance
        const colors = ['#00fff5', '#ff00ff', '#64ffda', '#4a4a4a'];
        const body = document.body;

        // Limpa partículas antigas
        document.querySelectorAll('.particle').forEach(p => p.remove());

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Configurações mais suaves
            const size = Math.random() * 2.5 + 1.5; // Partículas um pouco menores
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Propriedades customizadas
            particle.style.setProperty('--size', `${size}px`);
            particle.style.setProperty('--particle-color', color);
            particle.style.setProperty('--blur', `${Math.random() * 1.5}px`);
            particle.style.setProperty('--max-opacity', `${Math.random() * 0.3 + 0.1}`); // Mais sutil
            particle.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`); // Movimento reduzido
            particle.style.setProperty('--y', `${(Math.random() - 0.5) * 200}px`);
            particle.style.setProperty('--duration', `${Math.random() * 15 + 15}s`); // Mais lento
            
            // Posicionamento inicial mais distribuído
            particle.style.left = `${Math.random() * 95 + 2.5}vw`; // Evita bordas
            particle.style.top = `${Math.random() * 95 + 2.5}vh`;
            
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

    // Inicia as partículas e configura recriação
    createParticles();
    setInterval(createParticles, 45000); // Intervalo maior para suavidade
});