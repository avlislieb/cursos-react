export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(funcCalled) {
        //salvando a funcao que vai receber notificacao
        this._inscritos.push(funcCalled);
    }

    desinscrever(funcCalled) {
        this._inscritos = this._inscritos.filter(func => func !== funcCalled);
    }

    notificar() {
        //func(): funçao a ser notificada
        this._inscritos.forEach(func => func(this.notas));
    }


    createNote(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deleteNote(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.title = titulo;
        this.text = texto;
        this.categoria = categoria;
    }
}