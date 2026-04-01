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