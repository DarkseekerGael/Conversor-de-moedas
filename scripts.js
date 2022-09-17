function converterValor() {
    let valorElemento = document.getElementById("valor").value;
    let valor = parseFloat(valorElemento);
  
    let botaoBitcoin = document.getElementById("bitcoin").checked;
    let botaoReal = document.getElementById("real").checked;
    let botaoEuro = document.getElementById("euro").checked;
  
    let elementoValorConvertido = document.getElementById("valorConvertido");
  
    if (valor <= 0) {
      let valorConvertido = "Digite um valor superior a zero!";
      elementoValorConvertido.innerHTML = valorConvertido;
    } else if (botaoReal === true) {
      paraReal(valor, elementoValorConvertido);
    } else if (botaoBitcoin === true) {
      paraBitcoin(valor, elementoValorConvertido);
    } else if (botaoEuro === true) {
      paraEuro(valor, elementoValorConvertido);
    }
  }
  
  function paraBitcoin(valor, elementoValorConvertido) {
    let valorBitcoin = valor * 0.000045;
    elementoValorConvertido.innerHTML =
      "O resultado em bitcoin é de BTC " + valorBitcoin.toFixed(6);
  }
  
  function paraReal(valor, elementoValorConvertido) {
    let valorReal = valor * 5.09;
    elementoValorConvertido.innerHTML =
      "O resultado em real é de R$ " + valorReal.toFixed(2);
  }
  
  function paraEuro(valor, elementoValorConvertido) {
    let valorEuro = valor * 0.99;
    elementoValorConvertido.innerHTML =
      "O resultado em euro é de € " + valorEuro.toFixed(2);
  }
  