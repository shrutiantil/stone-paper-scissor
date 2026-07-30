let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=() =>
    {  const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);   //////// math floor for remove decimal value and math.random fpor random choices
    return option[randIdx];
};


const drawGame=()=>{
    msg.innerText="Game was Draw. Play agin";
     msg.style.backgroundColor="#FFEED6"
};


const showWinner=(userwin,userChoice,compChoice)=>{ 
    
if(userwin){
    userScore++ ;
    userScorePara.innerText=userScore;
    msg.innerText=`you win!  your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="#8FA28A" ;}

else{
    compScore++ ;
    compScorePara.innerText=compScore;
    msg.innerText=`you lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="#E76F51" } 
    
};


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);


if (userChoice === compChoice){drawGame();}
else{let userwin=true;
    if(userChoice==="rock"){compChoice==="paper"? false:true;}
        else if(userChoice==="paper"){ userwin=compChoice==="scissor"? false:true;} 

        else{compChoice==="rock"?false:true;}

     showWinner(userwin,userChoice,compChoice);
    
    } 
};


choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
    const userChoice =choice.getAttribute("id");
    playGame(userChoice);
});

});

