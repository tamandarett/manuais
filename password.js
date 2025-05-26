function verificarSenha() {
    const senhaDigitada = document.getElementById('senha').value;
    const SENHA_CORRETA = "tamandare123"; // Troque aqui!
    
    if (senhaDigitada === SENHA_CORRETA) {
        window.location.href = "manuais/";
    } else {
        document.getElementById('erro').textContent = "Senha incorreta!";
    }
}
