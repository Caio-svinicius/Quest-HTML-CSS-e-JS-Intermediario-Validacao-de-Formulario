const formulario = document.getElementById('form');
const camposDePrenchimento = document.querySelectorAll('.required');
const camposError = document.querySelectorAll('.error');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


console.log(camposDePrenchimento)

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    nameValidador();
    emailValidador();
    telefoneValidador();
    mensagemValidador();
})

function setError(index){
    camposDePrenchimento[index].style.border = '1px solid #F52E2E'
    camposError[index].style.display = 'block'
}

function removeError(index){
    camposDePrenchimento[index].style.border = '1px solid #00C22B';
    camposError[index].style.display = 'none';
}

function nameValidador(){
    if(camposDePrenchimento[0].value === ''){
        setError(0);
    }
    else{
        removeError(0);
    }
}

function emailValidador(){
    if(!emailRegex.test(camposDePrenchimento[1].value))
    {
        setError(1);
    }
    else{
        removeError(1);
    }
}

function telefoneValidador(){
    if(camposDePrenchimento[2].value === ''){
        setError(2);
    }
    else{
        removeError(2);
    }
}

function mensagemValidador(){
    if(camposDePrenchimento[3].value === ''){
        setError(3);
    }
    else{
        removeError(3);
    }
}