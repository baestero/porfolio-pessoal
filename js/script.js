function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let icon = document.querySelector(".icon");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    icon.style.transform = "rotate(0deg)"; // Rotação de volta para a posição inicial (se necessário)
    setTimeout(() => {
      icon.src = "./icons/menu_white_36dp.svg"; // Altera a imagem do ícone
    }, 300); // Tempo correspondente à transição CSS (0.3s)
  } else {
    menuMobile.classList.add("open");
    icon.style.transform = "rotate(180deg)"; // Rotação (se desejado)
    setTimeout(() => {
      icon.src = "./icons/close_white_36dp.svg"; // Altera a imagem do ícone
    }, 300); // Tempo correspondente à transição CSS (0.3s)
  }
}

const animacao = document.querySelectorAll(".js-scroll");

animacao.forEach((item) => {
  item.classList.add("ativo1");
});

const animacaoMenu = document.querySelectorAll(".js-scroll-menu");

animacaoMenu.forEach((item) => {
  item.classList.add("ativo2");
});
