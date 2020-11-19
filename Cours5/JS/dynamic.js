function valeurDeMaVariable(valeur){
    var element = document.getElementById("result");
    if (valeur>9 || valeur<0){
        element.innerHTML="<div class='alert'>Entre 0 et 9 s.v.p!</div>";
    }
    else if(valeur==="5"){
        
        element.innerHTML="<div class='success'>Bravo! La variable vaut 5</div>";
    }
    else{
        element.innerHTML="<div class='fail'>Domage! La variable vaut "+ valeur  +" </div>"  
    }
}