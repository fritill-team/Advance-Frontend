// export const collapse = $el => {
//     let $target = $($el.data('target')),
//       ariaExpanded = $el.attr("aria-expanded") === 'true',
//       allowRotate = typeof $el.data("allow-rotate") !== 'undefined' ? $el.data("allow-rotate") : true,
//       $rotateIndicator = $el.find('[data-rotate-indicator=true]'),
//       height = $target.data('height')
//
//
//     if (ariaExpanded) {
//       $target.trigger('collapsing')
//
//       requestAnimationFrame(() => {
//         $target.css('height', `${height}px`)
//         requestAnimationFrame(() => {
//           $target.css('height', 0)
//         })
//       })
//       if (allowRotate)
//         $el.css('transform', 'rotate(0deg)')
//       if ($rotateIndicator.length)
//         $rotateIndicator.css('transform', 'rotate(0deg)')
//       $el.attr("aria-expanded", false)
//       $target.trigger('collapsed')
//     }
//   },
//   expand = $el => {
//     let $target = $($el.data('target')),
//       ariaExpanded = $el.attr("aria-expanded") === 'true',
//       allowRotate = typeof $el.data("allow-rotate") !== 'undefined' ? $el.data("allow-rotate") : true,
//       $rotateIndicator = $el.find('[data-rotate-indicator=true]'),
//       height = $target.data('height') ? $target.data('height') : 'auto'
//     if (!ariaExpanded) {
//       $target.trigger('expanding')
//
//       $target.css('height', height)
//       if (allowRotate)
//         $el.css('transform', 'rotate(180deg)')
//       if ($rotateIndicator.length)
//         $rotateIndicator.css('transform', 'rotate(180deg)')
//       $el.attr("aria-expanded", true)
//       $target.trigger('expanded')
//     }
//   }


// ;(function () {
//   $('[data-toggle=collapsing]').each(function (i, item) {
//     let $item = $(item),
//       $target = $($item.data('target')),
//       ariaExpanded = $item.attr('aria-expanded') === 'true',
//       allowRotate = typeof $item.data("allow-rotate") !== 'undefined' ? $item.data("allow-rotate") : true,
//       $rotateIndicator = $item.find('[data-rotate-indicator=true]')
//
//     $target.data('height', $target.height())
//     if (!ariaExpanded) {
//       $target.css('height', 0)
//     } else {
//       if (allowRotate)
//         $item.css('transform', 'rotate(180deg)')
//       if ($rotateIndicator.length)
//         $rotateIndicator.css('transform', 'rotate(180deg)')
//     }
//   })
// }())

//
// $('[data-toggle=collapsing]').on('click', function () {
//   let $this = $(this),
//     ariaExpanded = $this.attr("aria-expanded") === 'true'
//   if (ariaExpanded)
//     collapse($this)
//   else
//     expand($this)
// })


var Collapsible = function () {
  var collapsible

  function collapse($el) {
    let $target = $($el.data('target')),
      ariaExpanded = $el.attr("aria-expanded") === 'true',
      allowRotate = typeof $el.data("allow-rotate") !== 'undefined' ? $el.data("allow-rotate") : true,
      $rotateIndicator = $el.find('[data-rotate-indicator=true]'),
      height = $target.data('height')


    if (ariaExpanded) {
      $target.trigger('collapsing')

      requestAnimationFrame(() => {
        $target.css('height', `${height}px`)
        requestAnimationFrame(() => {
          $target.css('height', 0)
        })
      })
      if (allowRotate)
        $el.css('transform', 'rotate(0deg)')
      if ($rotateIndicator.length)
        $rotateIndicator.css('transform', 'rotate(0deg)')
      $el.attr("aria-expanded", false)
      $target.trigger('collapsed')
    }
  }

  function expand($el) {
    let $target = $($el.data('target')),
      ariaExpanded = $el.attr("aria-expanded") === 'true',
      allowRotate = typeof $el.data("allow-rotate") !== 'undefined' ? $el.data("allow-rotate") : true,
      $rotateIndicator = $el.find('[data-rotate-indicator=true]'),
      height = $target.data('height') ? $target.data('height') : 'auto'
    if (!ariaExpanded) {
      $target.trigger('expanding')

      $target.css('height', height)
      if (allowRotate)
        $el.css('transform', 'rotate(180deg)')
      if ($rotateIndicator.length)
        $rotateIndicator.css('transform', 'rotate(180deg)')
      $el.attr("aria-expanded", true)
      $target.trigger('expanded')
    }
  }

  function initialize() {
    collapsible.each(function (i, item) {
      let $item = $(item),
        $target = $($item.data('target')),
        ariaExpanded = $item.attr('aria-expanded') === 'true',
        allowRotate = typeof $item.data("allow-rotate") !== 'undefined' ? $item.data("allow-rotate") : true,
        $rotateIndicator = $item.find('[data-rotate-indicator=true]')

      $target.data('height', $target.height())
      if (!ariaExpanded) {
        $target.css('height', 0)
      } else {
        if (allowRotate)
          $item.css('transform', 'rotate(180deg)')
        if ($rotateIndicator.length)
          $rotateIndicator.css('transform', 'rotate(180deg)')
      }
    })

    collapsible.on('click', function () {
      let $this = $(this),
        ariaExpanded = $this.attr("aria-expanded") === 'true'
      if (ariaExpanded)
        collapse($this)
      else
        expand($this)
    })
  }

  return {
    init() {
      collapsible = $('[data-toggle=collapsing]')

      initialize()
    },
    collapse,
    expand
  }
}()

// On document ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Collapsible.init);
} else {
  Collapsible.init();
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Collapsible;
}
