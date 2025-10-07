//Write your Javascript code here
console.log("Shoppinglist")
// Funktion til at oprette et nyt <li>-element
function lavLi(klasse, id, tekst) {
  const li = document.createElement("li");              // Opretter <li>
  li.setAttribute("class", klasse);                     // Tilføjer class
  li.setAttribute("id", id);                            // Tilføjer id
  const tekstNode = document.createTextNode(tekst);     // Opretter tekst-node
  li.appendChild(tekstNode);                            // Tilføjer tekst til <li>
  return li;                                            // Returnerer <li>
}

// Tilføjer et nyt element til listen
const liste = document.getElementById("listUnhealthy");
const nyUgesynd = lavLi("unhealthy", "5", "Chips");
liste.appendChild(nyUgesynd);
