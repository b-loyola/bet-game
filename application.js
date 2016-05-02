var money = 100;
var result = "";
const MIN_BET = 5;
const MAX_BET = 10;

function promptForBet() {
	return parseInt(window.prompt("You have: $" + money + "\nHow much do you want to bet? (min: " + MIN_BET + ", max: " + MAX_BET + ")"), 10);
}

function promptForNumber() {
	return parseInt(window.prompt("Enter a number between 1 and 10."), 10);
}

while(money > MIN_BET) {

	// get bet amount
	do {
		var bet = promptForBet();
	} while (isNaN(bet) || bet < MIN_BET || bet > MAX_BET || bet > money);

	// get bet number
	do {
		var selectedNumber = ;
	} while (isNaN(selectedNumber) || selectedNumber < 1 || selectedNumber > 10);

	// select random number between 1 and 10
	var randomNumber = Math.ceil(Math.random() * 10);

	switch (selectedNumber){
		case randomNumber:
			money += bet;
			result = "You win!\nYour winnings: $" + bet + "\nTotal cash remaining: $" + money;
			break;
		case randomNumber + 1:
		case randomNumber - 1:
			result = "Close enough!\nYou don't win anything but you get to keep your bet.\nTotal cash remaining: $" + money;
			break;
		default:
			money -= bet;
			result = "You lose!\nTotal cash remaining: $" + money;
	}
	window.alert("I chose " + randomNumber + "\n" + result);
}

window.alert("Game over!\nNot enough money to make bets\nCash remaining: $" + money);