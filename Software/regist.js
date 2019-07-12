let user=[]
// age = getElementById('ageinput').value
// age = parseInt(age)
// if (age==NaN){
// document.getElementById('agebox').innerText = 'input number'
// }
function regist(){
    let name = document.getElementById('userinput').value
    console.log(name)
    let firstname = document.getElementById('fullnameinput').value;
    console.log(firstname)
    let lastname = document.getElementById('surnameinput').value;
    console.log(lastname)
    let gend = document.getElementById('gender').value;
    console.log(gend)
    let ag = document.getElementById('ageinput').value;
    console.log(ag)
    let pill = [false,false,false]
    if (document.getElementById('morning').checked==true){
        pill[0]=true
    }
    if (document.getElementById('noon').checked==true){
        pill[1]=true
    }
    if (document.getElementById('evening').checked==true){
        pill[2]=true
    }
    console.log(pill)
    let telnum = document.getElementById('tel').value;
    console.log(telnum)
    let emnum = document.getElementById('em_tel').value;
    console.log(emnum)
    let med_act = [false,false,false]
    let act = [false,false,false]
    user.push({
        username:name,fullname:firstname,surname:lastname,
        gender:gend,age:ag,medicine:pill,telephone:telnum
        ,emergency:emnum,pill_take:med_act,activities:act
    });
    console.log(user);
    localStorage.setItem('myUser', JSON.stringify(user));
    window.location.href = "activity.html";
}
