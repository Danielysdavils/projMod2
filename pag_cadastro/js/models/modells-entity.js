class Usuario{
    constructor(){
        this.nome = '';
        this.email = '';
        this.senha = '';
        this.rg = '';
    }

    /* --------------- SETTERS --------------- */

    setNome(nome){
        this.nome = nome;
    }

    setEmail(email){
        this.email = email;
    }

    setSenha(senha){
         this.senha = senha;
    }

    setRg(rg){
        this.rg = rg;
    }

    /* -------------------- METODOS --------------------- */

    validaTipoNome(nome){
        if(this.validaNome(nome) === true){
            this.setNome(nome)
        }else{
            throw new Error('Nome com caracteres invalidos!')
        }
    }

    validaNome(nome){
        console.clear()
        const letra1 = nome.split('')

        for(let i = 0; i < letra1.length; i++){
            
            const l = letra1[i]

            const resposta = ('a' <= l && l <= 'z') || ('A' <= l && l <= 'Z')? true:false 
            return resposta    
        }
    }

    /* ------------------- VALIDA EMAIL ------------------ */

    validaEmail(email){
        const emaill = email
        if((emaill.indexOf('@') > 3) && (emaill.indexOf('.') > 7) && (emaill != '')){
            this.setEmail(email)
        }else{
            throw new Error('Digite um email valido!')
        }
    }


    /* ------------------- VALIDA SENHA --------------------- */


    validaSenha(senha){
        if(this.validaTipoSenha(senha) === true){
            this.setSenha(senha)
        }else{
            throw new Error('digite uma senha contendo Uma letra Matyuscula e uma letra minuscula')
        }
    }

    validaTipoSenha(senha){
        if(senha.length > 5){

            const arrayLetras = senha.split('')

            for(let i = 0 ; i < arrayLetras.length; i++){
                const letra = arrayLetras[i].charCodeAt(arrayLetras[i])

                if(letra >= 65 && letra <= 90){
                    this.mayuscula = newFunction()
                        function newFunction() {
                            return true;
                        }
                        
                }else if(letra >= 97 && letra <= 122){
                    this.minuscula = newFunction()
                        function newFunction() {
                            return true;
                        }
                }
                
            }

            if(this.mayuscula === true && this.minuscula === true) return true
        }
    }

    
    /* ------------------- VALIDA RG ------------------------ */

    validaRg(rg){

    }
    
}

/* ------------------------- VALIDA CEP ------------------------ */

class Endereco{
    constructor(){
        this.cep = '',
        this.estado = '',
        this.cidade = '',
        this.bairro = '',
        this.rua = '',
        this.numero = '',
        this.complemento = '';
    }

    setCep(cep){
        this.cep = cep
    }

    setEstado(estado){
        this.estado = estado
    }

    setCidade(cidade){
        this.cidade = cidade
    }

    setBairro(bairro){
        this.bairro = bairro
    }

    setRua(rua){
        this.rua = rua
    }
    setNumero(numero){
        this.numero = numero
    }

    setComplemento(complemento){
        this.complemento = complemento
    }

    limpiaForm(){
        $('#inputEstado').val('');
        $('#inputCity').val('');
        $('#inputAddress').val('');
        $('#inputRua').val('');
        $('#inputNum').val('');
    }

    pesquisaCep(cep){

        if(cep != '' && cep.length < 9){
                
            $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/?callback=?`,
                dataType:'json',

                success: (json) => {
                    if(!(json.hasOwnProperty('erro'))){
                        $('#inputEstado').val(json.uf);
                        $('#inputCity').val(json.localidade);
                        $('#inputAddress').val(json.bairro);
                        $('#inputRua').val(json.logradouro);
                        $('#inputNum').val(json.ibge);
                    }else{
                        this.limpiaForm()
                        throw new Error('CEP não encontrado.')
                    }
                }
            })

        }else{
            this.limpiaForm()
            throw new Error('formato de CEP inválido.');
        }
    }
    
}