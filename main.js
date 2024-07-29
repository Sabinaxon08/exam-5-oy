let start = document.querySelector('#startWrapper')
let startButton = document.querySelector('#startWrapper button')
let gameWrapper = document.querySelector('#gameWrapper')
let game_input = document.querySelector('#gameWrapper input')
let game_button = document.querySelector('#gameWrapper button')
let savolText = document.querySelector('#savolText')
let result = document.querySelector('#result')
let resultText = document.querySelector('#result p')
let etap = 0
let score = 0

let savollar = [
    { question: "Amir temur qachon tugilgan?", javob: "1336" },
    { question: "Amir temur yurti?", javob: "Mavoronnaxr" },
    { question: "Amir temur avlodidan kim Xindistonga bostirib borgan?", javob: "Bobur" },
]


startButton.addEventListener('click', () => {
    start.classList.add('hidden')
    start.classList.remove('flex')

    gameWrapper.classList.add('flex')
    gameWrapper.classList.remove('hidden')

    savolText.textContent = savollar[etap].question
})

game_button.addEventListener('click', () => {
    etap++
    if (savollar.length <= etap) {

        gameWrapper.classList.add('hidden')
        gameWrapper.classList.remove('flex')

        result.classList.add('flex')
        result.classList.remove('hidden')

        resultText.textContent = "Вы угадали " + score + " правильный из " + savollar.length + " вопросов"

    } else {
        savolText.textContent = savollar[etap].question
        if (game_input.value === savollar[etap - 1].javob) {
            ++score
        }

    }
})