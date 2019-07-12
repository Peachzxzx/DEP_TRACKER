//let data_stucture = {email: user_data}
//let user_data = {fullname: "",
//    surname:"",
//    gender:"",
//    age:"",
//    pill_time: {},
//    activity: activity_data}
//let activity_data = {activity_name : {time_start: "", time_stop: "", color: ""}}

function Submit_data() {
    const url = "https://exceed.superposition.pknn.dev/data/15"
    fetch(url)
    .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let Known_data = myJson
    let Username = document.getElementById("username").value
    let user_data = {"fullname": document.getElementById("fullname").value,
        "surname":document.getElementById("username").value,
        "gender":document.getElementById("gender").value,
        "age":document.getElementById("age").value,
        "pill_time": document.getElementById("pill_time").value,
        "tele_num" : "",
        "Emer_tele_num" : "",
        "activity": {}
    }
    Known_data[Username] = user_data
    POST(Known_data)
    }
  );

    
}

function POST(data) {
    const url = "https://exceed.superposition.pknn.dev/data/15"
    console.log("Hello world")
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({"data" :data
        }),
        headers:{
        'Content-Type': 'application/json'}
    }).then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err))
}

function GET() {
    const url = "https://exceed.superposition.pknn.dev/data/15"
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let text = JSON.stringify(myJson);
    document.getElementById('GGWP').innerHTML += `<h3>${text}</h3>`
}
  );
}

function reset() {
    let data = {}
    POST(data)  
}