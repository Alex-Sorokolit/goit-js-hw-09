// запросити кнопки із сторінки
const refs = {
 startBtn: document.querySelector('button[data-start]'),
 stopBtn: document.querySelector('button[data-stop]')
}

// Об'єкт який має методи для зміни кольору фону сторінки
const changeBackGround = {
 // значення intervalId
 intervalId: null,

 // фукнція яка запускає setInterval
 onStartBtnClick() {
  console.log('Start');
  // властивість яка робить неактивною кнопку start і активною stop
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  // створення setInterva 1c
  this.intervalId = setInterval(() => {
   console.log('Змінюємо колір фону на:');
   console.log(this.getRandomHexColor());
   // застосувати колір на фон сторінки
   document.body.style.backgroundColor = this.getRandomHexColor();
  }, 1000);
 },
 
 // функція яка зупиняє setInterval
 onStopBtnClick() {
  clearInterval(this.intervalId)
  
  // властивість яка робить неактивною кнопку stop і активною start
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  console.log('Stop');
 },
 // функція для рандомних кольорів
 getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
};

// слухач подій на кнопку start i stop
refs.startBtn.addEventListener('click',()=>{changeBackGround.onStartBtnClick()});
refs.stopBtn.addEventListener('click', () =>{changeBackGround.onStopBtnClick()});