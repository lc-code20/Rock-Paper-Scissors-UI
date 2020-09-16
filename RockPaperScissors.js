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

    function gameEndCheck(){
      
      console.log('Game end');

      if (playerPoints>computerPoints){
        gameEnd.textContent = 'You win!';
      } else if (playerPoints === computerPoints){
        gameEnd.textContent='Its a draw!';
      } else {
        gameEnd.textContent= "You lose";
      }

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
      gameEnd.textContent = '';
      roundNumber += 1;

      if (roundNumber==6){
        gameEndCheck();
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
    roundResult.textContent = "";

    let gameEnd = document.querySelector('#game.gameMessage');
    gameEnd.textContent = "";

    const buttons = Array.from(document.querySelectorAll('.button'));
    buttons.forEach(button => button.addEventListener('click', game2));

    
