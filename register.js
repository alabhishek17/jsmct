function validateForm(){
    var name=document.forms["RegForm"]["Name"];
    var email=document.forms["RegForm"]["EMail"];
    var password=document.forms["RegForm"]["Password"];
    var confrimPassword=document.forms["RegForm"]["Confrim"];

    // console.log(name, email, password, confrimPassword);

    if(name.value == ""){
        alert("Please enter the name");
        return false;
    }
    if(email.value == ""){
        alert("Please enter the email");
        return false;
    }
    if(password.value == ""){
        alert("Please enter the password");
        return false;
    }
    if(confrimPassword.value == ""){
        alert("Please enter the password");
        return false;
    }
    if(password.value===confrimPassword.value){
        if(registerinLocalStorage()){
            alert("register is done successfully!!")
            return true;
        }else{
            return false;
        }
    }else{
        alert("Please enter the correct password and confrim password value!!");
        return false;
    }
    return true;
}

let users = JSON.parse(localStorage.getItem('userList')) ? JSON.parse(localStorage.getItem('userList')):[];

console.log(users);

function registerinLocalStorage(){
    var name=document.forms["RegForm"]["Name"].value;
    var email=document.forms["RegForm"]["EMail"].value;
    var password=document.forms["RegForm"]["Password"].value;
    var confrimPassword=document.forms["RegForm"]["Confrim"].value;

    // console.log(name, email,password,confrimPassword);

    let newUser = {
        name:name, 
        email:email,
        password:password,
        confrimPassword:confrimPassword
    }

    let userExists = users.some(user => user.email === newUser.email);

    if(userExists){
        alert("user alreay exists");
        return false;
    } else {
        users.push(newUser);
    }

    let userString = JSON.stringify(users);
    localStorage.setItem("userList", userString);
    return  true;
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("reg_close")

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}






let users1 = JSON.parse(localStorage.getItem('userList'));
console.log(users1);

function validateForm() {
var email = document.forms["RegForm"]["EMail"].value;
var password = document.forms["RegForm"]["Password"].value;

if (email == "") {
  alert("Please enter the email");
  return false;
}
if (password == "") {
  alert("Please enter the password");
  return false;
}
if(users.some(person=>(person.email === email && person.password === password))){
    alert('Logged in successfully');
    return true;
}else{
    alert('user not found');
    return false;
}
}

// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementById("log_close")

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}





