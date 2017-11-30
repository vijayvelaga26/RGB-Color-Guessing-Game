var numSquares=6;
var colors=[];
var pickedColor;
var squares = document.querySelectorAll(".square")
var messagedisplay= document.querySelector("#message");
var colordisplay=document.querySelector(".colordisplay")
var h1=document.querySelector("h1")
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();  
    reset();
}
// Play again / New colors button Listener
resetButton.addEventListener("click",function(){
    reset();
}) 

function setupModeButtons(){
    // mode buttons event listeners
    for (var i=0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            h1.style.backgroundColor= "steelblue"; 
            messagedisplay.textContent="";
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? numSquares=3: numSquares=6;
             reset();
        })
    }
}
function setupSquares(){
     for( var i=0;i<squares.length;i++){
      // adding colors to squares
       squares[i].style.backgroundColor= colors[i];    
      // adding event listeners to squares
      squares[i].addEventListener("click",function(){
        var clickedColor= this.style.backgroundColor;
         // check if we clicked the correct color
        if(clickedColor===pickedColor){
        messagedisplay.textContent="Correct !!!";
        resetButton.textContent="Play Again"
       changecolors(clickedColor);
       h1.style.backgroundColor=clickedColor;
            }
         else{
        this.style.backgroundColor="#232323";
        messagedisplay.textContent="Try Again";
         }
        })
    }
}
function reset(){
   resetButton.textContent="New Colors"
    //generate all new colors
   colors=generateRandomColors(numSquares)
    //pick a new random color from array
   pickedColor=pickcolor();
    //change color display on h1
   colordisplay.textContent=pickedColor;
   messagedisplay.textContent="";
    //change colors of squares
   for( var i=0;i<squares.length;i++){
   // adding colors to squares
    if(colors[i]){
        squares[i].style.display="block";
        squares[i].style.backgroundColor= colors[i];
    }else{
        squares[i].style.display="none";
         }  
    }
 h1.style.backgroundColor= "steelblue";    
}

function changecolors(color){
    // loop through all squares
    for (var i=0;i<squares.length;i++){
    //change the color of all the squares to the correct color
    squares[i].style.backgroundColor=color;
    }    
}

function pickcolor(){
 var random= Math.floor(Math.random()* colors.length);
 return colors[random];
}

function generateRandomColors(num){
    //make any array
    var arr=[];
    //add random colors to array
    for(var i=0;i<num;i++){
        arr.push( randomcolor());
    }
    // return that array
    return arr;
}

function randomcolor(){
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    var number="rgb("+r+", "+g+", "+b+")" ;
    return(number)
}



/*easybtn.addEventListener("click",function(){
    h1.style.backgroundColor= "steelblue"; 
    messagedisplay.textContent="";
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquares=3;
    //generate three new colors
    colors=generateRandomColors(numSquares);
    //pick a random color from those three
    pickedColor=pickcolor();
    // change display on the h1
    colordisplay.textContent=pickedColor; 
    //assign three colors to the squares
    for( var i=0;i<squares.length;i++){
        // adding colors to squares
        if(colors[i]){
        squares[i].style.backgroundColor= colors[i];} 
        else{
            squares[i].style.display="none";
        }
    }

})

hardbtn.addEventListener("click",function(){
    h1.style.backgroundColor= "steelblue"; 
    messagedisplay.textContent="";
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    //pick a random color from those three
    pickedColor=pickcolor();
    // change display on the h1
    colordisplay.textContent=pickedColor; 
    //assign three colors to the squares
    for( var i=0;i<squares.length;i++){
        // adding colors to squares
         squares[i].style.backgroundColor= colors[i];
         squares[i].style.display="block";    }
 }) */



/*
for( var i=0;i<squares.length;i++){
    // adding colors to squares
    squares[i].style.backgroundColor= colors[i];

    // adding event listeners to squares
    squares[i].addEventListener("click",function(){
        var clickedColor= this.style.backgroundColor;
     // check if we clicked the correct color
     if(clickedColor===pickedColor){
         messagedisplay.textContent="correct !!!";
         resetButton.textContent="Play Again"
         changecolors(clickedColor);
         h1.style.backgroundColor=clickedColor;

     }
     else{
         this.style.backgroundColor="#232323";
         messagedisplay.textContent="try again!!!";
     }
    })
} */



