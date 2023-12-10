    // global array to store results from game function.
    function getComputerChoice(){
    // Create an array to hold Rock,Paper and Scissors
        let result = ["Rock","Paper","Scissors"];
    // Return a random number from 0 to length of result 
        let choice = Math.floor(Math.random() * result.length);
    // Use the random number to return Rock, Paper and Scissors randomly
        return result[choice];
    };

    let playerSelection = ''
    const computerSelection = getComputerChoice();

    // Function used to capitalize(first letter is capital and rest are small letters) a string "str" e.g. "Rock"
    function capitalize(str){
        if (str === ''){
            return;
        }else{
        let result = str[0].toUpperCase() + str.substr(1).toLowerCase();
        return result;
        }
    }

    function playRound(playerSelection,computerSelection){
        let str = '';
            switch(capitalize(playerSelection)){
                case "Rock":
                    if(computerSelection === "Scissors"){
                        str = "Player beats Computer";
                    }else if(computerSelection === "Paper"){
                        str = "Computer beats Player";
                    }else{
                        str = "Same selection";
                    }
                    
                    break;
                case "Scissors":
                    if(computerSelection === "Rock"){
                        str = "Computer beats Player";
                    }else if(computerSelection === "Paper"){
                        str = "Player beats Computer";
                    }else{
                        str = "Same selection";
                    }
                    break;
                case "Paper":
                    if(computerSelection === "Rock"){
                        str = "Player beats Computer";
                    }else if(computerSelection === "Scissors"){
                       str = "Computer beats Player";
                    }else{
                        str = "Same selection";
                    }
                    break;
                default:
                    break;
        } 
        
        return str;  
}


function game(){
    let selected = '' 
    let computer = 0;
    let player = 0;
    let div = document.createElement("div");
    div.setAttribute("class","score");
    let para = document.createElement("p")
    let pDiv = document.createElement("div")
    pDiv.setAttribute("class","rScore")
    let body = document.querySelector("body");
    let btns = Array.from(document.querySelectorAll("button"));
    btns.forEach(btn =>{
        btn.addEventListener("click",()=>{
            selected = playRound(btn.textContent,computerSelection)
            div.innerText = '';
            para.textContent = '';
            console.log(selected)
            pDiv.innerText = selected;
            if(selected === "Computer beats Player"){
                computer++;
            }else if(selected === "Player beats Computer"){
                player++;
            }else{
                console.log("same")
            }
            para.textContent = `Computer ${computer} and Player ${player}`;
            pDiv.appendChild(para)
            body.appendChild(pDiv)
            if(computer === 5 && player < 5){
                div.innerText = "Computer wins";
                body.appendChild(div);
                player=0;
                computer=0;
            }else if(player === 5 && computer < 5){
                div.innerText = "Player wins";
                body.appendChild(div);
                player=0;
                computer=0;
            }else if((computer === player)&&(player != 0 && computer != 0 )){
                div.innerText = "Draw, replaying the game.."
                body.appendChild(div);
                player=0;
                computer=0; 
            }
            
        })
        
    })
}
console.log(game())