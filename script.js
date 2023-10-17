let aboutMeContent = document.querySelector('#about-me-content');
let skillsContent = document.querySelector('#skills-content');
const loop = setInterval(() => {
    if (window.innerWidth <= 840){
        aboutMeContent.style.flexWrap = 'wrap';
        skillsContent.style.flexWrap = 'wrap';
    } else{
        aboutMeContent.style.flexWrap = 'nowrap';
        skillsContent.style.flexWrap = 'nowrap';
    }
}, 10);