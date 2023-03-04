// $('.dropdown__activator').dropdown()
//
$('#user-menu').on('click', function (e) {
  e.stopPropagation()
})

console.log('here')

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown__activator'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
