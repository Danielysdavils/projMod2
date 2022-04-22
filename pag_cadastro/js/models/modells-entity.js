class Usuario{
    constructor(){
        this.nome = '';
    }

    setNome(nome){
        this.nome = nome;
    }

    valida(nome){

        console.clear();
        const padrao = /[^a-zà-ú]/gi;
        const valida_nome = nome.match(padrao)

        if(valida_nome || !nome){
            throw new Error('Por favor, digite seu nome com caracteres validos.')
        }else{
            this.setNome(nome)
        }
    }
}