function valida (nome){
    console.clear()
    const letra1 = nome.split('')
    
    for(let i=0; i < letra1.length; i++){
        const l = letra1[i]
    
        if (('a' <= l && l <= 'z') || ('A' <= l && l <= 'Z')){ 
            console.log('correto!')
        }else{
            console.log('no!');
        }
    }       
}
valida('danielys')