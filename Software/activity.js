let data_JSON = {}

function GET() {
    const url = "https://exceed.superposition.pknn.dev/data/15_data"
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson)
        });
    console.log(JSON.stringify(data_JSON))
    return data_JSON
}

var day = new Date()
document.getElementById('date').innerHTML += day.toDateString()
if (user.medicine[0]) {
    document.getElementById('activity1').innerHTML += 'Take pill'
}
if (user.medicine[1]) {
    document.getElementById('activity3').innerHTML += 'Take pill'
}
if (user.medicine[2]) {
    document.getElementById('activity6').innerHTML += 'Take pill'
}



function handleChange(checkbox) {
    if (checkbox.checked == true) {
        // var ch = document.getElementById("activity1");
        document.getElementById("activity" + checkbox.id).style.textDecoration = 'line-through'

    } else {
        document.getElementById("activity" + checkbox.id).style.textDecoration = 'none'

    }
}
