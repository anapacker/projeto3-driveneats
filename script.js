function selecionarProduto(pratoSelecionado) {
    const pratoSelecionadoArteriormente = document.querySelector('.caixa-produto .selecionado');
    if (pratoSelecionadoArteriormente !== null) {
        pratoSelecionadoArteriormente.classList.remove('selecionado');
    }
    pratoSelecionado.classList.toggle('selecionado');
    const valorPratoSelecionado = document.querySelector('.caixa-produto .selecionado .valor');
    console.log(valorPratoSelecionado.innerHTML);
}

