$(function () {
    const navHeight = document.querySelector(".nav").clientHeight;
    $(".nav ul li > a").click(function (event) {
        event.preventDefault();
        const num = $(".nav ul li > a").index($(event.currentTarget));

        $(".nav ul li > a").removeClass("active");
        $(`.nav ul li > a:eq(${num})`).addClass("active");

        $("html,body").animate({ scrollTop: $(this.hash).offset().top - navHeight }, 300);
    });
    activeMenu();
    window.addEventListener("scroll", activeMenu);
});

function activeMenu() {
    const sections = document.querySelectorAll(".container .section");
    const link = document.querySelectorAll(".container .nav ul li a");
    const navHeight = document.querySelector(".nav").clientHeight;

    let len = sections.length;
    console.log(len);
    while (--len && window.scrollY < sections[len].offsetTop - navHeight) {}
    link.forEach((item) => item.classList.remove("active"));
    link[len].classList.add("active");
}
