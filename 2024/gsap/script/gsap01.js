const box1 = document.querySelector("#section1 .parallax__item__img");
const box2 = document.querySelector("#section2 .parallax__item__img");
const box3 = document.querySelector("#section3 .parallax__item__img");
const box4 = document.querySelector("#section4 .parallax__item__img");
const box5 = document.querySelector("#section5 .parallax__item__img");
const box6 = document.querySelector("#section6 .parallax__item__img");
const box7 = document.querySelector("#section7 .parallax__item__img");
const box8 = document.querySelector("#section8 .parallax__item__img");

//01 기본 애니메이션
gsap.to(box1, {
    x: 500,
    duration: 1, //1 = 1초
    borderRadius: 100,
    rotation: 360,
});

//02 trigger
gsap.to(box2, {
    x: 500,
    duration: 2,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
        trigger: box2,
    },
});

//03 toggleActions
gsap.to(box3, {
    x: 500,
    duration: 2,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
        trigger: box3,
        toggleActions: "play pause reverse none",
        // onEnter onLeave onEnterBack onLeaveBack
    },
});

//04 start end
gsap.to(box4, {
    x: 500,
    duration: 2,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
        trigger: box4,
        start: "top 50%",
        end: "bototm 20%",
        toggleActions: "play pause reverse none",
        markers: false,
    },
});

//05 : scrub
gsap.to(box5, {
    x: 500,
    duration: 2,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
        trigger: box5,
        start: "top 50%",
        end: "bototm 20%",
        scrub: 1, // true , 1 , 2
        markers: false,
    },
});

//06 : pin
gsap.to(box6, {
    x: 500,
    duration: 2,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
        trigger: box6,
        start: "top 50%",
        // end: "top 100%",
        end: "top 200px",
        scrub: 1, // true , 1 , 2
        pin: true,
        markers: false,
    },
});

//07 : toggleClass
gsap.to(box7, {
    x: 500,
    duration: 2,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
        trigger: box7,
        start: "top center",
        end: "bottom top",
        scrub: 1, // true , 1 , 2
        toggleClass: "active",
        markers: false,
        id: "box7",
    },
});

//08 : callback function
gsap.to(box8, {
    x: 500,
    duration: 2,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
        trigger: box8,
        start: "top center",
        end: "bottom top",
        scrub: 1, // true , 1 , 2
        markers: true,
        id: "box8",
        onEnter: () => {
            console.log("onEnter");
        },
        onLeave: () => {
            console.log("onLeave");
        },
        onEnterBack: () => {
            console.log("onEnterBack");
        },
        onLeaveBack: () => {
            console.log("onLeaveBack");
        },
        onUpdate: (self) => {
            console.log("onUpdate", self.progress.toFixed(3));
        },
        onToggle: (self) => {
            console.log("onToggle", self.isActive);
        },
    },
});
