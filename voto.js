function validarIdade(idade) {
    if (idade >= 16 && idade < 18) {
        return "Você tem " + idade + " anos. No Brasil, você já pode votar, mas o voto é opcional.";
    } else if (idade >= 18) {
        return "Você tem " + idade + " anos. No Brasil, o voto é obrigatório.";
    } else {
        return "Você tem " + idade + " anos. No Brasil, você ainda não pode votar.";
    }
}

// Exemplos de uso:
console.log(validarIdade(15)); // Saída: "Você tem 15 anos. No Brasil, você ainda não pode votar."
console.log(validarIdade(16)); // Saída: "Você tem 16 anos. No Brasil, você já pode votar, mas o voto é opcional."
console.log(validarIdade(18)); // Saída: "Você tem 18 anos. No Brasil, o voto é obrigatório."