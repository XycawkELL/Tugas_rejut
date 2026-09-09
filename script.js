// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById("hamburger");
const navLinks  = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===========================
// TYPING ANIMATION
// ===========================
const roles = [
  "Pelajar SMK Telkom Purwokerto",
  "Frontend Enthusiast",
  "Web Developer",
];

let roleIndex = 0;
let charIndex  = 0;
let isDeleting = false;
const typedEl  = document.getElementById("typed");

function type() {
  if (!typedEl) return;
  const current = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex  = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(type, speed);
}

type();

// ===========================
// SCROLL FADE-IN ANIMATION
// ===========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  ".info-card, .stat-card, .skill-group, .experience-card, .project-card, .contact-link, .about-text"
).forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ===========================
// CONTACT FORM (IF PRESENT)
// ===========================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const btn = this.querySelector("button[type=submit]");
    const originalText = btn.textContent;

    btn.textContent = "Terkirim! ✅";
    btn.disabled = true;
    btn.style.background = "#22c55e";

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = "";
      this.reset();
    }, 3000);
  });
}

// ===========================
// SMOOTH ACTIVE NAV HIGHLIGHT
// ===========================
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navAnchors.forEach(a => {
    a.style.color = a.getAttribute("href") === `#${current}`
      ? "var(--accent)"
      : "";
  });
});
