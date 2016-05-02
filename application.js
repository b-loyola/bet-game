var money = 100;
var betAmt = 0;
var betNum = 0;
var message = "";
var chosen = "";
const MIN_BET = 5;
const MAX_BET = 10;

function getBet() {
	return parseInt($('#bet').val(),10);
}

function getNumber() {
	return parseInt($('#number').val(),10);
}

function invalidBet(bet) {
	console.log("inside invalidBet");
	return (isNaN(bet) || bet < MIN_BET || bet > MAX_BET || bet > money);
}

function invalidNum(num) {
	return (isNaN(num) || num < 1 || num > 10);
}

$(document).ready(function(){

	// clear fields on focus
	$('#input').find('input').focus(function(){
		$(this).val('');
	});

	// get bet amount
	$('#bet').keyup(function(){
		betAmt = getBet();
		if (invalidBet(betAmt)) {
			$('#message').text("Bet must be a number between " + MIN_BET + " and " + MAX_BET);
		} else {
			$('#currentBet').text(betAmt);
		}
	});

	// get bet number
	$('#number').keyup(function(){
		betNum = getNumber();
		if (invalidNum(betNum)) {
			$('#message').text("Number must be an integer between 1 and 10.");
		} else {
			$('#currentNumber').text(betNum);
		}
	});

	//play game
	$('#play').on('click', function() {
		if (invalidBet(betAmt) || invalidNum(betNum)) {

		}
		var randomNumber = Math.ceil(Math.random() * 10);
		chosen = "I chose " + randomNumber;
		switch (betNum){
			case randomNumber:
				money += betAmt;
				message = "You win! Your winnings: $" + betAmt;
				break;
			case randomNumber + 1:
			case randomNumber - 1:
				message = "Close enough! You don't win anything but you get to keep your bet.";
				break;
			default:
				money -= betAmt;
				message = "You lose!";
		}
		$('#bankroll').text("$" + money);
		$('#chosen').text(chosen);
		$('#message').text(message);
	});

	// window.alert("Game over!\nNot enough money to make bets\nCash remaining: $" + money);

});