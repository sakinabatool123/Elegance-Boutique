const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
           

            let nameError= document.getElementById("nameError")
            let emailError= document.getElementById("emailError")
            let messageError= document.getElementById("messageError")
            let responce = document.getElementById("responce")

              nameError.innerHTML="";
              emailError.innerHTML="";
              messageError.innerHTML="";
              response.innerHTML="";

            
            let isValid = true;
            if (name === "") {
                nameError.innerHTML = "Enter Your Name";
                response.style.color = "red";
               isValid = false;
            } 
         else if(email ===""){
           emailError.innerHTML = "Please fill out this field";
                response.style.color = "red";
                isValid = false;
          }
           else if(message ===""){

            messageError.innerHTML = "Please fill out this field";
                response.style.color = "red";
                isValid = false;
          }
            else{
                response.innerHTML = "Message sent successfully!";
                response.style.color = "green";
                contactForm.reset();
            }
        });
    }