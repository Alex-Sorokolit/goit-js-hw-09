import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', onFormSubmit);

let delayInput = null;
let delayStep = null;
let amountInput = null;


function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: {
    delay, step, amount },
  } = event.currentTarget;

  delayInput = Number(delay.value);
  delayStep = Number(step.value);
  amountInput = Number(amount.value);

  
  for (let i = 1; i <= amountInput; i += 1) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 1000,
          cssAnimationStyle: 'fade',
      });
    })
      .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 1000,
          cssAnimationStyle: 'fade',
      });
      });
    
    delayInput += delayStep;
  }
event.currentTarget.reset();

  }



// Створюємо проміс для одного значення
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      // console.log(shouldResolve);

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
}
