let user = JSON.parse(localStorage['myUser2'])
console.log(user)
let doctorID = 88

function doclog() {
    if (document.getElementById('doctor').value == '88') {
        window.location.href = "doctor2.html";
    }
}

function login() {
    if (document.getElementById('login').value == user[0].username) {
        window.location.href = "activity.html";
    }
}