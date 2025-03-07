type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const pessoa: EstudanteTrabalhador = {
    nome: "Mariana",
    curso: "Engenharia de Software",
    empresa: "TechCorp",
    cargo: "Desenvolvedora"
};

console.log(pessoa);
