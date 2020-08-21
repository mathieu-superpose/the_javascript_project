
console.log("2.4.2. Acné-Bot");

// ---------- tentative de communication --------------------------------------------------------------------------------

let reponse = prompt("T'as un truc à raconter wesh?");
let dialogueIndex = 0;
let dialogue = [];

// ---------- si question -> "Ouais Ouais..." ---------------------------------------------------------------------------
if (reponse[reponse.length - 1] === "?") {
  dialogue[dialogueIndex] = "Ouais Ouais...";
  dialogueIndex++;
}

// ---------- si 100% en majuscules -> "Pwa, calme-toi..." --------------------------------------------------------------
let reponseMaj = reponse.toUpperCase();

if (reponseMaj === reponse && reponse !== ""){
  dialogue[dialogueIndex] = "Pwa, calme-toi...";
  dialogueIndex++;
}

// ---------- si "Fortnite" -> "on s' fait une partie soum-soum ?" ------------------------------------------------------

if (reponseMaj.indexOf("FORTNITE") !== -1){
  dialogue[dialogueIndex] = "on s' fait une partie soum-soum ?";
  dialogueIndex++;
}

// ---------- si vide -> "t'es en PLS ?" --------------------------------------------------------------------------------

if (reponse === ""){
  dialogue[dialogueIndex] = "t'es en PLS ?";
  dialogueIndex++;
}

// ---------- autre -> "balek." -----------------------------------------------------------------------------------------

if (dialogue == ""){
  dialogue[dialogueIndex] = "balek.";
  dialogueIndex++;
}
// ---------- impression réponses ----------------------------------------------------------------------------------------

for(let count = 0; count < dialogue.length; count++){
    console.log(dialogue[count]);   
}
