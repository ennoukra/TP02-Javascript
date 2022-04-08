let personnes = [];

function ajouterPersonne() {
    var result = prompt("Ajouter personne:");

    if (result != null) {
        personnes.push(result);
        alert("Personne " + result + " est bien ajouter");
    }
}

function tirerPersonne() {
    let persone = personnes[Math.floor(Math.random() * personnes.length)];
    console.log(persone);
    document.getElementById("tirageResult").textContent = persone;
}
