
const condition = [
    {
        choice : 'rock',
        win : 'scissor',
        lose : 'paper'
    },
    {
        choice : 'paper',
        win : 'rock',
        lose : 'scissors'
    },
    {
        choice : 'scissors',
        win : 'paper',
        lose : 'rock'
    }
]

let roundResult = {
    id : new Date().getDate(),
    player : '',
    computer: ''
}

const computer_score = document.getElementById('computer_score')
const player_score = document.getElementById('player_score')

const computer_result = document.getElementById('computer_result')
const player_result = document.getElementById('player_result')

const results = document.getElementById('results')

let playerScore = 0
let computerScore = 0


function handlechoice(choice) {
    const random = Math.floor(Math.random() * condition.length)
    let computerChoice = condition[random]
    let playerChoice = choice
    playGame(playerChoice, computerChoice)
    roundHisory(playerChoice, computerChoice.choice)
    computer_result.innerHTML = computerChoice.choice
    player_result.innerHTML = playerChoice
    scoreCount()
}

function scoreCount() {
    if(playerScore >= 5 && computerScore >= 5) {
        alert('End Draw')
        reset()
    } else if (computerScore >= 5) {
        alert ('End Computer Win')
        reset()
    } else if (playerScore >=5) {
        alert('End Player Win')
        reset()
    }
}

function playGame(userChoice, computerChoice) {
    if(userChoice === computerChoice.choice) {
        playerScore ++
        computerScore ++
        player_score.innerHTML = playerScore
        computer_score.innerText = computerScore
        results.innerText = `Draw`
    } else if (userChoice == computerChoice.win) {
        computerScore ++
        computer_score.innerText = computerScore
        results.innerText = `player :${userChoice} computer : ${computerChoice.choice} computer win`
    } else if (userChoice == computerChoice.lose) {
        playerScore ++
        player_score.innerHTML = playerScore
        results.innerText = `player :${userChoice} computer : ${computerChoice.choice} player win`
    }
}

function reset() {
    playerScore = 0
    computerScore = 0
    player_score.innerHTML = playerScore
    computer_score.innerText = computerScore
    player_result.innerHTML = ''
    computer_result.innerHTML = ''
    results.innerText = ''
}

function roundHisory(playerResult, computerResult) {
    roundResult.player = playerResult
    roundResult.computer = computerResult
    console.log(roundResult)
}