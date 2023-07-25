function verifyParOrImpar(sum) {
  if (sum % 2 === 0) {
      alert("A soma é par");
  } else {
      alert("A soma é ímpar");
  }
}

let firstNumber = prompt("Digite o primeiro número:");
let secondNumber = prompt("Digite o segundo número:");

// Converter os números para números inteiros
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;

alert("A soma é: " + sum);
alert("A subtração é: " + (firstNumber - secondNumber));
alert("A divisão é: " + (firstNumber / secondNumber).toFixed(1));
alert("A multiplicação é: " + (firstNumber * secondNumber));
alert("O resto é: " + (firstNumber % secondNumber));

verifyParOrImpar(sum);

if (firstNumber === secondNumber) {
  alert("Os números são iguais");
} else {
  alert("Os números são diferentes");
}
