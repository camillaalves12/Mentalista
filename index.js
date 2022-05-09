var numeroSecreto = parseInt(Math.random() * 20);

function Chutar() {
  var resultado = document.getElementById("resultado");

  var chute = document.getElementById("valor").value;
  console.log(numeroSecreto);

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns!! Você acertou";
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "Você errou. o número secreto é um pouco menor ";
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "Você errou, o número secreto é um pouco maior";
  }
}
function JogarNovamente() {
  var btn = document.querySelector("#reiniciar");
  btn.addEventListener("click", function () {
    location.reload();
  });
}
