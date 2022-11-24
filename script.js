//défini le mot aléatoire
/*function motAlea() {
  let mots = [
    "bonjour",
    "aurevoir",
    "lundi",
    "tablette",
    "ordinateur",
    "codage",
    "brocoli",
    "chocolat",
    "voiture",
    "avion",
  ];
  let choix = [Math.round(Math.random() * mots.length)];
  let mot = mots[choix];
    return mot;
}*/

/*function mot(){
let mot = motAlea().split("");
return mot;
}*/

/*alert(mot());
function affichMot(){
    let mot = motAlea().split("");
    let tab=[];
    for (let i=0; i<mot.length;i++){
        tab.push("_")
    }
}*/

function pendu() {
  let mots = [
    "bonjour",
    "aurevoir",
    "lundi",
    "tablette",
    "ordinateur",
    "codage",
    "brocoli",
    "chocolat",
    "voiture",
    "avion",
  ];
  let choix = [Math.round(Math.random() * mots.length)];
  let mot = mots[choix];
  let search = mot.split("");
  let tab = [];
  for (let i = 0; i < search.length; i++) {
    tab.push("_");
  }
  alert(tab);
  let user;
  let compteur = 0;
  let victoire = 0;
  while (compteur != 5 && victoire != mot.length) {
    user = prompt(tab + " choisi une nouvelle lettre " + " erreur " + compteur);
    if (search.includes(user)) {
      for (let i = 0; i < mot.length; i++) {
        if (search[i] == user) {
          tab[i] = user;
          victoire++;
        }
      }
    } else {
      compteur++;
      alert("désolé essaye encore tu es à  " + compteur + "erreur sur 5");
    }
  }
  if (compteur == 5) {
    alert("Vous avez perdu");
  } else {
    alert("Victoire!!!!");
  }
}

alert(pendu());
