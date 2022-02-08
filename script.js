
$("document").ready(function(){

 //customized cursor --> can you add noise to this or do you need to create a separate image

  var cursor = $('.cursor');

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
  
    $(window)
    .mousedown(function() {
      cursor.css({
        opacity: "0.5"
      });
    })
    .mouseup(function() {
      cursor.css({
        opacity: "1"
      });
    });

    $(window)
    .mouseleave(function() {
      cursor.css({
        opacity: "0"
      });
    })
    .mouseenter(function() {
      cursor.css({
        opacity: "1"
      });
    });

    $(window)
    .mousedown(function() {
      cursor.css({
        opacity: "0.5"
      });
    })
    .mouseup(function() {
      cursor.css({
        opacity: "1"
      });
    });

});




