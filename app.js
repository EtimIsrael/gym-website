const menu = document.querySelector('#mobile-menu');
const menuLInk = document.querySelector('.navbar_menu');
const navLogo =  document.querySelector('#navbar_logo');
const body = document.querySelector('body');

// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLInk.classList.toggle('active');
  body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-services', {
  ScrollTrigger: 'animate-services',
  duration: 1,
  opacity: 1,
  x: -150,
  stagger: 0.12
});

gsap.from('.animate-img', {
  ScrollTrigger: 'animate-services',
  duration: 1.2,
  opacity: 0,
  y: -200,
});

gsap.from('.animate-membership', {
  ScrollTrigger: 'animate-membership',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5
});

gsap.from('.animate-card', {
  ScrollTrigger: 'animate-card',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.2
});

gsap.from('.animate-team', {
  ScrollTrigger: 'animate-team',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2
});

gsap.from('.animate-team-text', {
  ScrollTrigger: 'animate-team-text',
  duration: 3,
  opacity: 0,
  x: -150,
  stagger: 0.3,
  delay: 0.2
});

gsap.from('.animate-email', {
  ScrollTrigger: 'animate-email',
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 1
});
