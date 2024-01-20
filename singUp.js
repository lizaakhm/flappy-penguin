document.addEventListener("DOMContentLoaded", function () {
    var firstNameInput = document.getElementById("firstname");
    var lastNameInput = document.getElementById("lastname");
    var password2Input = document.getElementById("password2");
    var singupButton = document.getElementById("singupButton");

    singupButton.addEventListener("click", function () {
      var Name = firstNameInput.value;
      var last = lastNameInput.value;
      var password2 = password2Input.value;
   
  
      
      localStorage.setItem("firstName", Name);
      localStorage.setItem("lastName", last);
      localStorage.setItem("password2", password2);
     
    });

      singupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });


    var passwordInput = document.getElementById("passwordInput");
    var saveButton = document.getElementById("saveButton");
  
    saveButton.addEventListener("click", function () {
      var enteredName = firstNameInput.value;
      var enteredPassword = passwordInput.value;
  
     
      var storedName = localStorage.getItem("Name");
      var storedPassword = localStorage.getItem("password2");
  
      if (enteredName === storedName && enteredPassword === storedPassword) {
        
        window.location.href = 'index.html';
      } else {
        alert("Incorrect email or password");
      }
    });
  });



      
    