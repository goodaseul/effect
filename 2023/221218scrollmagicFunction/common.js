var controller = new ScrollMagic.Controller();

$(function () {
    $(".effect").each(function (target) {
        var tween = TweenMax.from($(this), 1, {
            autoAlpha: 0,
            opacity: 0,
            y: "50",
            // ease: Expo.easeInOut,
        });
        // build a scene
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "100%",
            // scrub: 1,
            // triggerHook: 1,
            // reverse: false,
        })
            .setTween(tween) // trigger a TweenMax.to tween
            .addTo(controller);
    });
});
