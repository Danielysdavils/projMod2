class usuarioController{
    constructor(){
        this.dadosUsuario = []
    }

    cadastrar(){
        const model = new Usuario()
        const nome = $('#nome').val()
        const view = new mostraUsuario()

        try {
            model.valida(nome)
            this.dadosUsuario.push(model)
            const dados = this.dadosUsuario
            console.log(dados);
            view.mostraResultado(nome)

        } catch (error) {
            view.mostraErro(error)
        }
    }
}

const controller = new usuarioController();

$('#submit').click((e) => {
    e.preventDefault();
    controller.cadastrar();
});