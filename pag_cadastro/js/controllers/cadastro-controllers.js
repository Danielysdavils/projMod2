class usuarioController{
    constructor(){
        this.dadosUsuario = []
    }

    cadastrar(){
        const model = new Usuario()

        const nome = $('#nome1').val()
        const email = $('#inputEmail4').val()
        const senha = $('#inputPassword4').val()
        const confiSenha = $('#inputPassword5').val()
        const rg = $('#inputRg').val()

        const view = new mostraUsuario()

        try {
            model.validaTipoNome(nome)
            model.validaEmail(email)
            model.validaSenha(senha)
            model.validaConfiSenha(senha, confiSenha)
            model.validaRg(rg)
            

            this.dadosUsuario.push(model)
            const dados = this.dadosUsuario
            console.log(dados);


            view.mostraNome(nome)
            view.mostraEmail(email)
            view.mostraSenha()
            view.mostraConfiSenha()
            view.mostraRg(rg)

        } catch (errorNome) {
            
            view.mostraErroNome(error)
            view.mostraErroEmail(error)
            view.mostraErroSenha(error)
            view.mostraErroConfiSenha(error)
            view.mostraErroRg(error)
            
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