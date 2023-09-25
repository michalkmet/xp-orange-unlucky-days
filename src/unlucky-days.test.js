const unluckyDays = require('./unlucky-days');

describe('Detect Fridays 13th', () => {
  it('UAT1.1: When I give year 2015 , I want to see 3', () => {
    expect(unluckyDays(2015)).toBe(3);
  });
  it('UAT1.2 - When I give year 1986 , I want to see 1', () => {
    expect(unluckyDays(1986)).toBe(1);
  });
});
