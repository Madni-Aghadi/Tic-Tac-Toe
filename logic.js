console.log("Welcome to Tic-Tac-Toe game");


let music = new Audio("music.mp3");

let musicturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");


let turn = "X";
let isgameover= false;


const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}




// Function to check for a Win



const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
                // Optional lines animation for big screen i.e more than 1200px 
    // let wins = [
    //     [0, 1, 2, 5, 4, 0],
    //     [3, 4, 5, 5, 10, 0],
    //     [6, 7, 8, 5, 17, 0],
    //     [0, 3, 6, -5,10, 90],
    //     [1, 4, 7, 5, 10, 90],
    //     [2, 5, 8, 15, 10, 90],
    //     [0, 4, 8, 5, 10, 35],
    //     [2, 4, 6, 5, 11, 135],
    // ]
    
    
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            gameover.play();
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // Optional lines animation for big screen i.e more than 1200px 
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
            // document.querySelector(".line").style.width = "42vw";            
        }
    })
}




// Logic for Game

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if(boxtext.innerText===''){
            music.play();
            boxtext.innerText = turn;
            turn = changeTurn();
            musicturn.play();
            // isgameover=false;
            checkWin();
          if(!isgameover){
              
            document.getElementsByClassName("info").innerHTML  = "TURN FOR "+turn;
            document.getElementsByClassName('line')[0].style.transition="all 0.1s ease-in-out";
        }
    }
    })
})


// reset

reset.addEventListener('click',()=>{
    // let boxtexts = document.querySelectorAll('.boxtext');
    // Array.from(boxtexts).forEach(element=>{
    //     element.innerText="";

    // })
    location.reload();
    // turn = "X"; 
    // isgameover=false;
    // document.getElementsByClassName('info')[0].innerText  = "Turn for"+turn;

})

function suntoggle() {
    var sunelem= document.body;
    sunelem.classList.toggle('dark-mode');

    var nav= document.body.getElementsByClassName('nav')[0];
    nav.classList.toggle('dark-nav');


    var h1= document.body.getElementsByClassName('heading')[0];
    h1.classList.toggle('dark-h');

    var hover= document.body.querySelectorAll['.box'];
    hover.classList.toggle('.dbox:hover');

}



// console.log(window.innerHeight);
// document.body.getElementsByClassName("line")[0].style.display="block";
// console.log(window.innerWidth);




