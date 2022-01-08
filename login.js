let nameinput = document.getElementById("uname");

let emailinput = document.getElementById("email");

let passwordinput = document.getElementById("pass");

function checkName(e) {
  let name = nameinput.value;
  console.log(name);
  if (name == null || name == undefined) {
    alert("Username can't be empty");
  } else if (name.length <= 2) {
    alert("Username is too short");
  } else if (name.length > 10) {
    alert("Username is too long");
  }
}

function checkEmail(e) {
  let name = emailinput.value;
  console.log(name);
  if (name == null || name == undefined) {
    alert("Email can't be empty");
  } else if (name.length <= 2) {
    alert("Email is too short");
  } else if (name.length > 20) {
    alert("Email is too long");
  } else if (!name.includes("@")) {
    alert("Envalid email address");
  }
}

function checkPassword(e) {
  let name = passwordinput.value;
  console.log(name);
  if (name == null || name == undefined) {
    alert("Password can't be empty");
  } else if (name.length < 8) {
    alert("Password is too short");
  }
}

nameinput.addEventListener("blur", checkName);
emailinput.addEventListener("blur", checkEmail);
passwordinput.addEventListener("blur", checkPassword);
