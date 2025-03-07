interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

interface Usuario {
    nome: string;
    email: string;
}

class UsuarioRepositorio implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Carlos", email: "carlos@email.com" });
repo.salvar({ nome: "Ana", email: "ana@email.com" });

console.log(repo.obterTodos());
