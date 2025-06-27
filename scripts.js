const products = document.querySelectorAll(".product");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let current = 0;

function showProduct(index) {
  products.forEach((el, i) => {
    el.classList.remove("active", "exit-left");
    
    const img = el.querySelector(".product-img");
    // Reseta a animação para cada imagem
    img.style.opacity = "0";
    img.style.transform = "rotate(-10deg) translateY(-20px)";
  });

  if (index < 0) index = products.length - 1;
  if (index >= products.length) index = 0;

  products[index].classList.add("active");

  const imgAtual = products[index].querySelector(".product-img");
  // Força o reflow para reiniciar a animação
  void imgAtual.offsetWidth;

  // Aplica o estilo final para animar
  imgAtual.style.opacity = "1";
  imgAtual.style.transform = "rotate(0deg) translateY(0)";

  // Adiciona exit-left no slide anterior
  if (current !== index) {
    products[current].classList.add("exit-left");
  }

  current = index;
}

rightBtn.addEventListener("click", () => {
  let next = current + 1;
  if (next >= products.length) next = 0;
  showProduct(next);
});

leftBtn.addEventListener("click", () => {
  let prev = current - 1;
  if (prev < 0) prev = products.length - 1;
  showProduct(prev);
});

