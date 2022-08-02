// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')!;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldoTotal: number;
limparSaldo();



function somarAoSaldo(soma: number) {
  
     saldoTotal += soma;
   
     campoSaldo.innerHTML = saldoTotal.toString();
     console.log(saldoTotal)
     limparSoma();

}

function limparSoma(){
    soma.nodeValue="";
    console.log(soma)
}

function limparSaldo(){
    
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();

}

if(botaoAtualizar){
botaoAtualizar.addEventListener('click',function () {
    somarAoSaldo(Number(soma.nodeValue));
    console.log(soma.nodeValue);
    
});
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

