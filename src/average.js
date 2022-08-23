/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const a = [3, '4', 5];

const check = (array) => {
  let result = false;
  array.forEach((value) => {
    if (typeof value === 'string') result = true;
  });
  return result;
};

const media = (arr) => arr.reduce((acc, value) => acc + value, 0) / arr.length;

const average = (arr) => {
  if (!arr.length || check(arr)) return undefined;
  return Math.round(media(arr));
};

console.log(average(a));

module.exports = average;
