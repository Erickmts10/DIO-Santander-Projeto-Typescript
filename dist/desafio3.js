"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal;
limparSaldo();



function somarAoSaldo(soma) {
  
     saldoTotal += soma;
   console.log(saldoTotal)
     campoSaldo.innerHTML = saldoTotal.toString();
     console.log(saldoTotal)
     limparSoma();

}

function limparSoma(){
    soma.value="";
}

function limparSaldo(){
    
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();

}

if(botaoAtualizar){
botaoAtualizar.addEventListener('click',function () {
    somarAoSaldo(Number(soma.value));
    console.log(soma.value);
    
});
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

