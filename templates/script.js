
let btn_right = document.getElementById('btn-slider-right');
let btn_left = document.getElementById('btn-slider-left')

const textElement = document.querySelector('.text-type');
const texts = ["Web Developer", "Mobile Developer", "Agentic AI Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(() => {}, 1000); // Jeda sebelum menghapus
    }
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(type, typingSpeed);
}

function addCursor() {
  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  textElement.parentElement.appendChild(cursor);
}

document.addEventListener('DOMContentLoaded', () => {
  addCursor();
  type();
});


const menuIcon = document.querySelector('#menu-icon');
  const navEndContainer = document.querySelector('.nav-end-container');

  menuIcon.addEventListener('click', () => {
    navEndContainer.classList.toggle('active');
  });

  // Tab switching logic
  document.querySelectorAll('.exp-tab').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.exp-tab').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      document.querySelectorAll('.exp-panel').forEach(panel => panel.style.display = 'none');
      document.getElementById(this.dataset.tab).style.display = 'block';
    });
  });

const sections = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About Me'},
  {id: 'experience', label: 'Experience'},
  {id: 'projects', label: 'Projects'},
  {id: 'contact', label: 'Contact'},
];

function getCurrentSection() {
  let current = sections[0].label;
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        current = section.label;
        break;
      }
      
    }
  }
  document.getElementById('navbar-section').textContent = current;
}

window.addEventListener('scroll', getCurrentSection);
window.addEventListener('DOMContentLoaded', getCurrentSection);

document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...

  // Carousel otomatis: 2 row x 3 col (6 per slide)
  const slider = document.getElementById('projects-slider');
  const cards = slider.querySelectorAll('.project-card');
  let col = 3, row = 2;
  function updateGrid() {
    if (window.innerWidth <= 600) {
      col = 1; row = 1;
    } else if (window.innerWidth <= 900) {
      col = 2; row = 2;
    } else {
      col = 3; row = 2;
    }
  }
  updateGrid();

  let perSlide = col * row;
  let total = cards.length;
  let totalSlides = Math.ceil(total / perSlide);
  let currentSlide = 0;

  function showSlide(idx) {
    for (let i = 0; i < total; i++) {
      cards[i].style.display = 'none';
    }
    let start = idx * perSlide;
    for (let i = start; i < start + perSlide && i < total; i++) {
      cards[i].style.display = 'flex';
    }
  }

  showSlide(currentSlide);

  function nextSlide () {
    updateGrid();
    perSlide = col * row;
    totalSlides = Math.ceil(total / perSlide);
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  };

  function prevSlide (){
    updateGrid(),
    perSlide = col*row;
    totalSlides = Math.ceil(total/perSlide);
    currentSlide = (currentSlide+1) % totalSlides;
    showSlide(currentSlide);
  }

  btn_right.addEventListener('click', nextSlide);
  btn_left.addEventListener('click', prevSlide);

  window.addEventListener('resize', () => {
    updateGrid();
    perSlide = col * row;
    totalSlides = Math.ceil(total / perSlide);
    currentSlide = 0;
    showSlide(currentSlide);
  });
});