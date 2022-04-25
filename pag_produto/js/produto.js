function criaNovoBloco(){
    console.log('funciona');
    const divFilha = document.createElement("textarea");
    divFilha.innerText = "Oi mamãe!";
    document.querySelector("#divMae").appendChild(divFilha);
}