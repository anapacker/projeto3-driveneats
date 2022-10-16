function selecionarPrato(pratoSelecionado) {
    const pratoSelecionadoAnteriormente = document.querySelector('.caixa-prato .selecionado');
    if (pratoSelecionadoAnteriormente !== null) {
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    const existePratoSelecionado = document.querySelector(".box-opcoes .selecionado");
    if (existePratoSelecionado) {
        existePratoSelecionado.classList.remove("selecionado");
    }

    pratoSelecionado.classList.add('selecionado');
}

function selecionarSuco(sucoSelecionado) {
    const sucoSelecionadoAnteriormente = document.querySelector('.caixa-suco .selecionado');
    if (sucoSelecionadoAnteriormente !== null) {
        sucoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const existeSucoSelecionado = document.querySelector(".box-opcoes .selecionado");
    if (existeSucoSelecionado) {
        existeSucoSelecionado.classList.remove("selecionado");
    }



    sucoSelecionado.classList.add('selecionado');
}

function selecionarSobremesa(sobremesaSelecionado) {
    const sobremesaSelecionadoAnteriormente = document.querySelector('.caixa-pudim .selecionado');
    if (sobremesaSelecionadoAnteriormente !== null) {
        sobremesaSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const existeSobremesaSelecionado = document.querySelector(".box-opcoes .selecionado");
    if (existeSobremesaSelecionado) {
        existeSobremesaSelecionado.classList.remove("selecionado");
    }

    sobremesaSelecionado.classList.add('selecionado');
}























// const pratoSelecionadoArteriormente = document.querySelector('.caixa-prato .selecionado');
    // if (pratoSelecionadoArteriormente !== null) {
    //     pratoSelecionadoArteriormente.classList.remove('selecionado');
    // }
    // pratoSelecionado.classList.toggle('selecionado');
    // const valorPratoSelecionado = document.querySelector('.caixa-prato .selecionado .valor-sopa');
    // console.log(valorPratoSelecionado);

    // const valor = document.querySelector('.valor-sopa')}


// function selecionarPrato() {
//     const produtoSelecionadoArteriormente = document.querySelector(".caixa-prato ");
//     produtoSelecionadoArteriormente.classList.toggle("selecionado")


// }