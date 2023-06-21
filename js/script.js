document.addEventListener("DOMContentLoaded", function() {
  const jogadores = elenco.filter(jogador => jogador.elenco === 'masculino');
  const jogadoras = elenco.filter(jogador => jogador.elenco === 'feminino');

  const criarElemento = (tag, atributos = {}) => {
    const elemento = document.createElement(tag);
    Object.entries(atributos).forEach(([chave, valor]) => {
      elemento[chave] = valor;
    });
    return elemento;
  };

  const adicionarDetalhes = (elemento, jogador) => {
    const img = criarElemento('img', { src: jogador.imagem });
    const nome = criarElemento('h5', { innerHTML: jogador.nome });
    elemento.appendChild(img);
    elemento.appendChild(nome);
    elemento.addEventListener('click', function() {
      window.location.href = "./detalhes.html?nome=" + jogador.nome;
    });
  };

  const jogadoresList = document.getElementById('jogadoresList');

  for (const jogadora of jogadoras) {
    const article = criarElemento('article');
    adicionarDetalhes(article, jogadora);
    jogadorasList.appendChild(article);
  }

  for (const jogador of jogadores) {
    const article = criarElemento('article');
    adicionarDetalhes(article, jogador);
    jogadoresList.appendChild(article);
  }
});
