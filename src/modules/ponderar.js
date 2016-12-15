import { Categorice } from './pareto'


class Strength {
  constructor(id, items, value) {
    this.clusterID = id;
    this.items = items;
    this.value = value;
  }
}

/**
* @description
* Calcula para un conjunto de items cuanta veces se venden de juntos.
* @param {Array} items
* @param {Array} sales
* @returns {Number} frequencia normalizada.
*/

function FrequencyTogether ( items, sales ) {
  let contains = true;
  let acc = 0;
  let totalSales = sales.length;
  for (const s of sales) {
    for (const i of items) {
      if (!s.items.includes(i)) {
        contains = false;
      }
    }
    if (contains) {
      acc++;
    }
    contains = true;
  }

  return (acc / totalSales);
}


/**
* @description
* Calcula la fortaleza de los items large y medium de un cluster.
* @param {Cluster} cluster
* @param {Number} support
* @param {Number} ceiling
* @returns {Array<Strength>} arreglo de fortalezas.
*/

export function WeigthCluster(sales, clusters, support, ceiling ) {
  let out = [];

  // TODO: Categorizar con pareto, y agregar a la ponderación.

  //Para cada cluster
  clusters.forEach(cluster => {

    console.log(cluster);
    let sales =  cluster.transactions;

    //Entre larges
    let larges = cluster.largeI(support);
    if (larges.size > 1) {
        out.push(new Strength(cluster.id, larges, FrequencyTogether(larges, sales)));
    }

    //Cada medium con cada large
    let mediums = cluster.mediumI(support, ceiling);
    for (const m of mediums) {
      for (const l of larges) {
        let items = new Set([l , m]);
        out.push(new Strength(cluster.id, items, FrequencyTogether(items, sales)));
      }
      if (larges.size > 1) {
        //Todos los larges y cada medium
        let items = new Set(larges);
        items.add(m);
        out.push(new Strength(cluster.id, items, FrequencyTogether(items, sales)));
      }
    }
  });

  out.sort((a, b) => {
    return (b.value - a.value);
  });

  return out;
}
