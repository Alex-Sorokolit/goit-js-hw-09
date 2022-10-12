import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: {
    delay, step, amount },
  } = event.currentTarget;

 let delayInput = Number(delay.value);
 let delayStep = Number(step.value);
 let amountInput = Number(amount.value);

  
  for (let i = 1; i <= amountInput; i += 1) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 1000,
          cssAnimationStyle: 'fade',
          background:'#5da85d'
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 1000,
          cssAnimationStyle: 'fade',
          background:'#a85d5d'

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
