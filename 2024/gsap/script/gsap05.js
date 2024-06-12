const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

const animate = (item) => {
    let x = 100;
    let delay = item.dataset.delay;
    if (item.classList.contains("reveal_LTR")) {
        x = -100;
    } else if (item.classList.contains("reveal_BTT")) {
        x = 0;
        y = 100;
    } else {
        x = 100;
        y = 0;
    }

    // fromTo: 전후 가능
    gsap.fromTo(
        item,
        {
            // 전
            autoAlpha: 0,
            x: x,
            y: y,
        },
        {
            // 후
            autoAlpha: 1,
            x: 0,
            y: 0,
            delay: delay,
            duration: 1.25,
            overwrite: "auto", // 애니메이션 버그 같지 않게
        }
    );
};

gsap.utils.toArray(".reveal").forEach((item) => {
    hide(item);
    ScrollTrigger.create({
        trigger: item,
        //위아래로 꽉차게 해주면 깜빡이는 부분이 안보임
        start: "top bottom", // 위에서 내리면서 밑으로 나오는거니까
        end: "bottom top", // 밑에서 위로 올라오면서
        markers: false,
        onEnter: () => {
            animate(item);
        },
    });

    // item.style.opacity = "0";
});
