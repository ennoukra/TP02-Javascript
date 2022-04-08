let sports = ["tennis", "basketBall", "foot"];

document.getElementById("sports").textContent = sports;

document.getElementById("ok-btn").addEventListener("click", ok);

function ok() {
    console.log(sports);
    var sport = document.getElementById("sport").value;
    console.log(sport);
    let i = 0;
    for (i = 0; i < sports.length; i++) {
        if (sports[i] == sport) {
            sports.splice(i, 1);
            document.getElementById("sports").textContent = sports;
            return;
        }
    }
    sports.push(sport);
    document.getElementById("sports").textContent = sports;
}
