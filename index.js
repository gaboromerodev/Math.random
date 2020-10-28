//Random Number in arrays

const dogItems = document.querySelector('#dogGift')
const button = document.querySelector('button')

const shopItems = ['dog biscuits', 'collar', 'bones', 'toy', 'meal', 'ball']

function randomItem() {
    let randomNumber = Math.floor(Math.random() * shopItems.length)
    let randomStuff = shopItems[randomNumber]
    dogItems.innerHTML = randomStuff
}
console.log(randomItem())

button.addEventListener('click', randomItem);