class usuarioController{
    constructor(){
        this.dadosUsuario = []
    }

    cadastrar(){
        const model = new Usuario()

        const nome = $('#nome1').val()
        
        // const email = $('#email').val()
        
        const view = new mostraUsuario()

        try {
            model.validaTipoNome(nome)
            // model.validaEmail(email)
           
            this.dadosUsuario.push(model)
            const dados = this.dadosUsuario
            console.log(dados);

            view.mostraNome(nome)
            // view.mostraEmail(email)

        } catch (error) {
            view.mostraErroNome(error)
            // view.mostraErroEmail(error)
        }
    }
}

const controller = new usuarioController();

$('#inputCEP').blur(function(){

    const model = new Endereco()

    const cep = $(this).val().replace(/\D/g, '')

    const view = new mostrarEndereco()
   
    try {
        model.pesquisaCep(cep)  

    } catch (error) {
        view.mostraErroCep(error)
    }
    
})

$('#submit').click((e) => {
    e.preventDefault();
    controller.cadastrar();
});