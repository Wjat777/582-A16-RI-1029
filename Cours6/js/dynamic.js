function exercice1() {
  /* Vous pouvez changer le contenu de ces variables */
  var var1 = "JS";
  var var2 = "CSS";
  var var3 = "HTML";
  /* Ne pas toucher à la déclaration de texteComplet */
  var texteComplet;
  /* Votre concaténation ... */
  texteComplet = var1 + var2 + var3;
  /* La condition ici */

  if (texteComplet.length >= 100) {
    alert("C'est une grande phrase");
  } else {
    alert("C'est une petite phrase");
  }
}

function exercice2(quantity, unit) {
  var result;

  // TODO: Coder l'algorithme de transformation ici.
  switch (unit.toUpperCase()) {
    case "K":
      result = 1024 ** 1 * quantity;
      break;
    case "M":
      result = 1024 ** 2 * quantity;
      break;
    case "G":
      result = 1024 ** 3 * quantity;
      break;
    case "T":
      result = 1024 ** 4 * quantity;
      break;
    default:
      result = quantity;
      break;
  }

  console.log("Exercice 2 : " + result); // Affiche le résultat (avec les valeurs par défaut, cela donnera 2048).
}

function exercice3(shortenBytes) {
  var letter = shortenBytes.substr(-1); // TODO: extract the letter from `shortenBytes` with `substr`.
  var number = parseInt(shortenBytes); // TODO: extract a numeric number from `shortenBytes` with `parseInt`.
  var bytes;

  if (isNaN(number)) {
    console.log(shortenBytes + " n'est pas un valeur numérique");
    return;
  }

  switch (letter.toUpperCase()) {
    case "K":
      bytes = 1024 ** 1 * number;
      break;
    case "M":
      bytes = 1024 ** 2 * number;
      break;
    case "G":
      bytes = 1024 ** 3 * number;
      break;
    case "T":
      bytes = 1024 ** 4 * number;
      break;
    default:
      bytes = number;
      break;
  }

  console.log("Exercice 3 : " + bytes);
}

function exercice4(value) {
  console.log("Exercice 4 : ");
  if (typeof value === "string")
    console.log("La valeur est une chaîne de caractères");
  else if (typeof value === "number") console.log("La valeur est un nombre");

  switch (Number(value)) {
    case 2:
      console.log("La valeur est supérieure à 1");
    case 1:
      console.log("La valeur est supérieure à 0");
      break;
    case 0:
      console.log("La valeur est égale à 0");
      break;
  }
}

//
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
