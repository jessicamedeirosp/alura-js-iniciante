var titulo = document.querySelector(".titulo"); // pega um elemento
titulo.textContent = "Aparecida Nutricionista"; // seta um elemento

var pacientes = document.querySelectorAll(".paciente"); 

for(var i = 0; i < pacientes.length; i ++){ // for para calcular todos os imcs
    //console.log(pacientes[i]);
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; // pegando o valor

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    if(!pesoValido){ // validando peso        
        tdImc.textContent = "Peso inválido"; 
        pesoValido = false;   
        paciente.classList.add('paciente-invalido'); // adicionando uma classe caso invalido
    } 
    if(!alturaValida){ // validando peso        
        tdImc.textContent = "Altura inválida";
        alturaValido = false;   
        paciente.classList.add('paciente-invalido');
    } 
    

}

function calucularImc(peso, altura){
    var imc  = 0;
    imc = peso / (altura * altura); 
    return imc.toFixed(2); // tofixed setar qtd de numero depois da virgula
}
function validaPeso(peso){
    if(peso <= 0 || peso >= 1000){ // validando peso
        return false;        
    } else{
        return true; 
    }
    
    
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 3.0){
        return false; 
    }else{
        return true; 
    }
}