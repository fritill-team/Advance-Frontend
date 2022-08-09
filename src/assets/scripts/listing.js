import {openOverlay, closeOverlay} from "./overlay";

let filtersHTML = '',
  filters = $('#filters'),
  filtersMobile = $('#filters-mobile')

const swapFilters = function () {
  if (window.innerWidth <= 768) {
    filtersMobile.html(filtersHTML)
    filters.html('')
  } else {
    filters.html(filtersHTML)
    filtersMobile.html('')
  }
}

$(".switch-view").on('click', function () {
  let self = $(this),
    target = $(self.parent().data('target')),
    viewType = self.data('view')
  self.removeClass("btn--text").siblings().addClass("btn--text")
  target.each(function (i, element) {
    let elm = $(this),
      parent = elm.parent(),
      swap = parent.data('swap'),
      swapped = parent.attr('class')
    parent.data('swap', swapped)
    if (viewType === 'list') {
      parent.attr('class', 'col-sm-12')
      elm.addClass("display-card-container--list-view")
      elm.find(".display-card")
        .removeClass("display-card--grid-view")
        .addClass("display-card--list-view")
    } else {
      parent.attr('class', swap)
      elm.removeClass("display-card-container--list-view")
      elm.find(".display-card")
        .removeClass("display-card--list-view")
        .addClass("display-card--grid-view")
    }
  })
})

$('.filter-panel__content').niceScroll({
  autohidemode: false,
  horizrailenabled: false,
  railalign: document.dir === 'rtl' ? 'left' : 'right',
  rtlmode: document.dir === 'rtl',
  cursorcolor: "#0D9BBD"
})

$('.filters-toggle').on('click', function () {
  filtersMobile.addClass('listing-filters--active')
  openOverlay()
})

$('#filters-mobile, #filters')
  .submit(function () {
    filtersMobile.removeClass('listing-filters--active')
    closeOverlay()
  })
  .on('reset', function () {
    filtersMobile.removeClass('listing-filters--active')
    closeOverlay()
  })

$(window).resize(function () {
  swapFilters()
})
filtersHTML = filters.html()

swapFilters()
