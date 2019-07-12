var coll = document.getElementsByClassName("patients");
var item = document.getElementsByClassName("activity");
var i, j;
let user = JSON.parse(localStorage['myUser2'])
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
for (j = 0; j < item.length; j++) {
    item[j].addEventListener("click", function () {
        this.classList.toggle("active");
        var act = this.nextElementSibling;
        if (act.style.maxHeight) {
            act.style.maxHeight = null;
        } else {
            act.style.maxHeight = act.scrollHeight + "px";
        }
    });
}
for (i = 0; i < user.length; i++) {
    document.getElementById('name1').innerHTML += user[i].fullname
    document.getElementById('age1').innerHTML += user[i].age
    document.getElementById('gend1').innerHTML += user[i].gender
    document.getElementById('tel1').innerHTML += user[i].telephone
    document.getElementById('emtel1').innerHTML += user[i].emergency
    if (user[i].medicine[0] == false) {
        document.getElementById('1pill1').innerHTML += 'no pill'
    }
    if (user[i].medicine[1] == false) {
        document.getElementById('1pill2').innerHTML += 'no pill'
    }
    if (user[i].medicine[2] == false) {
        document.getElementById('1pill3').innerHTML += 'no pill'
    }
    if (user[i].medicine[0] == true && user[i].pill_take[0] == false) {
        document.getElementById('1pill1').innerHTML += 'does not eat'
    }
    if (user[i].medicine[1] == true && user[i].pill_take[1] == false) {
        document.getElementById('1pill2').innerHTML += 'does not eat'
    }
    if (user[i].medicine[2] == true && user[i].pill_take[2] == false) {
        document.getElementById('1pill1').innerHTML += 'does not eat'
    }
    if (user[i].medicine[0] == true && user[i].pill_take[0] == true) {
        document.getElementById('1pill1').innerHTML += 'Eat'
    }
    if (user[i].medicine[1] == true && user[i].pill_take[1] == true) {
        document.getElementById('1pill2').innerHTML += 'Eat'
    }
    if (user[i].medicine[2] == true && user[i].pill_take[2] == true) {
        document.getElementById('1pill3').innerHTML += 'Eat'
    }
    if (user[i].activities[0] == false) {
        document.getElementById('1act1').innerHTML += 'not done'
    }
    if (user[i].activities[1] == false) {
        document.getElementById('1act2').innerHTML += 'not done'
    }
    if (user[i].activities[2] == false) {
        document.getElementById('1act3').innerHTML += 'not done'
    }
    if (user[i].activities[0] == true) {
        document.getElementById('1act1').innerHTML += 'done'
    }
    if (user[i].activities[1] == true) {
        document.getElementById('1act2').innerHTML += 'done'
    }
    if (user[i].activities[2] == true) {
        document.getElementById('1act3').innerHTML += 'done'
    }
}

console.log(user)

function logout() {
    window.location.href = "login2.html";
}