function msg(nome,linguagem,idade) {
    if (nome !== '' && idade > 1 && linguagem !== '') {
        var mensagem = `Olá ${nome}. Você tem ${idade} anos e estuda ${linguagem}!`;
        alert(mensagem);
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}