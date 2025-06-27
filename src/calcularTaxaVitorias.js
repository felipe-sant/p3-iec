function calcularTaxaVitorias(vitorias, partidas) {
  if (partidas === 0) {
    return "0%";
  }
  const taxaVitorias = ((vitorias / partidas) * 100).toFixed(0) + "%";
  return taxaVitorias;
} 

module.exports = calcularTaxaVitorias;