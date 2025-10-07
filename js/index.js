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


// ✅ Task 3: Skift eller tilføj class-attribut
function skiftKlasse(element, nyKlasse) {
  if (element) {
    element.setAttribute("class", nyKlasse);
  }
}

// 🧪 Test Task 3
const liToUpdate = document.getElementById("2"); // Beer
skiftKlasse(liToUpdate, "healthy");             // Skifter class til "healthy"


// // Tilføjer et nyt element til listen
// const liste = document.getElementById("listUnhealthy");
// const nyUgesynd = lavLi("Unhealthy", "5", "Chips");
// liste.appendChild(nyUgesynd);
