let input = document.getElementById('barra_pesquisa')
let saida = document.querySelector('div.busca_feita')
let botao_busca = document.querySelector('img#botao_busca')
let link_loja = `<a>`
function buscar_produto() {
    let receber_input = input.value
    if((receber_input != '') && (receber_input != null) && (receber_input != undefined)){
        let valorBuscado = `
        <div class="resultado_busca">
            <p class="saida_de_dados">
                ${receber_input}
            </p>
        </div>`
        if(receber_input == 'home') {
            saida.innerHTML = `
            <div class="resultado_busca">
                <p class="saida_de_dados">
                    <a href="../index.html">${receber_input}</a>
                </p>
            </div>`
        }
        else {
            saida.innerHTML = valorBuscado
        }

        input.value = ''
    }
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        botao_busca.click()
    }
})

let container4 = document.querySelector('div.container4')
let produtosDoSite = `<div class="produtos_container4">
<img src="../roupas-loja/pexels-alisson-souto-1759622.jpg" alt="Roupas">
<p class="informacoes_container3">Camisa Feminina Adidas</p>
<p class="preco_produto">R$ 340,00</p>
<p class="btn_comprar"><a>Comprar</a></p>
</div>`+
    `<div class="produtos_container4">
<img src="../roupas-loja/pexels-evg-kowalievska-1055691.jpg" alt="Roupas">
<p class="informacoes_container3">Conjunto Modern Yellow</p>
<p class="preco_produto">R$ 1440,00</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`+
`        <div class="produtos_container4">
<img src="../roupas-loja/pexels-harsh-kushwaha-1689731.jpg" alt="Roupas">
<p class="informacoes_container3">Camisa Black basic</p>
<p class="preco_produto">R$ 579,99</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`+
`        <div class="produtos_container4">
<img src="../roupas-loja/pexels-konstantin-mishchenko-1926769.jpg" alt="Roupas">
<p class="informacoes_container3">Style Morder Basic</p>
<p class="preco_produto">R$ 2456,00</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`+
`        <div class="produtos_container4">
<img src="../roupas-loja/pexels-marlene-leppänen-1183266.jpg" alt="Roupas">
<p class="informacoes_container3">Blusa Amarela Desk</p>
<p class="preco_produto">R$ 450,99</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`+
`        <div class="produtos_container4">
<img src="../roupas-loja/pexels-pixabay-157675.jpg" alt="Roupas">
<p class="informacoes_container3">Estilo Black Modern</p>
<p class="preco_produto">R$ 5460,00</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`+
`        <div class="produtos_container4">
<img src="../roupas-loja/pexels-evg-kowalievska-10.jpg" alt="Roupas">
<p class="informacoes_container3">Blusa estilo verde</p>
<p class="preco_produto">R$ 989,00</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`+
`        <div class="produtos_container4">
<img src="../roupas-loja/pexels-ivan-oboleninov-11.jpg" alt="Roupas">
<p class="informacoes_container3">Blusa e calça jeans</p>
<p class="preco_produto">R$ 450,00</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`+
`        <div class="produtos_container4">
<img src="../roupas-loja/pexels-arnie-chou-12.jpg" alt="Roupas">
<p class="informacoes_container3">Camisa Branca e calça jeans</p>
<p class="preco_produto">R$ 670,00</p>
<p class="btn_comprar"><a href="loja.html">Comprar</a></p>
</div>`

container4.innerHTML += produtosDoSite //Para mostrar os produtos