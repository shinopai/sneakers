$(function () {
  // image slider
  $("#slick01").slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
    centerMode: true,
  });

  // scroll fade
  $(window).scroll(function () {
    scroll_fade();
  });

  function scroll_fade() {
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    var ww = $(window).width();

    $(".scroll_fade").each(function () {
      if (ww < 1024) {
        var yy = $(this).offset().top + 200;
      } else {
        var yy = $(this).offset().top + 400;
      }
      if (tt > yy - hh) {
        $(this).addClass("done");
      }
    });
  }

  // menu
  $("#open_menu_button").click(function () {
    $(this).addClass("inactive");
    $("#overlay, #close_menu_button").addClass("active");
    $("#menu").animate({ marginLeft: "350px" }, 500);
  });

  $("#close_menu_button, #overlay").click(function () {
    $("#menu").animate({ marginLeft: "-350px" }, 500);
    $(this).removeClass("active");
    $("#open_menu_button").removeClass("inactive");
  });
});
