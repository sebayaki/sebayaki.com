// Intersection Observer for project animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all projects
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    observer.observe(project);
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add parallax effect to project images on scroll
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const projects = document.querySelectorAll(".project.visible");
        projects.forEach((project) => {
          const rect = project.getBoundingClientRect();
          const scrollPercent =
            (window.innerHeight - rect.top) /
            (window.innerHeight + rect.height);
          const image = project.querySelector(".project-image img");

          if (image && scrollPercent >= 0 && scrollPercent <= 1) {
            const translateY = (scrollPercent - 0.5) * 20;
            image.style.transform = `translateY(${translateY}px) scale(1)`;
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  });

  // Add hover effect to project numbers
  const projectNumbers = document.querySelectorAll(".project-number");
  projectNumbers.forEach((number) => {
    number.addEventListener("mouseenter", () => {
      number.style.transform = "scale(1.2)";
      number.style.transition = "transform 0.3s ease";
    });

    number.addEventListener("mouseleave", () => {
      number.style.transform = "scale(1)";
    });
  });

  // Cursor trail effect (subtle)
  let cursorTrail = [];
  const maxTrailLength = 5;

  document.addEventListener("mousemove", (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

    if (cursorTrail.length > maxTrailLength) {
      cursorTrail.shift();
    }
  });

  // Add floating animation to badges
  const badges = document.querySelectorAll(".badge");
  badges.forEach((badge, index) => {
    badge.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
  });

  // Add CSS for float animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-3px);
            }
        }
    `;
  document.head.appendChild(style);

  // Console easter egg
  console.log(
    "%c sebayaki.com ",
    "background: #000; color: #fff; padding: 8px 16px; font-size: 14px; font-weight: bold;"
  );
  console.log(
    "%c on-chain experiments playground ✨",
    "color: #888; font-size: 12px;"
  );
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});
