 //  function validate() {
//   // CHeck if email
//       // Validate email address
//       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
//           document.getElementsByClassName("key-number").style.value   = "display : none";
//           document.getElementsByClassName("icon-massege").style.value = "display : block";
//       }else if(number.test(field)){
//         console.log("You have entered an number");
//         return (false)
//       }
//   }
const field = document.getElementById('emailtype').value;
    $('input[type=email]', '#key-number').each(function() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
            document.getElementsByClassName("key-number").style.value   = "display : none";
            document.getElementsByClassName("icon-massege").style.value = "display : block";
        }else if(number.test(field)){
            console.log("You have entered an number");
            return (false)
        } 
    })
    
    consol.log("dfdfsdffsdfa")
