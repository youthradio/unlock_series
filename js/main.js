$("document").ready(function(){
  var waypoint = new Waypoint({
    element: $('#play'),
    handler: function() {
      $('.media-title').addClass("load");
      setTimeout( function(){$('.media-title-sec').addClass("load")}, 1000);
    },
  });

function init(){
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });
  $("#main-el").addClass("load");
}

  init();
});
