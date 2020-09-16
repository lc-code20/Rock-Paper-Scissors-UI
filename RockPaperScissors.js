console.log("Start!")

let moves = ['rock','paper','scissors']

    function computerPlay(){
      return moves[Math.floor(Math.random()*3)];
    }
    
    function rulesWin(move){
      if (move==='rock'){
        return 'Rock beats Scissors';
      }
      if (move==='paper'){
        return 'Paper beats Rock';
      }
      else {
        return 'Scissors beats Paper';
      }
    }

    function playRound(playerSelection, computerSelection){

      console.log('Your move is: ' + playerSelection + '. Pc is: ' + computerSelection);

      if (playerSelection===computerSelection){
        return 'It is a draw!' 
      }
      if (playerSelection==='rock' && computerSelection==='scissors' ||
        playerSelection==='paper' && computerSelection==='rock'||
        playerSelection==='scissors' && computerSelection==='paper'){
        playerPoints++;
        return ('You win! ' + rulesWin(playerSelection));
      }
      else {
        computerPoints++;
        return ('You lose. ' + rulesWin(computerSelection));
      }

    }

    let playerPoints = 0
    let computerPoints = 0

    function game(e){
      /*
      for (i=0;i<5;i++){
        console.log('Round '+ (i+1))

        //let input = window.prompt("Your move: ").toLowerCase();

        let j = i+1;

        gameMessage.textContent = 'Round ' + j + '\n Your move:';
        
        //while (input != 'rock'&&
        //  input != 'paper'&&
       //   input != 'scissors'){
        //  input = window.prompt("Your move needs to be rock, paper or scissors: ").toLowerCase();
       // }

        const computerSelection = computerPlay();

        console.log(playRound(input, computerSelection))

      }
      */

      console.log('Game end ');

      if (playerPoints>computerPoints){
        console.log('You win!')
      } else if (playerPoints === computerPoints){
        console.log('Its a draw!')
      } else {
        console.log("You lose")
      }

      console.log('Your points: ' + playerPoints + '. Computer points: ' + computerPoints)

    }

    let roundNumber = 1;

    function game2(e){

      round.textContent = 'Round ' + roundNumber;
      

      console.log(e.target.textContent);

      userStatus.textContent = e.target.textContent.toLowerCase();

      pcStatus.textContent = computerPlay();

      roundResult.textContent = playRound(userStatus.textContent,pcStatus.textContent);

      userPoints.textContent = playerPoints;
      pcPoints.textContent = computerPoints;

      console.log("round number: " + roundNumber);
      roundNumber += 1;

      if (roundNumber==6){
        //alert("Game resets");

        roundNumber = 1;
        playerPoints = 0;
        computerPoints = 0;

        return;
      }

      
    }


    let round = document.querySelector('.round');
    round.textContent = "Start";

    let userStatus = document.querySelector('#userStatus.gameMessage');
    userStatus.textContent = "User";

    let pcStatus = document.querySelector('#pcStatus.gameMessage');
    pcStatus.textContent = "PC";

    let userPoints = document.querySelector('#userPoints.gameMessage');
    userPoints.textContent = playerPoints;

    let pcPoints = document.querySelector('#pcPoints.gameMessage');
    pcPoints.textContent = computerPoints;

    let roundResult = document.querySelector('#roundResult.gameMessage');
    roundResult.textContent = "check";


    const buttons = Array.from(document.querySelectorAll('.button'));
    buttons.forEach(button => button.addEventListener('click', game2));
    //window.addEventListener('keydown', playSound);

    
