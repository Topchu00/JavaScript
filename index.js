// let symbols = [];
// let firstCard = null;
// let secondCard = null;
// let matchedCards = 0;
// let totalPairs = 0;

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// function createSymbols(pairs) {
//     const symbolArray = [];
//     for (let i = 1; i <= pairs; i++) {
//         symbolArray.push(i, i); 
//     }
//     shuffle(symbolArray);
//     return symbolArray;
// }


// function createBoard() {
//     const board = document.getElementById('game-board');
//     board.innerHTML = '';


//     totalPairs = parseInt(prompt("Введите количество пар: "));
//     if (isNaN(totalPairs) || totalPairs < 2 || totalPairs > 8) {
//         alert("Пожалуйста, введите число от 2 до 8.");
//         return;
//     }

//     symbols = createSymbols(totalPairs);

//     symbols.forEach(symbol => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.textContent = symbol;
//         card.addEventListener('click', flipCard);
//         board.appendChild(card);
//     });
// }

// function flipCard(event) {
//     const card = event.target;

//     if (card.classList.contains('flipped') || secondCard) return;

//     card.classList.add('flipped');

//     if (!firstCard) {
//         firstCard = card;
//         return;
//     }

//     secondCard = card;
//     checkForMatch();
// }

// function checkForMatch() {
//     if (firstCard.textContent === secondCard.textContent) {
//         matchedCards += 2;
//         firstCard.classList.add('matched');
//         secondCard.classList.add('matched');
//         resetTurn();
//     } else {
//         setTimeout(() => {
//             firstCard.classList.remove('flipped');
//             secondCard.classList.remove('flipped');
//             resetTurn();
//         }, 1000);
//     }

//     if (matchedCards === symbols.length) {
//         setTimeout(() => alert('Поздравляем, вы выиграли!'), 500);
//     }
// }

// function resetTurn() {
//     firstCard = null;
//     secondCard = null;
// }

// window.onload = createBoard;





// Дата и время

// Объект Date в js - это встроенный объект, который позволяет работать с датой и временем

// При вызове new Date конструктора без аргументов, создается объект, содержащий текущую дату и время 

// const date = new Date()
// console.log(date);

// Если в качестве аргумента передать строку, конструктор попытается распарсить ее как дату

// const date = new Date('2025-03-01')
// console.log(date);

// const date = new Date(2025, 1, 12, 19, 10)
// console.log(date);

// const date = new Date()

// console.log('Год => ', date.getFullYear());
// console.log('Месяц =>', date.getMonth() + 1);
// console.log('День =>', date.getDate());
// console.log('Часы =>,', date.getHours());
// console.log('Минуты =>', date.getMinutes());
// console.log('Секунды =>', date.getSeconds());
// console.log('Миллисекунды =>', date.getMilliseconds());



// Планирование: SetTimeout и SetInterval

// В JS существуют специальные встроенные функции для планирования выполнения кода, setTimeout и setInterval

// console.log('Начало');

// Функция setTimeout планирует выполнение переданной функции ОДИН РАЗ через заданную задержку 
// setTimeout(() => {
//     console.log('Внутри функции settimeout вызван console.log()');
// }, 0)

// console.log('Конец');


// setInterval - планирует выполнение функции (первый аргумент переданный в setTimeout) регулярно через опрелеленный промкжуток времени,
// где второй аргумент это время в миллисекундах

// setInterval(() => {
//     console.log('Вызов setInterval');
// }, 4000)


// const interval = setInterval(() => {
//     console.log('Вызов setInterval');
    
// }, 1000)

// clearInterval - функция, которая останавливает выполнение функции  setInterval
// setTimeout(() => {
//     clearInterval(interval)
//     console.log('СТОП');
// }, 5000)

// const userAnswer = prompt('Введите число')

// const timeout = setTimeout(() => {
//     console.log('Выполняется один раз через 5 секунд');
    
// }, 10000)

// if(+userAnswer === 1) {
//     clearTimeout(timeout)
// }

// const timer = document.getElementById('timer')

// const startTimer = (seconds) => {
//     let timeLeft = seconds

//     const interval = setInterval(() => {
//         timer.textContent = timeLeft
        
//         timeLeft--

//         if(timeLeft < 0) {
//             clearInterval(interval)
//             timer.textContent = 'Таймер завершен';
//         }
//     }, 1000)
// }

// startTimer(5)

// const hoursElement = document.getElementById('hours')
// const minutesElement = document.getElementById('minutes')
// const secondsElement = document.getElementById('seconds')

// const showTime = () => {
//     const updateTime = setInterval(() => {
//         const hours = new Date().getHours()
//         const minutes = new Date().getMinutes()
//         const seconds = new Date().getSeconds()

//         hoursElement.textContent = hours
//         minutesElement.textContent = minutes
//         secondsElement.textContent = seconds
//     }, 1000)
// }

// showTime() 