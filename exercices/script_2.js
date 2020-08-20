function factorielle(number) {
	if (number > 0) {
		let factorial_number = number
			let a = factorial_number - 1
			while (a > 0) {
				factorial_number *= a;
				a -= 1;
			}
			return factorial_number;
	} else if (number == 0) {
		return factorial_number = 0;
	} else {
		return ("rentrez un entier positif");
	}
}

console.log("2.2. Opérations & boucles");
console.log("2.2.1 Calculs rapides");
nombre1 = prompt ("De quel nombre veux-tu calculer la factorielle ?");
console.log("factorielle " + nombre1 + " égale " + factorielle(nombre1));
