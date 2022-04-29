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