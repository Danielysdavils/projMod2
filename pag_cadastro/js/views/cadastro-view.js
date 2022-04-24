class mostraUsuario{
    
    mostraNome(nome){
        const res = $('#resNome')
        res.html(`${nome}, seu nome foi cadastrado`)
    }

    mostraEmail(email){
        const res = $('#resEmail')
        res.html(`Seu email: ${email} foi cadastrado`)
    }

    mostraSenha(){
        const res = $('#resSenha')
        res.html(`Senha valida!`)
    }

    mostraErroNome(error){
        alert(error)
    }

    mostraErroEmail(error){
        alert(error)
    } 

    mostraErroSenha(error){
        alert(error)
    }
}

class mostrarEndereco{
    mostraErroCep(error){
        const res = $('#resCep')
        res.html(error)
    }
}

