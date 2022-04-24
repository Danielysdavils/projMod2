function escriva(elemento){
    const txtArray = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    txtArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    })
}

const tit01 = document.querySelector('#editTitulo')
const tit02 = document.querySelector('#textPri02')
const tit03 = document.querySelector('#textPri03')
const tit04 = document.querySelector('#textPri04')
const tit05 = document.querySelector('#textPri05')
const tit06 = document.querySelector('#textPri06')
const tit07 = document.querySelector('#textPri07')

escriva(tit01)
escriva(tit02)
escriva(tit03)
escriva(tit04)
escriva(tit05)
escriva(tit07)
