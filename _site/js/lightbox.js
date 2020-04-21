$( document ).ready(function() {
  $(".beehive-gallery a").click(function(){
    $("body").addClass("lightbox-active");
  });

  $(".lb-close, #lightboxOverlay").click(function(){
    $("body").removeClass("lightbox-active");
    console.log("i saw that");
  });
});
