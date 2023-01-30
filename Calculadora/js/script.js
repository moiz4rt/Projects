const num = document.querySelectorAll(".num");
const res = document.querySelector(".res");
const tela = document.querySelector(".tela");
const limpa = document.querySelector(".clear");


res.addEventListener("click", resultado);
num.forEach((e) => e.addEventListener("click", write));
limpa.addEventListener("click", limpar);


function write() {
  var cur = this.innerHTML;
  if(tela.innerHTML == "" && (cur == " + " || cur == " - " || cur == " / " || cur == " * " || cur == " . ")) {tela.innerHTML = ""; return;}
  tela.innerHTML += cur;
}

function resultado() {
  var final = eval(tela.innerHTML);
  tela.innerHTML = final;
}

function limpar() {
  tela.innerHTML = "";
}
