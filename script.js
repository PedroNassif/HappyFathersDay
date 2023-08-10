function change(){
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var randomX = Math.floor(Math.random()*maxX);
    var randomY = Math.floor(Math.random()*maxY);

    botaoNao.style.left = randomX + "px"
    botaoNao.style.top = randomY + "px"
}

function check(){
    var txt = document.getElementById("txt")
    txt.innerHTML = "Então, se é o melhor pai do mundo, o presente mais valioso que posso te dar é a felicidade!"

    var ask = document.getElementById("ask")
    ask.remove();

    var botaoSim =  document.getElementById("sim")
    var botaoNao = document.getElementById("nao")

    botaoNao.remove();
    botaoSim.style.fontSize = 12 + "pt"
    botaoSim.style.width = 350 + "px"
    botaoSim.style.height = 70 + "px"
    botaoSim.innerHTML = "Está preparado para ganhar seu presente? Só clicar aqui...";

    var imagem = document.getElementById("foto")
    imagem.src = 'Img/PaiBom.jpeg'
    imagem.style.width = 280 + "px"

    // var link = document.createElement("a");

    // link.href = "https://www.youtube.com/watch?v=Q9V7UrT-VnU"

    // link.appendChild(botaoSim)

    // document.body.appendChild(link)
    botaoSim.onclick = function() {
        window.location.href = "https://www.youtube.com/watch?v=Q9V7UrT-VnU";
      };
    
}