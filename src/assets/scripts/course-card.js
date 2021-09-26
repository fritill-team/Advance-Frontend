$(document)
.on('mouseover', '.card-media__card-img', function () {
  $(".course-card").addClass("course-card--hover");
})
$(document)
.on('mouseout', '.card-media__card-img', function () {
  $(".course-card").removeClass("course-card--hover");
})

// video ifream
