"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutibol"] = 3] = "JogadorDeFutibol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    Profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Mria',
    idade: 23,
    Profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    Profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    Profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' ', item);
    }
}
listar(monica.materias);
