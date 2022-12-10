const rentabilidadeReal = require('./RentabilidadeReal.js')

test('testar rentabilidade real', () => {
    expect(rentabilidadeReal.RentabilidadeReal(8, 4)).toBe(3.8);
});