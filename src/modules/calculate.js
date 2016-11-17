import Store from '../store/store'
import {slrAlgorithm} from './lib/caslr'


export default function(){
    return new Promise(
        function(resolve, reject) {
            try {
                const store = Store.getState();
                const options = {
                     WEIGHT: 1,
                     MAX: store.slr.clusters,
                     THRESHOLD:  store.slr.threshold,
                }
                const clusters = slrAlgorithm(store.sales.sales, store.slr.support,  store.slr.ceiling, options);
                resolve(clusters);
            } catch (e) {
                reject(e);
            }
        }
    )
};
