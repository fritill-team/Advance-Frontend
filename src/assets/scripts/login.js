
let emailEl = document.querySelector('#emailtype');

emailEl.addEventListener('input', function(e){
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
})