// const obj4 = {
//     names: ['Anna', 'Sveta'],
//     city: 'Vitebsk',
//     seyHello() {
//         console.log(this);
//         this.names.forEach(function(name) {
//             console.log(this);
//             console.log(`hello ${name}. I am from ${this.city}`)

//         })

//     }
// }
// obj4.seyHello();

'use strict'
const answer = ['1', '2', '3'];

const cards = [
    {
        input: document.querySelector('.input1'),
        btn: document.querySelector('.btn1'),
    },
    {
        input: document.querySelector('.input2'),
        btn: document.querySelector('.btn2'),
    },
    {
        input: document.querySelector('.input3'),
        btn: document.querySelector('.btn3'),
    }
]

// console.log(cards[0].input);

const getAnswer = (index) => {
    return answer[index]
}

let count = 0;

const handlerCheckAnswer = function (index) {
    // console.log(index);
    // console.log(cards);
    // console.log(getAnswer(index));

    if (this.input.value === getAnswer(index)) {
        this.input.disabled = true
        this.btn.disabled = true
        count++
        if (count === 3) {
            alert ('Вы ответили правильно')
            window.location.href = 'https://google.com'
        }
    } else {
        this.input.value = ''
        alert('Ответ неверный, попробуйте угадать 1, 2 или 3')
    }
}



cards.sort(() => Math.random() - 0.5);
console.log(cards);



cards.forEach((card, index) => {
    card.btn.addEventListener('click', handlerCheckAnswer.bind(card))
})