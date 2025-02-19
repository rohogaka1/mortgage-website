// Animation on scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Video Modal Functions
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    // Using a mortgage-related YouTube video
    videoFrame.src = "https://www.youtube.com/embed/GUXNRk_I8Tk?autoplay=1";
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Event Listeners
window.addEventListener('scroll', reveal);
document.addEventListener('DOMContentLoaded', reveal);

document.addEventListener('click', (e) => {
    const modal = document.getElementById('videoModal');
    if (e.target === modal) {
        closeVideoModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});

// Add this to your existing script.js
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    mobileMenu.classList.toggle('show');
    
    // Animate menu icon
    menuIcon.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('show');
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add this to your existing script.js
function initMap() {
    // Palm Coast office coordinates
    const officeLocation = { lat: 29.5544, lng: -81.2179 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: officeLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e9e9e9"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            }
        ]
    });
    
    // Custom marker
    const marker = new google.maps.Marker({
        position: officeLocation,
        map: map,
        title: "FLO Mortgage - Palm Coast Office",
        animation: google.maps.Animation.DROP
    });
}

// Initialize map when the page loads
window.addEventListener('load', initMap);

// Clear previous console messages
console.clear();

// Add a distinctive header
console.log('%c=== SECTION DEBUGGER ===', 'color: #ff0000; font-size: 20px; font-weight: bold;');

// Function to analyze sections
function analyzePage() {
    console.log('%cFound Sections:', 'color: #2c5282; font-weight: bold;');
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        console.group(`Section ${index + 1}`);
        console.log('ID:', section.id || 'no id');
        console.log('Classes:', section.className);
        console.log('First heading:', section.querySelector('h1,h2,h3')?.textContent || 'no heading');
        console.groupEnd();
    });

    // Specifically look for loan-related sections
    const loanSections = document.querySelectorAll('[id*="loan"], [class*="loan"]');
    console.log('%cLoan-related sections:', 'color: #ff6b6b; font-weight: bold;', loanSections.length);
    loanSections.forEach(section => {
        console.log('Found loan section:', {
            id: section.id,
            classes: section.className
        });
    });
}

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', analyzePage);

// Video Modal with Debug
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    
    const modal = document.getElementById('video-modal');
    const playBtn = document.getElementById('play-video');
    
    console.log('Play button:', playBtn); // Check if button is found
    
    if (!playBtn || !modal) {
        console.error('Required elements not found!');
        return;
    }
    
    const closeBtn = modal.querySelector('.modal-close');
    const iframe = modal.querySelector('iframe');
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    function openModal() {
        console.log('Opening modal');
        modal.classList.add('active');
        iframe.setAttribute('src', videoUrl);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        console.log('Closing modal');
        modal.classList.remove('active');
        iframe.setAttribute('src', '');
        document.body.style.overflow = '';
    }

    // Direct click handler
    playBtn.onclick = function() {
        console.log('Play button clicked');
        openModal();
    };

    closeBtn.addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

// Add this to your existing script
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== HERO SECTION DEBUG ===');
    
    // Check hero elements
    const hero = document.querySelector('.hero');
    const heroContainer = document.querySelector('.hero-container');
    const heroImage = document.querySelector('.hero-image img');
    
    // Log structure
    console.log('Hero computed styles:', {
        height: getComputedStyle(hero).height,
        background: getComputedStyle(hero).backgroundImage,
        display: getComputedStyle(hero).display
    });
    
    // Log container layout
    console.log('Hero container:', {
        width: heroContainer.offsetWidth,
        display: getComputedStyle(heroContainer).display,
        gap: getComputedStyle(heroContainer).gap
    });
    
    // Check image
    if (heroImage) {
        console.log('Profile image:', {
            src: heroImage.src,
            naturalWidth: heroImage.naturalWidth,
            naturalHeight: heroImage.naturalHeight,
            displayWidth: heroImage.offsetWidth,
            displayHeight: heroImage.offsetHeight,
            loadError: !heroImage.complete || heroImage.naturalWidth === 0
        });
    } else {
        console.error('Profile image element not found');
    }
});

// Add this JavaScript to handle the mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinksArray = document.querySelectorAll('.nav-link, .nav-button');
    navLinksArray.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}); 