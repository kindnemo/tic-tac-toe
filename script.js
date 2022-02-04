const playSquare = document.querySelectorAll(".play-square");
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let crossArr = [];
let circleArr = [];
let isCross = true;





// GAME MECHANICS
function gameMech(crossArray, circleArray){
    crossArray.sort(function(a, b){return a-b});
    circleArray.sort(function(a, b){return a-b});
    let crossWin;
    let circleWin;

    // FOR CROSS ARRAY
    for(let i= 0; i<winPatterns.length; i++){
        for(let j = 0; j<winPatterns[i].length; j++){
            if(crossArr.indexOf(winPatterns[i][j])!=-1){
                crossWin = true;
            }else{
                crossWin = false;
                break;
            }
        }
        if(crossWin == true || circleWin == true){
            break;
        }
    }
    // FOR CROSS ARRAY


    // FOR CIRCLE ARRAY
    for(let i= 0; i<winPatterns.length; i++){
        for(let j = 0; j<winPatterns[i].length; j++){
            if(circleArr.indexOf(winPatterns[i][j])!= -1){
                circleWin = true;
            }else{
                circleWin = false;
                break;
            }
        }
        if(crossWin == true || circleWin == true){
            break;
        }
    }
    // FOR CIRCLE ARRAY

    if(crossWin && crossArr.length >= 3){
        console.log("Cross Win");
    }else if(circleWin && circleArr.length >= 3){
        console.log("Circle Wins");
    }else if(crossArr.length > 4){
        console.log("Draw");
    }

    
}
//Game Mechanics


// Displaying the hover effects
function onPress(e){

    let parent = e.target;
    
    if(e.target.nodeName == "path"){
        parent = e.target.closest(".play-square")
    }
    
    let indexOfElement;
    

    
    
    
    const cross = `<svg class="play-icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </svg>`;

    const circle = `<svg  class = "play-icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    </svg>`;


    
    
    if(!e.target.classList.contains("play-square")){
        let square = e.target.closest(".play-square");
        square.removeEventListener("mouseenter", disPlay);
        square.removeEventListener("mouseleave", removePlay);
        square.removeEventListener("click", onPress);
        indexOfElement = Array.prototype.indexOf.call(playSquare, square)
    }else if(e.target.classList.contains("play-square")){
        e.target.removeEventListener("mouseenter", disPlay);
        e.target.removeEventListener("mouseleave", removePlay);
        e.target.removeEventListener("click", onPress);
        indexOfElement = Array.prototype.indexOf.call(playSquare, e.target);
    }
    
    if(isCross){
        parent.innerHTML = cross;
        isCross = false;
        crossArr.push(indexOfElement);
    }else if(!isCross){
        parent.innerHTML = circle;
        isCross = true;
        circleArr.push(indexOfElement);
    }
    
    gameMech(crossArr, circleArr);
}



function disPlay(e){

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
playSquare.forEach(ele=>ele.addEventListener("click", onPress));




// Checks and removes the hover effect on mobile phones 
if(window.innerWidth < 550){
    playSquare.forEach(ele=>ele.removeEventListener("mouseenter", disPlay));
}