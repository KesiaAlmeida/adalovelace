document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if(document.getElementById("nome").value != "" && 
        document.getElementById("email").value != "" && 
        document.getElementById("Telefone").value != ""){
            alert("Pronto! Voce recebera as novidades por email.")
    }else{
            alert("preecha os campos nome e email!")
    
    }
}