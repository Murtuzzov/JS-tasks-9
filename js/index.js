//ЗАДАЧА No1 | напишите функцию, которая принимает на вход массив чисел и возвращает
//сумму всех положительных элементов массива.
// const numbersArr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// let sum = 0;
// function positiveSumFunction(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// const positiveSum = positiveSumFunction(numbersArr);
// console.log(positiveSum);

/////////////////////////////////////////////////////////////////////////

// ЗАДАЧА No3 | реализуйте функцию, которая принимает на вход число и возвращает
// массив всех делителей этого числа.
// let number = 50;
// function numberDivisorsFunction(divisorsNum) {
//   let divisorsArr = [];
//   for (let i = 1; i <= divisorsNum; i += 1) {
//     if (divisorsNum % i === 0) {
//       divisorsArr.push(i);
//     }
//   }
//   return divisorsArr;
// }
// const numberDivisors = numberDivisorsFunction(number);
// console.log(numberDivisors);

/////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No4 | cоздайте функцию, которая принимает на вход массив и возвращает
//новый массив, в котором элементы исходного массива умножены на их индекс.
// const numberArr = [2, 4, 6, 8, 10];
// function multiplyByIndex(multiplyArr) {
//   const newNumberArr = [];
//   for (let i = 0; i < multiplyArr.length; i += 1) {
//     newNumberArr.push(multiplyArr[i] * i);
//   }
//   return newNumberArr;
// }

// const result = multiplyByIndex(numberArr);
// console.log(result);