type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else {
        console.log(resposta ? "Operação bem-sucedida" : "Falha na operação");
    }
}

processarResposta("Dados recebidos");
processarResposta(true);
processarResposta(false);
