var tl = gsap.timeline()


tl.from(".nav h1, .nav h4, .nav button", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.3
})