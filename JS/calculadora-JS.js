const display = document.querySelector('.input-digite')

const numbers = []
const secondNumbers = []
const operator = []

let selecionaArray = true

function botoesEvent() {
    document.addEventListener('click', function (evento) {
        const selectedElement = evento.target

        if (selectedElement.classList.contains('btn-numbers')) {
            displayAdd(selectedElement.innerText)

            if (selecionaArray === true) {
                numbers.push(display.value)
                if (numbers > numbers[0]) {
                    numbers.shift()
                }
            } else {
                if (operator[0] === '+') {
                    valor2 = display.value.split('+')
                }
                if (operator[0] === '-') {
                    valor2 = display.value.split('-')
                }
                if (operator[0] === '/') {
                    valor2 = display.value.split('/')
                }
                if (operator[0] === '*') {
                    valor2 = display.value.split('*')
                }

                secondNumbers.push(valor2[1])
                if (secondNumbers > secondNumbers[0]) {
                    secondNumbers.shift()
                }
            }
        }
        const NumberTransform = numbers[0]
        const NumberTransformed = Number(NumberTransform)
        const secondNumberTransform = secondNumbers[0]
        const secondNumberTransformed = Number(secondNumberTransform)
        console.log(NumberTransformed, secondNumberTransformed)

        if (selectedElement.classList.contains('buttons')) {
            selecionaArray = false
            displayAdd(selectedElement.innerText)
            operator.push(selectedElement.innerText)
            if (operator > operator[0]) {
                operator.shift()
            }
        }
        if (selectedElement.classList.contains('clear-button')) {
            selecionaArray = true
            resetDisplay()
            numbers.pop()
            secondNumbers.pop()
        }
        if (selectedElement.classList.contains('button-delete')) {
            deleteLastValueDisplay()
        }
        if (selectedElement.classList.contains('result')) {
            if (operator[0] === '+') {
                const operacao = operacoes(
                    NumberTransformed,
                    secondNumberTransformed
                ).soma()

                resetDisplay()
                displayAdd(operacao)
            }
            if (operator[0] === '-') {
                const operacao = operacoes(
                    NumberTransformed,
                    secondNumberTransformed
                ).subtracao()

                resetDisplay()
                displayAdd(operacao)
            }
            if (operator[0] === '/') {
                const operacao = operacoes(
                    NumberTransformed,
                    secondNumberTransformed
                ).divisao()

                resetDisplay()
                displayAdd(operacao)
            }
            if (operator[0] === '*') {
                const operacao = operacoes(
                    NumberTransformed,
                    secondNumberTransformed
                ).multiplicacao()

                resetDisplay()
                displayAdd(operacao)
            }
        }
    })
}

function operacoes(firstValue, secondValue) {
    const soma = () => {
        const resultado = firstValue + secondValue
        return resultado
    }
    const subtracao = () => {
        const resultado = firstValue - secondValue
        return resultado
    }
    const divisao = () => {
        const resultado = firstValue / secondValue
        return resultado
    }
    const multiplicacao = () => {
        const resultado = firstValue * secondValue
        return resultado
    }
    return {
        soma,
        subtracao,
        divisao,
        multiplicacao,
    }
}

const displayAdd = (valor) => {
    display.value += valor
}
const deleteLastValueDisplay = () => {
    display.value = display.value.slice(0, -1)
}
const resetDisplay = () => {
    display.value = ''
}

botoesEvent()
