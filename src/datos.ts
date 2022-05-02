let Base = document.getElementById("Base");
let Altura = document.getElementById("Altura");
btnBase.addEventListener("click", () => {
  console.log("el dato ingresado es ", Base.value);
});
btnAltura.addEventListener("click", () => {
  console.log("el dato ingresado es ", Altura.value);
});
btnCalcular.addEventListener("click", () => {
  console.log("el dato ingresado es ", Base.value * Altura.value);
});
