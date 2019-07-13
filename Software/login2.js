function Snooze_off() {
    const url = "https://exceed.superposition.pknn.dev/data"
    console.log("Hello world")
    fetch(url + "/15_Snooze", {
            method: 'POST',
            body: JSON.stringify({
                "data": {}
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .then((err) => console.log(err))
}

async function check_loop() {
    let user = JSON.parse(localStorage['myUser'])
    let time = {
        8: {
            'color': "r",
            'pill': true,
            'count': count
        },
        12: {
            'color': "r",
            'pill': true,
            'count': count
        },
        18: {
            'color': "r",
            'pill': true,
            'count': count
        }
    }
    if (!user["pill_time"][0]) {
        delete time[8]
    }
    if (!user["pill_time"][1]) {
        delete time[12]
    }
    if (!user["pill_time"][2]) {
        delete time[18]
    }

    let x = setInterval(() => {
        fetch(url + "/15_Snooze")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                if (myJson['Snooze'] == true) {
                    clearInterval(x);
                }
            });
    }, 1500);
    POST('', "/pill_time")
}

function time_differential() {
    var startTime = moment().format('YYYY-MM-DD HH:mm:ss');
    var endTime = moment().format('YYYY-MM-DD') + ' 18:00:00';
    var second_diff = moment
        .duration(moment(endTime, 'YYYY/MM/DD HH:mm:ss')
            .diff(moment(startTime, 'YYYY/MM/DD HH:mm:ss'))
        ).asSeconds();
    return second_diff
}

function Check_loop() {
    let time_left = time_differential()
    if (time_left <= 0) {
        GET()
    }
}

count = 0;

function POST_Pill(color, pill) {
    let res = {
        'color': "r",
        'pill': true,
        'count': count
    }
    POST(res, "/15_pill_time")
    count += 1
}

function activity(activity) {
    let activity_name = ""
    let activity_data = {
        time_start: "",
        time_stop: "",
        color: "",
        done: false,
        alarm: false
    }
    activity[activity_name] = activity_data
    return activity
}


function Submit_data() {
    const url = "https://exceed.superposition.pknn.dev/data/15"
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let Known_data = myJson
            let Username = document.getElementById("username").value
            let user_data = {
                "fullname": document.getElementById("fullname").value,
                "surname": document.getElementById("surname").value,
                "gender": document.getElementById("gender").value,
                "age": document.getElementById("age").value,
                "pill_time": {
                    // rgb = [r,g,b,rg,rb,gb,w]
                    "8": {
                        color: "r",
                        pill: true

                    },
                    "12": {
                        color: "r",
                        pill: true
                    },
                    "18": {
                        color: "r",
                        pill: true
                    },
                    "activity": {}
                },
                //"tele_num": document.getElementById("tel").value,
                //"Emer_tele_num": document.getElementById("em_tel").value,
                //"activities": {}
            }
            Known_data[Username] = user_data
            POST(Known_data, "/15_data")
            POST(Known_data[Username]["pill_time"], "/15_pill_time")
        });
}

function POST(data, urlplus) {
    const url = "https://exceed.superposition.pknn.dev/data"
    fetch(url + urlplus, {
            method: 'POST',
            body: JSON.stringify({
                "data": data
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .then((err) => console.log(err))
}

function GET__() {
    const url = "https://exceed.superposition.pknn.dev/data"
    fetch(url + "/15_Snooze")
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let text = JSON.stringify(myJson);
            document.getElementById('GGWP').innerHTML += `<h3>${text}</h3>`
        });
    fetch(url + "/15_pill_time")
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let text = JSON.stringify(myJson);
            document.getElementById('GGWP').innerHTML += `<h3>${text}</h3>`
        });
}

function initial() {
    userssss = []
    userssss.push({
        username: "",
        fullname: "",
        surname: "",
        gender: "",
        age: "",
        medicine: "",
        telephone: "",
        emergency: "",
        pill_take: [false, false, false],
        activities: [false, false, false]
    })
    localStorage.setItem('myUser2', JSON.stringify(userssss));
}


function Snooze_off() {
    const url = "https://exceed.superposition.pknn.dev/data"
    fetch(url + "/15_Snooze", {
            method: 'POST',
            body: JSON.stringify({
                "data": {}
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .then((err) => console.log(err))
}

function reset() {
    let data = {}
    POST(data, "/15_data")
}

async function check_loop() {
    let x = setInterval(() => {
        fetch(url + "/15_Snooze")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                if (myJson['Snooze'] == true) {
                    clearInterval(x);
                }
            });
    }, 1500);
    POST('', "/pill_time")
}

function time_differential(hours, min) {
    var d = new Date()
    var startTime = d.getTime()
    var endTime = Date.parse("July 13, 2019") + hours * 60 * 60 * 1000 + min * 60 * 1000
    var second_diff = endTime - startTime
    //var startTime = moment().format('YYYY-MM-DD HH:mm:ss');
    //var endTime = moment().format('YYYY-MM-DD ') + hours + ':' + min + ':00';
    //var second_diff = moment
    //    .duration(moment(endTime, 'YYYY/MM/DD HH:mm:ss')
    //        .diff(moment(startTime, 'YYYY/MM/DD HH:mm:ss'))
    //    ).asSeconds();
    return second_diff
}
count = 0;

pill_array = [8, 12, 18];
activities_array = [10, 14, 16];
activities_min_array = [00, 00, 00];
activities_color = ['rg', "gb", "g"];
pill_min_array = [00, 00, 00];
index_name = ""
index_s = ""
index = ""
userz = ""
console.log(pill_min_array)


function Check_loop_sent() {
    let userz = JSON.parse(localStorage['myUser2'])
    console.log(userz)
    let activity_time = userz[0]["activities"]
    console.log(activity_time)

    for (let index = 0; index < 3; index++) {
        let res = userz[0]["pill_take"][index]
        console.log(index)
        console.log(res)
        console.log("SENNNNNNNNNNNNNNNT")
        if (res) {
            console.log(pill_array[index])
            console.log(pill_min_array[index])
            let time_left = time_differential(pill_array[index], pill_min_array[index])
            console.log(time_left)
            console.log("GGGGGGG")
            if (time_left < 0) {
                console.log("in loop")
                timesss = pill_array[index + 1]
                index_s = index
                index_name = "pill_time"
                POST({
                    "color": "r",
                    "pill": "True",
                    "count": count
                }, "/15_pill_time")
                count += 1
                userz[0]["pill_take"][index] = false
            }
        }
        for (let index = 0; index < 3; index++) {
            let res = activity_time[index]
            if (res) {
                let time_left = time_differential(parseInt(activities_array[index], 10), parseInt(activities_min_array[index], 10))
                if (time_left <= 0) {
                    timesss = activities_array[index]
                    index_s = index
                    index_name = "activities"
                    POST({
                        "color": activities_color[index],
                        "pill": "True",
                        "count": count
                    }, "/15_pill_time")
                    userz["activities"][index] = false
                    count += 1
                }
            }
        }
    }
    localStorage.setItem('myUser2', JSON.stringify(userz));
}

function Check_loop_get() {
    let userz = JSON.parse(localStorage['myUser2'])
    fetch("https://exceed.superposition.pknn.dev/data/15_Snooze")
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            if (myJson) {
                POST({}, "/15_Snooze")
                if (index_name == "pill_take") {
                    pill_min_array[index_s] = (parseInt(pill_min_array[index_s], 10) + 15).toString()
                    userz[0]["pill_take"][index] = true
                } else if (index_name == "activities") {
                    activities_min_array[index_s] = (parseInt(activities_min_array[index_s], 10) + 15).toString()
                    userz[0]["activities"][index] = true
                }
                localStorage.setItem('myUser2', JSON.stringify(userz));
                index_name = ""
                console.log(pill_min_array)
                Snooze_off()
            }
        });

}
if_check = true
setInterval(async function () {
    if (!JSON.parse(localStorage['myUser2'])[0]['username']) {
        initial()
    } else {
        userz = user
    }
    await Check_loop_sent()
    await Check_loop_get()
}, 5000);


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