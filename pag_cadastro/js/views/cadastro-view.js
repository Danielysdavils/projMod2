class mostraUsuario{
    
    mostraResultado(nome){
        const res = $('#resNome')
        res.html(`${nome}, seu nome foi cadastrado`)
    }

    mostraErro(error){
        alert(error)
        // const res = $('#resNome') 
        // const h1 = $('<h1>').text(error).css('color', 'red')
        // res.append(h1)
    }
}

