let playerscore = 0;
let computerscore =0;

const choices = document.querySelectorAll(".choice");



const playgame = (userid) => {
    console.log("user choice =" + userid);
};

choices.forEach((choice) => {
choice.addEventListener("click",() => {
    const userid = choice.id;
    console.log("You clicked on " + userid);

});
});   
