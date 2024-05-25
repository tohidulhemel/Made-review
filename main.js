// Change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})




// Show/Hide FAQ answwers
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('open');

        //Change icon
        const icon = faqs.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil uil-minus";
        }
        else icon.className = 'uil uil-plus'
    });
});


// Show/Hide nav menu 
const menu = document.querySelector(".nav_menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")
// Show mav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})
// close nav menu
const closeNav = () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click', closeNav)


// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // When window width is >= 600px
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }

});
