const { default: getCurrentYear } = require('../../utilities/curren_year');

let year;
const setCurrentYear = () => {
  year = getCurrentYear();
};
beforeAll(() => setCurrentYear());

describe('current year', () => {
  it('should return current year', () => {
    const currentYear = new Date().getFullYear();
    expect(year).toBe(currentYear);
  });
});
