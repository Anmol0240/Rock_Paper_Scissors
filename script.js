let playerscore = 0;
let computerscore =0;

let isPlaying = false;

const choices = document.querySelectorAll(".choice");

const msgbox = document.querySelector("#msgbox");

const userscore = document.querySelector("#player-score");

const compscore = document.querySelector("#computer-score");

const reset =document.querySelector("#reset");

const mute = document.querySelector("#mute");



const sound = new Audio("audio/[Asphalt 9_ Legends Soundtrack] Ruelle - Madness.mp3");



mute.addEventListener("click", () => {
    if (isPlaying) {
        sound.pause();
        isPlaying = false;
        mute.innerHTML='<i class="fa-solid fa-volume-xmark" style="color: #ffffff;"></i>';
    } else {
        sound.play();
        isPlaying = true;
        mute.innerHTML='<i class="fa-solid fa-volume-high" style="color: #ffffff;"></i> ';
    }
});

reset.addEventListener("click",() => {        
    playerscore=0;
    computerscore=0;
    msgbox.innerText="Make your move!";
    msgbox.style.backgroundColor="black";
    compscore.innerText=computerscore;
    userscore.innerText=playerscore;
});


const genComputerChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    
    const random=Math.floor(Math.random()*options.length);

    return options[random];


};

const wingame = (userChoice ,compChoice,msgbox) => {
    if(userChoice===compChoice){
        msgbox.innerText="ohh, its a draw";
        msgbox.style.backgroundColor="black";

    }
    else if( (userChoice==="rock")&&(compChoice==="scissors")||(userChoice==="paper")&&(compChoice===   "rock")||(userChoice==="scissors")&&(compChoice==="paper")){
        
        userscore.innerText=++playerscore;
        msgbox.innerText="🎉🎉you won";
        msgbox.style.backgroundColor = "green" ;
    }
   
    else{
        compscore.innerText=++computerscore;
        msgbox.innerText="🥺computer won";
        msgbox.style.backgroundColor="rgb(111, 18, 18)";
    }

    
};

const playgame = (userChoice) => {

    let compChoice =genComputerChoice();    

    wingame(userChoice ,compChoice, msgbox);
};
 

// if(userChoice===compChoice){
//     wingame();
// };


choices.forEach((choice) => {
choice.addEventListener("click",() => {
    const userChoice = choice.id;
    playgame(userChoice);
});

});   
 