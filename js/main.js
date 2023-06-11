//creating array of objects.

let peoples = [
   {
      user_id: 123,
      userEmail: "dk@gmail.com",
      userPass: "dk@654",
   },
   {
      user_id: 654,
      userEmail: "elm@gmail.com",
      userPass: "dk@764",
   },
   {
      user_id: 789,
      userEmail: "hari@gmail.com",
      userPass: "dk@764",
   },
   {
      user_id: 987,
      userEmail: "anu@gmail.com",
      userPass: "dk@764",
   },
];

// Getting the inputs
let inputs = document.getElementsByClassName("form_control");
let userid = document.getElementById("user_name");
let userpassword = document.getElementById("user_pass");
let show = document.getElementsByClassName("error");

//function for button.....

function onSignUp() {
   let isValid;
   for (let x = 0; x < inputs.length; x++) {
      isValid = 0;
      if (inputs[x].value.trim() == "") {
         inputs[x].parentNode.getElementsByTagName("p")[0].classList.add("invalid_input");
         isValid++;
      } else {
         inputs[x].parentNode.getElementsByTagName("p")[0].classList.remove("invalid_input");
      }
   }

   if (isValid === 0) {
      let check = peoples.find(function (item) {
         localStorage.setItem("user2", item.user_id);
         return item.userEmail === userid.value;
      });

      if (check && check.userPass === userpassword.value) {
         return logIn(event);
      } else {
         alert("login failed");
      }
   }
   if (isValid === 0) {
      if (userid.value === peoples.userEmail) {
         show[0].classList.add("error2");
      } else {
         show[0].classList.remove("error2");
      }
      if (userpassword.value === peoples.userPass) {
         show[0].classList.remove("error2");
      } else {
         show[0].classList.add("error2");
      }
   }
   //login function
   let getUrl = window.location.href;
   if (getUrl.includes("index.html")) {
      let isLogin = localStorage.getItem("isLogin");
      if (!isLogin) {
         window.location.replace("login.html");
      }
   }

   //login function
   function logIn(event) {
      event.preventDefault();
      localStorage.setItem("isLogin", true);
      window.location.replace("index.html");
   }
}
function onSignOut(event) {
   event.preventDefault();
   localStorage.removeItem("isLogin");
   window.location.replace("login.html");
}
