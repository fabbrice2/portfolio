const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
const slideMenuItems = document.querySelectorAll('.slide-menu ul li a');

// Fonction pour faire défiler jusqu'à une section
const scrollToSection = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });

    // Fermer le menu en mode responsive
    document.querySelector('.slide-menu').classList.remove('open');
};

// Attacher l'événement de clic aux éléments de menu
menuItems.forEach(item => {
    item.addEventListener('click', scrollToSection);
});

slideMenuItems.forEach(item => {
    item.addEventListener('click', scrollToSection);
});


window.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");
    const $openbtn = document.getElementById('menu-button');
    const $closebtn = document.getElementById('close-button');
    const $menu = document.querySelector('.slide-menu');

    window.addEventListener("mousemove", (event) => {
        const x = event.clientX - 5;
        const y = event.clientY - 5; 
        cursor.style.transform = `translate(${x}px, ${y}px)`;
    });

    $openbtn.addEventListener('click', function () {
        $menu.classList.add('open');
    })
    
    $closebtn.addEventListener('click', function () {
        $menu.classList.remove('open');
    })
});



