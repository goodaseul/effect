const showNav = gsap
    .from("#parallax__nav", {
        yPercent: -200,
        paused: true, // 초기에 애니메이션 속성을 일시정지
        duration: 0.2,
    })
    .progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999, // 페이지의 끝까지 트리거가 유지되도록
    onUpdate: (self) => {
        // 업데이트가 될 때마다 호출 // self매개변수를 통해서 트리거 자체에 접근
        self.direction === -1 ? showNav.play() : showNav.reverse();
    },
});
