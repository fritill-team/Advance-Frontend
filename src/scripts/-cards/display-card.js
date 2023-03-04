let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
const getBreakpoint = () => {
    let docWidth = $(document).width();
    if (docWidth < breakpoints.sm) return "xs";
    else if (docWidth >= breakpoints.sm && docWidth < breakpoints.md)
      return "sm";
    else if (docWidth >= breakpoints.md && docWidth < breakpoints.lg)
      return "md";
    else if (docWidth >= breakpoints.lg && docWidth < breakpoints.xl)
      return "lg";
    else return "xl";
  },
  getBreakpointClass = (colClasses) => {
    let colClass = colClasses.find(
      (className) => className.indexOf(getBreakpoint()) !== -1
    );
    return colClass
      ? colClass
      : colClasses.find(
        (className) =>
          className.indexOf(
            colClasses
              .map((colClass) => colClass.split("-")[1])
              .reduce((a, b) => (breakpoints[a] < breakpoints[b] ? a : b))
          ) !== -1
      );
  };

let NoOfCols = 0,
  Position = 0;

// $(document)
//   .on("mouseenter", '.display-card-container .display-card__preview', function () {
//     let parent = $(this).closest('.display-card'),
//       container = $(this).closest('.display-card-container'),
//       count = Number(container.data('count')),
//       col = container.closest("[class^='col-']"),
//       currentBreakpoint = getBreakpoint(),
//       activeClasses = col.attr('class').split(' ')
//         .filter(className => className.indexOf('col-') !== -1),
//       activeClass = getBreakpointClass(activeClasses),
//       colWidth = Number(activeClass.split('-')[2])

//     NoOfCols = 12 / colWidth
//     let positionNo = count % NoOfCols
//     Position = positionNo !== 0 ? positionNo : NoOfCols
//     let toHideBefore = Position - 1,
//       toHideAfter = NoOfCols - Position

//     let toHide = col
//     for (let i = 0; i <= toHideAfter; i++) {
//       toHide = toHide.next()
//       toHide.hide()
//     }
//     toHide = col
//     for (let i = 0; i <= toHideBefore; i++) {
//       toHide = toHide.prev()
//       toHide.hide()
//     }
//     parent.addClass("display-card--hover animation")
//     col.addClass(`col-${currentBreakpoint}-12`)
//   })
//   .on("mouseleave", '.display-card-container .display-card__preview', function () {
//     let parent = $(this).closest('.display-card'),
//       container = $(this).closest('.display-card-container'),
//       col = container.closest("[class^='col-']"),
//       currentBreakpoint = getBreakpoint(),
//       toShowBefore = Position - 1,
//       toShowAfter = NoOfCols - Position;

//     let toShow = col
//     for (let i = 0; i <= toShowAfter; i++) {
//       toShow = toShow.next()
//       toShow.show()
//     }
//     toShow = col
//     for (let i = 0; i <= toShowBefore; i++) {
//       toShow = toShow.prev()
//       toShow.show()
//     }
//     parent.removeClass("display-card--hover animation")
//     col.removeClass(`col-${currentBreakpoint}-12`)
//   })


const courseTemplate = function (course) {
  return `
    <div class="display-card display-card--grid-view">
      <a href="${course.url}" class="display-card__preview youtube-activator">
        <img src="${course.cover}" alt="${course.title}" class="display-card__preview-cover">
        <div class="display-card__preview-video youtube-player"
             id="course-${course.id}"
             data-video-id="${course.video_id}"></div>
        <div class="display-card__preview-overlay"></div>
      </a>
      <div class="display-card__content">
				<a class=" text-2 semi-bold" href="${course.url}" lang="${course.language}" >${gettext(course.title)}</a>
				<p class=" display-card__description body-2 gray" lang="${course.language}">${
    gettext(course.short_description) ? gettext(course.short_description) : ""
  }</p>
				<div class="display-card__meta">
					<p class="body-2 gray bold" lang="${course.language}">${gettext(course.category)}</p>
        </div>
        <p class="body-2 display-card__rate" lang="${course.language}">
          <i class="fa fa-star"></i>${course.total_rate}
        </p>
      </div>

    </div>`;
};

let courseCards = $(".display-card-container")
if (courseCards.length)
  courseCards.each(function (i, item) {
    let course = $(item),
      data = course.data("data");
    if (data)
      course.html($(courseTemplate(data)));
  });
