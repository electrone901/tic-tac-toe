
//IFI
$(document).ready(function() {
	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	// GET ID OF SQUARES
	$('#game li').click(function(){
  // CHECK 'o' FOR WINNER 
  if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') ||  
  	  $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || 
  	  $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o')||
  	  $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || 
  	  $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || 
  	  $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || 
  	  $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || 
  	  $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')
     )

    { //IF TRUE 'o' WINNER ALERT,REMOVE "disable, o, x" CLASS & START NEW GAME
    	alert('O has won the game. You can start a new game')
    	$("#game li").text("+");
			$("#game li").removeClass('disable')
			$("#game li").removeClass('o')
			$("#game li").removeClass('x')

   }

  // CHECK 'x' FOR WINNER
  else if (
  	$("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || 
  	$("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || 
  	$("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') ||
  	$("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || 
  	$("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || 
  	$("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || 
  	$("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || 
  	$("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')
  )
  {
  	//IF TRUE 'x' WINNER ALERT,REMOVE "disable, o, x" CLASS & START NEW GAME
  	alert('X wins has won the game. Start a new game')
   	$("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
  }

  // CHECK FOR NUMBER OF MOVES
  else if (count == 8) {
  	//IF MOVES ARE 8 THEN ALERT IT'S A TIE AND RESTART & REMOVE "disable, o, x" CLASS & RESET COUNT
  	alert('Its a tie. It will restart.')
		$("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		count = 0
  }

  // CHECK IF SQUARE HAS CLASS = 'disable' THEN ALERT ALREADY SELECTED
  else if ($(this).hasClass('disable')) {
  	alert('Already selected')
  }


	// CHANGE TURN TO 
  else if (count%2 == 0){
  	count++
	  $(this).text(o)
    $(this).addClass('disable o btn-primary')
	  

	  if (
	  	$("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || 
	  	$("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || 
	  	$("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || 
	  	$("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || 
	  	$("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || 
	  	$("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || 
	  	$("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || 
	  	$("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')
	  ) {
		  	alert('O wins')
			  count = 0
			  o_win++
				$('#o_win').text(o_win)
      }
  }
  

  else  {
  	count++
    $(this).text(x)
    $(this).addClass('disable x')
	  

	  if (
	  	$("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || 
	  	$("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || 
	  	$("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || 
	  	$("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || 
	  	$("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || 
	  	$("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || 
	  	$("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || 
	  	$("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')
	  ) {
	  		alert('X wins')
			  count = 0
				x_win++
				$('#x_win').text(x_win)
      }
    }
  });

	// RESET FUNCTION REWRITES +, REMOVES "disable, O, X" CLASS
  $("#reset").click(function () {
  $("#game li").text("+");
	$("#game li").removeClass('disable')
	$("#game li").removeClass('o')
	$("#game li").removeClass('x')
	count = 0
  });
});

nyc.js.org
Go to the page and download the program. 
After you have successfully download unzipped.
Open the folder, locate the index.html file and  do a right click on it  and open select open with Google Chrome or  drag and drop the index.html file to Google Chrome. Chrome will render the Tic Tac Toe game. Now you can play and enjoy.






