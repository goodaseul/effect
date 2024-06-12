$(function () {
    let wrapTab = document.querySelectorAll(".tab li");
    let wrapCont = document.querySelectorAll(".wrap_tab_cont .cont");
    wrapTab.forEach((item, index) => {
        item.addEventListener("click", () => {
            wrapTab.forEach((item) => {
                item.classList.remove("active");
            });
            wrapTab[index].classList.add("active");
            wrapCont.forEach((item) => {
                item.classList.remove("active");
            });
            wrapCont[index].classList.add("active");
        });
    });
});
