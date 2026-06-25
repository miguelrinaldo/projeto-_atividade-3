const calculoIpva = (objVeiculo) =>{
    let resposta = ''

    if((2026 - parseFloat(objVeiculo.anofab)) > 20){
        resposta = `Isento de IPVA`
    }else if((objVeiculo.comb) === `gas`){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.2).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === `eta`){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.15).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === `bio`){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.1).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === 'hibr'){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.08).toFixed(2).replace('.',',')}`
    }else{
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.02).toFixed(2).replace('.',',')}`
    }

    return resposta
}

const calculoSeg = (objVeiculo) =>{
    let resposta = ''

    resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.1).toFixed(2).replace('.',',')}`

    return resposta
}

const anoAtual = new Date().getFullYear()

const calculoIdade = (objVeiculo) =>{
    let resposta = ''

    resposta = `${anoAtual - parseFloat(objVeiculo.anofab)}`

    return resposta
}



const calculoFinal = (objVeiculo) =>{
    let resposta = ''

    if(parseFloat(calculoIdade(objVeiculo)) > 20){
        resposta = `R$ ${(parseFloat(objVeiculo.valmerc) * 0.1).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === `gas`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.2) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === `eta`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.15) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === `bio`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.1) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === `hibr`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.08) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }else if((objVeiculo.comb) === `elet`){
        resposta = `R$ ${((parseFloat(objVeiculo.valmerc) * 0.02) + (parseFloat(objVeiculo.valmerc) * 0.1)).toFixed(2).replace('.',',')}`
    }
    return resposta
}

export { calculoIpva, calculoSeg, calculoIdade, calculoFinal }