/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

const translations = {
    en: {
        'nav.about':        'About Me',
        'nav.automate':     'Automate',
        'nav.work':         'Work',
        'nav.contact':      'Contact',
        'hero.title':       "Hi, I'm SkullKid",
        'hero.sub':         'FullStack Developer - Blockchain - AI Automations',
        'hero.text':        "My real name is Alex, but sometimes we all need to hide behind a mask to believe in what we're capable of, just like Link does in Majora's Mask.",
        'about.title':      'About me',
        'about.intro':      "I've always been interested in understanding what's behind the things we use every day: how they work, why they're built that way, and how they can be improved. I started tinkering with HTML, CSS, and JavaScript back in high school, and I haven't stopped since.",
        'about.card1':      "Since 2018, I've been developing technology solutions for companies in sectors such as money transfer, insurance, airlines, and water management",
        'about.card2':      'Angular · React · HTML · JavaScript · TypeScript · CSS · Bootstrap · Tailwind',
        'about.card3':      'C# · Node.js · Solidity · Hardhat · Ether.js · Wagmi · SQL Server · MongoDB',
        'about.card4':      'Custom AI process automations using n8n & Make',
        'auto.title':       'AI Automations',
        'auto.intro':       'I help businesses and freelancers identify and eliminate their most time-consuming processes. Custom automations tailored to your workflow — so you save hours every week and cut operational costs.',
        'auto.card1.title': 'Process Automation',
        'auto.card1.text':  'Map your repetitive workflows and automate them end-to-end, eliminating manual errors and saving hours every week.',
        'auto.card2.title': 'AI Integration',
        'auto.card2.text':  'Add intelligence to your existing processes — automatic classification, smart responses, document analysis and content generation.',
        'auto.card3.title': 'System Integration',
        'auto.card3.text':  'Connect your tools — CRMs, ERPs, email, spreadsheets — into a single automated pipeline with no manual handoffs.',
        'auto.tools':       'Tools I work with',
        'auto.cta':         "Let's automate your business",
        'work.title':       'Work',
        'work.intro':       "I've always enjoyed doing hands-on projects in my free time to expand my knowledge. Here are some of them:",
        'contact.title':    'Contact Me',
        'contact.name':     'Full name',
        'contact.email':    'Email address',
        'contact.phone':    'Phone number',
        'contact.message':  'Message',
        'contact.send':     'Send',
        'contact.success':  "Message sent! I'll get back to you soon.",
        'contact.error':    'Something went wrong. Please try again.',
        'footer.findme':    'Find me on',
    },
    es: {
        'nav.about':        'Sobre mí',
        'nav.automate':     'Automatizar',
        'nav.work':         'Proyectos',
        'nav.contact':      'Contacto',
        'hero.title':       'Hola, soy SkullKid',
        'hero.sub':         'Desarrollador FullStack - Blockchain - Automatizaciones IA',
        'hero.text':        "Me llamo Alex, pero a veces todos necesitamos escondernos detrás de una máscara para creer en lo que somos capaces de hacer, igual que Link en Majora's Mask.",
        'about.title':      'Sobre mí',
        'about.intro':      'Siempre me ha interesado entender qué hay detrás de las cosas que usamos cada día: cómo funcionan, por qué están construidas así y cómo se pueden mejorar. Empecé a trastear con HTML, CSS y JavaScript en el instituto, y no he parado desde entonces.',
        'about.card1':      'Desde 2018, desarrollando soluciones tecnológicas para empresas en sectores como transferencias de dinero, seguros, aerolíneas y gestión del agua.',
        'about.card2':      'Angular · React · HTML · JavaScript · TypeScript · CSS · Bootstrap · Tailwind',
        'about.card3':      'C# · Node.js · Solidity · Hardhat · Ether.js · Wagmi · SQL Server · MongoDB',
        'about.card4':      'Automatizaciones de procesos con IA usando n8n y Make',
        'auto.title':       'Automatizaciones IA',
        'auto.intro':       'Ayudo a empresas y autónomos a identificar y eliminar sus procesos más pesados. Automatizaciones a medida para tu flujo de trabajo — ahorra horas cada semana y reduce costes operativos.',
        'auto.card1.title': 'Automatización de Procesos',
        'auto.card1.text':  'Mapeo tus flujos de trabajo repetitivos y los automatizo de principio a fin, eliminando errores manuales y ahorrando horas cada semana.',
        'auto.card2.title': 'Integración con IA',
        'auto.card2.text':  'Añade inteligencia a tus procesos actuales — clasificación automática, respuestas inteligentes, análisis de documentos y generación de contenido.',
        'auto.card3.title': 'Integración de Sistemas',
        'auto.card3.text':  'Conecta tus herramientas — CRMs, ERPs, email, hojas de cálculo — en un único flujo automatizado sin traspasos manuales.',
        'auto.tools':       'Herramientas con las que trabajo',
        'auto.cta':         'Automaticemos tu negocio',
        'work.title':       'Proyectos',
        'work.intro':       'Siempre me ha gustado hacer proyectos personales en mi tiempo libre para expandir mis conocimientos. Aquí algunos de ellos:',
        'contact.title':    'Contáctame',
        'contact.name':     'Nombre completo',
        'contact.email':    'Correo electrónico',
        'contact.phone':    'Teléfono',
        'contact.message':  'Mensaje',
        'contact.send':     'Enviar',
        'contact.success':  '¡Mensaje enviado! Me pondré en contacto contigo pronto.',
        'contact.error':    'Algo salió mal. Por favor, inténtalo de nuevo.',
        'footer.findme':    'Encuéntrame en',
    }
};

window.addEventListener('DOMContentLoaded', () => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Scroll-reveal with staggered groups
    document.querySelectorAll('.reveal-group').forEach(group => {
        group.querySelectorAll(':scope > .reveal').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.13}s`;
        });
    });
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(el => revealObserver.observe(el));
    }

    // i18n
    function applyLang(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang]?.[key]) el.textContent = translations[lang][key];
        });
        const toggle = document.getElementById('langToggle');
        if (toggle) toggle.textContent = lang === 'en' ? 'ES' : 'EN';
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    }

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLang(localStorage.getItem('lang') === 'es' ? 'en' : 'es');
        });
    }

    applyLang(localStorage.getItem('lang') || 'en');

    // Web3Forms contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const btn = document.getElementById('submitButton');
            const successMsg = document.getElementById('submitSuccessMessage');
            const errorMsg = document.getElementById('submitErrorMessage');
            const lang = localStorage.getItem('lang') || 'en';

            btn.disabled = true;
            btn.textContent = lang === 'es' ? 'Enviando...' : 'Sending...';
            successMsg.classList.add('d-none');
            errorMsg.classList.add('d-none');

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
                });
                const result = await response.json();
                if (result.success) {
                    successMsg.classList.remove('d-none');
                    contactForm.reset();
                } else {
                    errorMsg.classList.remove('d-none');
                }
            } catch {
                errorMsg.classList.remove('d-none');
            } finally {
                btn.disabled = false;
                applyLang(localStorage.getItem('lang') || 'en');
            }
        });
    }

});
