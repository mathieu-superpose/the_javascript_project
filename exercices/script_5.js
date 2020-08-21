const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// ---------- Liste de tous les livres -----------------------------------------------------------------------------------

console.log("2.3.2. Bibliothécaire");
console.log("Voici la liste de tous les livres:");
console.log(books);
console.log("");

// ---------- Est-ce que tous les livres ont été au moins empruntés une fois ? -------------------------------------------
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let jamaisLoue = [], i = 0;
// let i = 0;
for(let count = 0; count < books.length; count++){
  if (books[count].rented == 0) {
    jamaisLoue[i] = books[count].title;
    i += 1;
  }else{
  }
}

if (jamaisLoue.length > 0) {
  for(let count = 0; count < jamaisLoue.length; count++){
      console.log(`${jamaisLoue[count]} n'a jamais été loué.`);
    }
  }else{
    console.log("Tous les livres ont été au moins empruntés une fois.");
  }


// ---------- Quel est livre le plus emprunté ? --------------------------------------------------------------------------
console.log("");
console.log("Quel est livre le plus emprunté ?");

function tri(a,b)
{
  if (a.rented < b.rented) return -1;
  else if (a.rented == b.rented) return 0;
  else return 1;
}
 
let booksParRented = books.sort(tri);
let lastBookParRented = booksParRented[booksParRented.length - 1];
console.log(lastBookParRented.title + " est le livre le plus emprunté ( " + lastBookParRented.rented + " fois).");

// ---------- Quel est livre le moins emprunté ? --------------------------------------------------------------------------
console.log("");
console.log("Quel est livre le moins emprunté ?");

let firstBookParRented = booksParRented[0];
console.log(firstBookParRented.title + " est le livre le moins emprunté ( " + firstBookParRented.rented + " fois).");


// ---------- Trouve le livre avec l'ID: 873495 --------------------------------------------------------------------------
console.log("");
console.log("Trouve le livre avec l'ID: 873495");

for(let count = 0; count < books.length; count++){
  if (books[count].id === 873495) {
    console.log(books[count].title + " est le livre dont l'ID est 873495");
  }
}


// ---------- Supprime le livre avec l'ID: 133712 ; ----------------------------------------------------------------------
console.log("");
console.log("Supprime le livre avec l'ID: 133712");

for(let count = 0; count < books.length; count++){
  if (books[count].id === 133712) {
    console.log(books[count].title + ", dont l'ID était 133712, a été supprimé.");
    books.splice(count, 1);
  }
}


// ---------- Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé) -------------------
console.log("");
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé):");

function triAlphabet(a,b)
{
  if (a.title < b.title) return -1;
  else if (a.title == b.title) return 0;
  else return 1;
}
 
var booksParTitre = books.sort(triAlphabet);

for(let count = 0; count < booksParTitre.length; count++){
  console.log(booksParTitre[count].title);
}
