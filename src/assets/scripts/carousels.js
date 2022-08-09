let $carousels = $('.carousel'),
  $slider = $('.slider')

if ($carousels.length) {
  $carousels.each(function (i, carousel) {
    let $carousel = $(carousel),
      size = $carousel.data('size'),
      items = $carousel.data('items') ? Number($carousel.data('items')) : 3

    $carousel.owlCarousel({
      items,
      stagePadding: 8,
      margin: 32,
      rtl: $(document).attr('dir') === 'rtl',
      slideBy: items,
      loop: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          margin: 8,
          stagePadding: 16
        },
        400: {
          items: 2,
          margin: 8,
          stagePadding: 16
        },
        960: {
          items,
          margin: 8,
          stagePadding: 16
        },
        1000: {
          items,
        }
      }
    })
  })
}


if ($slider.length) {
  $slider.owlCarousel({
    items: 1,
    rtl: $(document).attr('dir') === 'rtl',
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  })
}



