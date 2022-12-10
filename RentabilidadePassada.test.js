const rentabilidadePassada = require('./RentabilidadePassada.js')

test('testar rentabilidade passada', () => {
    expect(rentabilidadePassada.RentabilidadePassada(14, 9)).toBe(55.56);
});