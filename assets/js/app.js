document.addEventListener('DOMContentLoaded', () => {
    // Reveal Scroll Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        revealObserver.observe(el);
    });

    // Retro Floaters Logic
    const createFloater = () => {
        const chars = ['▲', '■', '●', '~', '+', 'X'];
        const floater = document.createElement('div');
        floater.className = 'squiggle';
        floater.textContent = chars[Math.floor(Math.random() * chars.length)];
        floater.style.left = Math.random() * 100 + 'vw';
        floater.style.top = Math.random() * 100 + 'vh';
        floater.style.color = ['var(--neon-pink)', 'var(--neon-blue)', 'var(--neon-yellow)'][Math.floor(Math.random() * 3)];
        floater.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        floater.style.position = 'fixed';
        floater.style.opacity = '0.3';
        floater.style.zIndex = '-2';
        document.body.appendChild(floater);

        let x = parseFloat(floater.style.left);
        let y = parseFloat(floater.style.top);
        let speedX = (Math.random() - 0.5) * 0.5;
        let speedY = (Math.random() - 0.5) * 0.5;

        const animate = () => {
            x += speedX;
            y += speedY;
            if (x < 0 || x > 100) speedX *= -1;
            if (y < 0 || y > 100) speedY *= -1;
            floater.style.left = x + 'vw';
            floater.style.top = y + 'vh';
            requestAnimationFrame(animate);
        };
        animate();
    };

    // Create a few more floaters for that "alive" 80s feel
    for (let i = 0; i < 15; i++) {
        createFloater();
    }

    // Audio context/visualizer vibes (visual only)
    console.log('--- SYSTEM ONLINE ---');
    console.log('LOADED: 1980s_RETRO_STRATEGY_MODULE');
});
