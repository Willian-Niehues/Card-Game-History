// app.js
function criaCartao(categoria, pergunta, resposta){
  const container = document.getElementById('container');
  if(!container){
    console.error('Container #container não encontrado no DOM');
    return;
  }

  const cartao = document.createElement('article');
  cartao.className = 'cartao';

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${categoria}</h3>
      <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
      </div>
      <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
      </div>
    </div>
  `;

  // Toggle flip ao clicar (mantém estado)
  cartao.addEventListener('click', function (e) {
    // evita virar se clicar em um link futuro dentro do card
    if (e.target.tagName.toLowerCase() === 'a') return;
    cartao.classList.toggle('is-flipped');
  });

  container.appendChild(cartao);
}
