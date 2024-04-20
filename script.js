// const guestOne = {
//     name: "Alex",
//     age:29
// }
// const guestTwo = {
//     name: "jonam",
//     age:19
// }
// const guestThree = {
//     name: "Aziza",
//     age:18
// }

// function checkTheGuest(krisa){
//    if (krisa.name[0] === "A"){
//     console.log("welcome ");
//    }else if(krisa){
//      console.log("poka daun");
//    }
     
// }
// checkTheGuest(guestOne)

// function calc(shot){
//     if(shot === "+"){
//         result = num1 + num2
//     }else if (shot === "")

// }
//

 function fibonacci(n) {
     if (n <= 1) {
         return n;
     } else {
         return fibonacci(n - 1) + fibonacci(n - 2);
     }
 }

 let fibonacciSequence = '';
 // Вычисляем первые 20 чисел Фибоначчи и добавляем их к строке
 for (let i = 0; i < 20; i++) {
     fibonacciSequence += fibonacci(i) + '\n';
 }

// Выводим строку в диалоговом окне alert
alert(fibonacciSequence);
// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Обмен значений, если текущий элемент больше следующего
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // Пример использования:
// const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Неотсортированный массив:", arr);
// console.log("Отсортированный массив:", bubbleSort(arr));
