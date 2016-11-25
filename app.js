//OUR FUNDAMENTAL GAME VARIABLE
var scores, roundScore, activePlayer, gamePlaying, player1, player2, winningScore;

   function submitt()
{
     player1 =document.getElementById('name1').value;
     player2 =document.getElementById('name2').value;
     winningScore =document.getElementById('win').value;
     document.querySelector('#game').style.display='none';
     document.querySelector('#mainPart').style.display='block';
     document.getElementById('name-0').innerHTML= player1;
     document.getElementById('name-1').innerHTML= player2;
     document.querySelector('.score').innerHTML= 'Winning Score - ' + winningScore;
     
}

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
         //1.Random Number
    
    var dice= Math.floor(Math.random()*6)+1;
    
  //2. Display the result
    
    var diceDOM = document.querySelector('.dice');
    
    diceDOM.style.display='block';
    diceDOM.src='dice-' + dice + '.png';
    
 // 3. Update the roundscore IF the rolled number was NOT a 1.
    
    if(dice !== 1)
        {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
            if((scores[activePlayer] + roundScore) >=winningScore)
            {
       
                document.querySelector('#name-' + activePlayer).textContent='Winner!';
                document.querySelector('.dice').style.display='none'; 
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
       
            }
        }
    else
        {
          //Next Player
            
            nextPlayer();
        }
           
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
      //1. Add the CURRENT SCORE to the GLOBAL SCORE
    
    scores[activePlayer] += roundScore;
    
    //2. update the UI
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
    nextPlayer();    
    
    }
     
});

 
document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer()
{
    //Next Player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
               
            document.querySelector('.dice').style.display='block';
}

function init()
{
    scores=[0,0];
    roundScore=0;
    activePlayer=0; 
    gamePlaying = true;
    
    document.querySelector('.dice').style.display='none'; //where, 'style' is the method, 'display' is property of the 'style' method and 'none' is the attribute of 'display' property of' style' method.

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
