var DOMAIN = 'localhost:8080';

let playGame = (numberOfGames, numberOfDoors, isSwapping) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://' + DOMAIN + '/engine/3doorStay', true);
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                displayGameResults(xhr.response);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.send();
}

let displayGameResults = (result) => {
    let wins = document.getElementById('wins');
    wins.innerHTML = result;
}