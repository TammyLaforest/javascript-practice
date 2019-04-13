// program data:
let number = Math.floor(Math.random() * 100) + 1
console.log(number)
let limit = 8
// let userInput
let won = false
let guesses = []
let high = 100
let low = 1
for (i = 0; i < limit; i++) {
	// Prompt user for their guess

	let userInput = parseInt(
		window.prompt(`Guess a number from ${low} to ${high}`)
	)

	// This code does not allow for specific error messages
	// let userInput = ''
	// do {
	// 	userInput = parseInt(prompt('Guess a number from 1 to 10'))
	// } while (isNaN(userInput) || isPreviousGuess(userInput))

	// Check if number has already been guessed before
	while (isPreviousGuess(userInput) == true) {
		window.alert(`You have guessed ${userInput} already.`)
		userInput = parseInt(
			window.prompt(`Guess a number from ${low} to ${high}`)
		)
	}

	// Check if input is a number and between low and high
	while (isNaN(userInput) || userInput > high || userInput < low) {
		window.alert(`Only a number between ${low} and ${high} will work`)
		userInput = parseInt(
			window.prompt(`Guess a number from ${low} to ${high}`)
		)
	}

	// Check if guess is correct
	if (userInput == number) {
		document.write('You win!')
		won = true
		break
	} else {
		let tries = limit - 1 - i
		guesses.push(userInput)
		if (userInput < number) {
			window.alert(
				`Your guess is too low! You have guessed ${guesses}. You have ${tries} tries remaining`
			)
			low = userInput + 1
		} else {
			window.alert(
				`Your guess is too high! You have guessed ${guesses}. You have ${tries} tries remaining`
			)
			high = userInput - 1
		}
	}
}
if (!won) {
	document.write(
		`<br><h1>Game over</h1><br>Sorry, you ran out of tries. The correct number was ${number}.`
	)
}

function isPreviousGuess(userInput) {
	console.log(guesses)
	console.log(guesses.includes(userInput))
	return guesses.includes(userInput)
}
