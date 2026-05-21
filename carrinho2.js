function adicionarCarrinho(nome, preco, imagem){

    let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push({
        nome: nome,
        preco: preco,
        imagem: imagem
    });

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    mostrarNotificacao();

    atualizarContadorCarrinho();

}

function atualizarContadorCarrinho(){

    let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

    const contador =
    document.getElementById("contador-carrinho");

    if(contador){

        contador.innerText = carrinho.length;

    }

}

function mostrarNotificacao(){

    let notificacao =
    document.createElement("div");

    notificacao.className =
    "notificacao-carrinho";

    notificacao.innerHTML =
    "✅ Produto adicionado ao carrinho";

    document.body.appendChild(notificacao);

    setTimeout(() => {

        notificacao.classList.add("show");

    }, 100);

    setTimeout(() => {

        notificacao.classList.remove("show");

        setTimeout(() => {

            notificacao.remove();

        }, 400);

    }, 2500);

}

const style =
document.createElement("style");

style.innerHTML = `

.notificacao-carrinho{

    position:fixed;

    top:25px;

    right:25px;

    background:#111;

    color:white;

    padding:18px 24px;

    border-radius:16px;

    border:1px solid #2a2a2a;

    font-family:'Bebas Neue', sans-serif;

    letter-spacing:1px;

    font-size:24px;

    z-index:99999;

    opacity:0;

    transform:translateY(-20px);

    transition:0.4s;

    box-shadow:0 0 20px rgba(0,0,0,0.35);

}

.notificacao-carrinho.show{

    opacity:1;

    transform:translateY(0);

}

`;

document.head.appendChild(style);

atualizarContadorCarrinho();


function comprar(nome, preco, imagem){

    const url =
    "compra.html" +
    "?produto=" + encodeURIComponent(nome) +
    "&preco=" + encodeURIComponent(preco) +
    "&imagem=" + encodeURIComponent(imagem);

    window.location.href = url;

}


document.addEventListener("DOMContentLoaded", () => {

    function selecionarTamanho(elemento){

        elemento.parentElement
        .querySelectorAll(".size")
        .forEach(size => {

            size.classList.remove("active");

        });

        elemento.classList.add("active");

    }

    document.querySelectorAll(".size")
    .forEach(size => {

        size.onclick = function(){

            selecionarTamanho(this);

        };

    });

});

document.addEventListener("DOMContentLoaded", () => {

    function selecionarTamanho(elemento){

        elemento.parentElement
        .querySelectorAll(".size")
        .forEach(size => {

            size.classList.remove("active");

        });

        elemento.classList.add("active");

    }

    document.querySelectorAll(".size")
    .forEach(size => {

        size.onclick = function(){

            selecionarTamanho(this);

        };

    });

});



function finalizarPagamento(){

    const pagamentoSelecionado =
    document.querySelector(".payment.active h3");

    if(!pagamentoSelecionado){

        alert("Selecione um método de pagamento.");

        return;

    }

    const metodo =
    pagamentoSelecionado.innerText;

    /* PIX */

    if(metodo === "PIX"){

        const pixBox =
        document.getElementById("pix-box");

        pixBox.style.display = "block";

        pixBox.scrollIntoView({
            behavior:"smooth"
        });

    }

    /* CRÉDITO */

    else if(metodo === "CRÉDITO"){

        alert(
        "Pagamento em crédito aprovado!"
        );

    }

    /* DÉBITO */

    else if(metodo === "DÉBITO"){

        alert(
        "Pagamento em débito aprovado!"
        );

    }

}



// ===============================
// BANNER CHUTEIRAS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const produtos =
    document.querySelectorAll(".product-card");

    if(produtos.length >= 4){

        const banner = document.createElement("div");

        banner.className = "banner-chuteiras";

        banner.innerHTML = `

        <img src="fotos chuteira/bannerchuteira.png">

        `;

        banner.onclick = () => {

            window.location.href = "chuteiras.html";

        };

        produtos[1].after(banner);

    }

});









