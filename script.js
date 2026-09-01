/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

const header = document.querySelector(".header");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



/* =========================================
   MOBILE MENU
========================================= */

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", isOpen);

});


/* Close menu after link click */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");
        navMenu.classList.remove("open");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});



/* =========================================
   HEADER SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================================
   ACTIVE NAVIGATION SECTION
========================================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 180;


    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") === `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);



/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".project-card, .skill-group, .education-card, .about-content, .about-image"
);


/* Add reveal class */

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


/* Intersection Observer */

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   SMOOTH SCROLL FALLBACK
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});