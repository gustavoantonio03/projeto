function toggleModo() {
    document.body.classList.toggle("dark-mode");

    const btn = document.querySelector(".btn-modo");

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Modo claro ☀️";
    } else {
        btn.textContent = "Modo escuro 🌙";
    }
}

function toggleConteudo(id) {
    const elemento = document.getElementById(id);

    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "block";
    }
}

function mostrarAnoAtual(){
    const anoAtual = new Date().getFullYear();
    document.getElementById("ano-atual").textContent = anoAtual;
}

function enviarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value; 
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email) {
        alert("Por favor, preencha os campos de nome e email.");
        return;
    }

    if (!email.includes("@")) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (!assunto) {
        alert("Por favor, informe o assunto.");
        return;
    }

    if (!mensagem) {
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");

    document.getElementById("form-contato").reset();
}