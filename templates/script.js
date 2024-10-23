let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec =>{
    let top= window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlinks.forEach(Links => {
        Links.classList.remove('active');
        document.querySelector('header nav a [href* =' + id + ']').classList.add('active')
        
      })
    }
  })
}


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


// JavaScript for navigation
const projects = document.querySelectorAll('.projects-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlide = 0;
const totalProjects = projects.length;
const projectsPerPage = 3;

// Show the first 3 projects initially
function showProjects(start) {
  projects.forEach((project, index) => {
    project.classList.add('hidden');
    if (index >= start && index < start + projectsPerPage) {
      project.classList.remove('hidden');
    }
  });
}

// Initially show the first 3 projects
showProjects(currentSlide);

// Next button functionality
nextBtn.addEventListener('click', () => {
  if (currentSlide + projectsPerPage < totalProjects) {
    currentSlide += projectsPerPage;
    showProjects(currentSlide);
  }
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
  if (currentSlide - projectsPerPage >= 0) {
    currentSlide -= projectsPerPage;
    showProjects(currentSlide);
  }
});
