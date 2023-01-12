'use strict';


{
  const money = +prompt('Ваш доход?', '');
  const minMoney = money * 0.13;
  const midMoney = (money - 15000) * 0.2;
  const maxMoney = (money - 50000) * 0.3;


  if (money <= 14999) {
    console.log(minMoney)
  } else if (money <= 50000) {
    console.log(midMoney)
  } else if (money >= 50001) {
    console.log(maxMoney)
  }
}
