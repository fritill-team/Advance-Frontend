// dropdown-menu
$('.dropdown__activator').each(function () {
  $(this).on('click', function () {
    $('.dropdown').removeClass('active')
    $(this).parent().addClass('active')
    event.stopPropagation();
  })
})

$('.content__item').each(function () {
  $(this).on('click', function () {
    $('.dropdown').removeClass('active')
  })
})
$(document).on('click', function () {
  $('.dropdown').removeClass('active')
})
$(document)
  .on('click', '.dropdown__activator', function () {
    var dropdown = $(this).parent('.dropdown')
    $('.dropdown').removeClass('active')
    $(this).parent().addClass('active')
    event.stopPropagation()
  })

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')
  
  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })
  