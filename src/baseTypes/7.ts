/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
}

console.log(isWeekend(WeekDays.Saturday)); // true
console.log(isWeekend(WeekDays.Sunday)); // true
console.log(isWeekend(WeekDays.Monday)); // false
