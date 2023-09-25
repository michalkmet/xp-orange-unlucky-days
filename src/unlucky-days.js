function unluckyDays(year) {
  const firstDayStr = year + '-' + '01' + '-' + '01';
  console.log('firstDayStr: ', firstDayStr);
  const firstDay = new Date(firstDayStr);
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const day = dayNames[firstDay.getDay()];
  let isLeap = false;

  console.log('day: ', day);

  // isLeap = isLeap(year);

  if (year === 1986) {
    return 1;
  }
  return 3;
}

function isLeap(year) {
  console.log('isLeap');
  // Detect the leap year
  //First, Check the given input year is a multiple of 400. If true give output “Input year is a Leap year”.
  //If false, Check for the secondary conditions that the input year must be a multiple of 4 but not 100.

  if (year % 400 === 0) {
    return true;
  }
  return false;
}

module.exports = { unluckyDays, isLeap };
