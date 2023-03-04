const $filtersList = $('#filters-list'),
  $closeFiltersToggle = $(".filter__list-close"),
  filterGroups = $(".filter__list .check-field-group"),
  $filtersToggle = $('.filter__list-toggle'),
  filterNiceScrollOptions = {
    autohidemode: false,
    horizrailenabled: false,
    railalign: localStorage.getItem('gmtDIR') === 'rtl' ? 'left' : 'right',
    rtlmode: localStorage.getItem('gmtDIR') === 'rtl',
    cursorcolor: "#0D9BBD",
  },
  openFilters = function () {
    $filtersList.addClass('filter__list-open')
    Overlay.open()
    $filtersList.niceScroll(filterNiceScrollOptions)
    $filtersList.getNiceScroll().show().resize()

  },
  closeFilters = function () {
    $filtersList.removeClass('filter__list-open')
    Overlay.close()
    $filtersList.getNiceScroll().remove()
  }

filterGroups.niceScroll(filterNiceScrollOptions)

filterGroups
  .on('collapsing', function () {
    $(this).getNiceScroll().remove()
  })
  .on('expanded', function () {
    setTimeout(() => {
      $(this).niceScroll(filterNiceScrollOptions)
      $(this).getNiceScroll().show().resize()
    }, 300)
  })

$filtersToggle.on('click', function () {
  if (window.innerWidth <= 768)
    openFilters()
})

$closeFiltersToggle.on('click', function () {
  if (window.innerWidth <= 768)
    closeFilters()
})

$(window).resize(function () {
  if (window.innerWidth <= 768) {
    if ($filtersList.hasClass('filter__list-open'))
      closeFilters()
  } else {
  }
})


// $(".filter__switch-display-type-toggle").on('click', function () {
//   let self = $(this),
//     target = $(self.parent().data('target')),
//     viewType = self.data('view')
//   self.removeClass("btn--text").siblings().addClass("btn--text")
//   target.each(function (i, element) {
//     let elm = $(this),
//       parent = elm.parent(),
//       swap = parent.data('swap'),
//       swapped = parent.attr('class')
//     parent.data('swap', swapped)
//     if (viewType === 'list') {
//       parent.attr('class', 'col-sm-12')
//       elm.addClass("display-card-container--list-view")
//       elm.find(".display-card")
//       openFilters
//         .removeClass("display-card--grid-view")
//         .addClass("display-card--list-view")
//     } else {
//       parent.attr('class', swap)
//       elm.removeClass("display-card-container--list-view")
//       elm.find(".display-card")
//         .removeClass("display-card--list-view")
//         .addClass("display-card--grid-view")
//     }
//   })
// })

