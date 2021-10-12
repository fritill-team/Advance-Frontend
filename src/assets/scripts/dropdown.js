$('.dropdown__activator').each(function () {
  $(this).on('click', function () { 
    $(this).toggleClass('dropdown--active') 
  })
})