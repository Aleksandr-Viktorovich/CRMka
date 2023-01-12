'use strict';

const product = 'телевизор';
const remainder = 10;
const category = 'техника';
const price = 100;


{
  const product = prompt ('Наименование товара?', 'телевизор');
  const remainder = +prompt ('Количество товара?','');
  const category = prompt ('Категория товара?', 'техника');
  const price = +prompt ('Цена товара?', 100);


if (Number.isNaN(remainder)) {
  alert('Вы ввели некорректные данные');
} else {
  console.log ('Все хорошо')
};












   // console.log(typeof (product));
   // console.log(typeof (remainder));
   // console.log(typeof (category));
   // console.log(typeof (price));
  //
  // console.log(`у меня ${remainder} единиц "${product}" на сумму ${remainder * price} православных=))`);
}


