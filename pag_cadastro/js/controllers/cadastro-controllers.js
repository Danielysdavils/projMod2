class usuarioController{
    
    cadastrar(){ 
        const nome = $('#nome1').val()
        const email = $('#inputEmail4').val()
        const senha = $('#inputPassword4').val()
        const confSenha = $('#inputPassword5').val()
        const rg = $('#inputRg').val()
        const cep = $('#inputCEP').val()

        if((nome != '') && (email != '') && (senha != '') && (confSenha != '') && (rg != '') && (cep != '')){
            alert('Muito Bem! Seus dados foram salvos!')
            window.location.href = "../../pag_produto/html/produto.html"

        }else{
            alert('Não deixe campo vacíos!')
        } 
    }
}

const controller = new usuarioController();

$('#nome1').blur(function(){
    const model = new Usuario()
    const nome = $(this).val()
    const view = new mostraUsuario()
    try {
        model.validaTipoNome(nome)
        view.mostraNome(nome)

    } catch (error) {
        view.mostraErroNome(error)
    }
})

$('#inputEmail4').blur(function(){
    const model = new Usuario()
    const email = $(this).val()
    const view = new mostraUsuario()
    try {
        model.validaEmail(email)
        view.mostraEmail(email)
    } catch (error) {
        view.mostraErroEmail(error)
    }
})

$('#inputPassword4').blur(function(){
    const model = new Usuario()
    const senha = $(this).val()
    const view = new mostraUsuario()
    try {
        model.validaSenha(senha)
        view.mostraSenha()
    } catch (error) {
        view.mostraErroSenha(error)
    }
})

$('#inputPassword5').blur(function(){
    const model = new Usuario()
    const senha = $('#inputPassword4').val()
    const confiSenha = $(this).val()
    const view = new mostraUsuario()
    try {
        model.validaConfiSenha(senha, confiSenha)
        view.mostraConfiSenha()
    } catch (error) {
        view.mostraErroConfiSenha(error)
    }
})

$('#inputRg').blur(function(){
    const model = new Usuario()
    const rg = $(this).val()
    const view = new mostraUsuario()
    try {
        model.validaRg(rg)
        view.mostraRg(rg)
    } catch (error) {
        view.mostraErroRg(error)
    }
})

$('#inputCEP').blur(function(){
    const model = new Endereco()
    const cep = $(this).val().replace(/\D/g, '')
    const view = new mostrarEndereco() 

    try {
        model.pesquisaCep(cep)
        view.mostraCep(cep)
    } catch (error) {
        view.mostraErroCep(error)
    }

})

$('#submit').click((e) => {
    e.preventDefault();
    controller.cadastrar();
});