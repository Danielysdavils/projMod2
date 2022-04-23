class Usuario{
    constructor(){
        this.nome = '';
        this.email = '';
        this.senha = '';
        this.rg = '';
    }

    /* ----------------- GETTERS -------------- */

    getNome(){
        return this.nome;
    }

    getEmail(){
        return this.email;
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

    /* ---- METODOS ---- */

    validaNome(nome){
        console.clear()

        /* 
        
        console.clear();
        const padrao = /[^a-zà-ú]/gi;
        const valida_nome = nome.match(padrao)

        if(valida_nome || !nome){
            throw new Error('Por favor, digite seu nome com caracteres validos.')
        }else{
            this.setNome(nome)
        
        */
        
        const letra1 = nome.split('')

        for(let i = 0; i < letra1.length; i++){
            
            const l = letra1[i]
            
            if(('a' <= l && l <= 'z') || ('A' <= l && l <= 'Z')){
                this.setNome(nome)
            }else{
                throw new Error('Nome com caracteres invalidos!')
            }
        }
    }

    validaEmail(email){
        if(email.indexOf('@')){
            this.setEmail(email)
        }else{
            throw new Error('Digite um email valido!')
        }
    }

    // validaSenha(senha){

    // }

    // validaRg(rg){

    // }
}

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