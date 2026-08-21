
// GERENCIAMENTO DE USUÁRIO NO LOCALSTORAGE
function getUsuarioLogado() {
    return JSON.parse(localStorage.getItem("usuario_hub")) || null;
}

function salvarUsuario(usuario) {
    localStorage.setItem("usuario_hub", JSON.stringify(usuario));
    atualizarUIHeader();
}

function fazerLogout() {
    localStorage.removeItem("usuario_hub");
    atualizarUIHeader();
    navegaPara('home');
}

// Atualiza o botão do topo com o nome do usuário se estiver logado
function atualizarUIHeader() {
    const btnCadastro = document.getElementById("btnIrCadastro");
    const usuario = getUsuarioLogado();

document.addEventListener('DOMContentLoaded', () => {
    // Atualiza a interface do cabeçalho com dados de login salvos
    atualizarUIHeader();

    // DEMAIS EVENTOS EXISTENTES DO SEU SCRIPT...
    document.getElementById('logoLink').addEventListener('click', (e) => { e.preventDefault(); navegaPara('home'); });
    document.getElementById('btnIrCarrinho').addEventListener('click', () => navegaPara('carrinho'));
    document.getElementById('btnIrCadastro').addEventListener('click', () => navegaPara('cadastro'));

    render();
});

    if (usuario && btnCadastro) {
        const primeiroNome = usuario.nome.split(' ')[0];
        btnCadastro.innerHTML = `👤 ${primeiroNome}`;
        btnCadastro.title = `Conectado como ${usuario.nome}`;
    } else if (btnCadastro) {
        btnCadastro.innerHTML = `👤`;
        btnCadastro.title = "Cadastro / Login";
    }
}

const produtos = [
    { id: 1, nome: "Caneca Luppyvara e Capizoro", preco: 39.90, precoOriginal: 49.90, imagem: "imagens/caneca.cappiece.webp", categoria: "canecas", estoque: 5, destaque: true },
    { id: 2, nome: "Caneca Gengar Pokemon", preco: 54.60, imagem: "imagens/pokemon.png", categoria: "canecas", estoque: 5, destaque: false },
    { id: 3, nome: "Caneca Vegeta", preco: 59.95, imagem: "imagens/caneca_vegeta.jpeg", categoria: "canecas", estoque: 5, destaque: false },
    { id: 4, nome: "Caneca Baby Yoda", preco: 16.99, precoOriginal: 22.23, imagem: "imagens/babycoffee.jpeg", categoria: "canecas", estoque: 5, destaque: true },
    { id: 5, nome: "Action Figure Roger", preco: 199.90, imagem: "imagens/rogério.png", categoria: "ac", estoque: 5, destaque: false },
    { id: 6, nome: "Action Figure Sukuna Era Heian", preco: 98.95, precoOriginal: 103.19, imagem: "imagens/sukuna era hein.webp", categoria: "ac", estoque: 5, destaque: true },
    { id: 7, nome: "Action Figure Nefetpitou", preco: 216.70, imagem: "imagens/nefetpitou.jfif.jpeg", categoria: "ac", estoque: 5, destaque: false },
    { id: 8, nome: "Action Figure Irmão do Jorel", preco: 99.99, imagem: "imagens/ac-do-irmão-do-Jorel.jpg", categoria: "ac", estoque: 5, destaque: false },
    { id: 9, nome: "Cosplay Tanjiro Demon Slayer", preco: 415.84, imagem: "imagens/imagem.png", categoria: "roupas", estoque: 5, destaque: false },
    { id: 10, nome: "Cosplay Frieren", preco: 224.05, imagem: "imagens/frieren cosplay.jpeg", categoria: "roupas", estoque: 5, destaque: false },
    { id: 11, nome: "Cosplay Spy X Family Anya", preco: 201.50, precoOriginal: 314.90, imagem: "imagens/anya-cosplay.webp", categoria: "roupas", estoque: 5, destaque: true },
    { id: 12, nome: "Manto da Akatsuki", preco: 199.99, imagem: "imagens/akatsuki.webp", categoria: "roupas", estoque: 5, destaque: false },
    { id: 13, nome: "Quadro Luffy", preco: 40.99, imagem: "imagens/quadro.luffy.jpeg", categoria: "quadros", estoque: 5, destaque: false },
    { id: 14, nome: "Quadro Escanor", preco: 99.18, imagem: "imagens/Escanor.jpeg", categoria: "quadros", estoque: 5, destaque: false },
    { id: 15, nome: "Demon Slayer Mangá Vol. 1", preco: 34.90, imagem: "imagens/demon-slayer.jpeg", categoria: "mangas", estoque: 5, destaque: false },
    { id: 16, nome: "Jujutsu Kaisen Mangá Vol. 1", preco: 22.55, precoOriginal: 27.90, imagem: "imagens/Jujutsu Kaisen vol 1.jpeg", categoria: "mangas", estoque: 5, destaque: true },
    { id: 17, nome: "Re:Zero Vol. 1", preco: 42.90, imagem: "imagens/re_zero.jpeg", categoria: "ln", estoque: 5, destaque: false },
    { id: 18, nome: "Aventuras Marvel #1", preco: 9.90, imagem: "imagens/miranha.webp", categoria: "hq", estoque: 5, destaque: false },
    { id: 19, nome: "Super Smash Bros", preco: 367.03, imagem: "imagens/ssb.jpeg", categoria: "games", estoque: 5, destaque: false },
    { id: 20, nome: "Quadro Jojo", preco: 30.00, precoOriginal: 49.90, imagem: "imagens/Jojo.jpeg", categoria: "quadros", estoque: 5, destaque: true },
    { id: 21, nome: "Funko Pop James Minions", preco: 115.10, imagem: "imagens/minions.webp", categoria: "colecionaveis", estoque: 5, destaque: false },
    { id: 22, nome: "Quadro Berserk", preco: 49.90, imagem: "imagens/berserk.jpeg", categoria: "quadros", estoque: 5, destaque: false },
    { id: 23, nome: "Hunter X Hunter Vol. 1", preco: 71.68, imagem: "imagens/hunter x hunter.jpeg", categoria: "mangas", estoque: 5, destaque: false },
    { id: 24, nome: "Blue Lock Vol. 1", preco: 32.90, precoOriginal: 43.90, imagem: "imagens/bluelock.jpg", categoria: "mangas", estoque: 5, destaque: true },
    { id: 25, nome: "Diarios de uma Apotecária Vol. 1", preco: 73.69, imagem: "imagens/Diarios de uma Apotecária .jpg", categoria: "ln", estoque: 5, destaque: false },
    { id: 26, nome: "Eighty Six Vol. 1", preco: 41.26, imagem: "imagens/Eighty Six.jpg", categoria: "ln", estoque: 5, destaque: false },
    { id: 27, nome: "Lycoris Recoil: Ordinary Days Vol. 1", preco: 25.95, imagem: "imagens/lycorisnovel.webp", categoria: "ln", estoque: 5, destaque: false },
    { id: 28, nome: "Superman/Batman: DC Compact Comics Edition", preco: 59.99, precoOriginal: 67.93, imagem: "imagens/Superman e Batman.jpg", categoria: "hq", estoque: 5, destaque: true },
    { id: 29, nome: "Invencível #1: Negócios de Família", preco: 19.90, imagem: "imagens/invencível.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 30, nome: "The Boys Vol. 1: O Nome do Jogo", preco: 80.00, imagem: "imagens/theboys.jpg", categoria: "hq", estoque: 5, destaque: false },
    { id: 31, nome: "Sonic Frontiers", preco: 93.80, precoOriginal: 100.36, imagem: "imagens/Sonic.jpeg", categoria: "games", estoque: 5, destaque: true },
    { id: 32, nome: "Mortal Kombat 1", preco: 217.79, imagem: "imagens/mk1.jpg", categoria: "games", estoque: 5, destaque: false },
    { id: 33, nome: "Street Fighter 6", preco: 249.00, imagem: "imagens/streetfighter6.webp", categoria: "games", estoque: 5, destaque: false },
    { id: 34, nome: "Chapéu do Luffy", preco: 59.90, imagem: "imagens/chapeu do luffy.jpeg", categoria: "colecionaveis", estoque: 5, destaque: false },
    { id: 35, nome: "Máscara Sally Face", preco: 80.75, imagem: "imagens/sallyface.jpeg", categoria: "colecionaveis", estoque: 5, destaque: false },
    { id: 36, nome: "3 Chaveiros de God Of War", preco: 150.00, precoOriginal: 200.00, imagem: "imagens/chaveirogodofwar.jpg", categoria: "colecionaveis", estoque: 5, destaque: true },
    { id: 37, nome: "Batman X Fortnite Vol. 1", preco: 9.90, imagem: "imagens/dc-e-fort1.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 38, nome: "Batman X Fortnite Vol. 2", preco: 9.90, imagem: "imagens/dc-e-fort2.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 39, nome: "Batman X Fortnite Vol. 3", preco: 9.90, imagem: "imagens/dc-e-fort3.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 40, nome: "Batman X Fortnite Vol. 4", preco: 9.90, imagem: "imagens/dc-e-fort4.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 41, nome: "Batman X Fortnite Vol. 5", preco: 9.90, imagem: "imagens/dc-e-fort5.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 42, nome: "Batman X Fortnite Vol. 6", preco: 9.90, imagem: "imagens/dc-e-fort6.avif", categoria: "hq", estoque: 5, destaque: false },
    { id: 43, nome: "Marvel X Fortnite: Guerra do Ponto Zero Vol. 1", preco: 14.90, imagem: "imagens/mrl-e-fort1.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 44, nome: "Marvel X Fortnite: Guerra do Ponto Zero Vol. 2", preco: 14.90, imagem: "imagens/mrl-e-fort2.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 45, nome: "Marvel X Fortnite: Guerra do Ponto Zero Vol. 3", preco: 14.90, imagem: "imagens/mrl-e-fort3.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 46, nome: "Marvel X Fortnite: Guerra do Ponto Zero Vol. 4", preco: 14.90, imagem: "imagens/mrl-e-fort4.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 47, nome: "Marvel X Fortnite: Guerra do Ponto Zero Vol. 5", preco: 14.90, imagem: "imagens/mrl-e-fort5.jpeg", categoria: "hq", estoque: 5, destaque: false },
    { id: 48, nome: "Quadro de Procurado Chopper", preco: 18.00, precoOriginal: 30.00, imagem: "imagens/chopper.jpeg", categoria: "quadros", estoque: 5, destaque: true },
    { id: 49, nome: "Caneca de Death Note", preco: 35.99, imagem: "imagens/deathnote.webp", categoria: "canecas", estoque: 5, destaque: false },
    { id: 50, nome: "Action Figure do Monkey D. Luffy", preco: 327.50, precoOriginal: 368.11, imagem: "imagens/acLuffy.webp", categoria: "ac", estoque: 5, destaque: true },
    { id: 51, nome: "Attack On Titan", preco: 49.00, imagem: "imagens/attk.jpg", categoria: "mangas", estoque: 5, destaque: false },
];

let estado = {
    telaAtual: 'home',
    categoriaFiltro: 'todos',
    descontoPercentual: 0,
    freteValor: 0
};

function getCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho_hub")) || [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho_hub", JSON.stringify(carrinho));
    atualizarBadge();
}

function atualizarBadge() {
    const badge = document.getElementById("cartCountBadge");
    if (badge) {
        const carrinho = getCarrinho();
        const total = carrinho.reduce((acc, item) => acc + item.qtd, 0);
        badge.textContent = total;
    }
}

function navegaPara(tela) {
    estado.telaAtual = tela;
    render();
}

function render() {
    
    } else if (estado.telaAtual === 'configuracoes') {
        renderConfiguracoes(main);
      

    const main = document.getElementById('app');
    if (!main) return;

    atualizarBadge();

    if (estado.telaAtual === 'home') {
        renderHome(main);
    } else if (estado.telaAtual === 'carrinho') {
        renderCarrinho(main);
    } else if (estado.telaAtual === 'cadastro') {
        renderCadastro(main);
    }
}

// Função auxiliar para montar o HTML dos preços e calcular a porcentagem OFF
function renderPrecoHTML(p) {
    if (p.precoOriginal && p.precoOriginal > p.preco) {
        const pctDesconto = Math.round(((p.precoOriginal - p.preco) / p.precoOriginal) * 100);
        return `
            <div class="container-preco">
                <span class="preco-antigo">R$ ${p.precoOriginal.toFixed(2).replace('.', ',')}</span>
                <span class="preco-atual">R$ ${p.preco.toFixed(2).replace('.', ',')}</span>
                <span class="badge-desconto">-${pctDesconto}%</span>
            </div>
        `;
    }
    return `<div class="container-preco"><span class="preco-atual">R$ ${p.preco.toFixed(2).replace('.', ',')}</span></div>`;
}

// Atualize a renderHome para usar o renderPrecoHTML
function renderHome(container) {
    const produtosDestaque = produtos.filter(p => p.destaque);
    const listaFiltrada = estado.categoriaFiltro === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === estado.categoriaFiltro);

    const htmlDestaques = estado.categoriaFiltro === 'todos' ? `
        <section class="destaques-section">
            <h2 class="secao-titulo">🔥 Destaques da Semana</h2>
            <div class="destaques-grid">
                ${produtosDestaque.map(p => {
                    const semEstoque = p.estoque <= 0;
                    return `
                        <div class="card-destaque ${semEstoque ? 'card-esgotado' : ''}">
                            <span class="badge-destaque">EM ALTA</span>
                            <img src="${p.imagem}" alt="${p.nome}">
                            <div class="destaque-info">
                                <h3>${p.nome}</h3>
                                ${renderPrecoHTML(p)}
                                <button class="btn-comprar" data-id="${p.id}" ${semEstoque ? 'disabled' : ''}>
                                    ${semEstoque ? 'Esgotado' : '⚡ Comprar Agora'}
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </section>
        <h2 class="secao-titulo">🛒 Todos os Produtos</h2>
    ` : '';

    container.innerHTML = `
        ${htmlDestaques}
        <div class="cards">
            ${listaFiltrada.map(p => {
                const semEstoque = p.estoque <= 0;
                return `
                    <div class="card ${semEstoque ? 'card-esgotado' : ''}">
                        <img src="${p.imagem}" class="imagem_produto" alt="${p.nome}">
                        <h3>${p.nome}</h3>
                        ${renderPrecoHTML(p)}
                        <small style="margin: 0 15px 10px; color: #a0a3c4;">
                            ${semEstoque ? 'Sem estoque disponível' : `Estoque: ${p.estoque} un.`}
                        </small>
                        <button class="btn-comprar" data-id="${p.id}" ${semEstoque ? 'disabled' : ''}>
                            ${semEstoque ? 'Esgotado' : 'Comprar'}
                        </button>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Eventos de clique mantêm a mesma lógica
    container.querySelectorAll('.btn-comprar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const prod = produtos.find(p => p.id === id);
            
            if (!prod || prod.estoque <= 0) return;

            let carrinho = getCarrinho();
            const itemExistente = carrinho.find(i => i.id === id);

            if (itemExistente) {
                itemExistente.qtd += 1;
            } else {
                carrinho.push({ ...prod, qtd: 1 });
            }

            prod.estoque -= 1;
            salvarCarrinho(carrinho);
            alert(`${prod.nome} foi adicionado ao carrinho!`);
            render();
        });
    });
}
// 2. TELA DO CARRINHO DE COMPRAS
function renderCarrinho(container) {
    const carrinho = getCarrinho();
    const META_FRETE_GRATIS = 400;

    if (carrinho.length === 0) {
        container.innerHTML = `
            <div class="carrinho-vazio-box">
                <h2>Seu carrinho está vazio! 😢</h2>
                <p>Aproveite nossas ofertas e adicione seus colecionáveis favoritos.</p>
                <button class="btn" id="btnVoltarLoja" style="margin: 20px auto 0 auto;">Ver Produtos</button>
            </div>
        `;
        document.getElementById('btnVoltarLoja').addEventListener('click', () => navegaPara('home'));
        return;
    }

    let subtotal = carrinho.reduce((acc, item) => acc + (item.preco * item.qtd), 0);
    const valorDesconto = subtotal * estado.descontoPercentual;
    const totalFinal = Math.max(0, subtotal - valorDesconto + estado.freteValor);

    const faltamFrete = META_FRETE_GRATIS - subtotal;
    const pctFrete = Math.min(100, (subtotal / META_FRETE_GRATIS) * 100);

    container.innerHTML = `
        <div class="carrinho-page">
            <div class="carrinho-header">
                <h1>Meu Carrinho de Compras</h1>
            </div>

            <div class="frete-progresso-card">
                <p>
                    ${subtotal >= META_FRETE_GRATIS
                        ? '🎉 Você ganhou <strong>FRETE GRÁTIS</strong>!'
                        : `🚚 Falta apenas <strong>R$ ${faltamFrete.toFixed(2).replace('.', ',')}</strong> para Frete Grátis!`}
                </p>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${pctFrete}%;"></div>
                </div>
            </div>

            <div class="carrinho-grid">
                <section class="carrinho-itens-card">
                    ${carrinho.map(item => `
                        <div class="carrinho-item">
                            <img src="${item.imagem}" alt="${item.nome}">
                            <div class="item-detalhes">
                                <h4>${item.nome}</h4>
                                <p>R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div class="item-qtd-control">
                                <button class="btn-qtd qtd-menos" data-id="${item.id}">-</button>
                                <span>${item.qtd}</span>
                                <button class="btn-qtd qtd-mais" data-id="${item.id}">+</button>
                            </div>
                            <button class="btn-remover-item" data-id="${item.id}">🗑️</button>
                        </div>
                    `).join('')}
                </section>

                <aside class="resumo-card">
                    <h2>Resumo do Pedido</h2>
                   
                    <div class="box-calculo">
                        <label for="cupomInput">Cupom de Desconto</label>
                        <div class="input-btn-group">
                            <input type="text" id="cupomInput" placeholder="Ex: GEEK10">
                            <button type="button" id="btnCupom">Aplicar</button>
                        </div>
                    </div>

                    <div class="box-calculo">
                        <label for="cepInput">Calcular Frete (CEP)</label>
                        <div class="input-btn-group">
                            <input type="text" id="cepInput" placeholder="00000-000" maxlength="9">
                            <button type="button" id="btnFrete">Calcular</button>
                        </div>
                    </div>

                    <div class="resumo-detalhes">
                        <div class="resumo-linha">
                            <span>Subtotal:</span>
                            <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
                        </div>
                        ${estado.descontoPercentual > 0 ? `
                            <div class="resumo-linha" style="color: #00e676;">
                                <span>Desconto:</span>
                                <span>- R$ ${valorDesconto.toFixed(2).replace('.', ',')}</span>
                            </div>
                        ` : ''}
                        <div class="resumo-linha">
                            <span>Frete:</span>
                            <span>R$ ${estado.freteValor.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <div class="resumo-linha linha-total">
                            <span>Total:</span>
                            <span>R$ ${totalFinal.toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>

                    <button class="btn-finalizar" id="btnFinalizar">Finalizar Compra</button>
                </aside>
            </div>
        </div>
    `;

    // AUMENTAR QUANTIDADE NO CARRINHO
    container.querySelectorAll('.qtd-mais').forEach(b => b.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        const prod = produtos.find(p => p.id === id);

        if (prod && prod.estoque > 0) {
            prod.estoque -= 1; // Tira 1 do estoque
            let c = getCarrinho().map(i => i.id === id ? {...i, qtd: i.qtd + 1} : i);
            salvarCarrinho(c);
            render();
        } else {
            alert("Não há mais estoque disponível deste produto!");
        }
    }));

    // DIMINUIR QUANTIDADE NO CARRINHO
    container.querySelectorAll('.qtd-menos').forEach(b => b.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        const prod = produtos.find(p => p.id === id);
        let carrinho = getCarrinho();
        const item = carrinho.find(i => i.id === id);

        if (item) {
            if (item.qtd > 1) {
                item.qtd -= 1;
                if (prod) prod.estoque += 1; // Devolve 1 ao estoque
            } else {
                // Se era 1 e clicou em -, remove do carrinho e devolve o estoque
                carrinho = carrinho.filter(i => i.id !== id);
                if (prod) prod.estoque += 1;
            }
            salvarCarrinho(carrinho);
            render();
        }
    }));

    // REMOVER ITEM DO CARRINHO
    container.querySelectorAll('.btn-remover-item').forEach(b => b.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        const prod = produtos.find(p => p.id === id);
        let carrinho = getCarrinho();
        const item = carrinho.find(i => i.id === id);

        if (item) {
            if (prod) prod.estoque += item.qtd; // Devolve toda a quantidade ao estoque
            carrinho = carrinho.filter(i => i.id !== id);
            salvarCarrinho(carrinho);
            render();
        }
    }));

    document.getElementById('btnCupom').addEventListener('click', () => {
        const val = document.getElementById('cupomInput').value.trim().toUpperCase();
        if (val === 'GEEK10') {
            estado.descontoPercentual = 0.10;
        } else {
            alert('Cupom inválido! Tente GEEK10');
        }
        render();
    });

    document.getElementById('btnFrete').addEventListener('click', () => {
        const cep = document.getElementById('cepInput').value.replace(/\D/g, '');
        if (cep.length === 8) {
            estado.freteValor = 15.00;
        } else {
            alert('CEP Inválido!');
        }
        render();
    });

    document.getElementById('btnFinalizar').addEventListener('click', () => {
        alert('Pedido realizado com sucesso!');
        salvarCarrinho([]);
        navegaPara('home');
    });
}

function renderCadastro(container) {
    const usuario = getUsuarioLogado();

    // Se já estiver logado, exibe os dados do usuário e opção de Logout
    if (usuario) {
        container.innerHTML = `
            <div class="cadastro-wrapper">
                <div class="cadastro-box" style="text-align: center;">
                    <h1>Minha Conta</h1>
                    <p style="margin: 20px 0; color: var(--text-secondary);">
                        Olá, <strong style="color: white; font-size: 1.1rem;">${usuario.nome}</strong>!<br>
                        <span>${usuario.email}</span>
                    </p>
                    <button id="btnSair" style="background: #ff5252;">Sair da Conta</button>
                </div>
            </div>
        `;

        document.getElementById('btnSair').addEventListener('click', fazerLogout);
        return;
    }

    // Se não estiver logado, exibe o formulário de cadastro
    container.innerHTML = `
        <div class="cadastro-wrapper">
            <div class="cadastro-box">
                <h1>Crie sua Conta</h1>
                <h2>Junte-se ao Collector's Hub</h2>

                <form id="cadastroForm">
                    <div class="campo">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" placeholder="Digite seu nome" required>
                    </div>

                    <div class="campo">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="seuemail@exemplo.com" required>
                    </div>

                    <div class="campo">
                        <label for="senha">Senha</label>
                        <input type="password" id="senha" placeholder="••••••••" required minlength="6">
                    </div>

                    <div class="campo">
                        <label for="confirmarSenha">Confirmar Senha</label>
                        <input type="password" id="confirmarSenha" placeholder="••••••••" required>
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    `;

    document.getElementById('cadastroForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const s1 = document.getElementById('senha').value;
        const s2 = document.getElementById('confirmarSenha').value;

        if (s1 !== s2) {
            alert('As senhas não coincidem!');
            return;
        }

        // Salva os dados no localStorage
        const novoUsuario = { nome, email };
        salvarUsuario(novoUsuario);

        alert(`Bem-vindo(a), ${nome}! Seu cadastro foi salvo com sucesso.`);
        navegaPara('home');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Aplica o tema salvo ao carregar o site
    aplicarTema(getConfiguracoes().tema);

    document.getElementById('btnIrConfig').addEventListener('click', () => navegaPara('configuracoes'));
    document.getElementById('logoLink').addEventListener('click', (e) => { e.preventDefault(); navegaPara('home'); });
    document.getElementById('btnIrCarrinho').addEventListener('click', () => navegaPara('carrinho'));
    document.getElementById('btnIrCadastro').addEventListener('click', () => navegaPara('cadastro'));

    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const sidebar = document.getElementById('sidebar');
    const menuOverlay = document.getElementById('menuOverlay');

    const fecharMenu = () => {
        sidebar.classList.remove('active');
        menuOverlay.classList.remove('active');
    };

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        menuOverlay.classList.add('active');
    });

    if (menuClose) menuClose.addEventListener('click', fecharMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', fecharMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            estado.categoriaFiltro = link.getAttribute('data-categoria');
            fecharMenu();
            navegaPara('home');
        });
    });

    render();
});

// --- CONFIGURAÇÕES DO SITE NO LOCALSTORAGE ---
function getConfiguracoes() {
    return JSON.parse(localStorage.getItem("config_hub")) || {
        tema: 'dark',
        notificacoes: true,
        moeda: 'BRL'
    };
}

function salvarConfiguracoes(config) {
    localStorage.setItem("config_hub", JSON.stringify(config));
    aplicarTema(config.tema);
}

function aplicarTema(tema) {
    if (tema === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

// --- TELA DE CONFIGURAÇÕES ---
function renderConfiguracoes(container) {
    const usuario = getUsuarioLogado();
    const config = getConfiguracoes();

    container.innerHTML = `
        <div class="config-wrapper">
            <div class="config-box">
                <h1>⚙️ Configurações</h1>
                
                <!-- SEÇÃO 1: PREFERÊNCIAS DO SITE -->
                <div class="config-secao">
                    <h2>Preferências do Site</h2>
                    
                    <div class="campo-config">
                        <label>Tema de Visualização</label>
                        <select id="selectTema">
                            <option value="dark" ${config.tema === 'dark' ? 'selected' : ''}>🌙 Modo Escuro (Padrão)</option>
                            <option value="light" ${config.tema === 'light' ? 'selected' : ''}>☀️ Modo Claro</option>
                        </select>
                    </div>

                    <div class="campo-config switch-campo">
                        <span>Receber Notificações de Promoções</span>
                        <label class="switch">
                            <input type="checkbox" id="checkNotificacoes" ${config.notificacoes ? 'checked' : ''}>
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>

                <!-- SEÇÃO 2: DADOS DA CONTA -->
                <div class="config-secao">
                    <h2>Dados da Conta</h2>
                    ${usuario ? `
                        <form id="formAtualizarConta">
                            <div class="campo">
                                <label for="configNome">Nome Completo</label>
                                <input type="text" id="configNome" value="${usuario.nome}" required>
                            </div>
                            <div class="campo">
                                <label for="configEmail">E-mail</label>
                                <input type="email" id="configEmail" value="${usuario.email}" required>
                            </div>
                            <button type="submit" class="btn-salvar">Salvar Alterações do Perfil</button>
                        </form>
                    ` : `
                        <p style="color: var(--text-secondary); margin-bottom: 15px;">Você não está conectado a nenhuma conta.</p>
                        <button class="btn" id="btnIrLoginConfig">Fazer Login / Cadastrar</button>
                    `}
                </div>
            </div>
        </div>
    `;

    // Eventos de Preferências do Site
    document.getElementById('selectTema').addEventListener('change', (e) => {
        config.tema = e.target.value;
        salvarConfiguracoes(config);
    });

    document.getElementById('checkNotificacoes').addEventListener('change', (e) => {
        config.notificacoes = e.target.checked;
        salvarConfiguracoes(config);
    });

    // Eventos da Conta
    const formConta = document.getElementById('formAtualizarConta');
    if (formConta) {
        formConta.addEventListener('submit', (e) => {
            e.preventDefault();
            const novoNome = document.getElementById('configNome').value.trim();
            const novoEmail = document.getElementById('configEmail').value.trim();

            salvarUsuario({ nome: novoNome, email: novoEmail });
            alert('Dados da conta atualizados com sucesso!');
            render();
        });
    }

    const btnLogin = document.getElementById('btnIrLoginConfig');
    if (btnLogin) {
        btnLogin.addEventListener('click', () => navegaPara('cadastro'));
    }
}