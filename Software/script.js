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
    console.log("Hello world")
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

pill_array = ['08', '12', '18']
activites_array = ['10', '14', '16']
activites_min_array = ["00", "00", "00"]
activites_color = ['rg', "gb", "g"]
pill_min_array = ["00", "00", "00"]

function Check_loop_sent() {
    let user = JSON.parse(localStorage['myUser2'])
    let pill_time = user["pill_take"]
    let activity_time = user["activites"]

    for (let index = 0; index < 3; index++) {
        let user = JSON.parse(localStorage['myUser2'])
        if (res) {
            let time_left = time_differential(parseInt(pill_array[index], 10), parseInt(pill_min_array[index], 10))
            if (time_left <= 0) {
                timesss = pill_array[index]
                index_s = index
                index_name = "pill_time"
                POST({
                    "color": "r",
                    "pill": "True",
                    "count": count
                }, "/15_Pill_time")
                count += 1
                user["pill_take"][index] = false
            }
        }
        for (let index = 0; index < 3; index++) {
            let res = activity_time[index]
            if (res) {
                let time_left = time_differential(parseInt(activites_array[index], 10), parseInt(activites_min_array[index], 10))
                if (time_left <= 0) {
                    timesss = activites_array[index]
                    index_s = index
                    index_name = "activities"
                    POST({
                        "color": activites_color[index],
                        "pill": "True",
                        "count": count
                    }, "/15_Pill_time")
                    user["activities"][index] = false
                    count += 1
                }
            }
        }
    }
    localStorage.setItem('myUser2', JSON.stringify(user));
}

function Check_loop_get() {
    let user = JSON.parse(localStorage['myUser2'])
    fetch(url + "/15_Snooze")
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            if (myJson) {
                POST({}, "/15_Pill_time")
                if (index_name == "Pill_time") {
                    pill_min_array[index_s] = (parseInt(pill_min_array[index_s], 10) + 15).toString()
                    user["pill_take"][index] = true
                } else {
                    activites_min_array[index_s] = (parseInt(activites_min_array[index_s], 10) + 15).toString()
                    user["activities"][index] = true
                }
                localStorage.setItem('myUser2', JSON.stringify(user));
                Snooze_off()
            }
        });

}

setInterval(async function () {
    await Check_loop_sent()
    await Check_loop_get()
}, 1200);