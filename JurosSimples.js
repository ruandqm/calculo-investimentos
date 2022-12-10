function JurosSinples(capital, taxa, tempo) {

    let controle = 0

    //Condições de Parada - Validações


    let CapitalValid = isNaN(capital)
    let TaxalValid = isNaN(taxa)
    let TempoValid = isNaN(tempo)


    if (capital < 0 || taxa < 0 || tempo < 0 || CapitalValid == true || TaxalValid == true || TempoValid == true) {
        controle = 1
        return "Há valores inválidos - valores negativos ou vazios"
    }

    if (typeof capital != "number" || typeof taxa != "number" || typeof tempo != "number") {
        controle = 1
        return "Há valores diferentes do tipo 'Number'"
    }

    // --

    //Transformações de valores - em certas exceções

    capital = parseInt(capital)
    taxa = parseInt(taxa)
    tempo = parseFloat(tempo)

    // --

    //Fórmula

    let result = capital * (taxa / 100) * (tempo * 12)

    // -- 

    //Retorno da Função

    if (controle == 0) {
        return result
    }

    //--
}

//Os valores devem ser do tipo "Number" (Inteiro para capital e taxa, e float para tempo)
//Os valores devem ser positivos

JurosSinples(1000, 2, 1)

module.exports = { JurosSinples }