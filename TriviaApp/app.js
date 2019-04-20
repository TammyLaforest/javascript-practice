$(function() {
	localStorage.clear()

	let questions = []

	localStorage.setItem('points', 0)
	let points = localStorage.getItem('points')

	const defaultQuestions = [
		{
			question: 'Why did the chicken cross the road?',
			choiceA: 'To get to the other side',
			choiceB: 'Because it was scared',
			choiceC: 'Because I said so',
			choiceD: 'All of the above',
			correct: 'A'
		},
		{
			question:
				'How much wood would a woodchuck chuck if a woodchuck could chuck wood',
			choiceA: 'To get to the other side',
			choiceB: 'A woodchuck would chuck all the wood it could chuck',
			choiceC: 'Because I said so',
			choiceD: 'All of the above',
			correct: 'B'
		},
		{
			question:
				'If Peter Piper picked a peck of pickled peppers, how many pickled peppers did Peter Piper pick?',
			choiceA: '17',
			choiceB: 'A peck',
			choiceC: 'A pickle',
			choiceD: 'A pepper',
			correct: 'B'
		},
		{
			question: '2 + 2 =',
			choiceA: '8',
			choiceB: '0',
			choiceC: '4',
			choiceD: '16',
			correct: 'C'
		},
		{
			question: '2 x 2 =',
			choiceA: '4',
			choiceB: '8',
			choiceC: '0',
			choiceD: 'All of the above',
			correct: 'A'
		}
	]

	let question = $('#question')
	let choiceA = $('#choiceA')
	let choiceB = $('#choiceB')
	let choiceC = $('#choiceC')
	let choiceD = $('#choiceD')
	let submit = $('#submit')
	let pointsID = $('#pointsID')

	$('#submit').on('click', () => {
		let userChoice = $('input[name = choices]:checked', '#quiz').val()
		if (!userChoice) {
			alert('please choose and answer')
			return
		}

		if (userChoice != defaultQuestions[i].correct) {
			questions.push(0)

			alert(
				'You chose ' +
					userChoice +
					'. The correct answer is ' +
					defaultQuestions[i].correct
			)
		} else {
			points++
			questions.push(1)

			alert('You chose ' + userChoice + '. That is correct!')
		}
		i++
		if (i == defaultQuestions.length) {
			let button = document.createElement('button')
			button.innerHTML = 'New Game'
			button.style.margin = '1em'
			endGame(points)
			$(button).on('click', refreshPage)
			// let joinedQuestions = questions.join(', ')
			// console.log(joinedQuestions)
			$('#options')
				.html(
					'<div class="row"><p><a href="addquestion.html">Contribute to question set!</a></p></div>'
				)
				.append(button)

				.css('display', 'flex')
				.css('justify-content', 'center')
			$('#quiz')
				.css('display', 'flex')
				.css('justify-content', 'center')
		} else populate()
	})

	function refreshPage() {
		window.location.reload()
	}
	localStorage.setItem('i', 0)
	let i = localStorage.getItem('i')

	populate()

	function endGame(points) {
		$('#final').html(
			'<h2>Your Score: ' +
				points +
				' out of ' +
				questions.length +
				'</h2>'
		)
		$('#quiz').html('')
		for (let j = 0; j < questions.length; j++) {
			var summary = document.createElement('p')
			if (questions[j] == 0) {
				summary.innerHTML = 'Question #' + (j + 1) + ': INCORRECT'
				summary.style.color = 'red'
			} else {
				summary.innerHTML = 'Question #' + (j + 1) + ': CORRECT!'
				summary.style.color = 'green'
			}
			quiz.appendChild(summary)
		}

		document.getElementById('options').style.display = 'block'
	}

	function populate() {
		let userChoice = $('input[name = choices]:checked', '#quiz')
		userChoice.prop('checked', false)

		pointsID.html(points)
		question.html(defaultQuestions[i].question)
		question.attr('id', i)
		choiceA.html(defaultQuestions[i].choiceA)
		choiceB.html(defaultQuestions[i].choiceB)
		choiceC.html(defaultQuestions[i].choiceC)
		choiceD.html(defaultQuestions[i].choiceD)
	}
})
