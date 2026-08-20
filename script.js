document.addEventListener('DOMContentLoaded', () => {
    
    /* ===================================================
       1. MENU HAMBÚRGUER (GAVETA LATERAL)
       =================================================== */
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const sidebar = document.getElementById('sidebar');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks = document.querySelectorAll('aside ul li a');

    const openMenu = () => {
        if (sidebar && menuOverlay) {
            sidebar.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMenu = () => {
        if (sidebar && menuOverlay) {
            sidebar.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    menuLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });

    /* ===================================================
       2. LÓGICA DO CARRINHO DE COMPRAS
       =================================================== */
    const carrinhoContainer = id('carrinhoContainer');
    const carrinhoVazio = id('carrinhoVazio');
    let valorFrete = 0;
    let percentualDesconto = 0;

    function id(str) { return document.getElementById(str); }

    // Atualiza os totais e subtotais do carrinho
    function calcularTotais() {
        const itens = document.querySelectorAll('.carrinho-item');
        let subtotalGeral = 0;

        if (itens.length === 0) {
            if (carrinhoContainer) carrinhoContainer.style.display = 'none';
            if (carrinhoVazio) carrinhoVazio.style.display = 'block';
            return;
        }

        itens.forEach(item => {
            const precoUnit = parseFloat(item.getAttribute('data-preco'));
            const qtdValorSpan = item.querySelector('.qtd-valor');
            const subtotalItemSpan = item.querySelector('.subtotal-item');

            const qtd = parseInt(qtdValorSpan.textContent);
            const totalItem = precoUnit * qtd;

            subtotalItemSpan.textContent = totalItem.toFixed(2).replace('.', ',');
            subtotalGeral += totalItem;
        });

        // Atualiza os elementos na tela
        const subtotalEl = id('resumoSubtotal');
        const descontoEl = id('valDesconto');
        const totalEl = id('resumoTotal');

        if (subtotalEl) subtotalEl.textContent = subtotalGeral.toFixed(2).replace('.', ',');

        const valorDesconto = subtotalGeral * percentualDesconto;
        if (descontoEl) descontoEl.textContent = valorDesconto.toFixed(2).replace('.', ',');

        const totalFinal = Math.max(0, subtotalGeral - valorDesconto + valorFrete);
        if (totalEl) totalEl.textContent = totalFinal.toFixed(2).replace('.', ',');
    }

    // Escuta cliques nos botões de aumentar (+), diminuir (-) e remover (🗑️)
    document.addEventListener('click', (e) => {
        // Aumentar Quantidade
        if (e.target.classList.contains('qtd-mais')) {
            const qtdSpan = e.target.previousElementSibling;
            qtdSpan.textContent = parseInt(qtdSpan.textContent) + 1;
            calcularTotais();
        }

        // Diminuir Quantidade
        if (e.target.classList.contains('qtd-menos')) {
            const qtdSpan = e.target.nextElementSibling;
            let qtdAtual = parseInt(qtdSpan.textContent);
            if (qtdAtual > 1) {
                qtdSpan.textContent = qtdAtual - 1;
                calcularTotais();
            }
        }

        // Remover Item
        if (e.target.classList.contains('item-remover')) {
            const item = e.target.closest('.carrinho-item');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
                item.remove();
                calcularTotais();
            }, 300);
        }
    });

    // Simulação de Frete por CEP
    const btnFrete = id('btnFrete');
    if (btnFrete) {
        btnFrete.addEventListener('click', () => {
            const cepInput = id('cepInput').value.trim();
            const freteInfo = id('freteInfo');
            const valFreteEl = id('valFrete');

            if (cepInput.length >= 8) {
                valorFrete = 15.00; // Valor fixo de frete para teste
                valFreteEl.textContent = valorFrete.toFixed(2).replace('.', ',');
                freteInfo.style.color = '#00e676';
                freteInfo.textContent = '✓ Frete Normal: R$ 15,00 (Entrega em 4 dias)';
                calcularTotais();
            } else {
                freteInfo.style.color = '#ff5252';
                freteInfo.textContent = 'Digite um CEP válido com 8 dígitos.';
            }
        });
    }

    // Simulação de Cupom de Desconto (Cupom: GEEK10)
    const btnCupom = id('btnCupom');
    if (btnCupom) {
        btnCupom.addEventListener('click', () => {
            const cupom = id('cupomInput').value.trim().toUpperCase();
            const cupomInfo = id('cupomInfo');
            const linhaDesconto = id('linhaDesconto');

            if (cupom === 'GEEK10') {
                percentualDesconto = 0.10; // 10% de desconto
                linhaDesconto.style.display = 'flex';
                cupomInfo.style.color = '#00e676';
                cupomInfo.textContent = '✓ Cupom GEEK10 (10% OFF) aplicado com sucesso!';
                calcularTotais();
            } else {
                cupomInfo.style.color = '#ff5252';
                cupomInfo.textContent = 'Cupom inválido. Tente usar: GEEK10';
            }
        });
    }

    // Botão Finalizar Compra
    const btnCheckout = id('btnCheckout');
    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            alert('🎉 Pedido realizado com sucesso! Obrigado por comprar no Collector\'s Hub!');
        });
    }

    // Executa a primeira contagem se estiver na página do carrinho
    if (document.querySelector('.carrinho-item')) {
        calcularTotais();
    }
});