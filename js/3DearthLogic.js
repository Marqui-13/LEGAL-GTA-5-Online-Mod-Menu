// GSAP Timeline

const timeline = gsap.timeline({ defaults: { duration: .7 }})
timeline.from('.hamburger3', { opacity: 0, ease: "bounce.out", x: -2300 })
timeline.from('.letters', { opacity: 0, x: 800, ease: "elastic.out(1, 0.1)", stagger: .23 })
timeline.from('.linea', { opacity: 0, ease: "bounce.out", x: -2400, rotation: 720, stagger: 0.15 })
timeline.from('.link', { opacity: 0, x: -2300, ease: "power3.out", duration: 1.5, rotation: -1440, stagger: .5 })
timeline.from('#list div', { opacity: 0, x: -100, stagger: .3, ease: "elastic.out(1, 0.3)" })
timeline.from('#listR div', { opacity: 0, x: -100, stagger: .3, ease: "elastic.out(1, 0.3)" })
gsap.from('.fl', { opacity: 0, x: -1300, rotation: -1440, duration: 2.5, ease: "bounce.inOut", stagger: .23 })
