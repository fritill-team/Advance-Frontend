$('.dropdown__activator').each(function () {
  $(this).on('click', function () { 
    $(this).toggleClass('dropdown--active') 
  })
  if($(this).siblings().hasClass('dropdown--active')){
    $(this).siblings().removeClass('dropdown--active')
  }
})