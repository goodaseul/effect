//01 하나의 텍스트 분리하기
// let text = document.querySelector(".split");
// let splitText = text.innerText;
// let splitWrap = splitText.split("").join("</span><span>");
// text.innerHTML = splitWrap = `<span> ${splitWrap}`;
// text.setAttribute("aria-label", text.innerText);

//02 모든 텍스트 분리하기
// let text = document.querySelectorAll(".split");
// text.forEach((item) => {
//     let splitWrap = item.innerText.split("").join("</span><span aria-hidden='true'>");
//     item.innerHTML = `<span aria-hidden='true'>${splitWrap}</span>`;

//     item.setAttribute("aria-label", item.innerText);
// });

//03 모든 텍스트 분리하기 : 여백 표현하기
// text.forEach((item) => {
//     let theText = item.innerText;
//     let newText = "";
//     for (let i = 0; i < item.innerText.length; i++) {
//         newText += `<span aria-hidden='true'>`;
//         if (item.innerText[i] == " ") {
//             newText += "&nbsp";
//         } else {
//             newText += item.innerText[i];
//         }
//         newText += `</span>`;
//     }
//     item.innerHTML = newText;
//     item.setAttribute("aria-label", theText);
// });

// spit 하나만 나타나기
// gsap.from(".split span", {
//     y: "100%",
//     autoAlpha: 0,
//     duration: 2,
//     ease: "circ.out",
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".split",
//         start: "top center",
//         end: "+=400",
//         markers: true,
//         scrub: 1,
//     },
// });

// split 된 거 나타나기 애니메이션
// text.forEach((item) => {
//     gsap.from(item.querySelectorAll("span"), {
//         x: 100,
//         y: 100,
//         // scale: 10,
//         // y: "100%",
//         autoAlpha: 0,
//         duration: 1,
//         rotation: 100,
//         ease: "circ.out",
//         stagger: {
//             amount: 1,
//             from: "random",
//         },
//         scrollTrigger: {
//             trigger: item,
//             start: "top bottom",
//             end: "+=400",
//             markers: true,
//             // scrub: 1,
//         },
//     });
// });

// 04 split-type 사용

const targets = gsap.utils.toArray(".split");

targets.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

    gsap.from(chars, {
        x: 100,
        y: 100,
        // scale: 10,
        // y: "100%",
        autoAlpha: 0,
        duration: 1,
        rotation: 100,
        ease: "circ.out",
        stagger: {
            amount: 1,
            from: "random",
        },
        scrollTrigger: {
            trigger: lines,
            start: "top bottom",
            end: "+=400",
            markers: true,
            // scrub: 1,
        },
    });
});
