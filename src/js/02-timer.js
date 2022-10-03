const refs = {
 startBtn: document.querySelector('button[data-action-start]'),
 stopBtn: document.querySelector('button[data-action-stop]'),
 clockFace: document.querySelector('.js-clockface'),
}

// Реалізація через клас
class Timer {
 constructor() { 
  this.intervalId = null;
  this.isActive = false; 
 }
 // метод запуску таймера
 start() {
  // Якщо інтервал активний то ми виходимо із функції (другу копію не запускаємо)
  if (this.isActive) {
   console.log('Інтервал вже був запущений');
   return;
  }

  const startTime = Date.now();
  // якщо інтервал неактивний, ми його активуємо
  this.isActive = true;
  console.log('Інтервал запущений');

  // значення intervalId записуємо у параметр об'єкта
  this.intervalId = setInterval(() => {
   // оприділяємо поточний час на момент виконання інтервалу(кожну секунду буде інший)
   const currentTime = Date.now();
   // рахуємо різницю між стартовим часом і поточним (в даному інтервалі)
   const deltaTime = currentTime - startTime;
   // деструктуризуємо deltaTime і виводимо у консоль
   const time = getTimerComponents(deltaTime);
   console.log(time);
   // повертаємо значення на сторінку
     // updateClockFace(time);
  }, 1000);
 };

 // метод зупинки таймера 
 stop() {
  clearInterval(this.intervalId)
  this.isActive = false;
  console.log(this.intervalId);
  console.log('Інтервал зупинений');
 }



}


// Реалізація через об'єкт
const timer = {
 // значення intervalId
 intervalId: null,
 // чи активний інтервал?
 isActive: false,

 // метод запуску таймера
 start() {
  // Якщо інтервал активний то ми виходимо із функції (другу копію не запускаємо)
  if (this.isActive) {
   console.log('Інтервал вже був запущений');
   return;
  }

  const startTime = Date.now();
  // якщо інтервал неактивний, ми його активуємо
  this.isActive = true;
  console.log('Інтервал запущений');

  // значення intervalId записуємо у параметр об'єкта
  this.intervalId = setInterval(() => {
   // оприділяємо поточний час на момент виконання інтервалу(кожну секунду буде інший)
   const currentTime = Date.now();
   // рахуємо різницю між стартовим часом і поточним (в даному інтервалі)
   const deltaTime = currentTime - startTime;
   // деструктуризуємо deltaTime і виводимо у консоль
   const time = getTimerComponents(deltaTime);
   console.log(time);
   // повертаємо значення на сторінку
     updateClockFace(time);
  }, 1000);
 },


 // метод зупинки таймера 
 stop() {
  clearInterval(this.intervalId)
  this.isActive = false;
  console.log(this.intervalId);
  console.log('Інтервал зупинений');
 }
};

// присвоюємо подію на клік по кнопці start
refs.startBtn.addEventListener('click', () => {
 timer.start();
})

// присвоюємо подію на клік по кнопці stop
refs.stopBtn.addEventListener('click', () => {
 timer.stop();
} )

// Функція повернення значень таймера на сторінку
function updateClockFace({ hours, minutes, seconds }) {
 refs.clockFace.textContent = `${hours}:${minutes}:${seconds}`;
}










function pad(value) {
return String(value).padStart(2,'0') 
}

// function getPadComponents(time) {
 
// }


function getTimerComponents(time) {
 const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
 const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
 const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
 return {hours, minutes, seconds}
}