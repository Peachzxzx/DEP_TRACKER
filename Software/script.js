function POST() {
    let email = document.getElementById("EEMM").value
    const url = "https://exceed.superposition.pknn.dev/data/15"
    fetch(url + '', {
        method: 'POST',
        body: JSON.stringify({"data" :{
            "Email": email}
        }),
        headers:{
        'Content-Type': 'application/json'}
    }).then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err))
}

function GET() {
    const url = "https://exceed.superposition.pknn.dev/data/15"
    fetch(url + '')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let text = JSON.stringify(myJson);
    document.getElementById('HH').innerHTML += `<h3>${text}</h3>`
}
  );
}