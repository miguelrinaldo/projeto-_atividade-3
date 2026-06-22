//TAXA DE IPVA POR TIPO DE COMBUSTÍVEL

const taxaIpva = {
    gasolina: 0.20,
    etanol: 0.15,
    bicombustivel: 0.10,
    hidrido: 0.20,
    eletrico: 0.02
}

export function calcularIPVA(valor, combustivel, ano) {
    const anoAtual = new 
    Date().getFullYear();
    const idade = anoAtual - ano;

    if (idade > 20){
        return "Isento";
    }
    const taxa = taxasIPVA[combustivel];
    return valor * taxa
}

