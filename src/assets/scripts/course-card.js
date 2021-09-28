const breakpoints = {
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200,
  'xxl': 1400
}
const getBreakpoint = function () {
  var docWidth = $(document).width()
  if (docWidth < breakpoints.sm)
    return 'xs'
  else if (docWidth >= breakpoints.sm && docWidth < breakpoints.md)
    return 'sm'
  else if (docWidth >= breakpoints.md && docWidth < breakpoints.lg)
    return 'md'
  else if (docWidth >= breakpoints.lg && docWidth < breakpoints.xl)
    return 'lg'
  else if (docWidth >= breakpoints.xl && docWidth < breakpoints.xxl)
    return 'xl'
  else
    return 'xxl'
}

$(document)
  .on("mouseenter", '.course-card-container .course-card__preview', function () {
    let parent = $(this).closest('.course-card'),
      container = $(this).closest('.course-card-container'),
      count = Number(container.data('count')),
      col = container.closest("[class^='col-']"),
      currentBreakpoint = getBreakpoint(),
      activeClass = col.attr('class')
        .split(' ')
        .filter(className => className.indexOf('col-') !== -1)
        .find(className => className.indexOf(currentBreakpoint) !== -1),
      colWidth = Number(activeClass.split('-')[2]),
      noOfColumns = 12 / colWidth,
      positionNo = count % noOfColumns,
      position = positionNo !== 0 ? positionNo : noOfColumns,
      toHideBefore = position - 1,
      toHideAfter = noOfColumns - position
    let toHide = col
    for (let i = 0; i <= toHideAfter; i++) {
      toHide = toHide.next()
      toHide.hide()
    }
    toHide = col
    for (let i = 0; i <= toHideBefore; i++) {
      toHide = toHide.prev()
      toHide.hide()
    }
    parent.addClass("course-card--hover")
    col.addClass(`col-${currentBreakpoint}-12`)
  })
  .on("mouseleave", '.course-card-container .course-card__preview', function () {
    let parent = $(this).closest('.course-card'),
      container = $(this).closest('.course-card-container'),
      count = Number(container.data('count')),
      col = container.closest("[class^='col-']"),
      currentBreakpoint = getBreakpoint(),
      activeClass = col.attr('class')
        .split(' ')
        .filter(className => className.indexOf('col-') !== -1)
        .find(className => className.indexOf(currentBreakpoint) !== -1),
      colWidth = Number(activeClass.split('-')[2]),
      noOfColumns = 12 / colWidth,
      positionNo = count % noOfColumns,
      position = positionNo !== 0 ? positionNo : noOfColumns,
      toShowBefore = position - 1,
      toShowAfter = noOfColumns - position;
    let toShow = col
    for (let i = 0; i <= toShowAfter; i++) {
      toShow = toShow.next()
      toShow.show()
    }
    toShow = col
    for (let i = 0; i <= toShowBefore; i++) {
      toShow = toShow.prev()
      toShow.show()
    }
    parent.removeClass("course-card--hover")
    col.removeClass(`col-${currentBreakpoint}-12`)
  })

const courseTemplate = function (course) {
  return `
    <div class="course-card">
      <a href="${course.url}" class="course-card__preview youtube-activator">
        <div class="course-card__preview-video youtube-player" id="course-${course.id}" data-video-id="${course.video_id}"></div>
        <div class="course-card__preview-overlay"></div>
      </a>
      <div class="course-card__content">
        <div class="course-card__meta">
          <span class="body-2">${course.subscribers}</span>
          <span class="body-2">${course.duration}</span>
          <p class="body-2 course-card__rate">
            <i class="fa fa-star"></i>${course.total_rate}
          </p>
        </div>
        <a class="title-link text-2 semi-bold" href="${course.url}">${course.title}</a>
        <p class="text-3 gray">${course.category}</p>
        <div class="course-card__footer">
           <button class="btn btn--outlined btn--primary">Enroll</button>
           <button class="btn btn--text btn--danger icon--hover"><i class="${course.is_favorite ? 'fas' : 'far'} fa-heart"></i></button>
        </div>
      </div>
    </div>`
}


$(".course-card-container").each(function (i, item) {
  let course = $(item),
    data = course.data("data")
  course.html($(courseTemplate(data)))
})

