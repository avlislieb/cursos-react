export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }    

    inscrever(func) {
        //salvando a funcao que vai receber notificacao
        this._inscritos.push(func);
    }

    desinscrever(funcCalled) {
        this._inscritos = this._inscritos.filter(func => func !== funcCalled);
    }

    notificar() {
        //func(): funçao a ser notificada
        this._inscritos.forEach(func => func(this.categorias));
    }

    createCategory(categoryName) {
        this.categorias.push(categoryName);
        this.notificar();
    }
    
}