const storageInput = document.getElementById("dark-mode-toggle");
storageInput ? 
storageInput.addEventListener("change", (val) => {
  localStorage.setItem("darkMode", val.target.checked);
  const x = localStorage.getItem("darkMode");
  // val.target.checked = x;
  console.log(val.target.checked, x);
  x ? $("html").addClass("night-mode") : $("html").removeClass("night-mode");
}): '';

// });
// const x = localStorage.getItem("darkMode");

// storageInput.checked = x;

// localStorage.setItem("darkmode", "off");
$(document).on("change", "#dark-mode-toggle", (val) => {
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
