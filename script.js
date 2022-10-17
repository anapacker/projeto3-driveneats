
let tituloPrato;
let tituloSuco;
let tituloPudim;
let linkWhatsapp;
let valorPrato;
let valorSuco;
let valorPudim;
let valorTotal;


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

    valorPrato = Number(pratoSelecionado.querySelector(".valor-sopa strong").innerHTML.slice(3).replace(",", "."));


    console.log(pratoSelecionado, valorPrato);

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

    valorSuco = Number(sucoSelecionado.querySelector(".valor-sucos strong").innerHTML.slice(3).replace(",", "."));


    console.log(sucoSelecionado, valorSuco);


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

    valorPudim = Number(sobremesaSelecionado.querySelector(".valor-pudim strong").innerHTML.slice(3).replace(",", "."));


    console.log(sobremesaSelecionado, valorPudim);

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

            }
        }
    }
}

function botaoFecharPedido() {


    let valorTotal = (valorPrato + valorSuco + valorPudim).toFixed(2).replace(".", ",");


    let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n - prato: ${tituloPrato}\n - Bebida: ${tituloSuco}\n - Sobremesa: ${tituloPudim}\n TOTAL: R$ ${valorTotal}`)
    linkWhatsapp = "https://wa.me/5547992578604?text=" + mensagem;
    console.log(linkWhatsapp)

    window.open(linkWhatsapp);
    window.location.reload();
}




















