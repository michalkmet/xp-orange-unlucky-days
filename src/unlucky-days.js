function unluckyDays(year) {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let countFridays13th = 0;
  for (let i = 1; i < 13; i++) {
    let monthStr = i < 10 ? '0' + i : i;
    let dayStr = year + '-' + monthStr + '-' + '13';
    const dayFromDayStr = new Date(dayStr);
    const day = dayNames[dayFromDayStr.getDay()];
    if (day === 'Friday') {
      countFridays13th++;
    }
  }

  return countFridays13th;
}

module.exports = { unluckyDays };
