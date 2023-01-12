'use strict';

const salary = +prompt('Ваша зарплата?', '');
const min = salary * 0.13;
const mid = salary * 0.2;
const max = salary * 0.3;

if (salary >= 50000) {
  console.log(max)
} else if (salary >= 15000) {
  console.log(mid)
} else {
  console.log(min)
}






