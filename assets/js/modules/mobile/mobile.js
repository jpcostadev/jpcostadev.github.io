const btnMenu = document.querySelector("#btnMobile");
const nav = document.querySelector("#nav");
const links = document.querySelectorAll("#nav ul li a");

export function Mobile() {
  function handleClick(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", handleClick);
  });

  btnMenu.addEventListener("click", handleClick);
  btnMenu.addEventListener("touchstart", handleClick);
}
