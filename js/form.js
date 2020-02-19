function submitPassword()
{
        let login = document.getElementById("login");
        let first = document.getElementById("password1");
        let checkpass = document.getElementById("password2");
        let email = document.getElementById("email");

        if (login.value != "") {
                document.getElementById("login").style.backgroundColor = "#DFF2BF";
            }
            else if (login.value == "") {
                document.getElementById("login").style.backgroundColor = "#FFD2D2";
            }
        
            if (first == checkpass.value) {
                document.getElementById("password").style.backgroundColor = "#FFD2D2";
            }
            else  {
                    
                document.getElementById("alert").innerHTML = "Passwords are not the same";
                return true;
            }
            if (email.value == "") {
                document.getElementById("email").style.backgroundColor = "#FFD2D2";
            }
            else if(email!=""){
                document.getElementById("password").style.backgroundColor = "#DFF2BF";
            }  
        }
        submitPassword();