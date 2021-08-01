// script reset page

// let emailEl = document.querySelector('#emailtype');
$('#emailtype').on('input', function(e){
  let value = e.target.value;

  if(value.match(/^\d+$/)){
      $('#iconmassege').hide();
      $('#keynumber').show();
      e.target.type = 'number';
  } else  {
      $('#iconmassege').show();
      $('#keynumber').hide();
      e.target.type = 'email';
  }

});

// script reset page
var verification = (function(){
  //cache dom
  var $inputs = $("#verification").find("input");

  //bind events
  $inputs.on('keyup', processInput);

  //define methods
  function processInput(e) {
    var x = e.charCode || e.keyCode;
    if( (x == 8 || x == 46) && this.value.length == 0) {
      var indexNum = $inputs.index(this);
      if(indexNum != 0) {
        $inputs.eq($inputs.index(this) - 1).focus();
      }
    }

    if( ignoreChar(e) )
      return false;
    else if (this.value.length == this.maxLength) {
      $(this).next('input').focus();
    }
  }
  function ignoreChar(e) {
    var x = e.charCode || e.keyCode;
    if (x == 37 || x == 38 || x == 39 || x == 40 )
      return true;
    else
      return false
  }

})();
