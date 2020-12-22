// White navigation 
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0)
});


// Show Image
const images = document.querySelectorAll('.image');
const closeImg = document.querySelector('#close');
const showImg = document.querySelector('.show-img');
const chosenImg = document.querySelector('.chosen-img');
const showImgTxt = document.querySelector('.show-img-text');


images.forEach(image => {
    image.addEventListener('click', () => {
        showImg.style.visibility = "visible";
        chosenImg.src = image.src;
        chosenImg.alt = image.alt;
        showImgTxt.innerHTML = chosenImg.alt
    });
});

closeImg.addEventListener('click', () => {
    showImg.style.visibility = "hidden";
});

showImg.addEventListener('click', () => {
        showImg.style.visibility = "hidden";  
});

// Mobile Menu
const toggle = document.querySelector('.toggle'),
    menuList = document.querySelector('.list'),
    menuLinks = document.querySelectorAll('.link');

// Show 
toggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
})

// Close menu after clicking the links
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
    });
});