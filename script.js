const valueInput = document.querySelector(".valor");

valueInput.addEventListener("input", function (event) {
  event.target.value = event.target.value.replace(/[^0-1]/g, "");
});

const buttonSubmit = document.querySelector(".button-submit");

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  convert();
});

function convert() {
  let newArray = valueInput.value.split("");
  let tamanho = newArray.length;
  let decimal = 0;
  let aux = tamanho - 1;

  for (let i = 0; tamanho > i; i++) {
    decimal += Number(newArray[i]) * 2 ** aux;
    aux--;
  }
  return decimal;
  // return console.log(decimal);
  //   alert(tamanho);
}
