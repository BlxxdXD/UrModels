function pics(){
    s.style.display = "none";
    s1.style.display = "none";
}

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let title = document.getElementById('title')



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.top = value * -0.20 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});




const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

