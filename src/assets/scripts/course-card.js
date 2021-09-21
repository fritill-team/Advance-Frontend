$(".course-hover .card-media__card-img").mouseover(function () {
  $(".course-card").addClass("course-card--hover");
});
$(".course-hover .card-media__card-img").mouseout(function () {
  $(".course-card").removeClass("course-card--hover");
});
// $(".course-hover .card-media__card-img").mousemove(function() {
//   $(".course-card" ).removeClass("course-card--hover");
// });
// $(document).ready(function() {
//   $("#iframe").on("mouseover", function(event) {
//     $(this).play();

//   }).on('mouseout', function(event) {
//     (this).pause();
//   });
// })
// var playersrc = $('#iframe').attr('src');
// $('#iframe').mouseover(function () {
//   $('#iframe').attr('src', playersrc + '&autoplay=1');
// });
// $('#iframe').mouseout(function () {
//   $('#iframe').attr('src', playersrc);
// });
$(document).ready(function () {
  $("#iframe").on("mouseover", function () {

    $(this).attr("src", $(this).attr("src") + "&amp;autoplay=1");
  });

  $("#iframe").on("mouseleave", function () {
    var src = $(this).attr("src");
    var arr_str = src.split("&amp;");
    $(this).attr("src", arr_str[0]);
    console.log(src);
  });
});