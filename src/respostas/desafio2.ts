
enum Trabalho {
    Dev,
    Metalugico,
    
}

type Humano = {
    nome: string,
    idade: number,
    profissao?: Trabalho,
    estudante?: boolean,
}

let pessoa1: Humano = {
    nome: 'Leandro',
    idade: 32,
    profissao: Trabalho.Dev,
    estudante: true,
};

let pessoa2: Humano = {
    nome: 'Miguel',
    idade: 10,
    estudante: true
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 13,
    estudante: true
};

let pessoa4: Humano = {
    nome: "Luan",
    idade: 27,
    profissao: Trabalho.Dev,
    estudante: true
}

let pessoa5: Humano = {
    nome: "Lucas",
    idade: 24,
    profissao: Trabalho.Metalugico,
}