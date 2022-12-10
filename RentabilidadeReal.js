function RentabilidadeReal(r, i) {
    controle = 0

    let RValid = isNaN(r)
    let IValid = isNaN(i)

    if (r < 0 || i < 0 || RValid == true || IValid == true) {
        controle = 1
        return "Há valores inválidos - valores negativos ou vazios"
    }

    if (typeof r != "number" || typeof i != "number") {
        controle = 1
        return "Há valores diferentes do tipo 'Number'"
    }

    r = parseInt(r)
    r = r / 100
    i = parseInt(i)
    i = i / 100

    if (controle == 0) {
        let result = (1 + r) / (1 + i) - 1
        let resultado = result * 100
        resultado = parseFloat(resultado.toFixed(1))

        return resultado
    }

}

RentabilidadeReal(8, 4)
module.exports = { RentabilidadeReal }