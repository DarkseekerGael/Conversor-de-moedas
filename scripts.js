function converterValor() {
  let elementoValor = document.getElementById("valor").value;
  let valor = parseFloat(elementoValor);

  let btnBitcoin = document.getElementById("bitcoin").selected;
  let btnReal = document.getElementById("real").selected;
  let btnEuro = document.getElementById("euro").selected;
  let btnIene = document.getElementById("iene").selected;
  let btnLibra = document.getElementById("libra").selected;
  let btnPeso = document.getElementById("peso").selected;

  let elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor <= 0) {
    elementoValorConvertido.innerHTML = "Digite um valor superior a zero";
  } else if (Number.isNaN(valor)) {
    elementoValorConvertido.innerHTML = "Digite um valor a ser convertido";
  } else if (btnReal == true) {
    paraReal(valor, elementoValorConvertido);
  } else if (btnBitcoin == true) {
    paraBitcoin(valor, elementoValorConvertido);
  } else if (btnEuro == true) {
    paraEuro(valor, elementoValorConvertido);
  } else if (btnIene == true) {
    paraIene(valor, elementoValorConvertido);
  } else if (btnLibra == true) {
    paraLibra(valor, elementoValorConvertido);
  } else if (btnPeso == true) {
    paraPeso(valor, elementoValorConvertido);
  }
}

function paraBitcoin(valor, elementoValorConvertido) {
  let valorBitcoin = valor * 0.000045;
  elementoValorConvertido.innerHTML =
    "O resultado em bitcoins é de ₿" + valorBitcoin.toFixed(6);
}

function paraReal(valor, elementoValorConvertido) {
  let valorReal = valor * 5.09;
  elementoValorConvertido.innerHTML =
    "O resultado em reais é de R$" + valorReal.toFixed(2);
}

function paraEuro(valor, elementoValorConvertido) {
  let valorEuro = valor * 0.99;
  elementoValorConvertido.innerHTML =
    "O resultado em euros é de €" + valorEuro.toFixed(2);
}

function paraIene(valor, elementoValorConvertido) {
  let valorIene = valor * 142.96;
  elementoValorConvertido.innerHTML = 
    "O resultado em ienes é de ¥" + valorIene.toFixed(2);
}

function paraLibra(valor, elementoValorConvertido) {
  let valorLibra = valor * 0.87;
  elementoValorConvertido.innerHTML = 
    "O resultado em libras é de $" + valorLibra.toFixed(2);
}

function paraPeso(valor, elementoValorConvertido) {
  let valorPeso = valor * 20.04;
  elementoValorConvertido.innerHTML = 
    "O resultado em pesos é de $" + valorPeso.toFixed(2);
}