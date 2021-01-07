const DB_URL = 'https://coderoad--sandbox-default-rtdb.firebaseio.com/counter-1/.json'

const numberElement = document.querySelector('.counter__number')
const incButtonElement = document.querySelector('.counter__button--inc')

const updateNumber = (number) => {
    numberElement.innerHTML = number
}

const fetchNumber = () => {
    return fetch(DB_URL)
        .then((r) => r.json())
        .then((number) => updateNumber(number))
}

fetchNumber()
