localStorage.setItem("darkmode", "off");
$(document).on("change", "#dark-mode-toggle", function () {
  if ($("#dark-mode-toggle").is(":checked"))
    localStorage.setItem("darkmode", "on");
  else localStorage.setItem("darkmode", "off");
  localStorage.getItem("darkmode");
  if (localStorage.darkmode === "off") {
    $("html").removeClass("night-mode");
  } else {
    localStorage.setItem("darkmode", "on");
    $("html").addClass("night-mode");
  }
  // console.log(localStorage.darkmode);
});
