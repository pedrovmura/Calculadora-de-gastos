<h1>Calculadora de Gastos</h1>

<p>Aplicação web para controle pessoal de receitas e gastos, com cálculos automáticos, histórico por mês e visualização gráfica por categoria.</p>
<a href="https://pedrovmura.github.io/Calculadora-de-gastos/" target="_blank">Acesse o projeto por aqui</a>

<h2>Sobre o projeto</h2>

<p>Ferramenta para registrar entradas e saídas financeiras do dia a dia. Além de registrar cada lançamento, o app calcula automaticamente o saldo total, os valores do mês atual e a variação percentual em relação ao mês anterior, auxiliando o usuário no seu controle financeiro.</p>

<p>Desenvolvido com HTML, CSS e JavaScript puro, sem frameworks, como projeto de estudo e portfólio.</p>

<h2>Funcionalidades</h2>

<ul>
    <li>Cadastro de receitas e gastos, com categorias específicas para cada tipo</li>
    <li>Cálculo automático de saldo total, valores do mês e variação percentual vs. mês anterior</li>
    <li>Lista de lançamentos separada por receitas e gastos</li>
    <li>Gráfico de gastos por categoria</li>
    <li>Persistência de dados via <code>localStorage</code>, para os lançamentos continuarem salvos quando o usuário fechar e reabrir o navegador</li>
    <li>Layout responsivo, adaptado para computadores, tablets e celular</li>
</ul>

<h2>Tecnologias utilizadas</h2>

<ul>
    <li><strong>HTML5</strong> — estrutura semântica</li>
    <li><strong>CSS3</strong> — variáveis CSS, Flexbox, media queries para responsividade</li>
    <li><strong>JavaScript</strong> — manipulação de DOM, lógica de cálculo, persistência local</li>
    <li><strong><a href="https://www.chartjs.org/" target="_blank">Chart.js</a></strong> — biblioteca externa usada para o gráfico de categorias</li>
</ul>

<h2>Como rodar localmente</h2>

<p>Como é um projeto estático, sem backend:</p>

<p>
    no bash:<br>
    git clone https://github.com/pedrovmura/Calculadora-de-gastos.git<br>
    cd Calculadora-de-gastos
</p>

<p>E abrir o arquivo <code>index.html</code> no navegador.</p>

<h2>Decisões técnicas</h2>

<ul>
    <li><strong>JS por escolha</strong> — o projeto foi feito sem frameworks propositalmente, por ser uma linguagem que eu tenho conhecimento e capacidade de usar em projetos.</li>
    <li><strong>localStorage como persistência</strong> — por ser um projeto client-side sem backend, o <code>localStorage</code> foi a solução escolhida para manter os dados entre sessões, com o estado da aplicação mantido em memória durante o uso e sincronizado a cada alteração.</li>
    <li><strong>Categorias separadas por tipo</strong> — receitas e gastos têm conjuntos de categorias distintos, exibidos dinamicamente conforme o tipo selecionado, evitando combinações sem sentido, como "Salário" sendo categoria de gasto.</li>
</ul>

<h2>Autor</h2>

<p>Projeto desenvolvido como parte dos meus estudos em desenvolvimento web, buscando aplicar HTML, CSS e JavaScript em uma ferramenta com utilidade real.</p>

<a href="https://www.linkedin.com/in/pedro-vama-murakami-8102403b6/" target="_blank">LinkedIn</a>
<a href="https://www.instagram.com/pedrovmura/" target="_blank">Instagram</a>