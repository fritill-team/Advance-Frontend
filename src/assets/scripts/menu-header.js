$(document)
  .on("click", ".header-menu", function () {
    $(".menu").toggleClass("menu--open");
    $(".page").toggleClass("no-scroll");
    $(".overlay").addClass("overlay--active");
  })

  .on("click", ".overlay", function () {
    $(this).removeClass("overlay--active");
    $(".page").removeClass("no-scroll");
    $(".menu").removeClass("menu--open");
  });

// close menu on click body
// $(".wrapper__overlay").on("click", function (event) {
//   $(".menu").toggleClass("menu--open");
//   $("body").toggleClass("overlay");
//   event.stopPropagation();
// });
// open data menu

$(".list-item-date").each(function () {
  $(this).on("mouseenter", function () {
    $(".menu__date").toggleClass("active");
    // if ($('.menu__date').hasClass('active')) {
    //   $('.menu__date').removeClass('active');
    // }else {
    //   $('.menu__date').addClass('active');
    // }
  });
  $(this).on("mouseleave", function () {
    // $('.menu__date').toggleClass('active')
  });
});
