const fitHeight = () => {
  let dHeight = $(document).height(),
    footerHeight = $($('.footer')[0]).height()
  $($('.page__content')[0]).css('height', `${dHeight - footerHeight - 60}px`)
  console.log(dHeight, footerHeight);
}

$(document).ready(() => {
  fitHeight()
})
$(window).on('resize', () => {
  fitHeight()
})
