const dogGift = document.querySelector('#dogGift')
const button = document.querySelector('button')

const randomDogItems = ['dog biscuits', 'collar', 'bone', 'ball']

function showDogGift() {
    let randomNumber = Math.floor(Math.random() * randomDogItems.length)
    let newRandNum = randomDogItems[randomNumber]
    dogGift.innerHTML = newRandNum
}

button.addEventListener('click', showDogGift)



