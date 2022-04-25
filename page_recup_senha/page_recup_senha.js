$("#submit").click((event)=>{
    event.preventDefault()
    validaEmail()
})

function validaEmail(){
    const email = $("#email").val()
    const emailArr = email.split('')

    try{
        if(emailArr.indexOf("@") > 3 && email.indexOf("gmail") > email.indexOf("@") && email.indexOf(".com") > email.indexOf("gmail")){
            $("#msgErroEmail").css('visibility', 'visible')
            $("#msgErroEmail").css('background-color', 'lightgreen')
            $("#msgErroEmail").css('color', 'green')
            $("#msgErroEmail").text("Email de redefinição de senha enviado.")
        }else if(emailArr.indexOf("@") > 3 && email.indexOf("outlook") > email.indexOf("@") && email.indexOf(".com") > email.indexOf("outlook")){
            $("#msgErroEmail").css('visibility', 'visible')
            $("#msgErroEmail").css('background-color', 'lightgreen')
            $("#msgErroEmail").css('color', 'green')
            $("#msgErroEmail").text("Email de redefinição de senha enviado.")
        }else{
            throw new Error("Email Inválido")
        }
    }
    catch(error){
        $("#msgErroEmail").css('visibility', 'visible')
        $("#msgErroEmail").text("Email Inválido")
    }
}