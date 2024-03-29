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
  $slider.each(function () {
    let $this = $(this),
      loop = $this.data('loop') ? $this.data('loop') === 'true' : false,
      autoplay = $this.data('autoplay') ? $this.data('autoplay') === 'true' : false,
      autoplayTimeout = $this.data('timeout') ? Number($this.data('timeout')) : 5000

    $slider.owlCarousel({
      items: 1,
      rtl: $(document).attr('dir') === 'rtl',
      loop,
      nav: true,
      autoplay,
      autoplayTimeout,
      autoplayHoverPause: true,
    })

  })

}



