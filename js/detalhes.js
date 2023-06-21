document.addEventListener("DOMContentLoaded", function() {
  var searchParams = new URLSearchParams(window.location.search);
  var nomeUrl = searchParams.get("nome");

  const jogadorEncontrado = elenco.find(jogador => jogador.nome === nomeUrl);

  var nome = document.getElementById('nome');
  var posicao = document.getElementById('posicao');
  var sobre = document.getElementById('sobre');
  var nome_completo = document.getElementById('nome_completo');
  var nascimento = document.getElementById('nascimento'); 
  var altura = document.getElementById('altura');
  var imagem = document.getElementById('imagem');

  nome.innerText = nomeUrl;
  posicao.innerText = jogadorEncontrado.posicao;
  imagem.src = jogadorEncontrado.imagem;
  sobre.innerText = 'Mais informações: ' + jogadorEncontrado.descricao;
  nome_completo.innerText = 'Nome completo: ' + jogadorEncontrado.nome_completo;
  altura.innerText = 'Altura: ' + jogadorEncontrado.altura;
  nascimento.innerText = 'Nascimento: ' + jogadorEncontrado.nascimento;
});

