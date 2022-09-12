let coxinha = prompt("Você quer coxinha?")
let soma = 0
while (coxinha == "s" && coxinha !== "n") {
  coxinha = prompt ("Gostaria de mais?")
  soma += 2.5
}
console.log("A conta ficou em ",soma)
