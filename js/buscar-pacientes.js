var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");
    // requisição para https://api-pacientes.herokuapp.com/pacientes
    var xhr = new XMLHttpRequest(); // responsavel por fazer requisições HTTP
    // configurando requisição
    // abrindo a requisão e falar o tipo de requisição e endereço da requisicao
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");     
    var erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200) { // 200 codigo pra tudo certo, .status traz o codigo da requisição
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; // texto json 
            var pacientes = JSON.parse(resposta); //convertendo em js
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
      
        
    }); // escuta o evento load (carregado)pegando a resposta  
    xhr.send(); //enviando requisão

});
