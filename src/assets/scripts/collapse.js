export const collapse = $el => {
    let $target = $($el.data('target')),
      areaExpanded = $el.attr("area-expanded") === 'true',
      allowRotate = $el.attr("allow-rotate") ? $el.attr("allow-rotate") === 'true' : true,
      $rotateIndicator = $el.find('[data-rotate-indicator=true]'),
      height = $target.data('height')

    if (areaExpanded) {
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
      $el.attr("area-expanded", false)
    }
  },
  expand = $el => {
    let $target = $($el.data('target')),
      areaExpanded = $el.attr("area-expanded") === 'true',
      allowRotate = $el.attr("allow-rotate") ? $el.attr("allow-rotate") === 'true' : true,
      $rotateIndicator = $el.find('[data-rotate-indicator=true]'),
      height = $target.data('height')

    if (!areaExpanded) {

      $target.css('height', height)
      if (allowRotate)
        $el.css('transform', 'rotate(180deg)')

      if ($rotateIndicator.length)
        $rotateIndicator.css('transform', 'rotate(180deg)')
      $el.attr("area-expanded", true)
    }
  }


$('.collapse').each(function () {
  let $this = $(this)
  $this.data('height', $this[0].scrollHeight)
  $this.css('height', 0)
})


$('[data-toggle=collapsing]')
  .on('click', function () {
    let $this = $(this),
      areaExpanded = $this.attr("area-expanded") === 'true'

    if (areaExpanded)
      collapse($this)
    else
      expand($this)
  })

