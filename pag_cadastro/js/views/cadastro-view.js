class mostraUsuario{
    mostraNome(nome){
        const res = $('#resNome')
        res.html(`✔️ ${nome}, seu nome foi cadastrado`).css('color', '#17f9ff')
    }

    mostraEmail(email){
        const res = $('#resEmail')
        res.html(`✔️ Seu email: ${email} foi cadastrado`).css('color', '#17f9ff')
    }

    mostraSenha(){
        const res = $('#resSenha')
        res.html(`✔️ Senha valida!`).css('color', '#17f9ff')
    }

    mostraConfiSenha(){
        const res = $('#resSenhaCon')
        res.html(`✔️ As senhas estão compatíveis!`).css('color', '#17f9ff')
    }

    mostraRg(rg){
        const re = $('#resRg')
        re.html(`✔️ Seu RG: ${rg} foi salvo!`).css('color', '#17f9ff')
    }

    

    /* --------- ERROS --------  */

    mostraErroNome(error){
        const res = $('#resNome').css('color', '#d25151')
        res.html(error)
    }

    mostraErroEmail(error){
        const res = $('#resEmail').css('color', '#d25151')
        res.html(error)
    }

    mostraErroSenha(error){
        const res = $('#resSenha').css('color', '#d25151')
        res.html(error)
    }

    mostraErroConfiSenha(error){
        const res = $('#resSenhaCon').css('color', '#d25151')
        res.html(error)
    }

    mostraErroRg(error){
        const res = $('#resRg').css('color', '#d25151')
        res.html(error)
    }
    
}

/* ---------- ERROR CEP ---------- */

class mostrarEndereco{

    mostraCep(cep){
        const re = $('#resCep')
        re.html(`✔️ Seu CEP: ${cep} foi salvo!`).css('color', '#17f9ff')
    }

    mostraErroCep(error){
        const res = $('#resCep')
        res.html(error).css('color', '#d25151')
    }

    mostraTypeErro(typeError){
        const rest = $('#resEs')
        rest.html(typeError).css('color', '#d25151')
    }


}

