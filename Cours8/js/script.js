function Exercice1() {
  function addition(x, y) {
    var somme = x + y;
    return somme;
  }

  var lx = parseInt(document.getElementById("element1_x").value);
  var ly = parseInt(document.getElementById("element1_y").value);

  console.log("Le resultat est : " + addition(lx, ly));
}

function Exercice2() {
  var x = parseInt(document.getElementById("element2_x").value);
  if (x < 0) {
    console.log("Nombre négatif!");
  } else {
    console.log("Nombre positif!");
  }
}

function Exercice3() {
  function getMax(a, b, c) {
    if (a > b && a > c) max = a;
    else if (b > c) max = b;
    else max = c;
    return max;
  }
  var la = parseInt(document.getElementById("element3_a").value);
  var lb = parseInt(document.getElementById("element3_b").value);
  var lc = parseInt(document.getElementById("element3_c").value);

  console.log("Le resultat est : " + getMax(la, lb, lc));
}

function Exercice4() {
  function jourSemaine(jour) {
    switch (jour) {
      case 0:
        return "dimanche";
        break;
      case 1:
        return "lundi";
        break;
      case 2:
        return "mardi";
        break;
      case 3:
        return "mercredi";
        break;
      case 4:
        return "jeudi";
        break;
      case 5:
        return "vendredi";
        break;
      case 6:
        return "samedi";
        break;
      default:
        return "il faut que le chiffre soit entre 0 et 6";
        break;
    }
  }
  var j = parseInt(document.getElementById("element4_j").value);
  console.log("Le jour de la semaine est : " + jourSemaine(j));
}

function Exercice4extra() {
  function jourSemaine(jour) {
    switch (jour) {
      case 0:
        return "dimanche";
        break;
      case 1:
        return "lundi";
        break;
      case 2:
        return "mardi";
        break;
      case 3:
        return "mercredi";
        break;
      case 4:
        return "jeudi";
        break;
      case 5:
        return "vendredi";
        break;
      case 6:
        return "samedi";
        break;
      default:
        return "il faut que le chiffre soit entre 0 et 6";
        break;
    }
  }
  var aujourdhui = new Date();
  var jour = aujourdhui.getDay();
  console.log(
    "Aujourd'hui c'est le " +
      jourSemaine(jour) +
      " " +
      aujourdhui.getFullYear() +
      "-" +
      (aujourdhui.getMonth() + 1) +
      "-" +
      aujourdhui.getDate()
  );
}

function Exercice5() {
  function getMax(a, b, c) {
    max = a > b && a > c ? a : b > c ? b : c;

    return max;
  }
  var la = parseInt(document.getElementById("element5_a").value);
  var lb = parseInt(document.getElementById("element5_b").value);
  var lc = parseInt(document.getElementById("element5_c").value);

  console.log("Le resultat est : " + getMax(la, lb, lc));
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
