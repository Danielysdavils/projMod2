function escriva(elemento){
    const txtArray = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    txtArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    })
}

const tit01 = document.querySelector('#editTitulo')
escriva(tit01)

