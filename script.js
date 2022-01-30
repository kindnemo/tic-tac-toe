const playSquare = document.querySelectorAll(".play-square");
const winPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

let playerOne = [];
let playerTwo = [];
let isCross = true;


function onPress(e){
    let indexOfElement = Array.prototype.indexOf.call(playSquare, e.target);
    let parent = e.target;
    
    
    
    const cross = `<svg class="play-icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </svg>`;

    const circle = `<svg  class = "play-icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>`;


    if(isCross){
        parent.innerHTML = cross;
        isCross = false;
    }else if(!isCross){
        parent.innerHTML = circle;
        isCross = true;
    }


    if(!e.target.classList.contains("play-square")){
        let square = e.target.closest(".play-square");
        square.removeEventListener("mouseenter", disPlay);
        square.removeEventListener("mouseleave", removePlay);
    }else if(e.target.classList.contains("play-square")){
        e.target.removeEventListener("mouseenter", disPlay);
        e.target.removeEventListener("mouseleave", removePlay);
    }

    
}





// Displaying the hover effects
function disPlay(e){
    // console.log(e.target.classList);
    if(e.target.classList.contains("checked")){
        return;
    }
    let indexOfElement = Array.prototype.indexOf.call(playSquare, e.target);
    
    
    const uncheckCross = `<svg class="play-icons-uncheck" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </svg>`;

  const uncheckCircle = `<svg  class = "play-icons-uncheck" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>`;
    
    let parent = e.target;
    if(isCross){
        parent.innerHTML = uncheckCross;
    }else if(!isCross){
        parent.innerHTML = uncheckCircle;
    }
}

function removePlay (e){
    // console.log(e);
    if(e.target.classList.contains("checked")){
        return;
    }
    let par = e.target;
    par.innerHTML = '';
}
// Displaying the hover effects


playSquare.forEach(ele=>ele.addEventListener("mouseenter", disPlay));
playSquare.forEach(ele=>ele.addEventListener("mouseleave", removePlay));
playSquare.forEach(ele=>ele.addEventListener("click", onPress, {
    // once: true
}));

