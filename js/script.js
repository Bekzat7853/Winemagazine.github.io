const burger = document.querySelector(".icons__item:last-child"),
  cart = document.querySelector(".cart"),
  wrap = document.querySelector(".wrap"),
  close = document.querySelector(".close");

burger.addEventListener("click", function () {
  cart.style.display = "block";
  wrap.style.width = "80%";
});

close.addEventListener("click", function () {
  cart.style.display = "none";
  wrap.style.width = "100%";
});
