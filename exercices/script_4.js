const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// -------- tous les entrepreneurs nés dans les années 70 ------------------------------------------------------------
console.log("2.3. Analyses de données");
console.log("2.3.1. Startup Nation");
console.log("Voici l'ensemble des entrepreneurs:");
console.log(entrepreneurs);
console.log("");

// -------- entrepreneurs nés dans les années 70 ---------------------------------------------------------------------
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");

for(let count = 0; count < entrepreneurs.length; count++){

  if (entrepreneurs[count].year > 1970 && entrepreneurs[count].year < 1980) {
    console.log(entrepreneurs[count]);
  }
} 

console.log("");
// -------- array qui contient le prénom et le nom des entrepreneurs -------------------------------------------------
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs ");

let prenomsNoms = [];

for(let count = 0; count < entrepreneurs.length; count++){
  prenomsNoms[count] = entrepreneurs[count].first + " " + entrepreneurs[count].last;
}

console.log(prenomsNoms);

console.log("");
// -------- âge de chaque inventeur aujourd'hui ----------------------------------------------------------------------
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

let dateNow = new Date();
let yearNow = dateNow.getFullYear();

for(let count = 0; count < entrepreneurs.length; count++){

    console.log(prenomsNoms[count] + ": " + (yearNow - entrepreneurs[count].year) + " ans");

} 

console.log("");
// -------- entrepreneurs par nom de famille -------------------------------------------------------------------------
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");


function tri(a,b)
{
  if (a.last < b.last) return -1;
  else if (a.last == b.last) return 0;
  else return 1;
}
 
var entrepreneursParNom = entrepreneurs.sort(tri);
console.log(entrepreneursParNom);

