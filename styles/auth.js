const authformview = document.querySelector(".auth-form-view");
const authformhidden = document.querySelector(".auth-form-hidden");
const passInput = document.getElementById("passInput");
const x = document.getElementById("passInput");
authformview.addEventListener("click",openhidden)
function openhidden (){
    if (x.type === "password") {
        x.type = "text";
        authformview.style.display = "none";
        authformhidden.style.display = "block";
    }else{
        x.type = "password";
        authformview.style.display = "block";
        authformhidden.style.display = "none";
    }
}
authformhidden.addEventListener("click",openhidden)
// function showpassword() {
//     console.log('aee')
//     var x = document.getElementById("passInput");
//     if (x.type === "password") {
//         x.type = "text";
//     }else{
//         x.type = "password";
//     }
// }
