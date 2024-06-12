let sections = gsap.utils.toArray(".parallax__item");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#parallax__cont",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // end: "+=7000",
        end: document.querySelector("#parallax__cont").offsetWidth,
    },
});
