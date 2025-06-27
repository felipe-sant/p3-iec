const calcularTaxaVitorias = require('./calcularTaxaVitorias');

test("O jogador venceu 3 de 5 partidas", () => {
  const partidas = 5;
  const vitorias = 3;
  const taxaVitorias = calcularTaxaVitorias(vitorias, partidas);
  expect(taxaVitorias).toBe("60%");
})