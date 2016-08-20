export class Cluster{
    constructor(id){
        this.id = id;
        this.transactions = new Array();
        this.support = new Map();
    }

    add(transaction){
        this.transactions.push(transaction);
        for(const i of transaction.items){
            if(this.support.has(i)){
                const cant = this.support.get(i)+1;
                this.support.set(i,cant);
            }else{
                this.support.set(i, 1);
            }
        }
    }

    pop(){
        for(const i of this.transactions.pop().items){
            if(this.support.get(i) == 1){
                this.support.delete(i);
            }else{
                const cant = this.support.get(i)-1;
                this.support.set(i, cant);
            }
        }
    }

    remove(transaction){
        let index = this.transactions.indexOf(transaction);//Update history.
        if (index > -1){
            this.transactions.splice(index, 1);
            for (const i of transaction.items){
                if(this.support.get(i) == 1){
                    this.support.delete(i);
                }else{
                    const cant = this.support.get(i)-1;
                    this.support.set(i, cant);
                }
            }
        }
    }

    getSize(){
        return this.transactions.length;
    }

    support(){
        return this.support;
    }

    transactions(){
        return this.transactions;
    }

    smallI(E){
        let out = new Set();
        for (const entry of this.support.entries()){
            if ((entry[1]/this.transactions.length) < E){
                out.add(entry[0]);
            }
        }
        return out;
    }

    largeI(S){
        let out = new Set();
        for (const entry of this.support.entries()){
            if ((entry[1]/this.transactions.length) > S){
                out.add(entry[0]);
            }
        }
        return out;

    }

    getItemsSize(){
        let acc = 0;
        for(const t of this.transactions){
            acc += t.items.length;
        }
        return acc;
    }
}

const IntraCost = (clustering, E) => {
    //IntraI (U) = U(j=1 -> k) SmI(Cj,E).
    let U = new Set();
    for(const c of clustering){
        U = new Set([...c.smallI(E), ...U]);
    }

    return U.size;
}

const InterCost = (clustering, S) => {
    //InterI (U) = Σ(j=1->k)|LaI (Cj , S)| − | U(j=1->k) LaI (Cj, S)|.
    let U = new Set();
    let cant = 0;
    for(const c of clustering){
        cant += c.largeI(S).size;
        U = new Set([...c.largeI(S), ...U])
    }
    return (cant - U.size);

}

const Cost = (clustering, S, E) => {
    return configuration.WEIGHT * IntraCost(clustering, E) + InterCost(clustering, S);
}

const allocate = (transaction, S, E) => {
    let minCost = 1000;
    let partialCost = 0;
    let toAllocate;
    for (let c of clusters){
        c.add(transaction);
        partialCost = Cost(clusters, S, E);
        console.log(partialCost)
        if (minCost > partialCost){
            minCost = partialCost;
            toAllocate = c;
        }
        c.pop();
    }
    if ((minCost > 0) && (clusters.length < configuration.MAX)){
        let c = new Cluster(clusters.length);
        c.add(transaction);
        clusters.push(c);
    }else{
        console.log(toAllocate.id);
        toAllocate.add(transaction);
    }
}

const refinement = (clustering, S, E) => {
    let not_moved = false;
    let pool = [];
    let history = new Map();
    let count = 0;
    do {
        not_moved = false;
        let support;
        let cant;
        let supItem;
        for(let c of clustering){
            let toRemove = [];
            support = c.support;
            cant = c.getSize();
            for (const t of c.transactions){
                const ratio = SL_Ratio(support, cant, t.items, E, S);
                if (ratio > configuration.THRESHOLD){
                    pool.push(t);
                    toRemove.push(t);
                    history.set(t.id, c.id);
                }
            }
          for (const t of toRemove){
              c.remove(t);
          }
        }
        //FOR CLUSTERS IF IS EMPTY REMOVE.
        for (let t of pool){
            let minSLR = 1000;
            let candidate;
            for (let c of clustering){
                if (( !history.has(t.id))||(history.get(t.id) != c.id)){
                    c.add(t);
                    const ratio = SL_Ratio(c.support, c.getSize(), t.items, E, S);
                    if (ratio < minSLR){
                        minSLR = ratio;
                        candidate = c;
                    }
                    c.pop();
                }
            }
            console.log("min: " + minSLR);
            if (minSLR < configuration.THRESHOLD){

                candidate.add(t);
                const index = pool.indexOf(t);
                pool.splice(index, 1);
                not_moved = true;
            }
        }
        console.log('....');
        history = new Map();
        count++;
    } while(not_moved);
    console.log('Transactions in pool:' + pool.length);
    console.log('COUNT: ' + count );

}


const SL_Ratio = (support, cant, items, E, S)=>{
    let small = 0;
    let large = 0;
    for(const i of items){
        const supItem = support.get(i)/cant;
        if (supItem<E){
            small += 1;
        }
        if (supItem>S){
            large += 1;
        }
    }
    return (small/large);
}



//###############################################################################

let clusters = [];

let configuration = {
    WEIGHT: 1,  //specified weigth for the relative importance of IntraCost and InterCost.
    MAX: 10, // the number of maximum clusters allowed.
    THRESHOLD: 1.5, // SLR threshold
}


/**
 * @param transactions in a market-basket.
 * @param S minimun suport for the large items.
 * @param E maximun ceiling for the small items.
 * @param options wight, max and threshold.
 * @return Return a clustering such that the total cost is minimized.
 */

const SLR_ALGORITHM = (transactions, S, E, options) => {
    if (options !== undefined ) {
        configuration = options;
    }
    for(let t of transactions){
        allocate(t, S, E);
    }
    refinement(clusters, S, E);

    return clusters;
}


export {SLR_ALGORITHM};
