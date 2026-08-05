let transacoes = [];

const form = document.querySelector('form');
const ivalor = document.getElementById('ivalor');
const idescricao = document.getElementById('idescricao');
const itipo = document.getElementById('itipo');
const categoriasReceita = document.getElementById('categoriasReceita');
const categoriasGasto = document.getElementById('categoriasGasto');
const listT = document.getElementById('listT');

function adicionar(dados){
    const novaTransacao = {
        id: Date.now(),
        descricao: dados.descricao,
        valor: dados.valor,
        tipo: dados.tipo,
        categoria: dados.categoria,
        data: new Date().toISOString()
    };

    transacoes.push(novaTransacao);
}

function remover(id){
    transacoes = transacoes.filter(function(transacao){
        return transacao.id !== id;
    });
}

function calculoTotais(){
    let receitaTotal = 0;
    let gastoTotal = 0;

    transacoes.forEach(function(transacao){
        if (transacao.tipo === "receita"){
            receitaTotal = receitaTotal + transacao.valor;
        } else if (transacao.tipo === "gasto"){
            gastoTotal = gastoTotal + transacao.valor;
        }
    });

    const saldo = receitaTotal - gastoTotal;
    return { receitaTotal, gastoTotal, saldo };
}

function calculoPorMes(mes, ano){
    let receitaMes = 0;
    let gastoMes = 0;

    transacoes.forEach(function(transacao){
        const dataTransacao = new Date(transacao.data);

        if (dataTransacao.getMonth() === mes && dataTransacao.getFullYear() === ano){
            if (transacao.tipo === "receita"){
                receitaMes = receitaMes + transacao.valor;
            } else if (transacao.tipo === "gasto"){
                gastoMes = gastoMes + transacao.valor;
            }
        }
    });

    const saldoMes = receitaMes - gastoMes;
    return { receitaMes, gastoMes, saldoMes };
}

function calculoVariacao(atual, anterior){
    if (anterior === 0){
        return null;
    }

    const variacao = ((atual - anterior) / anterior) * 100;
    return variacao;
}

function mostrarLista(){
    listT.innerHTML = '';

    transacoes.forEach(function(transacao){
        const item = document.createElement('div');
        item.classList.add('item-transacao');

        item.innerHTML = `
            <span>${transacao.descricao || transacao.categoria}</span>
            <span>R$ ${transacao.valor.toFixed(2)}</span>
            <button class="btn-remover" data-id="${transacao.id}">Remover</button>
        `;

        listT.appendChild(item);
    });
}

function mostrarCards(){
    const totais = calculoTotais();

    const hoje = new Date();
    const mesAtual = calculoPorMes(hoje.getMonth(), hoje.getFullYear());

    const dataMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth() - 1, 1);
    const mesAnterior = calculoPorMes(dataMesAnterior.getMonth(), dataMesAnterior.getFullYear());

    document.getElementById('recTotal').textContent = `R$ ${totais.receitaTotal.toFixed(2)}`;
    document.getElementById('saldoTotal').textContent = `R$ ${totais.saldo.toFixed(2)}`;
    document.getElementById('gastoTotal').textContent = `R$ ${totais.gastoTotal.toFixed(2)}`;

    document.getElementById('recMes').textContent = `R$ ${mesAtual.receitaMes.toFixed(2)} este mês`;
    document.getElementById('saldoMes').textContent = `R$ ${mesAtual.saldoMes.toFixed(2)} este mês`;
    document.getElementById('gastoMes').textContent = `R$ ${mesAtual.gastoMes.toFixed(2)} este mês`;

    aplicarVariacao('recVariacao', mesAtual.receitaMes, mesAnterior.receitaMes);
    aplicarVariacao('saldoVariacao', mesAtual.saldoMes, mesAnterior.saldoMes);
    aplicarVariacao('gastoVariacao', mesAtual.gastoMes, mesAnterior.gastoMes);
}

function aplicarVariacao(idElemento, valorAtual, valorAnterior) {
    const elemento = document.getElementById(idElemento);
    const variacao = calculoVariacao(valorAtual, valorAnterior);

    elemento.classList.remove('variacao-positiva', 'variacao-negativa');

    if (variacao === null){
        elemento.textContent = 'Sem dados do mês anterior';
        return;
    }

    if (variacao >= 0){
        elemento.textContent = `+${variacao.toFixed(1)}% vs mês passado`;
        elemento.classList.add('variacao-positiva');
    } else {
        elemento.textContent = `${variacao.toFixed(1)}% vs mês passado`;
        elemento.classList.add('variacao-negativa');
    }
}

function mostrarGeral(){
    mostrarLista();
    mostrarCards();
}

function tipoValor(){
    if (itipo.value === 'receita'){
        categoriasReceita.classList.remove('oculto');
        categoriasGasto.classList.add('oculto');
    } else {
        categoriasGasto.classList.remove('oculto');
        categoriasReceita.classList.add('oculto');
    }
}

function validacao(){
    const grupoAtivo = itipo.value === 'receita' ? categoriasReceita : categoriasGasto;
    const selecionado = grupoAtivo.querySelector('input[type="radio"]:checked');

    if (!selecionado){
        alert('Selecione uma categoria antes de adicionar.');
        return false;
    }

    return true;
}

function pegarCategoriaSelecionada(){
    const grupoAtivo = itipo.value === 'receita' ? categoriasReceita : categoriasGasto;
    const selecionado = grupoAtivo.querySelector('input[type="radio"]:checked');
    return selecionado.value;
}

function salvarNoLocalStorage(){
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
}

function carregarDoLocalStorage(){
    const dados = localStorage.getItem('transacoes');

    if (dados){
        transacoes = JSON.parse(dados);
    }
}

itipo.addEventListener('change', tipoValor);

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    if (!validacao()){
        return;
    }

    const dados = {
        descricao: idescricao.value,
        valor: parseFloat(ivalor.value),
        tipo: itipo.value,
        categoria: pegarCategoriaSelecionada()
    };

    adicionar(dados);
    salvarNoLocalStorage();
    mostrarGeral();

    form.reset();
    tipoValor();
});

listT.addEventListener('click', function(evento){
    if (evento.target.classList.contains('btn-remover')){
        const id = Number(evento.target.dataset.id);
        remover(id);
        salvarNoLocalStorage();
        mostrarGeral();
    }
});

carregarDoLocalStorage();
mostrarGeral();
tipoValor();