document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Formula Hacks script loaded');

  if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  if (typeof ScrollSmoother !== 'undefined') {
    gsap.registerPlugin(ScrollSmoother);
  }

  const carFixed = document.getElementById('carFixed');
  const carImg = document.getElementById('carImg');
  const mainPathBase = document.getElementById('mainPathBase');
  const mainPathGlow = document.getElementById('mainPathGlow');

  if (!carFixed || !mainPathBase || !mainPathGlow) {
    console.error('Missing required DOM elements:', { carFixed, mainPathBase, mainPathGlow });
    return;
  }

  gsap.set(carFixed, { autoAlpha: 0, transformOrigin: '50% 50%' });

  let pathLen = 0;
  try {
    pathLen = mainPathGlow.getTotalLength();
    mainPathGlow.style.strokeDasharray = pathLen;
    mainPathGlow.style.strokeDashoffset = pathLen;
  } catch (e) {
    console.warn('Could not compute path length (SVG).', e);
  }

  let smoother = null;
  const isDesktop = window.innerWidth >= 960;
  if (isDesktop && typeof ScrollSmoother !== 'undefined') {
    try {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.4,
        effects: true,
        normalizeScroll: true
      });
      console.log('ScrollSmoother enabled');
    } catch (e) {
      console.warn('ScrollSmoother init failed', e);
    }
  }

  const firstSection = document.getElementById('home');
  const lastSection = document.getElementById('sponsors');

  if (firstSection && lastSection) {
    ScrollTrigger.create({
      trigger: firstSection,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(carFixed, { autoAlpha: 1, duration: 0.5, ease: 'power2.out' });
      },
      onLeaveBack: () => {
        gsap.to(carFixed, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' });
      }
    });

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: firstSection,
        start: 'top top',
        endTrigger: lastSection,
        end: 'bottom bottom',
        scrub: 0.8,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0 && progress < 1) {
            gsap.set(carFixed, { autoAlpha: 1 });
          }
        }
      }
    });

    mainTimeline.to(carFixed, {
      motionPath: {
        path: mainPathBase,
        align: mainPathBase,
        alignOrigin: [0.5, 0.6],
        autoRotate: true,
        start: 0,
        end: 1
      },
      ease: 'none'
    }, 0);

    mainTimeline.to(mainPathGlow, {
      strokeDashoffset: 0,
      opacity: 0.8,
      ease: 'none'
    }, 0);

    ScrollTrigger.create({
      trigger: lastSection,
      start: 'bottom bottom',
      onLeave: () => {
        gsap.to(carFixed, { autoAlpha: 0, duration: 0.5, ease: 'power2.out' });
      },
      onEnterBack: () => {
        gsap.to(carFixed, { autoAlpha: 1, duration: 0.3, ease: 'power2.in' });
      }
    });
  }

  gsap.utils.toArray('.section, .content-section').forEach((el) => {
    gsap.fromTo(el, { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });

  document.querySelectorAll('.tl-item').forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 80%',
      end: 'top 55%',
      onEnter: () => item.classList.add('active'),
      onEnterBack: () => item.classList.add('active'),
      onLeave: () => item.classList.remove('active'),
      onLeaveBack: () => item.classList.remove('active')
    });
  });

  gsap.to('.register-btn', { boxShadow: '0 10px 30px rgba(217,4,41,0.12)', repeat: -1, yoyo: true, duration: 2 });

  const indicator = document.getElementById('scrollIndicator');
  function hideIndicator() {
    if (!indicator) return;
    gsap.to(indicator, { opacity: 0, y: 10, duration: 0.5, ease: 'power2.out' });
    window.removeEventListener('wheel', hideIndicator);
    window.removeEventListener('touchstart', hideIndicator);
  }
  window.addEventListener('wheel', hideIndicator, { passive: true });
  window.addEventListener('touchstart', hideIndicator, { passive: true });

  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      if (smoother) smoother.scrollTo(t, true, 'top 20px');
      else t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const heroTrackDot = document.getElementById('heroTrackDot');
  const heroTrackPath = document.getElementById('heroTrackPath');
  if (heroTrackDot && heroTrackPath) {
    gsap.to(heroTrackDot, {
      motionPath: {
        path: heroTrackPath,
        align: heroTrackPath,
        alignOrigin: [0.5, 0.5],
        autoRotate: false
      },
      duration: 8,
      repeat: -1,
      ease: 'none'
    });
  }

  console.log('Animation setup complete');
});
