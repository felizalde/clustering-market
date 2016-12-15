/**
*  Búsqueda binaria
* @param {Array} array en donde busco la posición del elemento.
* @param {Number} elem
* @returns {Number} indice donde se encuentra el elemento
*                   || posicion a insertar si no se encuentra.
*/

function binarySearch ( array, elem ) {
  let min = 0;
  let max = array.length - 1;
  let currentIndex;
  let currentElement;

  while (min <= max) {
    currentIndex = (min + max) / 2 | 0;
    currentElement = array[currentIndex];

    if (currentElement > elem ) {
      max = currentIndex - 1;
    } else {
      if (currentElement < elem) {
        min = currentIndex + 1;
      } else {
        return currentIndex;
      }
    }
  }

  return currentElement < elem ? currentIndex + 1 : currentIndex;

}

/**
* Calcula la frecuencia de cada item
* @param {Array} items
* @returns {Array<Object>} arreglo con par item - valor
*/

function freqTotal ( items ) {
  items.sort();
  return items.reduce( (prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
}


/**
* Categoriza los elementos dependiendo de su ocurrencia.
* @param {Array} sales arreglo de ventas.
*
*/

export function Categorice ( sales ) {

  // Genero todos los items.
  let items = [];
  sales.forEach( (s) => {
    s.items.forEach( (i) => {
      items.push(i);
    });
  });

  // const SIZE = items.length;
  const SIZE = sales.length;

  //calculo la frecuencia de los items
  let freq = freqTotal(items);


  //los ordeno por frecuencia
  let sorted = [];
  let freq_acc = [];

  const KEYS = Object.keys(freq);
  for (const k of KEYS) {
    //TODO: ((FRECUENCIA[K] * GANANCIA_UNIDAD[K]) / GANANCIA_TOTAL);
    freq[k] = freq[k] / SIZE;
    let index = binarySearch(freq_acc, freq[k]);
    freq_acc.splice(index, 0, freq[k])
    sorted.splice(index, 0, k);
  }
  sorted.reverse();

  //calculo accum y categorizo
  let A = [];
  let B = [];
  let C = [];
  let acc = 0;
  for (const k of sorted) {
    acc += freq[k];
    if (acc < 0.8) {
      A.push(k);
    } else if (acc < 0.96) {
      B.push(k);
    } else {
      C.push(k);
    }
  }

  let out = new Map();
  out.set('A', A);
  out.set('B', B);
  out.set('C', C);

  return out;
}
