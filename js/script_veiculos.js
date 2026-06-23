import { calcularIPVA} from "./script_calculo.js"

const form = document.querySelector("form")

const lista = document.querySelector("#lista-veiculos")

form.addEventListener("submit", function(evt) {
evt.preventDefault(); 
})

const modelo = document.querySelector("#modelo").value;
const marca = document.querySelector("#marca").value;
const placa = document.querySelector("#placa").value;
const ano = document.querySelector("#ano").value;
const valor = document.querySelector("#valor").value;

// pega o radio que foi selecionado
const combustivel = document.querySelector("input[name='combustivel']:checked").value;

//cálculos
const seguro = valor * 0.10;
const ipva = calcularIPVA(valor, combustivel, ano)
const  anoAtual = new Date().getFullYear();
const idade = anoAtual - ano;

//valor final (segura + ipva, se não for isento)
const valorFinal = ipva = "Isento"
? seguro
: seguro + ipva;

//criar o item da lista 
const item = document.createElement("Li");
item.innerHTML = `
<strong>${modelo} - ${marca}</strong>
<span>Placa: ${placa}</span>
<span>Idade: ${idade}</span>
<span>Seguro: ${seguro.toFixed(2)}</span>
<span>IPVA: ${ipva = "Isento" ? "Isento" : "R$" + ipva.toFixed(2)}</span>
 <span>Valor Final:R$ ${valorFinal.toFixed(2)}</span> `     
