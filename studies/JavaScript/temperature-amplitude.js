"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. The task is: "Given an array of temperatures of one day, calculate the the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// let temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1 - understand the problem
// what is temp amplitude? answer: difference between highest and lowest temperatures
// how to compute max and min temperatures?
// what's an error? what to do?

// 2 - break the problem into sub-problems
// how to ignore errors?
// find max value in temp array
// fnd min value in temp array
// subtract min temp from max temp (amplitude) and return it

// let calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     let curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures);

// let amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// the function should now receive 2 arrays of temperatures

// 1 - understand the problem
// with two arrays, should we implement functionality twice? NO! just merge two arrays

// 2 - break the problem into sub-problems
// merge 2 arrays

// let calcTempAmplitudeNew = function (t1, t2) {
//   let temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     let curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// let amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

//CHALLENGE

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// let data1 = [17, 21, 23];
// let data2 = [12, 5, -5, 0, 4];

// let printForecast = function(arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('... ' + str);
// }

// printForecast(data2);