//Cour 9
//William John Adam Trindade
//2020-12-09

function testTableu() {
  var tableauFruits = ["Papaya", "Ananas", "Mango", "Orange"];
  var tableauNumeros = [1, 4, 3, 10, 7];
  console.log(tableauFruits);
  console.log(tableauNumeros);
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  for (const fruit of tableauFruits) {
    console.log(fruit);
  }
}

function exercice1() {
  var vetements = ["Tuque", "Mitaines", "Bottes"];
  console.log(vetements);
}

function exercice2() {
  for (let index = 0; index < 5; index++) {
    console.log("Bonjour");
  }
}

function exercice3() {
  var multiplicateur = parseInt(
    document.getElementById("element3_multiplicateur").value
  );
  function tableauMultiplication(multiplicateur) {
    for (let index = 0; index <= 10; index++) {
      console.log(
        index + " x " + multiplicateur + " = " + index * multiplicateur
      );
    }
  }
  tableauMultiplication(multiplicateur);
}

function exercice4() {
  var vetements = ["Tuque", "Mitaines", "Bottes"];
  //avec for loop
  console.log("Méthode for loop");
  for (let index = 0; index < vetements.length; index++) {
    console.log("Element [" + index + "] - " + vetements[index]);
  }
}

function exercice5() {
  var vetements = ["Tuque", "Mitaines", "Bottes"];
  //avec for of
  console.log("Méthode for of");
  let index = 0;
  for (let vetement of vetements) {
    console.log("Element [" + index + "] - " + vetement);
    index++;
  }

  //avec for of 2
  console.log("Méthode for of avec entries()");
  for (let [index, value] of vetements.entries()) {
    console.log("Element [" + index + "] - " + value);
  }
}

function exercice6() {
  var phrase = document.getElementById("element6_phrase").value;
  function epeler(phrase) {
    for (let i = 0; i < phrase.length; i++) {
      console.log(i + " , " + phrase[i]);
    }
  }
  epeler(phrase);
}

//Console sur le fureteur
effacer = function () {
  var el = document.getElementById("myLog");
  while (el.firstChild) el.removeChild(el.firstChild);
};
//remplace la fonction log pour écrire dans un div
window.console = {
  log: function (str) {
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  },
};
