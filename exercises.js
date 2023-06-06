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
 
// <---- Exercise-10 and 11 (missingChar and frontBack didn't get ---->

// <---- Exercise-12 and 13 (front3  and backAround  didn't get ---->

// <---- Exercise-13  front3 ---->

// function front3(str){
//   let string = front;
  
//   if (str.length() <=3)
//     front = str;
//   else {
//     front = str.substring(0,3);
//   }
//   return front+front+front;
// }

// <---- Exercise-14  or35---->

// function or35(n) {
//   if (n % 3 == 0 || n % 5 == 0) return true;
//   return false;
// }

// <---- Exercise-15  front22 skipped---->

// <---- Exercise-16  startHi---->

// function startHi(str) {
//   if (str.startsWith("hi")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// <---- Exercise-17  icyHot----> 

// function icyHot(temp1, temp2) {
//   return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0);
// }

// <---- Exercise-18  in1020----> 

// function in1020(a, b) {
//   return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
// }

// < ---- Exercise-19  hasTeen ---- >

// function isTeen(a, b, c) {
//   return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
// }

// <---- Exercise-26  in3050 ---->

// function in3050(a, b) {
//   return (
//     (a >= 30 && a <= 40 && b >= 30 && b <= 40) ||
//     (a >= 40 && a <= 50 && b >= 40 && b <= 50)
//   );
// }

