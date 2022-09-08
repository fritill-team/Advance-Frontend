import {openOverlay, closeOverlay} from "./overlay";

let filtersHTML = '',
  filters = $('#filters'),
  filtersMobile = $('#filters-mobile'),
  filterGroups = $(".filter-list .check-field-group"),
  filterLabels = $(".filter-list .field-wrapper__label"),
  scrollOptions = {
    autohidemode: false,
    horizrailenabled: false,
    railalign: localStorage.getItem('gmtDIR') === 'rtl' ? 'left' : 'right',
    rtlmode: localStorage.getItem('gmtDIR') === 'rtl',
    cursorcolor: "#0D9BBD"
  }


filterGroups.niceScroll(scrollOptions)

filterLabels.on('click', function () {
  let $this = $(this),
    $wrapper = $this.closest('.field-wrapper'),
    $checkFieldGroup = $wrapper.find('.check-field-group')

  if ($wrapper.hasClass('field-wrapper--collapsed')) {
    $wrapper.removeClass('field-wrapper--collapsed')
    $checkFieldGroup.niceScroll(scrollOptions)
  } else {
    $wrapper.addClass('field-wrapper--collapsed')
    $checkFieldGroup.getNiceScroll().remove()
  }
})

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
