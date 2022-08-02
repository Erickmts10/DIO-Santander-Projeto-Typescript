// Como podemos melhorar o esse código usando TS? 
interface pessoa {
    nome: string,
    idade: number,
    profissao: Profissao

}

enum Profissao {
    atriz,
    Padreiro
}

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.atriz
};


let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padreiro
}


let pessoa3 = {}
    pessoa.nome = "laura",
    pessoa.idade = 32,
    pessoa.profissao = "Atriz"

let pessoa4 = {}
    pessoa.nome = "carlos",
    pessoa.idade = 19,
    pessoa.profissao = "padreiro"
