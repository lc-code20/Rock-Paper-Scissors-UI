console.log("Start!")

let moves = ['rock','paper','scissors']

    function computerPlay(){
      return moves[Math.floor(Math.random()*3)];
    }
    
    function rulesWin(move){
      if (move==='rock'){
        return 'Rock beats Paper';
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

      //console.log(this);
      if (roundNumber==6){
        alert("Game resets");

        roundNumber = 1;
        round.textContent = 'Start';
        return;
      }

      console.log(e.target.textContent);

      userStatus.textContent = e.target.textContent.toLowerCase();

      pcStatus.textContent = computerPlay();

      round.textContent = 'Round ' + roundNumber;
      roundNumber += 1;

    }


    let round = document.querySelector('.round');
    round.textContent = "Start";

    //let gameMessage = document.querySelector('.gameMessage');
    //gameMessage.textContent = 'Pick your move: '
    let userStatus = document.querySelector('#userStatus.gameMessage');
    userStatus.textContent = "User";

    let pcStatus = document.querySelector('#pcStatus.gameMessage');
    pcStatus.textContent = "PC";

    let userPoints = document.querySelector('#userPoints.gameMessage');
    userPoints.textContent = "0";

    let pcPoints = document.querySelector('#pcPoints.gameMessage');
    pcPoints.textContent = "0";


    const buttons = Array.from(document.querySelectorAll('.button'));
    buttons.forEach(button => button.addEventListener('click', game2));
    //window.addEventListener('keydown', playSound);

    
