

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){ // dblclick duplo click e  escuta o elemento tabela    
    
    var alvoEvento = event.target;// pega exetamente o elemento que foi clicado no caso a td 
    var paiDoAlvo = alvoEvento.parentNode;//parentNode // pega o pai do elemento clicado no caso a tr
    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove();
    },500); // em milesegundos
     //// .remove() remove o elemento indicado 
    // ou seja esse bloco de codigo escuta o evento duplo clique da tabela, 
    //seleciona o alvo do clique q no caso é o td e pega o pai da td que no caso é a tr
    // .remove() remove o elemento indicado 
});
