function converterValor() {
  let elementoValor = document.getElementById("valor").value;
  let valor = parseFloat(elementoValor);

  let btnBitcoin = document.getElementById("bitcoin").selected;
  let btnReal = document.getElementById("real").selected;
  let btnEuro = document.getElementById("euro").selected;
  let btnIene = document.getElementById("iene").selected;
  let btnLibra = document.getElementById("libra").selected;
  let btnPeso = document.getElementById("peso").selected;

  let elementoValorConvertido = document.getElementById("valor-convertido");

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
  let valorBitcoin = valor * 0.000053;
  elementoValorConvertido.innerHTML =
    "O resultado em bitcoins é de " + Intl.NumberFormat("en-US", { style: 'currency', currency: 'BTC', maximumSignificantDigits: 6 }).format(valorBitcoin);
}

function paraReal(valor, elementoValorConvertido) {
  let valorReal = valor * 5.09;
  elementoValorConvertido.innerHTML =
    "O resultado em reais é de " + Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(valorReal);
}

function paraEuro(valor, elementoValorConvertido) {
  let valorEuro = valor * 0.99;
  elementoValorConvertido.innerHTML =
    "O resultado em euros é de " + Intl.NumberFormat("de-DE", { style: 'currency', currency: 'EUR' }).format(valorEuro);
}

function paraIene(valor, elementoValorConvertido) {
  let valorIene = valor * 142.96;
  elementoValorConvertido.innerHTML =
    "O resultado em ienes é de " + Intl.NumberFormat("ja-JP", { style: 'currency', currency: 'JPY' }).format(valorIene);
}

function paraLibra(valor, elementoValorConvertido) {
  let valorLibra = valor * 0.87;
  elementoValorConvertido.innerHTML =
    "O resultado em libras é de " + Intl.NumberFormat("en-GB", { style: 'currency', currency: 'GBP' }).format(valorLibra);
}

function paraPeso(valor, elementoValorConvertido) {
  let valorPeso = valor * 20.04;
  elementoValorConvertido.innerHTML =
    "O resultado em pesos é de " + Intl.NumberFormat("es-MX", { style: 'currency', currency: 'MXN' }).format(valorPeso);
}