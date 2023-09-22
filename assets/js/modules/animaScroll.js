const listas = document.querySelectorAll(".tecnologias-info ul li");
const sobre = document.querySelectorAll(".ul-info li");
console.log(sobre);

export function animaScroll() {
  function animarScroll() {
    listas.forEach((lista) => {
      const topLista = lista.getBoundingClientRect().top;

      if (topLista < 400) {
        lista.classList.add("ativo");
      } else {
        lista.classList.remove("ativo");
      }
    });
  }

  function animarSobre() {
    sobre.forEach((s) => {
      const topLista = s.getBoundingClientRect().top;

      if (topLista < 300) {
        s.classList.add("ativo");
      } else {
        // s.classList.remove("ativo");
      }
    });
  }

  window.addEventListener("scroll", animarSobre);
  window.addEventListener("scroll", animarScroll);
}
