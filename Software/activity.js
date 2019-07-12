let user = JSON.parse(localStorage['myUser'])
console.log(user)
var day = new Date()
document.getElementById('date').innerHTML += day.toDateString()
if (user[0].medicine[0]) {
    document.getElementById('activity1').innerHTML += 'Take pill'
}
if (user[0].medicine[1]) {
    document.getElementById('activity3').innerHTML += 'Take pill'
}
if (user[0].medicine[2]) {
    document.getElementById('activity6').innerHTML += 'Take pill'
}

// function handleChange(checkbox) {
//     if (checkbox.checked == true) {
//         // var ch = document.getElementById("activity1");
//         document.getElementById("activity" + checkbox.id).style.textDecoration = 'line-through'

//     } else {
//         document.getElementById("activity" + checkbox.id).style.textDecoration = 'none'

//     }
// }

function clicksub() {
    if (document.getElementById('1').checked == true) {
        user[0].pill_take[0] = true
    }
    if (document.getElementById('3').checked == true) {
        user[0].pill_take[1] = true
    }
    if (document.getElementById('6').checked == true) {
        user[0].pill_take[2] = true
    }
    if (document.getElementById('2').checked == true) {
        user[0].activities[0] = true
    }
    if (document.getElementById('4').checked == true) {
        user[0].activities[1] = true
    }
    if (document.getElementById('5').checked == true) {
        user[0].activities[2] = true

    }
    localStorage.setItem('myUser2', JSON.stringify(user))
    console.log(user[0].activities)
    console.log(user[0].pill_take)
    window.location.href = './login2.html'

}

function cancle(checkbox) {
    document.getElementById('1').checked = false
    document.getElementById('2').checked = false
    document.getElementById('3').checked = false
    document.getElementById('4').checked = false
    document.getElementById('5').checked = false
    document.getElementById('6').checked = false
}