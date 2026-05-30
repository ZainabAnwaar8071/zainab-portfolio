/* ==========================================
   DARK / LIGHT MODE TOGGLE
========================================== */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme
themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});


/* ==========================================
   ANIMATED TYPING EFFECT
========================================== */

const words = [
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Django Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

typeEffect();


/* ==========================================
   PROJECT IMAGE CAROUSEL
========================================== */

const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {

    const images =
        carousel.querySelectorAll("img");

    let currentIndex = 0;

    if (images.length <= 1) return;

    setInterval(() => {

        images[currentIndex]
            .classList.remove("active");

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        images[currentIndex]
            .classList.add("active");

    }, 3000);

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .timeline-item"
    );

revealElements.forEach((el) => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    const triggerBottom =
        window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================================
   NAVBAR SHADOW ON SCROLL
========================================== */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "none";
    }

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });

});


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "Thank you! Your message has been submitted."
            );

            contactForm.reset();
        }
    );

}


/* ==========================================
   SMOOTH SCROLLING
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            }
        );

    });


/* ==========================================
   FYP PROGRESS BAR ANIMATION
========================================== */

const progressBar =
    document.querySelector(".progress-fill");

function animateProgress() {

    if (!progressBar) return;

    let width = 0;

    const target = 70;

    const interval =
        setInterval(() => {

            if (width >= target) {

                clearInterval(interval);

            } else {

                width++;

                progressBar.style.width =
                    width + "%";
            }

        }, 20);
}

window.addEventListener(
    "load",
    animateProgress
);


/* ==========================================
   HERO FADE-IN ANIMATION
========================================== */

window.addEventListener("load", () => {

    const hero =
        document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform =
            "translateY(40px)";

        setTimeout(() => {

            hero.style.transition =
                "all 1s ease";

            hero.style.opacity = "1";
            hero.style.transform =
                "translateY(0)";

        }, 200);
    }

});


/* ==========================================
   BACK TO TOP BUTTON (OPTIONAL)
========================================== */

const backToTop =
    document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.fontSize = "20px";
backToTop.style.color = "#fff";
backToTop.style.background =
    "linear-gradient(135deg,#c084fc,#f472b6)";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});