// Este arquivo contém a lógica principal do JavaScript, incluindo a manipulação de eventos, como cliques nos botões e animações.

document.addEventListener('DOMContentLoaded', () => {
    // Base de dados de certificados - COMPLETO COM TODOS OS CERTIFICADOS (CAMINHOS CORRIGIDOS)
    const certificatesData = [
        // NÍVEL INICIANTE (Verde)
        {
            title: "Iniciando em Programação",
            institution: "Alura",
            category: "frontend",
            level: "beginner",
            icon: "fas fa-seedling",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Course%20Starting%20in%20Programming_%20career%20and%20first%20steps%20-%20Alura.pdf"
        },
        {
            title: "HTML e CSS: Ambientes de Desenvolvimento",
            institution: "Alura",
            category: "frontend",
            level: "beginner",
            icon: "fas fa-laptop-code",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20HTML%20e%20CSS_%20ambientes%20de%20desenvolvimento%2C%20estrutura%20de%20arquivos%20e%20tags%20-%20Alura.pdf"
        },
        {
            title: "Lógica de Programação: Mergulhe",
            institution: "Alura",
            category: "frontend",
            level: "beginner",
            icon: "fas fa-swimmer",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20L%C3%B3gica%20de%20programa%C3%A7%C3%A3o_%20mergulhe%20em%20programa%C3%A7%C3%A3o%20com%20JavaScript%20-%20Alura.pdf"
        },
        {
            title: "Carreira em Programação",
            institution: "Alura",
            category: "tools",
            level: "beginner",
            icon: "fas fa-briefcase",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Course%20Starting%20in%20Programming_%20career%20and%20first%20steps%20-%20Alura.pdf"
        },
        
        // NÍVEL INTERMEDIÁRIO (Azul)
        {
            title: "HTML e CSS: Classes, Posicionamento e Flexbox",
            institution: "Alura",
            category: "frontend",
            level: "intermediate",
            icon: "fas fa-layer-group",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20HTML%20e%20CSS_%20classes%2C%20posicionamento%20e%20Flexbox%20-%20Alura.pdf"
        },
        {
            title: "HTML e CSS: Cabeçalho, Footer e Variáveis",
            institution: "Alura",
            category: "frontend",
            level: "intermediate",
            icon: "fab fa-css3-alt",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20HTML%20e%20CSS_%20cabe%C3%A7alho%2C%20footer%20e%20vari%C3%A1veis%20CSS%20-%20Alura.pdf"
        },
        {
            title: "HTML e CSS: Praticando",
            institution: "Alura",
            category: "frontend",
            level: "intermediate",
            icon: "fab fa-html5",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20HTML%20e%20CSS_%20praticando%20HTML_CSS%20-%20Alura.pdf"
        },
        {
            title: "HTML e CSS: Trabalhando com Responsividade",
            institution: "Alura",
            category: "frontend",
            level: "intermediate",
            icon: "fas fa-mobile-alt",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20HTML%20e%20CSS_%20trabalhando%20com%20responsividade%20e%20publica%C3%A7%C3%A3o%20de%20projetos%20-%20Alura.pdf"
        },
        {
            title: "Lógica de Programação com JavaScript",
            institution: "Alura",
            category: "frontend",
            level: "intermediate",
            icon: "fas fa-code",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20L%C3%B3gica%20de%20programa%C3%A7%C3%A3o_%20explore%20fun%C3%A7%C3%B5es%20e%20listas%20-%20Alura.pdf"
        },
        {
            title: "Git e GitHub",
            institution: "Alura",
            category: "devops",
            level: "intermediate",
            icon: "fas fa-code-branch",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20Git%20e%20GitHub_%20compartilhando%20e%20colaborando%20em%20projetos%20-%20Alura.pdf"
        },
        {
            title: "ChatGPT e JavaScript",
            institution: "Alura",
            category: "tools",
            level: "intermediate",
            icon: "fas fa-robot",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20ChatGPT%20e%20JavaScript_%20construa%20o%20jogo%20Pong%20-%20Alura.pdf"
        },
        
        // NÍVEL AVANÇADO (Vermelho)
        {
            title: "JavaScript com Node.js",
            institution: "Alura",
            category: "backend",
            level: "advanced",
            icon: "fab fa-node-js",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20JavaScript%20com%20Node.js_%20Criando%20sua%20primeira%20biblioteca%20-%20Alura.pdf"
        },
        {
            title: "JavaScript: Programação Orientada a Objetos",
            institution: "Alura",
            category: "backend",
            level: "advanced",
            icon: "fas fa-cube",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20JavaScript_%20programando%20a%20Orienta%C3%A7%C3%A3o%20a%20Objetos%20-%20Alura.pdf"
        },
        {
            title: "JavaScript: Interfaces e Herança em OO",
            institution: "Alura",
            category: "backend",
            level: "advanced",
            icon: "fas fa-project-diagram",
            url: "../certificates/Murilo%20Camilo%20Berce%20-%20Curso%20JavaScript_%20interfaces%20e%20Heran%C3%A7a%20em%20Orienta%C3%A7%C3%A3o%20a%20Objetos%20-%20Alura.pdf"
        }
    ];

    // Categorias legíveis
    const categoryNames = {
        all: "Todos",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps",
        tools: "Ferramentas"
    };

    // Níveis e suas cores
    const levelConfig = {
        beginner: {
            name: "Iniciante",
            color: "#4ade80",
            bgColor: "rgba(74, 222, 128, 0.1)"
        },
        intermediate: {
            name: "Intermediário",
            color: "#3b82f6",
            bgColor: "rgba(59, 130, 246, 0.1)"
        },
        advanced: {
            name: "Avançado",
            color: "#ef4444",
            bgColor: "rgba(239, 68, 68, 0.1)"
        }
    };

    // Gerenciamento do modal de certificados
    function initCertificatesModal() {
        const modal = document.getElementById('certificatesModal');
        const openBtn = document.querySelector('.open-certificates-modal');
        const closeBtn = document.querySelector('.modal-close');
        const overlay = document.querySelector('.modal-overlay');
        const grid = document.querySelector('.certificates-grid-modal');
        const filterBtns = document.querySelectorAll('.filter-btn');

        if (!modal || !openBtn) return;

        // Renderiza certificados
        function renderCertificates(category = 'all') {
            const filtered = category === 'all' 
                ? certificatesData 
                : certificatesData.filter(cert => cert.category === category);

            grid.innerHTML = filtered.map(cert => {
                const levelInfo = levelConfig[cert.level];
                return `
                <a href="${cert.url}" 
                   class="certificate-card-modal" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   data-category="${cert.category}"
                   data-level="${cert.level}"
                   style="border-color: ${levelInfo.color}33;">
                    <i class="${cert.icon} cert-icon" style="color: ${levelInfo.color};"></i>
                    <div>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem;">
                            <span class="cert-category" style="background: ${levelInfo.bgColor}; color: ${levelInfo.color}; border: 1px solid ${levelInfo.color}33;">
                                ${categoryNames[cert.category]}
                            </span>
                            <span class="cert-level" style="background: ${levelInfo.bgColor}; color: ${levelInfo.color}; border: 1px solid ${levelInfo.color}33; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">
                                ${levelInfo.name}
                            </span>
                        </div>
                        <h3>${cert.title}</h3>
                        <p>${cert.institution}</p>
                    </div>
                </a>
            `}).join('');

            // Animação de entrada
            setTimeout(() => {
                document.querySelectorAll('.certificate-card-modal').forEach((card, i) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.animation = 'slideUp 0.4s ease forwards';
                    }, i * 50);
                });
            }, 50);
        }

        // Atualiza contadores
        function updateCounts() {
            filterBtns.forEach(btn => {
                const category = btn.getAttribute('data-category');
                const count = category === 'all' 
                    ? certificatesData.length 
                    : certificatesData.filter(c => c.category === category).length;
                btn.querySelector('.count').textContent = count;
            });
        }

        // Abre modal
        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderCertificates('all');
            updateCounts();
        }

        // Fecha modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Event listeners
        openBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        // Filtros
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.getAttribute('data-category');
                renderCertificates(category);
            });
        });

        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Feedback visual para botões
    document.body.addEventListener('pointerdown', (e) => {
        const btn = e.target.closest('.btn, .certificate-card-modal, .project-card, a');
        if (btn) btn.classList.add('pressed');
    });
    document.body.addEventListener('pointerup', () => {
        document.querySelectorAll('.pressed').forEach(n => n.classList.remove('pressed'));
    });

    // Smooth scroll para âncoras internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');
            if (!targetSelector || targetSelector === '#') return;
            const target = document.querySelector(targetSelector);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Navbar: adiciona classe ao rolar
    const navbar = document.querySelector('.navbar');
    const onScroll = () => {
        if (!navbar) return;
        if (window.scrollY > 100) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Controle da animação de typing
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.addEventListener('animationend', (e) => {
            if (e.animationName === 'typing') {
                typingText.classList.add('completed');
                setTimeout(() => typingText.style.borderRight = 'none', 1000);
            }
        });
    }

    // Partículas de fundo
    function createBackgroundEffects() {
        const body = document.body;
        document.querySelectorAll('.bg-comet, .bg-spark, .bg-glow-ring').forEach(n => n.remove());

        const cometCount = window.innerWidth < 480 ? 1 : window.innerWidth < 900 ? 2 : 4;
        for (let i = 0; i < cometCount; i++) {
            const comet = document.createElement('div');
            comet.className = 'bg-comet';
            const size = Math.random() * 18 + 8;
            const duration = Math.random() * 6 + 5;
            const delay = (i < 2) ? 0 : Math.random() * 6;

            const depthRand = Math.random();
            let blur, opacity, glowStrength;
            if (depthRand < 0.28) {
                blur = (Math.random() * 0.4).toFixed(2);
                opacity = (Math.random() * 0.25 + 0.75).toFixed(2);
                glowStrength = 0.75;
            } else if (depthRand < 0.72) {
                blur = (Math.random() * 0.9 + 0.5).toFixed(2);
                opacity = (Math.random() * 0.25 + 0.45).toFixed(2);
                glowStrength = 0.42;
            } else {
                blur = (Math.random() * 3 + 1.2).toFixed(2);
                opacity = (Math.random() * 0.25 + 0.18).toFixed(2);
                glowStrength = 0.18;
            }

            comet.style.left = `${Math.random() * 20 - 10}vw`;
            comet.style.top = `${Math.random() * 12}vh`;
            comet.style.setProperty('--size', `${size}px`);
            comet.style.setProperty('--duration', `${duration}s`);
            comet.style.setProperty('--delay', `${delay}s`);
            comet.style.setProperty('--blur', `${blur}px`);
            comet.style.setProperty('--max-opacity', `${opacity}`);

            const glow = `0 0 ${Math.round(size * 2)}px rgba(255,220,120,${Math.min(0.95, opacity * glowStrength)})`;
            comet.style.boxShadow = `${glow}, inset 0 0 ${Math.round(size/2)}px rgba(255,255,255,0.28)`;

            body.appendChild(comet);
        }

        const sparkCount = window.innerWidth < 480 ? 6 : window.innerWidth < 900 ? 10 : 18;
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement('div');
            spark.className = 'bg-spark';
            const size = Math.random() * 8 + 4;
            const duration = Math.random() * 14 + 8;
            const delay = (i < 3) ? (Math.random() * 0.6) : Math.random() * 8;

            const depthRand = Math.random();
            let blur, opacity, glowStrength;
            if (depthRand < 0.30) {
                blur = (Math.random() * 0.5).toFixed(2);
                opacity = (Math.random() * 0.25 + 0.65).toFixed(2);
                glowStrength = 0.9;
            } else if (depthRand < 0.75) {
                blur = (Math.random() * 1.2 + 0.6).toFixed(2);
                opacity = (Math.random() * 0.3 + 0.4).toFixed(2);
                glowStrength = 0.45;
            } else {
                blur = (Math.random() * 3 + 1.2).toFixed(2);
                opacity = (Math.random() * 0.25 + 0.18).toFixed(2);
                glowStrength = 0.2;
            }

            const dx = (Math.random() - 0.5) * (window.innerWidth < 480 ? 140 : 360);
            const dy = (Math.random() - 0.5) * (window.innerWidth < 480 ? 120 : 260);
            spark.style.left = `${Math.random() * 88 + 6}vw`;
            spark.style.top = `${Math.random() * 88 + 6}vh`;
            spark.style.setProperty('--size', `${size}px`);
            spark.style.setProperty('--duration', `${duration}s`);
            spark.style.setProperty('--delay', `${delay}s`);
            spark.style.setProperty('--dx', `${dx}px`);
            spark.style.setProperty('--dy', `${dy}px`);
            spark.style.setProperty('--max-opacity', `${opacity}`);
            spark.style.setProperty('--blur', `${blur}px`);

            const glow = `0 0 ${Math.round(size * 1.8)}px rgba(255,220,120,${Math.min(0.95, opacity * glowStrength)})`;
            spark.style.boxShadow = `${glow}, 0 0 ${Math.round(size * 3)}px rgba(255,180,40,0.12)`;

            body.appendChild(spark);
        }

        if (window.innerWidth >= 900) {
            const ring1 = document.createElement('div');
            ring1.className = 'bg-glow-ring';
            ring1.style.left = '-10vw';
            ring1.style.top = '-8vh';
            ring1.style.setProperty('--size', '480px');
            body.appendChild(ring1);

            const ring2 = document.createElement('div');
            ring2.className = 'bg-glow-ring';
            ring2.style.right = '-12vw';
            ring2.style.bottom = '-6vh';
            ring2.style.setProperty('--size', '420px');
            ring2.style.opacity = '0.45';
            body.appendChild(ring2);
        }
    }

    try { createBackgroundEffects(); } catch (e) {}

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            try { createBackgroundEffects(); } catch (e) {}
            onScroll();
        }, 300);
    });

    setInterval(() => {
        try { createBackgroundEffects(); } catch (e) {}
    }, 40000);

    // Inicializa modal de certificados
    initCertificatesModal();
});