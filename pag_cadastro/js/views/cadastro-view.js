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

    mostraConfiSenha(){
        const res = $('#resSenhaCon')
        res.html(`Senhas senhas estão compatíveis!`)
    }

    mostraRg(rg){
        const re = $('#resRg')
        re.html(`Seu RG: ${rg} foi salvo!`)
    }

    /* --------- ERROS --------  */

    mostraErroNome(error){
        const res = $('#resNome')
        res.html(error)
    }

    mostraErroEmail(error){
        const res = $('#resEmail')
        res.html(error)
    }

    mostraErroSenha(error){
        const res = $('#resSenha')
        res.html(error)
    }

    mostraErroConfiSenha(error){
        const res = $('#resSenhaCon')
        res.html(error)
    }

    mostraErroRg(error){
        const res = $('#resRg')
        res.html(error)
    }
}

/* ---------- ERROR CEP ---------- */

class mostrarEndereco{
    mostraErroCep(error){
        const res = $('#resCep')
        res.html(error)
    }
}

