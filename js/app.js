document.addEventListener('DOMContentLoaded', function(){

    //Declarando variables:
    const formulario = this.querySelector('#formulario');
    const tuit = this.querySelector('#tweet');
    const contador = this.querySelector('.contador');
    const listarTuit = this.querySelector('#lista-tweets');
    const objTuit = [];

   if(localStorage.getItem('listaTuit')){
        mostrarTuit();
   }

    tuit.addEventListener('input', e=>{
        contador.textContent = '';
        contador.textContent = e.target.value.length;

        if(e.target.value.length > 10){
            contador.style.color = 'blue';
        }else{
            contador.style.color = '#ccc';
        }
    });

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        if(tuit.value.length > 10){
            almacenarTuit(tuit.value);
            return;
        }

        mostrarAlerta();
        
    });

    function mostrarAlerta(){
        alert('el tuit debe tener al menos 10 caracteres');
    }

    function almacenarTuit(tuit){
        formulario.reset();
        objTuit.push(tuit);

        localStorage.setItem('listaTuit', JSON.stringify(objTuit));

        mostrarTuit();
    }

    function mostrarTuit(){
        const listaTuit = localStorage.getItem('listaTuit');
        const tuits = JSON.parse(listaTuit);

        limpiarHTML();
        tuits.forEach(tuit => {
            const tweet = document.createElement('LI');
            tweet.textContent = tuit;

            listarTuit.appendChild(tweet)
        });
    }

    function limpiarHTML(){
        while(listarTuit.firstChild){
            listarTuit.removeChild(listarTuit.firstChild);
        }
    }
});