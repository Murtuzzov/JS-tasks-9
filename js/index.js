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

//ЗАДАЧА No2 | создайте функцию, которая принимает на вход двумерный массив
//и возвращает новый массив, содержащий только уникальные элементы из всех подмассивов.

// const twoDimensionalArr = [
//   [1, 4, 5, 1],
//   [8, 9, 12, 9],
//   [5, 7, 3, 6],
// ];

// function filterFunction(numArray) {
//   let newArr = [];
//   for (let i = 0; i < numArray.length; i += 1) {
//     for (let count = 0; count < numArray[i].length; count += 1) {
//       if (newArr.includes(numArray[i][count]) === false) {
//         newArr.push(numArray[i][count]);
//       }
//     }
//   }
//   return newArr;
// }

// const result = filterFunction(twoDimensionalArr);
// console.log(result);

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

////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No5 | напишите функцию, которая 
//которая принимает на вход массив чисел 
//и возвращает количество отрицательных 
//элементов в массиве 
//const numbersArr = [4,-7,2,5]
//function filterFunction(numArray){
//  let negativeNumQuantity = 0;
//for(let i = 0; i < numArray.length; i+=1){
//  if(numArray[i] < 0){
//    negativeNumQuantity+=1
//  }
//}
//  return negativeNumQuantity;
//}
//const result = filterFunction(numbersArr);
//console.log(result)

/////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No6 | Реализуйте функцию для нахождения максимального элемента в каждом подмассиве двумерного массива.

// const numArray = [
//   [5, 4, 3, 12, 45],
//   [4, 81, 26, 85],
//   [2, 6, 4, 81, 28],
// ];

// function filterFunction(array) {
//   let highNum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     for (let count = 0; count < numArray[i].length; count += 1) {
//       if (numArray[i][count] > highNum) {
//         highNum = numArray[i][count];
//       }
//     }
//   }
//   return highNum;
// }

// const result = filterFunction(numArray);
// console.log(result);

//////////////////////////////////////////////////////////////////

//ЗАДАЧА No7 | создайте функцию, которая принимает на вход строку и возвращает новую строку,
//в которой все гласные буквы заменены на звездочки.
// let someString = "Hello, World!";
// function filterFunction(string) {
//   let vowels = ["a", "e", "i", "o", "u", "y"];
//   let newStr = "";
//   for (let i = 0; i < string.length; i += 1) {
//     if (vowels.includes(string[i].toLowerCase())) {
//       newStr += "*";
//     } else {
//       newStr += string[i];
//     }
//   }
//   return newStr;
// }

// const result = filterFunction(someString);
// console.log(result);
