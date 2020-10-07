var signeU=""
var signe=""
var signeO=""
var random=""
var nombre = 0;
function change() {
    var person = prompt("Please enter your name",);

    if (person != null) {
        document.getElementById("demo").innerHTML = person;
    }
}
function changement_de_jeux1(signe) {
    if (signe == "pierre") {
        document.getElementById("mdimg").src = "pierre.svg"
        signeU = "pierre"
    }

    else if (signe == "feuille") {

        document.getElementById("mdimg").src = "feuille.svg"
        signeU = "feuille"
    }
    else if (signe == "ciseaux") {

        document.getElementById("mdimg").src = "ciseaux.svg"
        signeU = "ciseaux"

    }
    utilisateur_win();
}
function changement_de_jeux2() {
var random = Math.round(Math.random() * 3)
if (random == 1) {
    document.getElementById("mdimg2").src = "pierre.svg"
    signeO ="pierre" 
}
else if (random == 2) {
    document.getElementById("mdimg2").src = "feuille.svg"
    signeO = "feuille"

}
else if (random == 3) {
    document.getElementById("mdimg2").src = "feuille.svg"
    signeO = "ciseaux"


}
utilisateur_win();
}
function utilisateur_win() {
    if (signeU == signeO) {
        console.log("egality" + " " + signeU + " " + signeO);
        if (nombre == 1) {
            console.log("egality");
            document.getElementById("ledo1").style.backgroundColor = 'blue';
            document.getElementById("led1").style.backgroundColor = 'blue';
        }
        else if (nombre == 2) {
            console.log("egality");
            document.getElementById("ledo2").style.backgroundColor = 'blue';
            document.getElementById("led2").style.backgroundColor = 'blue';
        }
        else {
            console.log("egality");
            document.getElementById("ledo3").style.backgroundColor = 'blue';
            document.getElementById("led3").style.backgroundColor = 'blue';
        }
    }
}
 if (signeU == "pierre" && signeO == "ciseaux" || signeU == "feuille" && signeO == "pierre" || signeU == "ciseaux" && signeO == "feuille") {
    console.log("win" + " " + signeU + " " + signeO);
    if (nombre == 1) {
        console.log("win");
        document.getElementById("ledo1").style.backgroundColor = 'red';
        document.getElementById("led1").style.backgroundColor = 'green';
    }

    else if (nombre == 2) {
        console.log("win");
        document.getElementById("ledo2").style.backgroundColor = 'red';
        document.getElementById("led2").style.backgroundColor = 'green';
    }
else  {
        console.log("win");
        document.getElementById("ledo3").style.backgroundColor = 'red';
        document.getElementById("led3").style.backgroundColor = 'green';
    }
}
else {
console.log("lose" + " " + signeU + " " + signeO);
if (nombre == 1) {
    console.log("win");
    document.getElementById("ledo1").style.backgroundColor = 'green';
    document.getElementById("led1").style.backgroundColor = 'red';
}

else if (nombre == 2) {
    console.log("win");
    document.getElementById("ledo2").style.backgroundColor = 'green';
    document.getElementById("led2").style.backgroundColor = 'red';
}
else  {
    console.log("win");
    document.getElementById("ledo3").style.backgroundColor = 'green';
    document.getElementById("led3").style.backgroundColor = 'red';
}


}
