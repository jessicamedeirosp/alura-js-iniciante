var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){ //evento input - cada vez que digita no campo ele pega o valor 
    
  var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        for( var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];   
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;      
            var expressao = new RegExp(this.value,"i");      //gerando uma expressao regular para pesquisar letra digitada no campo de pesquisa
            // dentro dos nomes dos pacientes
            // new RegExp(valor a ser procurado, maiusculo/minusculo ) instancia expressao regular          
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        } 
    } else {
        for( var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];   
            paciente.classList.remove("invisivel");
        }
    }

});