// Function to generate random number within a range
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create stars
const starContainer = document.getElementById("stars");
for (let i = 0; i < 100; i++) 
{
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = random(0, 340) + "vh";
    star.style.left = random(0, 100) + "vw";
    starContainer.appendChild(star);
}

// Create falling stars
setInterval(() => 
    {
    const fallingStar = document.createElement("div");
    fallingStar.classList.add("star", "falling");
    fallingStar.style.top = "-5px";
    fallingStar.style.left = random(0, 100) + "vw";
    starContainer.appendChild(fallingStar);
    // Remove falling stars after animation completes
    setTimeout(() => 
        {
        fallingStar.remove();
    }, 5000);
}, 2000); // Adjust the interval as needed


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => 
    {
        sections.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height)
            {
                navLinks.forEach(links =>{
                    links.classList.remove(`active`);
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };

        });
        let header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 100);
    };
    

