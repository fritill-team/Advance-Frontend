// Home Live Stream
$(".live_stream").owlCarousel({
  items: 10,
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  rtl: $(document).attr('dir') === 'rtl',
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 6,
    },
    1400: {
      items: 7,
    },
  },
});

// Featured Courses home
$(".featured_courses").owlCarousel({
  items: 3,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  rtl: $(document).attr('dir') === 'rtl',
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  // responsive: {
  //   0: {
  //     items: 1,
  //   },
  //   600: {
  //     items: 2,
  //   },
  //   1000: {
  //     items: 1,
  //   },
  //   1200: {
  //     items: 3,
  //   },
  //   1400: {
  //     items: 4,
  //   },
  // },
});
// related courses
$(".related_courses").owlCarousel({
  items: 10,
  loop: false,
  margin: 50,
  nav: true,
  dots: false,
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
      margin: 10,
    },
    768: {
      items: 3,
      margin: 10,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
      margin: 100,
      center: true,
    },
    1400: {
      items: 1,
      margin: 100,
      center: true,
    },
  },
});
// Featured Courses home
$(".category_courses").owlCarousel({
  items: 10,
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  rtl: $(document).attr('dir') === 'rtl',
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    960: {
      item: 3,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1400: {
      items: 4,
    },
  },
});

// Featured Courses home
$(".top_instrutors").owlCarousel({
  items: 10,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  rtl: direction,
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

let direction = $("html").attr("dir") === "rtl" ? true : false;

$(".display-5").owlCarousel({
  items: 10,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  rtl: direction,
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 3,
    },
  },
});
$(".display-4").owlCarousel({
  items: 10,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  rtl: direction,
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    // 1200: {
    //   items: 4,
    // },
    // 1400: {
    //   items: 4,
    // },
  },
});

$(".plans").owlCarousel({
  items: 10,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  rtl: direction,
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});
// Student Says
$(".Student_says").owlCarousel({
  items: 10,
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  rtl: $(document).attr('dir') === 'rtl',
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 3,
    },
  },
});

// features Careers
$(".feature_careers").owlCarousel({
  items: 4,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
    1400: {
      items: 1,
    },
  },
});

$(".blog__media").owlCarousel({
  items: 1,
  nav: true,
  loop: false,
  dots: false,
  navText: [
    "<i class='fas fa-angle-left fa-xs'></i>",
    "<i class='fas fa-angle-right fa-xs'></i>",
  ],
})
