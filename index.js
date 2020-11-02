// const dogGift = document.querySelector('#dogGift')
// const button = document.querySelector('button')

// const randomDogItems = ['dog biscuits', 'collar', 'bone', 'ball', 'dog shampoo', 'dog sofa', 'dog DNA test']

// function showDogGift() {
//     let randomNumber = Math.floor(Math.random() * randomDogItems.length)
//     let newRandNum = randomDogItems[randomNumber]
//     dogGift.innerHTML = newRandNum
// }

// button.addEventListener('click', showDogGift)


// DOM manipulation practice

// let hello = document.getElementById('hello')
// console.log(hello)
// console.dir(hello)

// const result = document.querySelectorAll('.things')
// console.log(Array.from(result))

// for (let i = 0; i < result.length; i++) {
//     result[i].textContent = ' ** Gabo ** '
// }

// Array manipulation - Inmutable

// const names = ['Miguel', 'Sofia', 'Clara', 'Celeste', 'Antonio', 'Miguel Ángel', 'Gabriel']

// let removeName = names.findIndex( names => names === "Gabriel")

// removeName = [
//     ...names.slice(0, removeName),
//     ...names.slice(removeName +1)
// ]

// const addNames = [
//     'Valentina', 'Nicole', ...names, 'Jorge', 'Mou'
// ]

// console.log(names)
// console.log(removeName)
// console.log(addNames)

// DOM MANIPULATION
// Render the emojis as <span> tags in the emojisContainer <div>
// Hints: you can achieve this by creating an span with createElement(),
// setting its content with textContent, and using append() to append it to the container

// Hook an event listener up with the button, and log out the input field's value when it's clicked

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.querySelector('#push-emoji')
const unshiftBtn = document.getElementById('unshift-emoji')
const shiftBtn = document.getElementById('shift-emoji')
const popBtn = document.getElementById('pop-emoji')

function renderEmojis() {
    emojiContainer.innerHTML = ''
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i] + ` `
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener('click', function(){
    // console.log('It was clicked')
    const emojiInput = document.getElementById('emoji-input')
    // console.log(emojiInput.value)
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = '' 
        console.log(myEmojis)
        renderEmojis()
    }
})

unshiftBtn.addEventListener('click', function() {
   console.log('It was clicked')
   const emojiInput = document.getElementById('emoji-input')
   console.log(emojiInput.value)
   if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ''
    renderEmojis()
   }

})

shiftBtn.addEventListener('click', function() {
    console.log(shiftBtn)
    myEmojis.shift()
    renderEmojis()
})

popBtn.addEventListener('click', function(){
    console.log('Clicked!!!')
    myEmojis.pop()
    renderEmojis()
})



