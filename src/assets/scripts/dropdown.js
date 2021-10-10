// dropdown-menu
$('.dropdown__activator').each(function () {
  $(this).on('click', function () {
    $('.dropdown').removeClass('active')
    $(this).parent().addClass('active')
    event.stopPropagation();
  })
})
  