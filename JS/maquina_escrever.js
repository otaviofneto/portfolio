const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;


function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 120 * index)
    })}, 1500)
    
}


