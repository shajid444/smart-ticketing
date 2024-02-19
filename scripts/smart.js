
function play(){
hideElementById('first-part');
showElementById('paribahan-part');


}

// part2
function play2(){
    hideElementById('footer-part');
    hideElementById('paribahan-part');
    showElementById('next-part');
    
    
    }

    // part3
    function play3(){
        showElementById('footer-part');
        hideElementById('next-part');
        showElementById('first-part');

        
        
        
        }




// hide element by id
function hideElementById(elementId) {

    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show element by id

function showElementById(elementId) {

    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


// set background color by id

function setBackgroundColor(elementId) {

    const element = document.getElementById(elementId);

    element.classList.add('bg-green-600');


}


// set seat value
function setSeat(element) {

    const findelement = document.getElementById(element);
    const scoree = findelement.innerText;

    const currentScore = parseInt(scoree);

    return currentScore;

}

// set value by elementId

function setElementValueById(element, value) {

    const findElement = document.getElementById(element);

    findElement.innerText = value;

}

