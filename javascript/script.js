window.onload = function(){
    let resOut = [];
    function getComputerChoice(){
    // Create an array to hold Rock,Paper and Scissors
        let result = ["Rock","Paper","Scissors"];
    // Return a random number from 0 to length of result 
        let choice = Math.floor(Math.random() * result.length)
    // Use the random number to return Rock, Paper and Scissors randomly
        return result[choice];
    };
    let playerSelection = ''
    const computerSelection = getComputerChoice();
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
    let res = []
    let player = 0;
    let computer = 0;
    for(let i=0;i<5;i++){
        playerSelection = prompt("Enter your selection: ")
        res.push(playRound(playerSelection,computerSelection));
        console.log(playRound(playerSelection,computerSelection))
    }

    for(let i=0;i<res.length;i++){
        if (res[i] === "Computer beats Player"){
            console.log("Computer beats Player")
            computer++;
        }else if(res[i] === "Player beats Computer"){
            console.log("Player beats Computer")
            player++;
        }else{
            continue;
        }
    }
    resOut = [computer,player]
    console.log(res)
    return resOut
}
console.log(game())
console.log(`resOut ${resOut} - 1 is ${resOut[0]} - 2 is ${resOut[1]}`)

while(resOut[0] === resOut[1]){
    game()
}
console.log(`resOut ${resOut} - 1 is ${resOut[0]} - 2 is ${resOut[1]}`)

}