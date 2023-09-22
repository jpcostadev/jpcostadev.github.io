// Seleciona o elemento HTML com o ID "titleAnimed" e armazena-o em uma variável chamada "titulo"
const titulo = document.getElementById("titleAnimed");

// Texto que será animado letra por letra
const text = "Explorando o Mundo do Desenvolvimento";

// Função principal que controla a animação do texto
export function AnimeTitle() {
  // Variável para rastrear a posição atual no texto
  let index = 0;

  // Função que anima o texto
  function animeText() {
    // Verifica se ainda há caracteres a serem adicionados ao texto
    if (index < text.length) {
      // Adiciona o próximo caractere do texto ao elemento "titulo"
      titulo.textContent += text.charAt(index);

      // Incrementa o índice para apontar para o próximo caractere
      index++;

      // Configura um temporizador para chamar a função "animeText" novamente após 100 milissegundos
      setTimeout(animeText, 100);
    }
  }

  // Inicia a animação do texto chamando a função "animeText"
  animeText();
}
