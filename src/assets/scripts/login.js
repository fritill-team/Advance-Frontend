// script reset page
var verification = (function () {
  //cache dom
  var $inputs = $("#verification").find("input");

  //bind events
  $inputs.on('keyup', processInput);

  //define methods
  function processInput(e) {
    var x = e.charCode || e.keyCode;
    if ((x == 8 || x == 46) && this.value.length == 0) {
      var indexNum = $inputs.index(this);
      if (indexNum != 0) {
        $inputs.eq($inputs.index(this) - 1).focus();
      }
    }

    if (ignoreChar(e))
      return false;
    else if (this.value.length == this.maxLength) {
      $(this).next('input').focus();
    }
  }
  function ignoreChar(e) {
    var x = e.charCode || e.keyCode;
    if (x == 37 || x == 38 || x == 39 || x == 40)
      return true;
    else
      return false
  }

})();


//login phone number

if ("intlTelInput" in window) {
  const phoneInputField = document.querySelector("#phone"),
    tokinMask = "5hy8RjDWfiqwO051SlFiQh1hkwDfwvJSSw2my7fF";

  const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "eg",
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    preferredCountries: ["eg", "us"],
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });


  const info = document.querySelector(".messages");
  const error = document.querySelector(".messages");

  phoneInputField.addEventListener("input", function process(event) {
    event.preventDefault();

    if (phoneInputField.value.length >= 20) {
      phoneInputField.value = '';
    }
    // IMask(phoneInputField, {
    //   mask: phoneInputField.getAttribute('placeholder').replace(/[0-9]/g, 0)
    // });
    const phoneNumber = phoneInput.getNumber();

    info.style.display = "none";
    error.style.display = "none";

    if (phoneInput.isValidNumber()) {
      info.style.display = "";
      info.classList.add('primary')
      info.innerHTML = `Phone number in correct format: <strong>${phoneNumber}</strong>`;
    } else {
      error.style.display = "";
      info.classList.remove('primary')
      error.classList.add('danger')
      error.innerHTML = `Invalid phone number.`;
    }
  })
}
 
// text validation
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}
if(document.getElementById("phone")){
  setInputFilter(document.getElementById("phone"), function(value) {
    return /^-?\d*$/.test(value); });
}