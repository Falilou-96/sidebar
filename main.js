/*-------- js for toggle Menu ----------*/
$(function() {
    $(".toggle").on("click", function(){
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    })
});


/*-------- js for toggle Form ----------*/

var LoginForm = document.getElementById("LoginForm");
var RegisterForm = document.getElementById("RegisterForm");
var Indicator = document.getElementById("Indicator");

    function register() {
        RegisterForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
    }

    function login() {
        RegisterForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }
    