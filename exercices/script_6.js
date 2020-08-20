// ---------- introduction ---------------------------------------------------------------------------------------------------

console.log("2.4.1. Code la vie");

// ---------- teste si le code ARN est valide --------------------------------------------------------------------------------
function isItARN(arn) {
	if (arn.length === 18){

		for(let count = 0; count < arn.length; count++){
			if (arn[count] !== "A" && arn[count] !== "U" && arn[count] !== "G" && arn[count] !== "C") {
				console.log("Veuillez rentrer un ARN, composé des lettres A - U - G - C seulement, et 18 caractères.");
			}else{
				return true;
			}
		}
	}else{
		console.log("Veuillez rentrer un ARN, composé des lettres A - U - G - C seulement, et 18 caractères.");
	}
}

// ---------- divise le code ARN par codons ----------------------------------------------------------------------------------
function splitByCodon(arn) {
	let arnByCodon = [], i = 0;
	// let i = 0;
	for(let count = 0; count < arn.length; count += 3){
		arnByCodon[i] = arn[count] + arn[count+1] + arn[count+2];
		i+=1;
		}
	return(arnByCodon);
}

// ---------- renome les codons d'un array ------------------------------------------------------------------------------------
function renameCodonInArray(arnArray) {
	for(let count = 0; count < arnArray.length; count++){

		switch (arnArray[count]) {
  case "UCU": 
  case "UCC": 
  case "UCA": 
  case "UCG": 
  case "AGU":
  case "AGC":
    arnArray[count] = "Sérine";
    break;
  case "CCU":
  case "CCC":
  case "CCA":
  case "CCG":
    arnArray[count] = "Proline";
    break;
  case "UUA":
  case "UUG":
    arnArray[count] = "Leucine";
    break;
  case "UUU":
  case "UUC":
    arnArray[count] = "Phénylalanine";
    break;
  case "CGU":
  case "CGC":
  case "CGA":
  case "CGG":
  case "AGA":
  case "AGG":
    arnArray[count] = "Arginine";
    break;
  case "UAU":
  case "UAC":
    arnArray[count] = "Tyrosine";
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}}
return(arnArray);
}

// ---------- perform---------------------------------------------------------------------------------------------------------

function perform(arn) {
	console.log(arn); // -> CCGUCGUUGCGCUACAGC

if (isItARN(arn) !== true) {
	console.log(isItARN(arn));
}else{
	let arnSplit = splitByCodon(arn);
	console.log(arnSplit); // -> ["CCG", "UCG", "UUG", "CGC", "UAC", "AGC"]

	let arnSplitRenamed = renameCodonInArray(arnSplit);
	console.log(arnSplitRenamed);
}
}

// ---------- ARN n°1 CCGUCGUUGCGCUACAGC -------------------------------------------------------------------------------------
console.log("Voici le premier code ARN à décrypter:");
let arn1 = "CCGUCGUUGCGCUACAGC";
perform(arn1);
console.log("");

// ---------- ARN n°2 CCUCGCCGGUACUUCUCG -------------------------------------------------------------------------------------
console.log("Voici le deuxième code ARN à décrypter:");
let arn2 = "CCUCGCCGGUACUUCUCG";
perform(arn2);
