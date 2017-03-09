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

let playGameWithTemplate = (numberOfRounds, numberOfDoors, isSwapping) => {
    let xhr = new XMLHttpRequest();
    let variables = {
        'numberOfRounds' : numberOfRounds,
        'numberOfDoors' : numberOfDoors,
        'swapping' : isSwapping
    };
    xhr.open('POST', 'http://' + DOMAIN + '/engine/template');
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                displayGameResults(xhr.response, variables);
            } else {
                console.error(xhr.statusText);
            }
        }
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    let data = JSON.stringify(variables);
    xhr.send(data);
}

let displayGameResults = (result, variables) => {
    let roundsPlayed = document.getElementById('roundsPlayed');
    let doorsUsed = document.getElementById('doorsUsed');
    let stayOrSwap = document.getElementById('stayOrSwap');
    let winPercentage = document.getElementById('winPercentage');
    let wins = document.getElementById('wins');

    roundsPlayed.innerHTML = variables.numberOfRounds;
    doorsUsed.innerHTML = variables.numberOfDoors;
    stayOrSwap.innerHTML = variables.isSwapping ? 'Swap' : 'Stay';
    winPercentage.innerHTML = getWinPercentage(variables.numberOfDoors, variables.swapping);

    wins.innerHTML = result;
}

let getWinPercentage = (numberOfDoors, isSwapping) => {
    let percent;
    if (isSwapping) {
        percent = 100 - (1 / numberOfDoors * 100);
    } else {
        percent = (1 / numberOfDoors * 100);
    }

    return percent.toFixed(2).toString() + '%';
}