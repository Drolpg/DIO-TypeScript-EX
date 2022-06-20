// Resposta 1
const funcionario = {
    codigo: 19,
    nome: 'Leandro'
};



// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 19,
    nome: 'Leandro'
}



// Respostas 3 e 4
interface Funcionario {  
    codigo: number,
    nome: string
};


const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 17;
funcionarioObj.nome = 'Leandro';


const funcionarioObj2: Funcionario = {
    codigo: 17,
    nome: 'Leandro'
}