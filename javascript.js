var signeU=""
var signe=""
var signeO=""
var random=""
var nombre = 0;
var score_u = 0;
var score_o = 0;
var led_j ="";
var led_o ="";
function change() {
    var person = prompt("Please enter your name",);

    if (person != null) {
        document.getElementById("demo").innerHTML = person;
    }
}
function changement_de_jeux1(signe) {
    if (signe == "pierre") {
        document.getElementById("mdimg").src = "pierre.svg";
        signeU = "pierre";
        console.log("pierre");
    }

    else if (signe == "feuille") {

        document.getElementById("mdimg").src = "feuille.svg";
        signeU = "feuille";
        console.log("feuille");
    }
    else if (signe == "ciseaux") {

        document.getElementById("mdimg").src = "ciseaux.svg";
        signeU = "ciseaux";
        console.log("ciseaux");
    }
    changement_de_jeux2();
    nombre++
    console.log("nombre:" + nombre);
    document.getElementById("nombre").innerText = nombre;
    win_j();
}
function changement_de_jeux2() {
var random = Math.round(Math.random() * 3)
if (random == 1) {
    document.getElementById("mdimg2").src = "pierre.svg";
    signeO ="pierre"; 
    console.log("pierre");
    
}
else if (random == 2) {
    document.getElementById("mdimg2").src = "feuille.svg";
    signeO = "feuille";
    console.log("feuille");
}
else  {
    document.getElementById("mdimg2").src = "ciseaux.svg";
    signeO = "ciseaux";
    console.log("ciseaux");
}
}
function win_j() {
    switch (nombre) {
        case 1:
            if (nombre == 1) {
                led_j = 'led1';
                led_o = 'ledo1';
                break;
            }
        case 2:
            if (nombre == 2) {
                led_j = 'led2';
                led_o = 'ledo2';
                break;
            }
        case 3:
            if (nombre == 3) {
                led_j = 'led3';
                led_o = 'ledo3';
                break;
            }
    }
    if (signeU==signeO) {
        alert ("egalité");
        document.getElementById(led_j).style.backgroundColor = 'blue';
        document.getElementById(led_o).style.backgroundColor = 'blue';
    }
    else if (signeU == 'pierre' && signeO == 'ciseaux' || signeU == 'feuille' && signeO == 'pierre' || signeU == 'ciseaux' && signeO == 'feuille') {
        alert ("gagner");
        document.getElementById(led_j).style.backgroundColor = 'green';
        document.getElementById(led_o).style.backgroundColor = 'red';
        score_u++;
    }
    else {
        alert ("perdu");
        document.getElementById(led_j).style.backgroundColor = 'red';
        document.getElementById(led_o).style.backgroundColor = 'green';
        score_o++;
    }
while (nombre >= 3) {
    if (score_u>score_o) {
        console.log("trankilouse ou la gagner");
        document.getElementById("nombre").innerHTML= score_u + "-" + score_o + " " + "gagner"
    }
    else if (score_u<score_o) {
        console.log("trankilouse ou la perd");
        document.getElementById("nombre").innerHTML= score_u + "-" + score_o + " " + "perdu"
    }
    else {
        console.log("égalité");
        document.getElementById("nombre").innerHTML= score_u + "-" + score_o + " " + "egalité"
    }
    break;
}
}
