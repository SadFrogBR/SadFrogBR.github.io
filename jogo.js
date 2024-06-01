var altura = 0
var largura = 0
var vida = 3
var dif;

function retornaInicio(){
    window.location.href="index.html"
}


function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

function obterDificuldade(){
    var dificuldade = window.location.search;

    var dificuldade = dificuldade.substring(1);

    console.log(dificuldade);


    if(dificuldade == 'normal'){
        dif = 5000;
        tempo()
    }else if(dificuldade == 'dificil'){
        dif = 3000;
        tempo()
    }else if(dificuldade == 'chucknores'){
        dif = 1000;
        tempo()
    }

}

function posicaoRandomica(){

    var posicaox = Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    var mosquito = document.createElement('img')
    mosquito.src='imagens/mosca.png'
    mosquito.id='mosq'
    mosquito.style.left=posicaox + 'px'
    mosquito.style.top=posicaoy + 'px'
    mosquito.style.position='absolute'
    tamanhosRandomicos(mosquito)
    mosquito.addEventListener('click', clicado)

  

    document.body.appendChild(mosquito)

    mosquito.timeout = setTimeout(function() {
        if (document.body.contains(mosquito)) {
            mosquito.remove();
            perderVida(); 
            posicaoRandomica();
        }
    }, dif); 



}

function tamanhosRandomicos(mosquito){
    var posicaox = Math.floor(Math.random() * 100)

    posicaox = posicaox < 50 ? 50 : posicaox

    mosquito.style.width=posicaox + 'px'
    mosquito.style.height=posicaox + 'px'        


}

clicado = function(){
    document.getElementById('audio').play();
    moscaAntiga = document.getElementById('mosq')
    if (moscaAntiga) {
        clearTimeout(moscaAntiga.timeout);
        moscaAntiga.remove()
        posicaoRandomica(); 

}

}

function perderVida(){
    if(vida < 4 && vida > 1){
        document.getElementById(vida).src='imagens/coracao_vazio.png'
        vida = vida - 1;


    }else{
        window.location.href="fim_de_jogo.html"
    }
    
}



function tempo(){
    posicaoRandomica();
    var varia = document.getElementById('variavel')

    i = 100


    var x = setInterval(function() {
        
        varia.innerHTML = i--

    if(i === 0){
        clearInterval(x)
        window.location.href="vitoria.html"
    }


    }, 1000)

}
