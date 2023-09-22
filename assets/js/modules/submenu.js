// Seleciona todos os elementos com o atributo "data-dropdown"
const submenu = document.querySelectorAll("[data-dropdown]");

// Função para lidar com os submenus
export function SubMenu() {
  submenu.forEach((menu) => {
    // Adiciona os eventos de "click" e "touchstart" a cada submenu
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  // Função para lidar com o clique em um submenu
  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");

    // Chama a função outSideClick para lidar com cliques fora do submenu
    outSideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }

  // Função para lidar com cliques fora do submenu
  function outSideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        // Adiciona os eventos ao elemento HTML (html) para verificar cliques fora do submenu
        html.addEventListener(userEvent, handleOutSideClick);
      });

      element.setAttribute(outside, "");
    }

    function handleOutSideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          // Remove os eventos após o clique fora do submenu
          html.removeEventListener(userEvent, handleOutSideClick);
        });

        // Executa a função de callback (remoção da classe "active" no submenu)
        callback();
      }
    }
  }
}
