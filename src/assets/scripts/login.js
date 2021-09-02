// script reset page

// let emailEl = document.querySelector('#emailtype');
// $('#emailType').on('input', function (e) {
//   let value = e.target.value;

//   if (value.match(/^\d+$/)) {
//     $('#icon-message').hide();
//     $('#key-number').show();
//     e.target.type = 'number';
//   } else {
//     $('#icon-message').show();
//     $('#key-number').hide();
//     e.target.type = 'email';
//   }

// });

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

// var input = document.querySelector("#phone");
// var iti = window.intlTelInput(input, {
//   // separateDialCode:true,
//   utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
// });

// // store the instance variable so we can access it in the console e.g. window.iti.getNumber()
// window.iti = iti;

// const phoneInputField = document.querySelector("#phone");
// const phoneInput = window.intlTelInput(phoneInputField, {
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//   initialCountry: "auto",
//   geoIpLookup: getIp,
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//   preferredCountries: ["us", "co", "in", "de"],
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });

// function getIp(callback) {
//   fetch('https://ipinfo.io/json?token=<your token>', { headers: { 'Accept': 'application/json' } })
//     .then((resp) => resp.json())
//     .catch(() => {
//       return {
//         country: 'us',
//       };
//     })
//     .then((resp) => callback(resp.country));
// };




// var dsada = document.querySelector(".input");
// dsada?.addEventListener("click" , function(){
//   console.log("fsdfsd");
// });

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


  const info = document.querySelector(".alert-info");
  const error = document.querySelector(".alert-error");

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
      info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    } else {
      error.style.display = "";
      error.innerHTML = `Invalid phone number.`;
    }
  })
}

