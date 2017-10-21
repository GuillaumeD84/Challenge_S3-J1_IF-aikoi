/*
 * 1.	On est le contrôleur du train et on nous présente un billet en montant :
 *  - Si le type de billet est "first", on affiche "Première classe" dans la console
 *  - Sinon si le type de billet est "second", on affiche "Seconde classe"
 *  - Sinon si le type de billet est "eco", on affiche "Classe éco"
 *  - Sinon, on affiche juste "Mais IFaikoi lui..."
 */
var typeBillet1 = "eco";

console.log("On va tester le type du Billet n°1");

if (typeBillet1 === "first") console.log("Première classe");
else if (typeBillet1 === "second") console.log("Seconde classe");
else if (typeBillet1 === "eco") console.log("Classe éco");
else console.log("Mais IFaikoi lui...");





/*
 * 2. On répète le test pour chacun des autres billets
 */
var typeBillet2 = "first";
var typeBillet3 = "second";
var typeBillet4 = "trololo";

// On met le type des 4 billets dans un tableau
var listeBillets = [typeBillet1, typeBillet2, typeBillet3, typeBillet4];

// On test toutes les valeurs du tableau grâce à une boucle for
for (var i = 0; i < listeBillets.length; i++) {
  console.log("Quel est le type du billet n°" + (i + 1) + " ?");
  if (listeBillets[i] === "first") console.log("Première classe");
  else if (listeBillets[i] === "second") console.log("Seconde classe");
  else if (listeBillets[i] === "eco") console.log("Classe éco");
  else console.log("Mais IFaikoi lui...");
}


// Les 'switch'
console.log("On va tester le type du Billet n°4 grâce à un switch");

switch (typeBillet4) {
  case "first":
    console.log("Première classe");
    break;
  case "second":
    console.log("Seconde classe");
    break;
  case "eco":
    console.log("Classe éco");
    break;
  default:
    console.log("Mais IFaikoi lui...");
}




/*
 * BONUS:
 * - Maintenant on demande directement le type du billet avec "prompt" et on affiche
 * le message correspondant avec "alert"
 */

// myTicketType contiendra la chaine de caratères de la classe du billet (Première classe, Seconde classe, etc...), d'après ce que l'utilisateur aura indiquer grâce au prompt
var myTicketType;
var myTicket = prompt("De quel type est votre billet ? first, second ou eco ?");

if (myTicket === "first") myTicketType = "Première classe";
else if (myTicket === "second") myTicketType = "Seconde classe";
else if (myTicket === "eco") myTicketType = "Classe éco";
else myTicketType = "Mais IFaikoi lui...";

alert("Votre billet est de type : " + myTicket + ". Vous êtes donc en : " + myTicketType);
