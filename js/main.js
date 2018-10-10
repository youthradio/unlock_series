$("document").ready(function() {
    var waypoint = new Waypoint({
        element: $('#play'),
        handler: function() {
            $('.media-title-first').addClass("load");
            setTimeout(function() {
                $('.media-title-sec').addClass("load")
            }, 2500);
        },
    });

    function init() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
        $("#main-el").addClass("load");
        audiojs.events.ready(function() {
            var as = audiojs.createAll();
        });
    }

    init();
});