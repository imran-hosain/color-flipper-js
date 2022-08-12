const colors = ["green", "red", "blue", "yellow", "pink", "lime", "grey"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 6
    const randomNumber = getRandomNumber();
    // console.log(randomNumber); // this console for check random number
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}