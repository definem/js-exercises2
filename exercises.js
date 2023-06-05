// <---- Bismillah ---->

// Exercises from CodingJs

// <---- Exercise-1 sleepIn ---->

// function sleepIn(weekday, vacation) {
//   if (weekday == true && vacation == false) {
//     return false;
//   } else {
//     return true;
//   }
// }

// <---- Exercise-2 monkeyTrouble ---->

// function monkeyTrouble(aSmile, bSmile) {
//   if (aSmile == true && bSmile == true) {
//     return true;
//   } else if (aSmile == false && bSmile == false) {
//     return true;
//   } else {
//     return false;
//   }
// }

// <---- Exercise-3  sumDouble ---->

// function sumDouble(a, b) {
//   if (a != b) {
//     return a + b;
//   } else {
//     return (a + b) * 2;
//   }
// }

// <---- Exercise-4  diff21 ---->

// function diff21(n) {
//   if (n < 21) {
//     return 21 - n;
//   } else {
//     let answer = n - 21;
//     return answer * 2;
//   }
// }

// <---- Exercise-5  parrotTrouble ---->

// function parrotTrouble(talking, hour) {
//   if (talking == true && (hour < 7 || hour > 20)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// <---- Exercise-6  makes10 ---->

// function makes10(a, b) {
//   let res = a + b;
//   if (a == 10 || b == 10 || res == 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// <---- Exercise-7  nearHundred ---->

// function nearHundred(n) {
//   if ((n >= 90 && n <= 110) || (n >= 190 && n <= 210)) return true;
//   return false;
// }

// <---- Exercise-8  posNeg ---->

// function posNeg(a, b, negative) {
//   if (a < 0 && b > 0 && negative == false) {
//     return true;
//   } else if (a > 0 && b < 0 && negative == false) {
//     return true;
//   } else if (a < 0 && b < 0 && negative == true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// <---- Exercise-9  notString ---->

// function notString(str) {
//   if (str.startsWith("not")) {
//     return str;
//   }
//   return "not " + str;
// }

// <---- Exercise-10 and 11 (missingChar andfrontBack didn't get ---->

// <---- Exercise-12  front3 ---->

// function front3(str){
//   let string = front;
  
//   if (str.length() <=3)
//     front = str;
//   else {
//     front = str.substring(0,3);
//   }
//   return front+front+front;
// }

// <---- Exercise-13 ---->

function or35(n) {
  if (n % 3 == 0 || n % 5 == 0) return true;
  return false;
}