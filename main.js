const botoes = document.querySelectorAll(".botao");


for(let i=0;i <botoe.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classLis.remove("ativo")
        }

        botoes[i].classList.add("ativo");
    }
    console.log();
}