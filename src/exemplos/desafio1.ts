// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let funcionario1 = {
  codigo: 10,
  nome: 'jhon'
};

let funcionario2: {codigo: number, nome: string} = {
  codigo: 10,
  nome: 'Jhon'
}

interface Funcionario {
  codigo: number,
  nome: string
}


let funcionario3: Funcionario = {
  codigo: 4,
  nome: 'marcos'
}

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 5;
funcionarioObj.nome = 'Lucas';
