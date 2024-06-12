// gsap 안에 scrolltrigger 를 쓰는 것보다 좀 더 많은 옵션 사용가능
let section1 = document.getElementById("section1");
let section1Img = document.querySelector("#section1 .parallax__item__img");
const ani1 = gsap.timeline();

//01 이미지 애니메이션 주기
ani1.to(section1Img, {
    rotation: 720,
    scale: 0,
    borderRadius: 200,
}).to(section1Img, {
    rotation: 0,
    scale: 1,
    borderRadius: 20,
});

ScrollTrigger.create({
    animation: ani1,
    trigger: section1,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: false,
    id: "section1",
});

let section2 = document.getElementById("section2");
const ani2 = gsap.timeline();

//02 이미지 순차적으로 나오기
ani2.from("#section2 .i1", {
    y: -100,
    autoAlpha: 0,
})
    .from("#section2 .i2", {
        y: 100,
        autoAlpha: 0,
    })
    .from("#section2 .i3", {
        y: -100,
        autoAlpha: 0,
    });

ScrollTrigger.create({
    animation: ani2,
    trigger: section2,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: true,
    id: "section2",
});

let section3 = document.getElementById("section3");
const ani3 = gsap.timeline();
//03 이미지를 랜덤으로 나오기
ani3.from("#section3 .parallax__item__img", {
    y: -100,
    autoAlpha: 0,
    ease: "back.out(4)",
    // stagger: 0.1,
    stagger: {
        amount: 3, //빠르기
        from: "random", // 효과
    },
});

ScrollTrigger.create({
    animation: ani3,
    trigger: section3,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: true,
    id: "section3",
});

let section4 = document.getElementById("section4");
const ani4 = gsap.timeline();
ani4.from("#section4 .parallax__item__img", {
    autoAlpha: 0,
    scale: 5,
    width: "100vw",
    height: "100vh",
});
//04 이미지 축소하기
ScrollTrigger.create({
    animation: ani4,
    trigger: section4,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: true,
    id: "section4",
});

let section5 = document.getElementById("section5");
const ani5 = gsap.timeline();
ani5.to(
    "#section5 .t1",
    {
        xPercent: 300,
    },
    "text" // 임의의 문자를 동일하게 하면 같이 동작
)
    .to(
        "#section5 .t2",
        {
            xPercent: -300,
        },
        "text" // "-=1" 순서가 먼저 움직임
    )
    .to(
        "#section5 .t3",
        {
            xPercent: 300,
        },
        "text"
    )
    .to(
        "#section5 .t4",
        {
            xPercent: -300,
        },
        "text"
    );
//05 텍스트 애니메이션
ScrollTrigger.create({
    animation: ani5,
    trigger: section5,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: true,
    id: "section5",
});

let section6 = document.getElementById("section6");
const ani6 = gsap.timeline();

ani6.to("#section6 .parallax__item__text", {
    scale: 60,
    duration: 2,
}).to("#section6 .parallax__item__text", {
    autoAlpha: 0,
});
//06 텍스트 확대하기
ScrollTrigger.create({
    animation: ani6,
    trigger: section6,
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: true,
    id: "section6",
});

let section7 = document.getElementById("section7");
const ani7 = gsap.timeline();

ani7.from(
    "#section7 .t1",
    {
        autoAlpha: 0,
        duration: 1,
        y: 50,
    },
    "+=1"
)
    .from(
        "#section7 .t2",
        {
            autoAlpha: 0,
            duration: 1,
            y: 50,
        },
        "+=1"
    )
    .from(
        "#section7 .t3",
        {
            autoAlpha: 0,
            duration: 1,
            y: 50,
        },
        "+=1"
    )
    .from(
        "#section7 .t4",
        {
            autoAlpha: 0,
            duration: 1,
            y: 50,
        },
        "+=1"
    )
    .from(
        "#section7 .t5",
        {
            autoAlpha: 0,
            duration: 1,
            y: 50,
        },
        "+=1"
    )
    .from(
        "#section7 .t6",
        {
            autoAlpha: 0,
            duration: 1,
            y: 50,
        },
        "+=1"
    )
    .from(
        "#section7 .t7",
        {
            autoAlpha: 0,
            duration: 1,
            y: 50,
        },
        "+=1"
    );

//07 텍스트 제자리 애니메이션
ScrollTrigger.create({
    animation: ani7,
    trigger: section7,
    start: "top top",
    end: "+=6000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: true,
    id: "section7",
});

let section8 = document.getElementById("section8");
const ani8 = gsap.timeline();

ani8.from("#section8 .t1", {
    x: innerWidth * 1,
})
    .from("#section8 .t2", {
        x: innerWidth * -1,
    })
    .from("#section8 .t3", {
        x: innerWidth * 1,
    })
    .from("#section8 .i1", {
        x: innerWidth * -1,
        rotation: 360,
        scale: 5.5,
    });
//08 텍스트 애니메이션
ScrollTrigger.create({
    animation: ani8,
    trigger: section8,
    start: "top top",
    end: "+=6000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    markers: true,
    id: "section8",
});

let section9 = document.getElementById("section9");
const ani9 = gsap.timeline();

ani9.to("#section9 .parallax__item__img", {
    scale: 13,
}).to("#section9 .parallax__item__img", {
    autoAlpha: 0,
});
//09 이미지 확대하기
ScrollTrigger.create({
    animation: ani9,
    trigger: section9,
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1,
});
