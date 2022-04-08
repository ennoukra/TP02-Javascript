const noms = ["Dupont", "Durand", "Petit", "Martin", "Legrand", "Lacroix"];
const notes = [
    [10, 12, 18, 5, 9, 13],
    [13, 11, 14, 7, 14, 16],
    [0, 14, 14, 12, 8, 20],
];

function Etudiant(nom, notes, moyenne) {
    return {
        nom,
        notes,
        moyenne,
        afficherEtudiant() {
            return `Les notes de <<${this.nom}>> sont: [${this.notes}] et sa moyenne = ${this.moyenne}`;
        },
    };
}

function creerEtudiants(noms, notes) {
    const etudiants = [];
    for (let i = 0; i < noms.length; i++) {
        const nom_etudiant = noms[i];
        const notes_etudiant = [];
        let moyenne_etudiant = 0;
        for (let j = 0; j < notes.length; j++) {
            notes_etudiant.push(notes[j][i]);
            moyenne_etudiant += notes[j][i];
        }
        moyenne_etudiant =
            Math.round((moyenne_etudiant * 100) / notes.length) / 100;

        etudiants.push(
            Etudiant(nom_etudiant, notes_etudiant, moyenne_etudiant)
        );
    }
    return etudiants;
}

function calculMinMax(etudiants) {
    let min_etd = 0;
    let min_note = 0;
    let max_etd = 0;
    let max_note = 0;
    for (let i = 0; i < etudiants.length; i++) {
        for (let j = 0; j < etudiants[i].notes.length; j++) {
            if (etudiants[i].notes[j] < etudiants[min_etd].notes[min_note]) {
                min_etd = i;
                min_note = j;
            }
            if (etudiants[i].notes[j] > etudiants[max_etd].notes[max_note]) {
                max_etd = i;
                max_note = j;
            }
        }
    }
    return (
        `La note minimal est ${etudiants[min_etd].notes[min_note]} et c'est <<${etudiants[min_etd].nom}>> qui la eu\r\n` +
        `La note maximal est ${etudiants[max_etd].notes[max_note]} et c'est <<${etudiants[max_etd].nom}>> qui la eu`
    );
}

function alertData() {
    let str = "";
    const etudiants = creerEtudiants(noms, notes);
    for (let i = 0; i < etudiants.length; i++)
        str += etudiants[i].afficherEtudiant() + "\r\n";
    str += calculMinMax(etudiants);
    alert(str);
}

alertData();
