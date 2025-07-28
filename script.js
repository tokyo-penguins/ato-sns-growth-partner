// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = menuBtn.querySelector('.menu-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');
    
    if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    } else {
        mobileNav.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = menuBtn.querySelector('.menu-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');
    
    mobileNav.classList.remove('open');
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
}

// Smooth Scrolling Functions
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToResults() {
    document.getElementById('results').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Create email content
    const subject = 'お問い合わせ - ATOへのご相談';
    const body = `
お名前: ${data.name}
会社名・団体名: ${data.company}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未記入'}
どこで知りましたか: ${data.howDidYouKnow || '未記入'}

お問い合わせ内容:
${data.message}
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:aaaaa2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    alert('メールクライアントが開きます。お問い合わせ内容がメールアプリに反映されます。');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.problem-card, .achievement-card, .metric-card, .pricing-card, .step-item, .achievement-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Auto-show hero elements
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Add loading effect
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initial setup
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';