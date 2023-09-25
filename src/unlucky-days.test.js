const unluckyDays = require('./unlucky-days');

describe('Detect Fridays 13th', () => {
  it('UAT1.1: When I give year 2015 , I want to see 3', () => {
    expect(unluckyDays()).toBe(3);
  });
});
