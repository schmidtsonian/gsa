$(document).ready(function() {
    $("section.tab a.to-open")
        .on('click', function(event) {
            event.preventDefault();

            var bt = $(this),
                el = bt.parent(),
                container = el.find(".container"),
                theEls = el.find(".holder").find(".el");

            if (el.hasClass("active")) {

                el.removeClass("active");


                var theEls = theEls.get().reverse();

                TweenMax.staggerTo(theEls, 0.45, {
                    autoAlpha: 0,
                    left: "-200%",
                    ease: Cubic.easeIn
                }, 0.15);

                setTimeout(function() {
                    TweenMax.to(container, 0.05, {
                        height: 0,
                        ease: Cubic.easeIn,
                        onComplete: function() {
                            TweenMax.set(theEls, {
                                autoAlpha: 1,
                                left: 0,
                            });
                            container.css("height", "auto")
                            container.hide();
                        }
                    })
                }, (theEls.length - 1) * 0.45 * 1000);
            } else {
                el.addClass("active");
                container.show();
                TweenMax.staggerFromTo(theEls, 0.45, {
                    autoAlpha: 0,
                    left: "-200%",
                }, {
                    autoAlpha: 1,
                    left: 0,
                    delay: 0.15,
                    ease: Cubic.easeOut,
                }, 0.15)
            }
        });
});