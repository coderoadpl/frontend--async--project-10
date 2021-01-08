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

const saveNumber = (newNumber) => {
    return fetch(DB_URL, {
        method: 'PUT',
        body: JSON.stringify(newNumber)
   })
} 

const saveNumberThenRefetch = (newNumber) => {
    return saveNumber(newNumber)
        .then(() => fetchNumber())
}

const inc = () => {
    const number = Number(numberElement.innerHTML)

    const newNumber = number + 1

    return saveNumberThenRefetch(newNumber)
}

incButtonElement.addEventListener(
    'click',
    inc
)

fetchNumber()
