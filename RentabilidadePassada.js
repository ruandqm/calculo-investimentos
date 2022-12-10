function RentabilidadePassada(PrecoAtual, PrecoAn) {
    controle = 0

    let PreAtualValid = isNaN(PrecoAtual)
    let PreAntigoValid = isNaN(PrecoAn)

    if (PrecoAtual < 0 || PrecoAn < 0 || PreAtualValid == true || PreAntigoValid == true) {
        controle = 1
        return "Há valores inválidos - valores negativos ou vazios"
    }

    if (typeof PrecoAtual != "number" || typeof PrecoAn != "number") {
        controle = 1
        return "Há valores diferentes do tipo 'Number'"
    }

    PrecoAtual = parseFloat(PrecoAtual)
    PrecoAn = parseFloat(PrecoAn)

    if (controle == 0) {
        let result = (PrecoAtual / PrecoAn) * 100 - 100
        let resultado = parseFloat(result.toFixed(2))

        return resultado
    }

}

RentabilidadePassada(14, 9)
module.exports = { RentabilidadePassada }