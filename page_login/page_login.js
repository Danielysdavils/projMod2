$("#submit").click(function(){
    validaEmail()
})

function validaEmail(){
    const email = $("#email").val()
    const emailArr = email.split('')

    try{
        if(emailArr.indexOf("@") > 3 && email.indexOf("gmail") > email.indexOf("@") && email.indexOf(".com") > email.indexOf("gmail")){
            console.log("Email Válido")
        }else if(emailArr.indexOf("@") > 3 && email.indexOf("outlook") > email.indexOf("@") && email.indexOf(".com") > email.indexOf("outlook")){
            console.log("Email Válido")
        }else{
            throw new Error("Email Inválido")
        }
    }
    catch(error){
        console.error(error)
    }
}