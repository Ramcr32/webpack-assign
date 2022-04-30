import {navbar} from "../components/navbar.js"



let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML = navbar();

document.querySelector("form").addEventListener("submit",myFunction);
    var data=JSON.parse(localStorage.getItem("logindata")) || [];


    function myFunction(){
        event.preventDefault();
        var enteredEmail = document.querySelector("#email").value;
        var enteredPass = document.querySelector("#pass").value;
        console.log(enteredEmail, enteredPass,data);

        for (var i = 0; i < data.length; i++) {

        if (
            data[i].email == enteredEmail && data[i].pass == enteredPass ) {
                    console.log(enteredEmail, enteredPass,"a");

            alert("login success");
            window.location.href = "mens.html";
            break;
        }
        else {
            console.log(enteredEmail, enteredPass);

            alert("login failed");
            window.location.href="signup.html";
        }
        }
    }
