const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

/*

const observer = new IntersectionObserver(entries => {
    entries.forach(entry=> {
        if(entry.isIntersecting){
            document.querySelectorAll(".Artwork-1")[0].classList.add("fadeInTop");
            document.querySelectorAll(".Artwork-2")[1].classList.add("fadeInTop");
            document.querySelectorAll(".Artwork-3")[2].classList.add("fadeInTop");
    }
})
})

    observer.observe(document.querySelector(".container"))

    */
