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
        let result = str[0].toUpperCase() + str.substr(1).toLowerCase();
        return result;
    }
    function playRound(playerSelection,computerSelection){
        // Check if playerSelection(should be capitalized) is not the same as computerSelection
        if((capitalize(playerSelection) != computerSelection)&& capitalize(playerSelection)!=" "){
            // if playerSelection is "Rock" and computerSelection is "Scissors"
            if(capitalize(playerSelection)==="Rock" && computerSelection === "Scissors"){
                // return that "Rock beats Scissors"
                return `Rock beats Scissors player`;
            }
            // else if playerSelection is "Scissors" and computerSelection is "Paper"
            else if (capitalize(playerSelection) === "Scissors" && computerSelection === "Paper"){
                // return that "Scissors beats Paper"
                return `Scissors beats Paper`;
            }
            // else if playerSelection is "Paper" and computerSelection is "Rock"
            else if(capitalize(playerSelection)==="Paper" && computerSelection === "Rock"){
                // return that "Paper beats Rock"
                return `Paper beats Rock`;
            }
            
        }
            return "Selected the same";
        
}
    // `This function tracks results of the computer through the 5 iterations and returns a list of results.`
    function getResults(){
    let player = 0;
    let computer = 0;
    let playerSelection = "";
    let computerSelection = ""; 
    let res = []
    for(let i=0;i<5;i++){
        playerSelection = prompt("Enter your pick? ");
        console.log(playerSelection)
        computerSelection = getComputerSelection();
        console.log(computerSelection)
        if(playRound(playerSelection,computerSelection) != "Selected the same"){
            if((capitalize(playerSelection) === "Rock" && computerSelection ==="Scissors")||(capitalize(playerSelection) === "Scissors" && computerSelection === "Paper")||(capitalize(playerSelection)==="Paper" && computerSelection === "Rock")){
                player = player + 1;
            }else if((capitalize(playerSelection) === "Scissors" && computerSelection ==="Rock")||(capitalize(playerSelection) === "Paper" && computerSelection === "Scissors")||(capitalize(playerSelection)==="Rock" && computerSelection === "Paper")){
                computer = computer + 1;
            }
        }
    }
    return [computer,player];
    }

    // `This function declares the winner of the game based on the results returned by getResults function.`
    function declareWinner(){
        let res= getResults()
        let player = res[1]
        let computer = res[0]
        console.log(player,computer)
        if (player > computer){
            return `You ${player} beat Computer ${computer}`
        }else if(computer > player){
            return `Computer ${computer} beat You ${player}`
        }else{
            return `Draw: Computer ${computer} and You ${player}`
        }
    }
    
    console.log(declareWinner())
}