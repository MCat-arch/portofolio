let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar')
// // let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>{
//   sections.forEach(sec =>{
//     let top= window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height){
//       navlinks.forEach(Links => {
//         Links.classList.remove('active');
//         document.querySelector('header nav a [href* =' + id + ']').classList.add('active')
        
//       })
//     }
//   })
// }


// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// }


// // JavaScript for navigation
// const projects = document.querySelectorAll('.projects-item');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');

// let currentSlide = 0;
// const totalProjects = projects.length;
// const projectsPerPage = 3;

// // Show the first 3 projects initially
// function showProjects(start) {
//   projects.forEach((project, index) => {
//     project.classList.add('hidden');
//     if (index >= start && index < start + projectsPerPage) {
//       project.classList.remove('hidden');
//     }
//   });
// }

// // Initially show the first 3 projects
// showProjects(currentSlide);

// // Next button functionality
// nextBtn.addEventListener('click', () => {
//   if (currentSlide + projectsPerPage < totalProjects) {
//     currentSlide += projectsPerPage;
//     showProjects(currentSlide);
//   }
// });

// // Previous button functionality
// prevBtn.addEventListener('click', () => {
//   if (currentSlide - projectsPerPage >= 0) {
//     currentSlide -= projectsPerPage;
//     showProjects(currentSlide);
//   }
// });

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

  setInterval(() => {
    updateGrid();
    perSlide = col * row;
    totalSlides = Math.ceil(total / perSlide);
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 3500);

  window.addEventListener('resize', () => {
    updateGrid();
    perSlide = col * row;
    totalSlides = Math.ceil(total / perSlide);
    currentSlide = 0;
    showSlide(currentSlide);
  });
});