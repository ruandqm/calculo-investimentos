const jurosSimples = require('./JurosSimples.js')

test('testar juros simples', () => {
    expect(jurosSimples.JurosSinples(1000, 2, 1)).toBe(240);
});