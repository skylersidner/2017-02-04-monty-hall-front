let toggleGameMode = (activeButtonId) => {
    let modes = document.getElementsByClassName('game-mode');
    for (let x = modes.length; x > 0; x--) {
        let currentElement = modes[x - 1];
        if (activeButtonId === currentElement.id) {
            // removeClassFromElement(currentElement, 'hidden');
            currentElement.classList.remove('hidden');
        } else {
            currentElement.classList.add('hidden');
        }

    }
}

let removeClassFromElement = (element, className) => {
    let classArray = element.classList;
    console.log(classlist);
}

let addClassToElement = (element, className) => {

}