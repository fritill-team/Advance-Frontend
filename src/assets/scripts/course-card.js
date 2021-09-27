// var courseCard = $(".course-hover .card-media__card-img")

$(document)
  .on("mouseenter", '.course-hover .course-card', function () {
    $(this).addClass("course-card--hover");
  })
  .on("mouseleave", '.course-hover .course-card', function () {
    $(this).removeClass("course-card--hover");
  })

  // .mouseout(function () {
  //   $(".course-card").removeClass("course-card--hover");
  // });
// $(".course-hover .card-media__card-img").mousemove(function() {
//   $(".course-card" ).removeClass("course-card--hover");
// });
