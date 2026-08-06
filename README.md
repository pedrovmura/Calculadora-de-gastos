<h1>Calculadora de Gastos</h1>

<a href="#pt-br">PT-BR</a> | <a href="#en-us">EN-US</a>

<h2 id="pt-br">PT-BR:</h2>

<p>Aplicação web para controle pessoal de receitas e gastos, com cálculos automáticos, histórico por mês e visualização gráfica por categoria.</p>
<a href="https://pedrovmura.github.io/Calculadora-de-gastos/" target="_blank" rel="noopener noreferrer">Acesse o projeto por aqui</a>

<h3>Sobre o projeto</h3>

<p>Ferramenta para registrar entradas e saídas financeiras do dia a dia. Além de registrar cada lançamento, o app calcula automaticamente o saldo total, os valores do mês atual e a variação percentual em relação ao mês anterior, auxiliando o usuário no seu controle financeiro.</p>

<p>Desenvolvido com HTML, CSS e JavaScript puro, sem frameworks, como projeto de estudo e portfólio.</p>

<h3>Funcionalidades</h3>

<ul>
    <li>Cadastro de receitas e gastos, com categorias específicas para cada tipo</li>
    <li>Cálculo automático de saldo total, valores do mês e variação percentual vs. mês anterior</li>
    <li>Lista de lançamentos separada por receitas e gastos</li>
    <li>Gráfico de gastos por categoria</li>
    <li>Persistência de dados via <code>localStorage</code>, para os lançamentos continuarem salvos quando o usuário fechar e reabrir o navegador</li>
    <li>Layout responsivo, adaptado para computadores, tablets e celular</li>
</ul>

<h3>Tecnologias utilizadas</h3>

<ul>
    <li><strong>HTML5</strong> — estrutura semântica</li>
    <li><strong>CSS3</strong> — variáveis CSS, Flexbox, media queries para responsividade</li>
    <li><strong>JavaScript</strong> — manipulação de DOM, lógica de cálculo, persistência local</li>
    <li><strong><a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a></strong> — biblioteca externa usada para o gráfico de categorias</li>
</ul>

<h3>Como rodar localmente</h3>

<p>Como é um projeto estático, sem backend:</p>

<p>
    no bash:<br>
    git clone https://github.com/pedrovmura/Calculadora-de-gastos.git<br>
    cd Calculadora-de-gastos
</p>

<p>E abrir o arquivo <code>index.html</code> no navegador.</p>

<h3>Decisões técnicas</h3>

<ul>
    <li><strong>JS por escolha</strong> — o projeto foi feito sem frameworks propositalmente, por ser uma linguagem que eu tenho conhecimento e capacidade de usar em projetos.</li>
    <li><strong>localStorage como persistência</strong> — por ser um projeto client-side sem backend, o <code>localStorage</code> foi a solução escolhida para manter os dados entre sessões, com o estado da aplicação mantido em memória durante o uso e sincronizado a cada alteração.</li>
    <li><strong>Categorias separadas por tipo</strong> — receitas e gastos têm conjuntos de categorias distintos, exibidos dinamicamente conforme o tipo selecionado, evitando combinações sem sentido, como "Salário" sendo categoria de gasto.</li>
</ul>

<h3>Autor</h3>

<p>Projeto desenvolvido como parte dos meus estudos em desenvolvimento web, buscando aplicar HTML, CSS e JavaScript em uma ferramenta com utilidade real.</p>

<a href="https://www.linkedin.com/in/pedro-vama-murakami-8102403b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="https://www.instagram.com/pedrovmura/" target="_blank" rel="noopener noreferrer">Instagram</a>

---

<h2 id="en-us">EN-US:</h2>

<p>Web application for personal income and expense tracking, with automatic calculations, monthly history, and a category-based chart.</p>
<a href="https://pedrovmura.github.io/Calculadora-de-gastos/" target="_blank" rel="noopener noreferrer">Access the project here</a>

<h3>About the project</h3>

<p>A tool to register daily income and expenses. Besides recording each transaction, the app automatically calculates the total balance, current month values, and the percentage variation compared to the previous month, helping the user keep track of their finances.</p>

<p>Built with plain HTML, CSS and JavaScript, with no frameworks, as a study and portfolio project.</p>

<h3>Features</h3>

<ul>
    <li>Registration of income and expenses, with categories specific to each type</li>
    <li>Automatic calculation of total balance, monthly values, and percentage variation vs. previous month</li>
    <li>Transaction list separated by income and expenses</li>
    <li>Expense chart broken down by category</li>
    <li>Data persistence via <code>localStorage</code>, so transactions remain saved when the user closes and reopens the browser</li>
    <li>Responsive layout, adapted for desktop, tablet and mobile</li>
</ul>

<h3>Technologies used</h3>

<ul>
    <li><strong>HTML5</strong> — semantic structure</li>
    <li><strong>CSS3</strong> — CSS variables, Flexbox, media queries for responsiveness</li>
    <li><strong>JavaScript</strong> — DOM manipulation, calculation logic, local persistence</li>
    <li><strong><a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a></strong> — external library used for the category chart</li>
</ul>

<h3>Running locally</h3>

<p>As this is a static project with no backend:</p>

<p>
    in bash:<br>
    git clone https://github.com/pedrovmura/Calculadora-de-gastos.git<br>
    cd Calculadora-de-gastos
</p>

<p>Then open the <code>index.html</code> file in your browser.</p>

<h3>Technical decisions</h3>

<ul>
    <li><strong>Vanilla JS by choice</strong> — the project was built without frameworks on purpose, as a language I'm comfortable using in projects and to practice fundamentals.</li>
    <li><strong>localStorage as persistence</strong> — since this is a client-side project with no backend, <code>localStorage</code> was chosen to keep data between sessions, with the app's state held in memory during use and synced on every change.</li>
    <li><strong>Categories split by type</strong> — income and expenses have distinct sets of categories, shown dynamically based on the selected type, avoiding nonsensical combinations (e.g. "Salary" as an expense category).</li>
</ul>

<h3>Author</h3>

<p>Project built as part of my web development studies, applying HTML, CSS and JavaScript to a tool with real-world usefulness.</p>

<a href="https://www.linkedin.com/in/pedro-vama-murakami-8102403b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="https://www.instagram.com/pedrovmura/" target="_blank" rel="noopener noreferrer">Instagram</a>