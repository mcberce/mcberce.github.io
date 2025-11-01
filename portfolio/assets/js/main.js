// Este arquivo contém a lógica principal do JavaScript, incluindo a manipulação de eventos, como cliques nos botões e animações.

document.addEventListener('DOMContentLoaded', () => {
    // Base de dados de certificados - NOMES CORRIGIDOS
    const certificatesData = [
        // NÍVEL INICIANTE (Verde)
        {
            title: "Lógica de Programação: Mergulhe",
            institution: "Alura",
            category: "frontend",
            level: "beginner",
            icon: "fas fa-swimmer",
            url: "portfolio/certificates/Murilo Camilo Berce - Course Programming logic_ dive into programming with JavaScript - Alura.pdf"
        },
        {
            title: "Lógica de Programação: Explore Funções e Listas",
            institution: "Alura",
            category: "frontend",
            level: "beginner",
            icon: "fas fa-list",
            url: "portfolio/certificates/Murilo Camilo Berce - Course Programming logic_ explore functions and lists - Alura.pdf"
        },
        {
            title: "Lógica de Programação: Praticando com Desafios",
            institution: "Alura",
            category: "frontend",
            level: "beginner",
            icon: "fas fa-puzzle-piece",
            url: "portfolio/certificates/Murilo Camilo Berce - Course Programming logic_ practicing with challenges - Alura.pdf"
        },
        {
            title: "JavaScript: Usando Tipos, Variáveis e Funções",
            institution: "Alura",
            category: "frontend",
            level: "beginner",
            icon: "fas fa-code",
            url: "portfolio/certificates/Murilo Camilo Berce - Course JavaScript_ using types, variables and functions - Alura.pdf"
        },
        
        // NÍVEL INTERMEDIÁRIO (Azul)
        {
            title: "JavaScript: Conhecendo Arrays",
            institution: "Alura",
            category: "frontend",
            level: "intermediate",
            icon: "fas fa-table",
            url: "portfolio/certificates/Murilo Camilo Berce - Course JavaScript_ getting to know arrays - Alura.pdf"
        },
        {
            title: "Git e GitHub",
            institution: "Alura",
            category: "devops",
            level: "intermediate",
            icon: "fas fa-code-branch",
            url: "portfolio/certificates/gitandgithub.pdf"
        },
        {
            title: "Automação de Tarefas com Bash",
            institution: "Alura",
            category: "devops",
            level: "intermediate",
            icon: "fas fa-terminal",
            url: "portfolio/certificates/taskautomatingwithbash.pdf"
        },
        {
            title: "Automação de Tarefas",
            institution: "Alura",
            category: "devops",
            level: "intermediate",
            icon: "fas fa-robot",
            url: "portfolio/certificates/taskautomation.pdf"
        },
        {
            title: "UiPath: Automatize Processos e Manipule Dados",
            institution: "Alura",
            category: "tools",
            level: "intermediate",
            icon: "fas fa-cogs",
            url: "portfolio/certificates/MuriloCamiloBerce_CourseUiPath_automateprocessesandmanipulatedata_Alura.pdf"
        },
        {
            title: "Pipelines",
            institution: "Alura",
            category: "devops",
            level: "intermediate",
            icon: "fas fa-project-diagram",
            url: "portfolio/certificates/pipelines.pdf"
        },
        
        // NÍVEL AVANÇADO (Vermelho)
        {
            title: "JavaScript com Node.js",
            institution: "Alura",
            category: "backend",
            level: "advanced",
            icon: "fab fa-node-js",
            url: "portfolio/certificates/jsnodejs.pdf"
        },
        {
            title: "JavaScript: Programação Orientada a Objetos",
            institution: "Alura",
            category: "backend",
            level: "advanced",
            icon: "fas fa-cube",
            url: "portfolio/certificates/JavaScriptOOP.pdf"
        },
        {
            title: "JavaScript: OOP Completo",
            institution: "Alura",
            category: "backend",
            level: "advanced",
            icon: "fas fa-cube",
            url: "portfolio/certificates/MuriloCamiloBerce_CursoJavaScriptprogramacaoOrientadaaObjetos_Alura.pdf"
        },
        {
            title: "JavaScript: Interfaces e Herança em OO",
            institution: "Alura",
            category: "backend",
            level: "advanced",
            icon: "fas fa-sitemap",
            url: "portfolio/certificates/jsobjects.pdf"
        }
    ];

    const categoryNames = {
        all: "Todos",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps",
        tools: "Ferramentas"
    };

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

    // ========================================
    // MENU MOBILE
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animação do hamburger
            const hamburger = navToggle.querySelector('.hamburger');
            hamburger.style.transform = navMenu.classList.contains('active') 
                ? 'rotate(45deg)' 
                : 'rotate(0)';
        });

        // Fecha menu ao clicar em link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const hamburger = navToggle.querySelector('.hamburger');
                hamburger.style.transform = 'rotate(0)';
            });
        });
    }

    // ========================================
    // MODAL DE CERTIFICADOS
    // ========================================
    function initCertificatesModal() {
        const modal = document.getElementById('certificatesModal');
        const openBtn = document.querySelector('.open-certificates-modal');
        const closeBtn = document.querySelector('.modal-close');
        const overlay = document.querySelector('.modal-overlay');
        const grid = document.querySelector('.certificates-grid-modal');
        const filterBtns = document.querySelectorAll('.filter-btn');

        if (!modal || !openBtn) return;

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
                        card.style.transform = 'translateY(0)';
                    }, i * 50);
                });
            }, 50);
        }

        function updateCounts() {
            filterBtns.forEach(btn => {
                const category = btn.getAttribute('data-category');
                const count = category === 'all' 
                    ? certificatesData.length 
                    : certificatesData.filter(c => c.category === category).length;
                btn.querySelector('.count').textContent = count;
            });
        }

        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderCertificates('all');
            updateCounts();
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        openBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.getAttribute('data-category');
                
                // Animação de fade out antes de filtrar
                const cards = document.querySelectorAll('.certificate-card-modal');
                cards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                });
                
                setTimeout(() => {
                    renderCertificates(category);
                }, 200);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');
            if (!targetSelector || targetSelector === '#') return;
            const target = document.querySelector(targetSelector);
            if (!target) return;

            e.preventDefault();
            
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // ========================================
    // NAVBAR SCROLL
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    const onScroll = () => {
        if (!navbar) return;
        
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Esconde navbar ao rolar para baixo, mostra ao rolar para cima
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ========================================
    // ANIMAÇÃO DE TYPING
    // ========================================
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.addEventListener('animationend', (e) => {
            if (e.animationName === 'typing') {
                typingText.classList.add('completed');
                setTimeout(() => {
                    typingText.style.borderRight = 'none';
                }, 1000);
            }
        });
    }

    // ========================================
    // INTERSECTION OBSERVER (Animações ao entrar na viewport)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animação especial para skill bars
                if (entry.target.classList.contains('skill-category')) {
                    const bars = entry.target.querySelectorAll('.skill-progress');
                    bars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.animation = 'fillBar 1.5s ease-out forwards';
                        }, index * 100);
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa elementos que devem animar
    const animateElements = document.querySelectorAll(
        '.about-content, .skill-category, .project-card, .stat-card, .detail-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========================================
    // PARTÍCULAS DE FUNDO
    // ========================================
    function createBackgroundEffects() {
        const body = document.body;
        
        // Remove elementos antigos
        document.querySelectorAll('.comet, .spark, .glow-ring, .floating-particle, .energy-wave, .bg-gradient-orb, .bg-lines, .bg-comet, .bg-spark, .bg-glow-ring').forEach(el => el.remove());

        const isMobile = window.innerWidth < 768;
        
        // Adicionar orbs de gradiente (fundo)
        if (!isMobile) {
            const orbContainer = document.createElement('div');
            orbContainer.className = 'bg-animations';
            
            const orb1 = document.createElement('div');
            orb1.className = 'bg-gradient-orb orb-1';
            orbContainer.appendChild(orb1);
            
            const orb2 = document.createElement('div');
            orb2.className = 'bg-gradient-orb orb-2';
            orbContainer.appendChild(orb2);
            
            const orb3 = document.createElement('div');
            orb3.className = 'bg-gradient-orb orb-3';
            orbContainer.appendChild(orb3);
            
            const lines = document.createElement('div');
            lines.className = 'bg-lines';
            orbContainer.appendChild(lines);
            
            body.appendChild(orbContainer);
        }
        
        // Cometas (shooting stars)
        const cometCount = isMobile ? 1 : 3;
        for (let i = 0; i < cometCount; i++) {
            const comet = document.createElement('div');
            comet.className = 'comet';
            
            const duration = Math.random() * 3 + 5;
            const delay = Math.random() * 12;
            const distance = Math.random() * 400 + 600;
            
            comet.style.left = `${Math.random() * 60 + 10}%`;
            comet.style.top = `${Math.random() * 40}%`;
            comet.style.setProperty('--duration', `${duration}s`);
            comet.style.setProperty('--delay', `${delay}s`);
            comet.style.setProperty('--distance', `${distance}px`);
            
            body.appendChild(comet);
        }
        
        // Faíscas
        const sparkCount = isMobile ? 4 : 8;
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            
            const duration = Math.random() * 3 + 3;
            const delay = Math.random() * 8;
            
            spark.style.left = `${Math.random() * 90 + 5}%`;
            spark.style.top = `${Math.random() * 90 + 5}%`;
            spark.style.setProperty('--duration', `${duration}s`);
            spark.style.setProperty('--delay', `${delay}s`);
            
            body.appendChild(spark);
        }
        
        // Anéis de luz
        const ringCount = isMobile ? 2 : 4;
        for (let i = 0; i < ringCount; i++) {
            const ring = document.createElement('div');
            ring.className = 'glow-ring';
            
            const duration = Math.random() * 4 + 4;
            const delay = Math.random() * 10;
            
            ring.style.left = `${Math.random() * 80 + 10}%`;
            ring.style.top = `${Math.random() * 80 + 10}%`;
            ring.style.setProperty('--duration', `${duration}s`);
            ring.style.setProperty('--delay', `${delay}s`);
            
            body.appendChild(ring);
        }
        
        // Partículas flutuantes
        const particleCount = isMobile ? 4 : 8;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            const duration = Math.random() * 6 + 10;
            const delay = Math.random() * 8;
            const moveX = (Math.random() - 0.5) * 200;
            const moveY = (Math.random() - 0.5) * 300;
            
            particle.style.left = `${Math.random() * 90 + 5}%`;
            particle.style.top = `${Math.random() * 90 + 5}%`;
            particle.style.setProperty('--duration', `${duration}s`);
            particle.style.setProperty('--delay', `${delay}s`);
            particle.style.setProperty('--moveX', `${moveX}px`);
            particle.style.setProperty('--moveY', `${moveY}px`);
            
            body.appendChild(particle);
        }
        
        // Ondas removidas para manter elegância
    }

    // Cria partículas inicialmente
    try { 
        createBackgroundEffects(); 
    } catch (e) {
        console.warn('Erro ao criar efeitos de fundo:', e);
    }

    // Recria partículas ao redimensionar
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            try { 
                createBackgroundEffects(); 
            } catch (e) {
                console.warn('Erro ao recriar efeitos de fundo:', e);
            }
            onScroll();
        }, 300);
    });

    // Recria partículas periodicamente
    setInterval(() => {
        try { 
            createBackgroundEffects(); 
        } catch (e) {
            console.warn('Erro ao recriar efeitos de fundo:', e);
        }
    }, 40000);

    // ========================================
    // FEEDBACK VISUAL EM CLIQUES
    // ========================================
    document.body.addEventListener('pointerdown', (e) => {
        const btn = e.target.closest('.btn, .certificate-card-modal, .project-card, .contact-item, .social-icon, a');
        if (btn) {
            btn.style.transform = 'scale(0.95)';
        }
    });

    document.body.addEventListener('pointerup', () => {
        document.querySelectorAll('.btn, .certificate-card-modal, .project-card, .contact-item, .social-icon, a').forEach(el => {
            el.style.transform = '';
        });
    });

    // ========================================
    // LOADING STATE
    // ========================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Anima elementos principais após carregamento
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero-greeting, .hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-social');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 200);
    });

    // ========================================
    // CURSOR PERSONALIZADO (apenas desktop)
    // ========================================
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease, opacity 0.2s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        // Smooth cursor animation
        function updateCursor() {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(updateCursor);
        }
        updateCursor();

        // Aumenta cursor ao passar em elementos clicáveis
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .btn, input, textarea')) {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = '#52e8c4';
            } else {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'var(--primary)';
            }
        });
    }

    // ========================================
    // INICIALIZAÇÃO
    // ========================================
    initCertificatesModal();

    console.log('%c🚀 Portfolio carregado com sucesso!', 'color: #64ffda; font-size: 16px; font-weight: bold;');
    console.log('%cDesenvolvido por Murilo Camilo Berce', 'color: #a0a3b5; font-size: 12px;');
});