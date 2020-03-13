var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){ // funcao no click do btn 
    event.preventDefault(); // tira o evento padrao, no caso do btn nao da submit
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);  
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        form.reset();
        return;
    }
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";// controla html dentro de um elemento
    adicionaPacienteNaTabela(paciente);
    form.reset();   // limpa form

});
function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);        
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
function obtemPacienteDoFormulario(form){
    var paciente = { // criando objeto paciente
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calucularImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // cria elemento html 
    pacienteTr.classList.add("paciente");

    // adiciona como filho o elemento passando entre parentes 
    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome')); 
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

    return pacienteTr;

}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0)
        erros.push("Nome Inválido");
    
    if(!validaPeso(paciente.peso) || paciente.peso.length ==0) 
        erros.push("Peso Inválido"); // add na array
    
    if(!validaAltura(paciente.altura) || paciente.altura.length ==0 ) 
        erros.push("Altura Inválido");

    if(paciente.gordura.length == 0)
        erros.push("Gordura Inválido");

    return erros;
}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";// controla html dentro de um elemento
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}
