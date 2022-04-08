//

function generat_random(x) {
    let numbers = [];
    for (let i = 0; i < x; i++) {
        number = Math.round(Math.random() * 9);
        if (!numbers.includes(number)) {
            numbers.push(number);
            continue;
        }
        i--;
    }
    return numbers;
}

function compaereNbr(tab1, tab2) {
    var correctEtCorrectementPlace = 0;
    var correctEtIncorrectementPlace = 0;
    for (var value of tab2) {
        if (tab1.includes(value)) {
            if (tab1.indexOf(value) == tab2.indexOf(value)) {
                correctEtCorrectementPlace++;
            } else {
                correctEtIncorrectementPlace++;
            }
        }
    }
    return [correctEtCorrectementPlace, correctEtIncorrectementPlace];
}

// le nomber de chifre dons le nomber
var n = 4;
// fonction principale
number = generat_random(n);
tentative = 0;
console.log(number);

function play() {
    tentative++;
    userInputN = document.getElementById("userInput").value;
    userInput = String(userInputN)
        .split("")
        .map((userInputN) => {
            return Number(userInputN);
        });
    var result = compaereNbr(number, userInput);
    if (result[0] == n) {
        document.getElementById("successMessage").innerText =
            "Bravo, Vous avez devinez ne nombre apres " +
            tentative +
            " tentative.";
        getScore(nivaue, tentative);
        document.getElementById("score").innerText = "Score est " + user.score;
        document.getElementById("errorMessage").innerText = "";
        document.getElementById("userInfo").innerText =
            "Bonjour " +
            user.nom +
            " " +
            user.prenom +
            ", vous avez choisi le niveau « " +
            user.difficulte +
            " » et bravo vous avez gagné avec" +
            "un score de " +
            user.score;
        // change onclick from play() to playAgain() method
        document.getElementById("play").innerText = "Play Again";
        document.getElementById("play").setAttribute("onclick", "playAgain()");
    } else {
        document.getElementById("successMessage").innerHTML =
            result[0] + " chiffres corrects et correctement placés";

        document.getElementById("errorMessage").innerHTML =
            result[1] + " chiffre correct mais incorrectement placé";
    }
}

// playAgan Method
function playAgain() {
    number = generat_random(n);
    choisireNiveau();
}

// choisire le nivaue
var nivaue = 0;
var point = 1;
user = new Object();
function getUserInfo() {
    user.nom = document.getElementById("nom").value;
    user.prenom = document.getElementById("prenom").value;
}
function facile() {
    getUserInfo();
    user.difficulte = "Facile";
    user.score = 0;
    point = 3;
    nivaue = 20;
    game();
}

function moyen() {
    getUserInfo();
    user.difficulte = "Moyen";
    user.score = 0;
    point = 10;
    nivaue = 15;
    game();
}

function difficile() {
    getUserInfo();
    user.difficulte = "Difficile";
    user.score = 0;
    point = 20;
    nivaue = 10;
    game();
}
function choisireNiveau() {
    var html = document.getElementById("game");
    html.innerHTML = `<div class="row d-flex">
    <input type="text" class="form-control" id="nom" placeholder="Nom" />
    <input type="text" class="form-control mt-2" id="prenom" placeholder="Prenom" />

    <h4 class="text-light text-center">Choisire le niveau!</h4>
    <!-- TODO: Ajouter Onclick -->
    <button class="btn btn-secondary mb-2" onclick="facile()">
        Facile
    </button>
    <button class="btn btn-secondary mb-2" onclick="moyen()">
        Moyen
    </button>
    <button class="btn btn-secondary" onclick="difficile()">
        Difficile
    </button>
</div>`;
}

function game() {
    var game = document.getElementById("game");
    game.innerHTML = ` <div class="row">
    <div class="col-lg-10 text-center">
        <label for="code" class="text-center text-light"
            >YOUR NUMBER</label
        >
        <input type="number" class="form-control" id="userInput" />
        <button
            class="btn btn-primary mt-2"
            onclick="play()"
            id="play"
        >
            Play
        </button>
        <!-- TODO: -->
    </div>
    <div class="text-center">
    <h5 id="score" class="text-center text-info mt-2"></h5>
        <h5 id="errorMessage" class="text-center text-danger"></h5>
        <h5
            id="successMessage"
            class="text-center text-success"
        ></h5>
        <h5 class="text-center text-primary" id="userInfo"></h5>
    </div>
        </div>`;
}
choisireNiveau();

function getScore(diff, tries) {
    user.score = (diff - tries) * point;
}
