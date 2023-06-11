let getUrl = window.location.href;
if (getUrl.includes("index.html")) {
    let isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
        window.location.replace("login.html");
    }
}

function onSignOut(event) {
    event.preventDefault();
    localStorage.removeItem("profilepage.html");
    window.location.replace("login.html");
}

/* let pageUrl = window.location.href;
if (pageUrl.includes("profilepage.html")) {
    let isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
        window.location.replace("login.html");
    }
}
function onSignOut(event) {
    event.preventDefault();
    localStorage.removeItem("isLogin");
    window.location.replace("login.html");
} */
// creating the new objects

let user1 = [
    {
        userid: 123,
        FirstName: "Ragupathi",
        lastName: "Nagarajan",
        mailid: "dk@gmail.com",
        gender: "Male",
        experience: "1year",
        mobileNo: "7894561230",
        profilepic: "images/ragupathi.jpg",
        profilebanner: "coding-2.jpg",
    },
    {
        userid: 654,
        FirstName: "Elamuruhu",
        lastName: "Mano",
        mailid: "elm@gmail.com",
        gender: "Male",
        experience: "1year",
        mobileNo: "9876543210",
        profilepic: "images/elamuruhu.jpg",
        profilebanner: "coding-2.jpg",
    },
    {
        userid: 789,
        FirstName: "Hari kishore",
        lastName: "Bala",
        mailid: "hari@gmail.com",
        gender: "Male",
        experience: "1year",
        mobileNo: "753159852",
        profilepic: "images/hari.jpg",
        profilebanner: "codingimg-1.jpg",
    },
    {
        userid: 987,
        FirstName: "Anugrahan",
        lastName: "Anu",
        mailid: "anu@gmail.com",
        gender: "Male",
        experience: "1year",
        mobileNo: "9080607749",
        profilepic: "images/anu.jpg",
        profilebanner: "codingimg-1.jpg",
    },
];
let userObj = JSON.stringify(user1);
localStorage.setItem("localvalue", userObj);
//console.log(userObj);

let getObj = localStorage.getItem("localvalue");

let getuser = JSON.parse(getObj);
console.log(getuser);

let localstr = parseInt(localStorage.getItem("user2"));

let finduser = getuser.find(function (e) {
    return e.userid === localstr;
});
console.log(finduser);

//for changing the user image according to the profile

let userimg = document.getElementsByClassName("user-dp");

console.log(userimg);
if (finduser) {
    for (let s = 0; s < userimg.length; s++) {
        userimg[s].setAttribute("src", finduser.profilepic);
    }
}
//for changing the user name according to the profile

let userfname = document.getElementsByClassName("user-fname");

if (finduser) {
    for (let k = 0; k < userfname.length; k++) {
        userfname[k].innerText = finduser.FirstName;
        /* userfname[k].parentNode.getElementsByTagName("span").classList.add("error-msg"); */
    }
}
console.log(userfname);

/*  let indexusername = document.getElementsByClassName("user-fname");
 
 for( let f=0; f<indexusername.length;f++){
	 indexusername[f].innerText = finduser.FirstName;
 } */
//changing the banner accroding to the image

if (getUrl.includes("profilepage.html")) {
    if (finduser) {
        let userbanner = document.getElementsByClassName("banner-image")[0];
        console.log(finduser.profilebanner);
        /* 	 //userbanner.style.backgroundColor = "red";
	 userbanner.style.backgroundImage = "url(images/"+finduser.profilebanner+")";
	 console.log(userbanner); */
    }
}
//location innertext adding to the modal-box

//let userloc = document.getElementById("")

//name changing in profile page
let mname = document.getElementsByClassName("my_name");

if (finduser) {
    for (let x = 0; x < mname.length; x++) {
        mname[x].innerText = finduser.lastname;
    }
}
console.log(mname);

//Modal-box-for-profile-forms

// This function displays the modal box
function handler(open) {
    // Prevent the default behavior of the event
    /*   open.preventDefault(); */

    // Get the overlay element and make it visible
    let overlayEle = document.getElementsByClassName("edit-container");
    overlayEle = overlayEle[0];
    overlayEle.style.display = "block";

    // Get the modal box element and make it visible
    let modalEle = document.getElementsByClassName("overlay");
    modalEle = modalEle[0];
    modalEle.style.display = "block";
    console.log(modalEle);
}

// This function hides the modal box
function close(block) {
    // Prevent the default behavior of the event
    block.preventDefault();

    // Get the overlay element and hide it
    let overlayEle = document.getElementsByClassName("edit-container");
    overlayEle[0].style.display = "none";

    // Get the modal box element and hide it
    let modalEle = document.getElementsByClassName("overlay");
    modalEle[0].style.display = "none";
}

// get send-this elements (HTML Collection)
let sendEle = document.getElementsByClassName("open-icon");

// iterate the send-this elements
for (let i = 0; i < sendEle.length; i++) {
    sendEle[i].addEventListener("click", handler);
}
// add click event listener for each send-this

let hideEle = document.getElementById("close-icon");

hideEle.addEventListener("click", close);

//Modal-box-for-profile-forms-ends

//Experience-edit-section-starts

function myfunction(exp) {
    exp.preventDefault();

    let experienceEle = document.getElementsByClassName("overlay");
    experienceEle = experienceEle[0];
    experienceEle.style.display = "block";

    let modalEle = document.getElementsByClassName("edit-container");
    modalEle = modalEle[0];
    modalEle.style.display = "block";
}

function closeFunction(editElement) {
    editElement.preventDefault();

    let experienceEle = document.getElementsByClassName("edit-container");
    experienceEle = experienceEle[0];
    experienceEle.style.display = "none";

    let modalEle = document.getElementsByClassName("overlay");
    modalEle = modalEle[0];
    modalEle.style.display = "none";
    //console.log(modalEle);
}
function onSignUp(e) {
    let isValid;
    for (let x = 0; x < inputs.length; x++) {
        isValid = 0;
        if (inputs[x].value.trim() == "") {
            inputs[x].parentNode.getElementsByTagName("p")[0].classList.add("error-msg");
            isValid++;
        } else {
            inputs[x].parentNode.getElementsByTagName("p")[0].classList.remove("error-msg");
        }
    }
}
let closeicon = document.getElementsByClassName("penele");

for (let j = 0; j < closeicon.length; j++) {
    closeicon[j].addEventListener("click", myfunction);
}

let hide = document.getElementById("timeele");
/* hide.addEventListener("click", closeFunction); */

//Experience-edit-section-ends

//Education-edit-section-starts

function myeducation(edu) {
    edu.preventDefault();

    let eduElement = this.parentNode.getElementsByClassName("edit-container")[0];
    eduElement.style.display = "block";

    let modalEle = document.getElementsByClassName("overlay");
    modalEle = modalEle[0];
    modalEle.style.display = "block";
}

function educlose(education) {
    education.preventDefault();
    let eduElement = this.parentNode.parentNode;

    eduElement.style.display = "none";

    let modalEle = document.getElementsByClassName("overlay");
    modalEle = modalEle[0];
    modalEle.style.display = "none";
}
if (getUrl.includes("profilepage.html")) {
    let eduopen = document.getElementsByClassName("edu-button");

    for (let k = 0; k < eduopen.length; k++) {
        eduopen[k].addEventListener("click", myeducation);
    }

    let eduEle = document.getElementsByClassName("edu-close-btn")[0];
    eduEle.addEventListener("click", educlose);
}

//setting attribute for the input elements
if (getUrl.includes("profilepage.html")) {
    let myname = document.getElementById("my_name");
    let editname = myname.innerText;

    let formname = document.getElementById("fname");
    formname.value = editname;
    //console.log(formname);

    /* let mylname = document.getElementById("lname");
    mylname.innerText = "D"; */

    let myposition = document.getElementById("my_position");
    let positionEdit = myposition.innerText;

    let positionform = document.getElementById("position");
    positionform.value = positionEdit;

    let myloc = document.getElementById("state-loc");
    let editloc = myloc.innerText;

    let formloc = document.getElementById("state-location");
    formloc.value = editloc;

    let mycoun = document.getElementById("country-loc");
    let editcoun = mycoun.innerText;

    let formcoun = document.getElementById("country-location");
    formcoun.value = editcoun;

    //creating the local storage

    let savebtn = document.getElementById("save-button");

    console.log(savebtn);

    savebtn.addEventListener("click", function () {
        let firstname = document.getElementById("fname").value;
        let lastname = document.getElementById("lname").value;
        let userrole = document.getElementById("position").value;
        let userloc = document.getElementById("state-loc").value;
        let usercoun = document.getElementById("country-loc").value;

        let localstrg = {
            firstname,
            lastname,
            userrole,
            userloc,
            usercoun,
        };
        localStorage.setItem("localstrg", JSON.stringify(localstrg));
        updatedetails();
    });

    //getting the modal-box items in local storage

    updatedetails();

    //console.log(myObject);

    function updatedetails() {
        let myObject = JSON.parse(localStorage.getItem("localstrg"));
        if (myObject) {
            document.getElementById("fname").value = myObject.firstname;
            document.getElementById("lname").value = myObject.lastname;
            document.getElementById("position").value = myObject.userrole;
            document.getElementById("state-location").value = myObject.userloc;
            document.getElementById("country-location").value = myObject.usercoun;
        }
        console.log(myname);

        /*  let fname = document.getElementById("fname");
let lstname = document.getElementById("lname");
let position = document.getElementById("position");
let stateloc = document.getElementById("state-location");
let countryloc = document.getElementById("country-location"); */
        //console.log(fname);
        //console.log(position);

        if (getUrl.includes("profilepage.html")) {
            let minename = document.getElementById("my_name");
            minename.innerHTML = myObject.firstname + " " + myObject.lastname;
        }
        /* console.log(minename); */

        let mineposition = document.getElementById("my_position");
        mineposition.innerText = position.value;

        console.log(mineposition);
    }
}
//saved the items in localStorage

// modal-box for start-a-post

let pstBtn = document.getElementById("pst_btn");
console.log(pstBtn);

pstBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let layEle = document.getElementsByClassName("overlay")[0];
    layEle.style.display = "block";

    let pstEle = document.getElementsByClassName("edit-container")[0];
    pstEle.style.display = "block";
});

// Get the file input element
let postContainer = document.getElementById("post-container");
let imageInput = document.getElementById("modal-box-input");
let txtArea = document.getElementById("txt-area");

let postButton = document.getElementById("pst-button");

postButton.addEventListener("click", function (event) {
    event.preventDefault();

    let selectedImage = imageInput.files[0];
    console.log(selectedImage);

    let textareaContent = txtArea.value;
    console.log(textareaContent);

    let postStore = JSON.parse(localStorage.getItem("posts")) || [];

    function renderPosts() {
        postContainer.innerHTML = ""; // Clear the postContainer before rendering

        postStore.forEach(function (post) {
            let postMarkup = `
        <div class="posts">
          <div class="post-info">
            <div class="post-txt">
              <p>${post.textareaContent}</p>
            </div>
            <div class="post-img">
              <img src="${post.imageBase64}" alt="">
            </div>
            <div class="post-actions"></div>
          </div>
        </div>
      `;

            postContainer.innerHTML += postMarkup;
        });
    }

    renderPosts();

    let reader = new FileReader();
    reader.onload = function (event) {
        let base64Image = event.target.result;

        let newPost = {
            //postUserId: postUser.id,
            textareaContent: textareaContent,
            imageBase64: base64Image,
        };

        postStore.push(newPost);
        localStorage.setItem("posts", JSON.stringify(postStore));
        renderPosts();
    };

    reader.readAsDataURL(selectedImage);

    let postSectionDiv = document.getElementsByClassName("edit-container")[0];
    postSectionDiv.style.display = "none";

    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.display = "none";

    imageInput.value = "";
    txtArea.value = "";
});

/*   let newbutton = document.getElementById("new-button");
  console.log(newbutton);
  
  function addnewpost(){
	  let newpost = {
			id:852,
			posttext:"hi its another post",
			postuserId:"abcdefgh"
					}
			postArr.push(newpost);
			postload(postArr);
  }
  
  newbutton.addEventListener('click',addnewpost);
  
  
}); */
