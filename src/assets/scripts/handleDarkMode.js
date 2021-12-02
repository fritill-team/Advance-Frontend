const darkToggle = document.getElementById("dark-mode-toggle")

if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}

checkStatus()

function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
      darkToggle.checked = true;                                       //the checkbox is checked (if you load the page by default it isn’t)
        $('html').addClass('night-mode');            //the backgornd is set to a dark grey
    }else{
      darkToggle.checked = false;
        $('html').removeClass('night-mode');
    }
}

function changeStatus(){                                            //This function gets called every time the checkbox is clicked
    if (localStorage.getItem('darkMode')==="true"){                 //if darkMode was active and this function is called it means the user now wants light
        localStorage.setItem('darkMode', "false");                  //so we set it to false, to indicate we are in light mode
        $('html').removeClass('night-mode');
    } else{
        localStorage.setItem('darkMode', "true");                   //same code but adapted for dark theme
        $('html').addClass('night-mode');
    }
}


$(document).on("change", "#dark-mode-toggle", (val) => {
  changeStatus()
});
