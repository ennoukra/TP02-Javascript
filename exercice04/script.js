var entrerChiffre = prompt("Entrez un chiffre entre 0 et 999 :");

//Si un nombre a bien été entré
if (true && entrerChiffre >= 0) {
    // alert("Votre nomber et: " + entrerChiffre);

    // Création des Array contenant les nombres et chiffres en lettres
    var chiffresArray = [
        "",
        "un",
        "deux",
        "trois",
        "quatre",
        "cinq",
        "six",
        "sept",
        "huit",
        "neuf",
    ];
    var dixArray = [
        "dix",
        "onze",
        "douze",
        "treize",
        "quatorze",
        "quinze",
        "seize",
        "dix-sept",
        "dix-huit",
        "dix-neuf",
    ];
    var dizaineArray = [
        "",
        "",
        "vingt",
        "trente",
        "quarante",
        "cinquante",
        "soixante",
        "soixante",
        "quatre-vingts",
        "quatre-vingts",
    ];

    var chiffreLength = entrerChiffre.length;
    var numberEnLetters = "";
    // Si un nombre à 3 chiffres a été entré :
    if (chiffreLength == 3) {
        var centaineDecimal = entrerChiffre / 100;
        var premierChiffre = parseInt(centaineDecimal);

        // Condition pour mettre "cent" au pluriel et ne pas afficher "un cent" :
        if (premierChiffre > 1) {
            var pluriel = "s";
            //
            numberEnLetters += chiffresArray[premierChiffre] + " cents ";
        } else if (premierChiffre == 0) {
            //
            numberEnLetters = "";
        } else {
            var pluriel = "";
            numberEnLetters = "cent ";
        }

        // récupération du chiffre des dizaines
        var dizaine = entrerChiffre - premierChiffre * 100;
        var dizaineDecimal = dizaine / 10;
        var deuxiemeChiffre = parseInt(dizaineDecimal);

        // Récupération du chiffre des unités
        var unite = dizaine - deuxiemeChiffre * 10;

        // Conditions pour dizaines spéciales
        switch (deuxiemeChiffre) {
            case 1:
                numberEnLetters += dixArray[unite];
                break;
            case 7:
                numberEnLetters +=
                    dizaineArray[deuxiemeChiffre] + "-" + dixArray[unite];
                break;
            case 9:
                numberEnLetters +=
                    dizaineArray[deuxiemeChiffre] + "-" + dixArray[unite];
                break;
            default:
                //ajout de "et" quand le 3eme chiffre est 1 :
                if (
                    deuxiemeChiffre != 0 &&
                    unite == 1 &&
                    deuxiemeChiffre != 8
                ) {
                    numberEnLetters +=
                        dizaineArray[deuxiemeChiffre] +
                        "-et-" +
                        chiffresArray[unite];
                } else if (deuxiemeChiffre == 0) {
                    numberEnLetters +=
                        dizaineArray[deuxiemeChiffre] +
                        " " +
                        chiffresArray[unite];
                } else if (unite == 0) {
                    numberEnLetters += dizaineArray[deuxiemeChiffre];
                } else {
                    numberEnLetters +=
                        dizaineArray[deuxiemeChiffre] +
                        "-" +
                        chiffresArray[unite];
                }
        }
    }

    // Si nombre à deux chiffres
    else if (chiffreLength == 2) {
        var dizaineDecimal = entrerChiffre / 10;
        var deuxiemeChiffre = parseInt(dizaineDecimal);
        var unite = entrerChiffre - deuxiemeChiffre * 10;

        switch (deuxiemeChiffre) {
            case 1:
                numberEnLetters += dixArray[unite];
                break;
            case 7:
                if (unite == 1) {
                    numberEnLetters +=
                        dizaineArray[deuxiemeChiffre] +
                        "-et-" +
                        dixArray[unite];
                } else {
                    numberEnLetters +=
                        dizaineArray[deuxiemeChiffre] + "-" + dixArray[unite];
                }
                break;
            case 9:
                numberEnLetters +=
                    dizaineArray[deuxiemeChiffre] + "-" + dixArray[unite];
                break;
            default:
                if (
                    deuxiemeChiffre != 0 &&
                    unite == 1 &&
                    deuxiemeChiffre != 8
                ) {
                    numberEnLetters +=
                        dizaineArray[deuxiemeChiffre] +
                        "-et-" +
                        chiffresArray[unite];
                } else if (unite == 0) {
                    numberEnLetters += dizaineArray[deuxiemeChiffre];
                } else {
                    numberEnLetters +=
                        dizaineArray[deuxiemeChiffre] +
                        "-" +
                        chiffresArray[unite];
                }
        }
    } else if (chiffreLength == 1) {
        var unite = parseInt(entrerChiffre);
        if (entrerChiffre == 0) {
            numberEnLetters += "zéro";
        } else {
            numberEnLetters += chiffresArray[unite];
        }
    } else if (chiffreLength > 3) {
        alert("Le chiffre est supérieur a 999!");
    } else {
        alert("Bizarre Bizzare...");
    }
    alert(
        "Votre nomber et: " +
            entrerChiffre +
            "\n Le nomber en letters est : " +
            numberEnLetters
    );
} else {
    alert("Je crois que vous n'avez pas entré un nombre...");
}
