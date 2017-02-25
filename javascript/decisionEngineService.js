var DOMAIN = 'localhost:8080';

let playGame = (numberOfRounds, numberOfDoors, isSwapping) => {
    let xhr = new XMLHttpRequest();
    let variables = {
        'numberOfRounds' : numberOfRounds,
        'numberOfDoors' : numberOfDoors,
        'isSwapping' : isSwapping
    };
    xhr.open('GET', 'http://' + DOMAIN + '/engine/params?numberOfDoors=' + numberOfDoors +
        '&isSwapping=' + isSwapping + '&numberOfRounds=' + numberOfRounds);
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                displayGameResults(xhr.response, variables);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.send();
}

let displayGameResults = (result, variables) => {
    let roundsPlayed = document.getElementById('rounds-played');
    let doorsUsed = document.getElementById('doors-used');
    let stayOrSwap = document.getElementById('stay-or-swap');
    let wins = document.getElementById('wins');

    roundsPlayed.innerHTML = variables.numberOfRounds;
    doorsUsed.innerHTML = variables.numberOfDoors;
    stayOrSwap.innerHTML = variables.isSwapping ? 'Swap' : 'Stay';

    wins.innerHTML = result;
}