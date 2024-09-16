function alternarAcordeao(id) {
    var conteudo = document.getElementById(id);
    if (conteudo.style.display === 'block') {
        conteudo.style.display = 'none';
    } else {
        conteudo.style.display = 'block';
    }
}
