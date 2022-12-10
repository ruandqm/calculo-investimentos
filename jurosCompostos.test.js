const jurosCompostos = require('./JurosComposto')

test('testar juros compostos', () => {
    expect(jurosCompostos.JurosComposto(1000, 2, 1)).toBe(1268.24);
});