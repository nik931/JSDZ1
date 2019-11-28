document.getElementById('button2').addEventListener("click", () => {
    document.getElementById("container1").style.background = '#000';
    document.getElementById('a1').style.background = '#008000';
    document.getElementById('a1').style.color = '#000';
    document.getElementById('a2').style.background = '#008000';
    document.getElementById('a2').style.color = '#000';
    document.getElementById('a3').style.background = '#008000';
    document.getElementById('a3').style.color = '#000';
});
document.getElementById('button3').addEventListener("click", () => {
    document.getElementById("container1").innerHTML = `flexbox <img src='./img/ph1.png'>`;
    document.getElementById("container1").style.background = '#008000';
});

let term = {
    Canada: 10,
    Garmany: 15,
    Spain: 20,
    Namder: 3,
};

alert( (term.Canada + term.Garmany + term.Spain) / term.Namder );

var maxtemp = 20,
    Canada = 10,
    Garmany = 15,
    Spain = 20;

if(Canada == maxtemp){
    alert("20")
};
if(Garmany == maxtemp){
    alert("20")
};
if(Spain == maxtemp){
    alert("20")
};

    





