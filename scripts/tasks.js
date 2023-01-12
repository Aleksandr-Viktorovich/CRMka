'use strict';

const rain = Math.random();
if (Math.round(rain) === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}





const passingScore = 256;
const mathematics = +prompt('Ваш бал по математике', '');
const russianLanguage = +prompt('Ваш бал по русскому языку', '');
const it = +prompt ('Ваш бал по информатике', '');
const score = mathematics + russianLanguage + it;

if (score >= passingScore) {
  alert('Поздравляю, вы поступили на бюджет!');
} else {
  alert('Поздравляю, вы поступили в армию');
}





const inquiry = +prompt('Запрос на сумму', '');
const total = inquiry / 100;

if (Number.isInteger(total)) {
  console.log('Бабки не проблема!');
} else {
  console.log('Денег нет, но ты держись=))');
}





