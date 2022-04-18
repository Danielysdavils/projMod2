$("#submit").click(function(){
    validaEmail()
    validaSenha()
})

function validaEmail(){
    const email = $("#email").val()
    const emailArr = email.split('')

    try{
        if(emailArr.indexOf("@") > 3 && email.indexOf("gmail") > email.indexOf("@") && email.indexOf(".com") > email.indexOf("gmail")){
            console.log("Email Válido")
            $("#msgErroEmail").css('visibility', 'hidden')
        }else if(emailArr.indexOf("@") > 3 && email.indexOf("outlook") > email.indexOf("@") && email.indexOf(".com") > email.indexOf("outlook")){
            console.log("Email Válido")
            $("#msgErroEmail").css('visibility', 'hidden')
        }else{
            throw new Error("Email Inválido")
        }
    }
    catch(error){
        $("#msgErroEmail").css('visibility', 'visible')
        $("#msgErroEmail").text("Email Inválido")
    }
}

function validaSenha(){
    const senha = $("#senha").val()

    try{
        if(senha.length > 3){
            console.log("Senha Válida")
            $("#msgErroSenha").css('visibility', 'hidden')
        }else{
            throw new Error("Senha Inválida")
        }
    }
    catch(error){
        $("#msgErroSenha").css('visibility', 'visible')
        $("#msgErroSenha").text("Senha Inválida")
    }
}