<h1>Dog Pokedex - Responsivo com HTML, CSS e JavaScript</h1>

  <p>Este projeto é uma Pokedex de cachorros abandonados, desenvolvida em HTML, CSS e JavaScript, com foco em responsividade e adaptação para diferentes tamanhos de tela. A interface permite que os usuários visualizem informações dos cachorros disponíveis em um carrossel interativo e uma seção detalhada sobre cada animal.</p>

  <h2>Features</h2>
    <ul>
        <li><strong>Layout Responsivo</strong>: O site é totalmente responsivo, adaptando-se bem para dispositivos móveis, tablets e desktops.</li>
        <li><strong>Design com CSS Customizado</strong>: Utiliza cores sólidas em vez de fundos transparentes para melhor visibilidade.</li>
        <li><strong>Carrossel Interativo</strong>: Exibe um carrossel com fotos dos cachorros que permite uma navegação suave e intuitiva.</li>
        <li><strong>Seção Detalhada</strong>: Mostra informações detalhadas sobre cada cachorro, com descrição e foto ampliada.</li>
        <li><strong>Menu de Navegação Fixo</strong>: O menu superior permanece fixo e fácil de acessar.</li>
        <li><strong>Seção Sobre a ONG e Contato</strong>: Informações sobre a ONG e como entrar em contato.</li>
    </ul>

   <h2>Responsividade</h2>
    <p>O design é otimizado para diferentes tamanhos de tela, com ajustes específicos para resoluções:</p>
    <ul>
        <li><strong>Para telas até 768px</strong>: O tamanho das fontes e imagens é ajustado para melhorar a legibilidade e experiência de navegação.</li>
        <li><strong>Para telas até 480px</strong>: A fonte e o layout são ainda mais reduzidos para otimizar o espaço disponível sem perder a clareza das informações.</li>
    </ul>

   <h3>Exemplo de Ajustes Responsivos:</h3>
    <pre><code>
@media (max-width: 768px) {
    #home h1 {
        font-size: 2.5rem; /* Tamanho ajustado para telas até 768px */
    }
}

@media (max-width: 480px) {
    #home h1 {
        font-size: 2rem; /* Tamanho ainda menor para telas até 480px */
    }
}
    </code></pre>

   <h2>Como Usar</h2>
    <ol>
        <li><strong>Clone o repositório:</strong></li>
        <pre><code>git clone https://github.com/seu-usuario/dog-pokedex.git</code></pre>

  <li><strong>Abra o projeto no seu navegador:</strong></li>
     <p>Abra o arquivo <code>index.html</code> diretamente em seu navegador favorito para visualizar o projeto.</p>

   <li><strong>Personalize o conteúdo:</strong></li>
        <p>As imagens e textos podem ser alterados diretamente nos arquivos HTML e CSS para se adequar às necessidades do seu projeto.</p>
    </ol>

   <h2>Melhorias Futuras</h2>
    <ul>
        <li>Adicionar integração com uma API para carregar dinamicamente as informações dos cachorros.</li>
        <li>Implementar busca por cachorros com filtro por raça ou idade.</li>
        <li>Adicionar suporte a QR Code para identificação dos animais.</li>
    </ul>

  <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>HTML5</strong>: Estrutura da página.</li>
        <li><strong>CSS3</strong>: Estilos personalizados para criar um layout visual atraente e responsivo.</li>
        <li><strong>JavaScript</strong>: Implementação da lógica para navegação no carrossel e interação com o usuário.</li>
    </ul>

  <h2>Contribuições</h2>
    <p>Contribuições são bem-vindas! Se você tiver alguma sugestão de melhoria ou novas funcionalidades, sinta-se à vontade para abrir uma <code>issue</code> ou fazer um <code>fork</code> e enviar um <code>pull request</code>.</p>

  <h2>Licença</h2>
    <p>Este projeto está licenciado sob a licença MIT - veja o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.</p>
