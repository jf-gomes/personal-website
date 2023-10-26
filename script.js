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

let reposContent = document.getElementById('repos-content');

fetch('https://api.github.com/users/jf-gomes/repos')
.then(function (serverResponse){
    return serverResponse.json();
})
.then(function (convertedResponse){
    console.log(convertedResponse);
    totalRepos = convertedResponse.length;
    for (c = 0; c < totalRepos; c ++){
        reposContent.innerHTML += `<a href="${convertedResponse[c].svn_url}" target="_blank">${convertedResponse[c].name}</a>`;
    }
})