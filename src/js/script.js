document.getElementById('form-pesquisa').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o recarregamento do formulário
    verificaBicho(); // Chama a função que verifica o bicho
});

function verificaBicho() {
    const digito1 = document.getElementById("digito_1").value;
    const digito2 = document.getElementById("digito_2").value;
    const digito3 = document.getElementById("digito_3").value;
    const digito4 = document.getElementById("digito_4").value;

    const milhar = digito1 + digito2 + digito3 + digito4;

    const bichos = [
        "Avestruz", "Águia", "Burro", "Borboleta", "Cachorro",
        "Cabra", "Carneiro", "Camelo", "Cobra", "Coelho",
        "Cavalo", "Elefante", "Galo", "Gato", "Jacaré",
        "Leão", "Macaco", "Porco", "Pavão", "Peru",
        "Touro", "Tigre", "Urso", "Veado", "Vaca"
    ];

    let f_num = parseInt(milhar.slice(-2)); // Pega os dois últimos dígitos
    let index = Math.floor((f_num - 1) / 4); // Calcula o índice

    if (f_num === 0) {
        document.getElementById("resultado").innerText = `O bicho da milhar ${milhar} é o ${bichos[bichos.length - 1]}`;
    } else if (index >= 0 && index < bichos.length) {
        document.getElementById("resultado").innerText = `O bicho da milhar ${milhar} é o ${bichos[index]}`;
    } else {
        document.getElementById("resultado").innerText = "Insira um número válido!";
    }
}

function proximoDigito(campoAtual, proximoCampoID) {
    if (campoAtual.value.length >= campoAtual.maxLength) {
        const proximoCampo = document.getElementById(proximoCampoID);
        if (proximoCampo) {
            proximoCampo.focus();
        }
    }
}

function apenasUmDigito(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9]/g, '').slice(0, 1); 
}