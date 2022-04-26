function recebeCor(){
    let colorPicker = document.querySelector("#colorPicker");
    let cor = colorPicker.value;
    return cor;
}

function criaDiv(cor){
    const divFilha = document.createElement("div");
    divFilha.classList.add('divBloco');
    divFilha.innerHTML = `<textarea style="background-color:${cor};"></textarea>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            </div>`;
    document.querySelector("#divMae").appendChild(divFilha);
}

function criaNovoBloco(){
    let cor = recebeCor();
    criaDiv(cor);
}

// function criaNovoBlocoVerde(){
//     //let cor = recebeCor();
//     const divFilha = document.createElement("textarea");
//     divFilha.classList.add('botaoVerde');
//     //$('textarea').css({backgroundColor: cor});
//     divFilha.placeholder = "Insira seu texto...";
//     document.querySelector("#divMae").appendChild(divFilha);
// }

// function criaNovoBlocoAmarelo(){
//     //let cor = recebeCor();
//     const divFilha = document.createElement("textarea");
//     divFilha.classList.add('botaoAmarelo');
//     //$('textarea').css({backgroundColor: cor});
//     divFilha.placeholder = "Insira seu texto...";
//     document.querySelector("#divMae").appendChild(divFilha);
// }

// function criaNovoBlocoVermelho(){
//     //let cor = recebeCor();
//     const divFilha = document.createElement("textarea");
//     divFilha.classList.add('botaoVermelho');
//     //$('textarea').css({backgroundColor: cor});
//     divFilha.placeholder = "Insira seu texto...";
//     document.querySelector("#divMae").appendChild(divFilha);
// }