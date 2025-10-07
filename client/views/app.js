(function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");
  const navCar = document.querySelector(".nav-race-car");
  const navLinks = document.querySelectorAll(".nav-link");
  const statNumbers = document.querySelectorAll(".stat-number");
  function updateNavbar() {
    const scrollTop = window.pageYOffset;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;

    if (navCar) {
      const carTravelDistance = navbar.offsetWidth - navCar.offsetWidth;
      const carPosition = (scrollProgress / 100) * carTravelDistance;
      navCar.style.transform = `translateX(${carPosition}px)`;
    }
  }

  hamburger?.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";

      if (targetSection) {
        e.preventDefault();
        const navbarHeight = navbar.offsetHeight + 40;
        const offsetTop = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: "smooth",
        });
      }
    });
  });

  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  }

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -30px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        if (entry.target.classList.contains("stat-card")) {
          const numberElement = entry.target.querySelector(".stat-number");
          const target = parseInt(numberElement.getAttribute("data-target"));
          const cards = Array.from(document.querySelectorAll(".stat-card"));
          const index = cards.indexOf(entry.target);
          setTimeout(() => {
            animateCounter(numberElement, target);
          }, index * 150);
        }

        if (entry.target.classList.contains("timeline-event")) {
          entry.target.classList.add("in-view");
        }
      }
    });
  }, observerOptions);
  function addMentorCardEffects() {}

  function initHorizontalTimeline() {
    const stickyContainer = document.querySelector(
      ".timeline-sticky-container"
    );
    const timelineWrapper = document.querySelector(".timeline-wrapper");
    if (!stickyContainer || !timelineWrapper) return;

    const car = timelineWrapper.querySelector(".timeline-car");
    let horizontalScrollLength = 0;

    function setTimelineHeight() {
      horizontalScrollLength =
        timelineWrapper.scrollWidth - timelineWrapper.clientWidth;
      stickyContainer.style.height = `${
        horizontalScrollLength + timelineWrapper.offsetHeight
      }px`;
    }

    function updateTimelineOnScroll() {
      if (horizontalScrollLength <= 0) return;

      const scrollFromTop = window.pageYOffset;
      const stickyTop =
        stickyContainer.getBoundingClientRect().top + scrollFromTop;
      const scrollAmount = Math.max(0, scrollFromTop - stickyTop);

      if (scrollAmount > 0 && scrollAmount <= horizontalScrollLength) {
        timelineWrapper.scrollLeft = scrollAmount;
      } else if (scrollAmount > horizontalScrollLength) {
        timelineWrapper.scrollLeft = horizontalScrollLength;
      } else {
        timelineWrapper.scrollLeft = 0;
      }

      const progress = timelineWrapper.scrollLeft / horizontalScrollLength;
      const timelineContainer = timelineWrapper.querySelector(
        ".timeline-container"
      );
      const startOffset = timelineContainer.offsetLeft;
      const carPosition =
        startOffset +
        progress *
          (timelineWrapper.clientWidth - car.offsetWidth - startOffset);
      car.style.left = `${carPosition}px`;
    }

    setTimelineHeight();
    window.addEventListener("scroll", updateTimelineOnScroll);
    window.addEventListener("resize", setTimelineHeight);
  }

  function enhanceTimeline() {
    const timelineEvents = document.querySelectorAll(".timeline-event");
    timelineEvents.forEach((event) => {
      event.style.opacity = "0";
      observer.observe(event);
    });
  }

  let ticking = false;

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar();
        ticking = false;
      });
      ticking = true;
    }
  }

  const customAnimations = `
  @keyframes enhanced-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(237, 17, 49, 0.7);
    }
    70% {
      box-shadow: 0 0 0 20px rgba(237, 17, 49, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(237, 17, 49, 0);
    }
  }
  
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;

  const animationStyleSheet = document.createElement("style");
  animationStyleSheet.textContent = customAnimations;
  document.head.appendChild(animationStyleSheet);

  document.addEventListener("DOMContentLoaded", () => {
    const elementsToObserve = document.querySelectorAll(
      ".stat-card, .timeline-event"
    );
    elementsToObserve.forEach((el) => {
      if (!el.classList.contains("timeline-event")) el.style.opacity = "0";
    });
    elementsToObserve.forEach((el) => observer.observe(el));
    addMentorCardEffects();
    handleScroll();
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 800);
  });

  enhanceTimeline();
  initHorizontalTimeline();
  window.addEventListener("scroll", handleScroll);
})();
