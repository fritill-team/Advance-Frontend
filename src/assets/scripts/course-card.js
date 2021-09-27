$(document)
  .on("mouseenter", '.course-card-container .course-card__preview', function () {
    var parent = $(this).closest('.course-card')
    parent.addClass("course-card--hover")

  })
  .on("mouseleave", '.course-card-container .course-card__preview', function () {
    $(this).closest('.course-card').removeClass("course-card--hover")
  })

const courseTemplate = function (course) {
  return `
    <div class="course-card">
      <div class="course-card__preview">
        <div class="course-card__preview-video youtube-player" data-video-id="${course.video_id}"></div>
        <div class="course-card__preview-overlay"></div>
      </div>
      <div class="course-card__content">
        <div class="course-card__meta">
          <span class="body-2">${course.subscribers}</span>
          <span class="body-2">${course.duration}</span>
          <p class="body-2 course-card__rate">
            <i class="fa fa-star"></i>${course.total_rate}
          </p>
        </div>
        <a class="title-link text-2 semi-bold" href="">${course.title}</a>
        <p class="text-3 gray">${course.category}</p>
        <div class="course-card__footer">
           <button class="btn btn--outlined btn--primary">Enroll</button>
           <button class="btn btn--text btn--danger icon--hover"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    </div>`
}


$(".course-card-container").each(function (i, item) {
  let course = $(item),
    data = course.data("data")
  course.html($(courseTemplate(data)))
})

