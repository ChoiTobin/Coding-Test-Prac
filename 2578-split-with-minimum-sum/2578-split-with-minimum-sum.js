/**
 * @param {number} num
 * @return {number}
 */




var splitNum = function(num) {
  let sum = 0;
  let sum1 = 0;
  let result = 0;
  let str = String(num);
  let digits = str.split('');
  let number = digits.map((item) => {
    return parseInt(item);
  });

  number.sort((a, b) => a - b);

  for (let i = 0; i < number.length; i++) {
    if (i % 2 == 0) {
      sum = sum * 10 + number[i];
    } else {
      sum1 = sum1 * 10 + number[i];
    }
  }

  result = sum + sum1;

  return result;
};

