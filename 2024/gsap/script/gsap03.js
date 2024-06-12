//01 한개 섹션 고정
// const panel5 = document.getElementById("section5");

// ScrollTrigger.create({
//     trigger: panel5,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,
// });

//02 여러개 섹션 고정
// const panels = document.querySelectorAll(".parallax__item");

// panels.forEach((item) => {
//     ScrollTrigger.create({
//         trigger: item,
//         start: "top top",
//         pin: true,
//         pinSpacing: false, // 여백/공간 이 생기면 true 로
//     });
// });

//03 스냅 고정 효과 만들기
let panels = gsap.utils.toArray(".parallax__item");
let tops = panels.map((panel) => ScrollTrigger.create({ trigger: panel, start: "top top" }));

panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: () => (panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom"),
        pin: true,
        pinSpacing: false,
    });
});

ScrollTrigger.create({
    snap: {
        snapTo: (progress, self) => {
            let panelStarts = tops.map((st) => st.start),
                snapScroll = gsap.utils.snap(panelStarts, self.scroll());
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5,
    },
});
