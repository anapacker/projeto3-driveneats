
let tituloPrato;
let tituloSuco;
let tituloPudim;

// console.log(caixaPrato);

function selecionarPrato(pratoSelecionado) {
    const pratoSelecionadoAnteriormente = document.querySelector('.caixa-prato .selecionado');
    if (pratoSelecionadoAnteriormente !== null) {
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    const existePratoSelecionado = document.querySelector(".box-todas-as-sopas .selecionado");
    if (existePratoSelecionado) {
        existePratoSelecionado.classList.remove("selecionado");
    }
    pratoSelecionado.classList.add('selecionado');

    tituloPrato = pratoSelecionado.querySelector('h4').innerHTML;


    botaoFecharPedidoAtivado();
}

function selecionarSuco(sucoSelecionado) {
    const sucoSelecionadoAnteriormente = document.querySelector('.caixa-suco .selecionado');
    if (sucoSelecionadoAnteriormente !== null) {
        sucoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const existeSucoSelecionado = document.querySelector(".box-todas-as-bebidas .selecionado");
    if (existeSucoSelecionado) {
        existeSucoSelecionado.classList.remove("selecionado");
    }

    sucoSelecionado.classList.add('selecionado');

    tituloSuco = sucoSelecionado.querySelector('h4').innerHTML;



    botaoFecharPedidoAtivado();
}

function selecionarSobremesa(sobremesaSelecionado) {
    const sobremesaSelecionadoAnteriormente = document.querySelector('.caixa-pudim .selecionado');
    if (sobremesaSelecionadoAnteriormente !== null) {
        sobremesaSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const existeSobremesaSelecionado = document.querySelector(".box-todas-as-sobremesas .selecionado");
    if (existeSobremesaSelecionado) {
        existeSobremesaSelecionado.classList.remove("selecionado");
    }
    sobremesaSelecionado.classList.add('selecionado');

    tituloPudim = sobremesaSelecionado.querySelector('h4').innerHTML;


    botaoFecharPedidoAtivado();

}


function botaoFecharPedidoAtivado() {

    console.log(tituloPrato, tituloSuco, tituloPudim);

    if (tituloPrato !== undefined) {

        if (tituloSuco !== undefined) {
            if (tituloPudim !== undefined) {

                const botao = document.querySelector('.botao-fechar-pedido');
                botao.classList.add('ativo');

                botao.innerHTML = "Fazer o pedido";

                console.log('liberar botao')
            }
        }
    }
}

function botaoFecharPedido() {
    console.log('fechar pedido');
}


















