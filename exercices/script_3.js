function pyramide (etages) {
	let spaces = "", hashes = "";

	for(let row = 1; row <= etages; row++){
		spaces += " ";
	}

	for(let row = 1; row <= etages; row++){
		hashes += "#";
		spaces = spaces.slice(0, -1);
		console.log(spaces + hashes);
	}
}

console.log("2.2.2 Pyramide de Mario");
etages1 = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log("Voici une super pyramide à " + etages1 + " étages !!");
console.log(pyramide (etages1));
