//Write your Javascript code here
console.log("Shoppinglist")
// Task 1: Funktion til at oprette et nyt <li>-element
function lavLi(klasse, id, tekst) {
  const li = document.createElement("li");              // Opretter <li>
  li.setAttribute("class", klasse);                     // Tilføjer class
  li.setAttribute("id", id);                            // Tilføjer id
  const tekstNode = document.createTextNode(tekst);     // Opretter tekst-node
  li.appendChild(tekstNode);                            // Tilføjer tekst til <li>
  return li;                                            // Returnerer <li>
}
//Task 2: Funktion til at tilføje <li> til en liste
function tilføjTilListe(listeId, liElement) {
  const liste = document.getElementById(listeId);       // Finder listen via id
  if (liste && liElement) {
    liste.appendChild(liElement);                       // Tilføjer <li> til listen
  }
}
// Test begge funktioner
const nyUgesynd = lavLi("unhealthy", "5", "Chips");     // Opretter nyt <li>
tilføjTilListe("listUnhealthy", nyUgesynd);             // Tilføjer det til listen


// Task 3: Skift eller tilføj class-attribut
function skiftKlasse(element, nyKlasse) {
  if (element) {
    element.setAttribute("class", nyKlasse);
  }
}

// Test Task 3
const liToUpdate = document.getElementById("2"); // Beer
skiftKlasse(liToUpdate, "healthy");             // Skifter class til "healthy"

//Task 4: Funktion til at slette et <li>-element
function sletLi(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element); // Fjerner <li> fra listen
  }
}

// Test Task 4
const liToDelete = document.getElementById("3"); // fx <li id="3" class="healthy">Apples</li>
sletLi(liToDelete);                              // Sletter Apples fra listen

// Task 5: funktion skift tekst i et li element
function skiftTekst(element, nyTekst) {
  if (element) {
    element.textContent = nyTekst; // Skifter teksten i <li>
  }
}

const liToChange = document.getElementById("1"); // fx <li id="1" class="healthy">Cashew nuts</li>
skiftTekst(liToChange, "Mandler");              // Skifter teksten til "Mandler"

// Task 6: Tæl antal <li>-elementer i en liste
function tælLiElementer(listeId) {
  const liste = document.getElementById(listeId);
  if (liste) {
    return liste.getElementsByTagName("li").length;
  }
  return 0;
}

// Test Task 6
const antal = tælLiElementer("listUnhealthy");
console.log("Antal li-elementer i listUnhealthy:", antal);
