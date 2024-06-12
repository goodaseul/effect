//01 전체 배경 변경
// let bg = gsap.timeline({
//     scrollTrigger: {
//         start: 0,
//         end: "max",
//         scrub: true,
//     },
// });

// bg.to("body", { "--bg-color": "red" }).to("body", { "--bg-color": "green" }).to("body", { "--bg-color": "blue" });

//02 section별로 data 값으로 변경
gsap.utils.toArray(".parallax__item").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
        trigger: item,
        top: "top 50%",
        bottom: "bototm 50%",
        markers: true,
        onEnter: () => {
            gsap.to("body", {
                backgroundColor: color,
                duration: 1.4,
            });
        },
        onEnterBack: () => {
            gsap.to("body", {
                backgroundColor: color,
                duration: 1.4,
            });
        },
    });
});
