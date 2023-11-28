window.onload = function(){
    function getComputerSelection(){
    // Create an array to hold Rock,Paper and Scissors
        let result = ["Rock","Paper","Scissors"];
    // Return a random number from 0 to length of result 
        let choice = Math.floor(Math.random() * result.length)
    // Use the random number to return Rock, Paper and Scissors randomly
        return result[choice];
    };
    
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
                        str = "Selected same input";
                    }
                    break;
                case "Scissors":
                    if(computerSelection === "Rock"){
                        str = "Computer beats Player";
                    }else if(computerSelection === "Paper"){
                        str = "Player beats Computer";
                    }else{
                        str = "Selected same input";
                    }
                    break;
                case "Paper":
                    if(computerSelection === "Rock"){
                        str = "Player beats Computer";
                    }else if(computerSelection === "Scissors"){
                       str = "Computer beats Player";
                    }else{
                        str = "Selected same input";
                    }
                    break;
                default:
                    console.log("Game Over!!")
                    break;
        } 
        return str;  
}

// `This function tracks results of the computer through the 5 iterations and returns a list of results.`
function getResults(){
    let res = []
    let player = 0;
    let computer = 0;
    for(let i=0;i<5;i++){
        let playerSelection = prompt("Enter your pick: ");
        console.log(playerSelection)
        let computerSelection = getComputerSelection();
        console.log(computerSelection)
        res.push(playRound(playerSelection,computerSelection))
        console.log(playRound(playerSelection,computerSelection))
    }
    for(let i=0;i<res.length;i++){
        if(res[i] === "Computer beats Player"){
            computer++;
        }else if(res[i]==="Player beats Computer"){
            player++;
        }else{
            continue;
        }
    }
    console.log(`computer ${computer} and player ${player}`)
    return [computer,player]
}
console.log(getResults())
}