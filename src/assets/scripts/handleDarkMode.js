


let darkMode = localStorage.getItem('darkMode')

const storageInput = document.getElementById("dark-mode-toggle");



storageInput.checked = darkMode;

const enableDarkMode = () => {
  $('html').addClass('night-mode')
  localStorage.setItem('darkMode', true)
}
const disableDarkMode = () => {
  $('html').addClass('night-mode')
  localStorage.setItem('darkMode', false)
}

enableDarkMode();
disableDarkMode();
// console.log(document.classList());
// storageInput ? 
// storageInput.checked = localStorage.getItem('darkMode')
storageInput.addEventListener("change", (val) => {
  if(val.target.checked){
    enableDarkMode()
  }
  if(!val.target.checked) {
    disableDarkMode()
  }
  // if(darkMode){
  // } else {
  // }
  // localStorage.setItem("darkMode", val.target.checked); val.target.checked);
  // val.target.checked ? localStorage.setItem("darkMode", true)
  // : localStorage.setItem("darkMode", false); 
  
  // storageInput.checked = localStorage.getItem('darkMode')
  // console.log(val.target.checked);
  // val.target.checked = localStorage.getItem("darkMode");
  // val.target.checked ? console.log('dark') : console.log('light');
  // const x = localStorage.getItem("darkMode");
  // // val.target.checked = x;
  // console.log(val.target.checked, x);
  // x ? $("html").addClass("night-mode") : $("html").removeClass("night-mode");
});
var dark = localStorage.getItem("darkMode");
// console.log(localStorage.getItem('darkMode'));
// if (localStorage.getItem('darkMode')) {
//   $("html").addClass("night-mode")
// } else {
//   $("html").removeClass("night-mode")
// }

// });
// const x = localStorage.getItem("darkMode");

// storageInput.checked = x;

// localStorage.setItem("darkmode", "off");
$(document).on("change", "#dark-mode-toggle", (val) => {
  // console.log(dark);
  // if (localStorage.getItem('darkMode') === true) {
  //   $("html").addClass("night-mode")
  // } else {
  //   $("html").removeClass("night-mode")
  // }
  // if ($("#dark-mode-toggle").is(":checked"))
  //   localStorage.setItem("darkmode", "on");
  // else localStorage.setItem("darkmode", "off");
  // localStorage.getItem("darkmode");
  // console.log(val.target.checked);
  // localStorage.setItem("darkMode", val.target.checked);
  // const dark = localStorage.getItem("darkMode");
  // val.target.checked = dark;
  // console.log(dark);
  // console.log(storageInput.checked);
  // if (storageInput.checked) {
  //   $("html").addClass("night-mode");
  // } else {
  //   $("html").removeClass("night-mode");
  // }
  // console.log(localStorage.darkmode);
  // if ($("#dark-mode-toggle").is(":checked")) {
  //   $("html").addClass("night-mode");
  // } else {
  //   $("html").removeClass("night-mode");
  // }
});

// const storedValue = localStorage.getItem(darkMode);

// console.log(storedValue);
